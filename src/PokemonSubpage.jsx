import { useState, useEffect, useContext} from 'react';
import { useParams } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PokemonContext } from './pokemonContext';
import { ListGroup, Spinner } from 'react-bootstrap';
import { PokeCard } from './MainStyles';

const PokemonSubpage = () => {
  const { id } = useParams()
  const { pokemonList, setPokemonList } = useContext(PokemonContext)

  const [pokemon, setPokemon] = useState(null)
  const [localLoading, setLocalLoading] = useState(false)
  const [localError, setLocalError] = useState(null)


  useEffect(()=>{
    const myPokemon = pokemonList?.find(p => p.id === Number(id) || p.name === id)

    if (myPokemon) {
      setPokemon(myPokemon);
    } else {

      const fetchPokemon = async () => {
        setLocalLoading(true)
        try {
          const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
          if (!res.ok) throw new Error('Pokemon not found')
          const data = await res.json()
          setPokemon(data)
          setPokemonList(prev => prev ? [...prev, data] : [data])
          setLocalError(null)
        } catch (err) {
            console.log(err)
          setLocalError(err.message)
        } finally {
          setLocalLoading(false)
        }
      }

      fetchPokemon()
    }
  }, [id, pokemonList])

  return (
    <div className='d-flex flex-row flex-wrap'>
        {localLoading && (<Spinner animation="border" variant="info" />)}
        {localError && <div className="text-red-700">{localError}</div>}
        {(pokemon && !localError) && 
                <PokeCard 
                  key={id}
                  bgType = {pokemon.types[0]?.type.name}
                  style = {{minWidth:'100%'}}
                >
                <Card.Body>
                    <Card.Title>{pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</Card.Title>
                    <Card.Img variant="top" src={`${pokemon.sprites.front_default}`} />
                    <Card.Text>
                        <ListGroup>
                        {["id", "base_experience","height","order","weight"].map((param)=>{
                        return (
                            <ListGroup.Item key={param} className="d-flex justify-content-between align-items-start">
                                <div>
                                    <b>{param[0].toUpperCase()+param.slice(1).replace(/_/g, ' ')}</b>
                                </div>
                                <div>
                                    {pokemon[param]}
                                </div>
                        </ListGroup.Item>
                        )
                    })} 
                        </ListGroup>
                    </Card.Text>
                </Card.Body>
                </PokeCard>
        }
    </div>
    
  )
}

export default PokemonSubpage