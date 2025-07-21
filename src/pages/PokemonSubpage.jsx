import { useState, useEffect, useContext} from 'react';
import { useParams } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PokemonContext } from '../pokemonContext';
import { ListGroup, Spinner } from 'react-bootstrap';
import { PokeDetailCard, ParamsTitle, PokeTitle } from '../styles/MainStyles';

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
    <div>
        {localLoading && (<Spinner animation="border" variant="info" />)}
        {localError && <div className="text-red-700">{localError}</div>}
        {(pokemon?.id && !localError) && 
                <PokeDetailCard 
                  key={id}
                  bgType = {pokemon.types[0]?.type.name}
                >
                <Card.Body>
                    <PokeTitle>{pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</PokeTitle>
                    
                    <Card.Text>
                      <div className='row'>
                        <div className='col'>
                            <Card.Img variant="top" src={`${pokemon.sprites.front_default}`} />
                        </div>
                        <div className='col'>
                          <ParamsTitle>Data</ParamsTitle>
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
                        </div>
                      </div>
                      
                    <ParamsTitle>Abilities</ParamsTitle>
                    {pokemon?.abilities &&   <ListGroup>
                          {
                            pokemon["abilities"].map((param,idx)=>{ return (
                              <ListGroup.Item className="d-flex justify-content-between align-items-start">
                                <div>
                                    <b>{param["ability"].name[0].toUpperCase()+ param["ability"].name.slice(1)}</b>
                                </div>
                            </ListGroup.Item>
                            )})
                          }
                            
                        </ListGroup>} 
                    
                    <ParamsTitle>Types</ParamsTitle>
                    { pokemon?.types &&  <ListGroup>
                          {
                            pokemon["types"].map((param,idx)=>{ return (
                              <ListGroup.Item className="d-flex justify-content-between align-items-start">
                                <div>
                                    <b>{param["type"].name[0].toUpperCase()+ param["type"].name.slice(1)}</b>
                                </div>
                            </ListGroup.Item>
                            )})
                          }
                            
                        </ListGroup>} 
                    <ParamsTitle>Forms</ParamsTitle>
                    {pokemon?.forms &&
                        <ListGroup>
                          {
                            pokemon["forms"].map((param,idx)=>{ return (
                              <ListGroup.Item className="d-flex justify-content-between align-items-start">
                                <div>
                                    <b>{param.name[0].toUpperCase()+ param.name.slice(1)}</b>
                                </div>
                            </ListGroup.Item>
                            )})
                          }
                            
                        </ListGroup>}
                    <ParamsTitle>Stats</ParamsTitle>
                    {(pokemon?.stats[0]?.base_stat || pokemon?.stats[0]?.effort)&&
                        <ListGroup>
                        {["base_stat", "effort"].map((param)=>{
                        return (
                            <ListGroup.Item key={param} className="d-flex justify-content-between align-items-start">
                                <div>
                                    <b>{param[0].toUpperCase()+param.slice(1).replace(/_/g, ' ')}</b>
                                </div>
                                <div>
                                    {pokemon['stats'][0][param]}
                                </div>
                            </ListGroup.Item>
                        )
                        })}
                          {
                              <ListGroup.Item className="d-flex justify-content-between align-items-start">
                                <div>
                                    <b>{pokemon['stats'][0]['stat'].name}</b>
                                </div>
                            </ListGroup.Item>
                            
                          }
                            
                        </ListGroup>}

                        {pokemon?.moves && <div className="container mt-4 px-1">
                          <ParamsTitle>Moves</ParamsTitle>
                          <div className="row">
                            {pokemon["moves"].map((param, index) => (
                              <div key={index} className="col-2 mb-2">
                                <span className="badge bg-primary">
                                  {param.move.name}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>}
                    </Card.Text>
                </Card.Body>
                </PokeDetailCard>
        }
    </div>
    
  )
}

export default PokemonSubpage