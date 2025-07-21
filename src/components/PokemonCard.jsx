import { useContext, useEffect, useState} from 'react';
import { Card, Button, Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PokemonContext } from '../pokemonContext';
import { useNavigate } from 'react-router-dom';
import { MainButton, PokeCard } from '../styles/MainStyles';

const PokemonCard = (props) => {
  const {searchPokemon} = props
  const { pokemonList, loading, error } = useContext(PokemonContext)
  const navigate = useNavigate()
  const [filterPokemons, setFilterPokemons] = useState(pokemonList)

  useEffect(()=>{
    if (!pokemonList) return
    if (searchPokemon){
      setFilterPokemons(pokemonList.filter(pokemon=>pokemon.id===searchPokemon || pokemon.name.toLowerCase().includes(searchPokemon.toLowerCase())))
    }else{
      setFilterPokemons(pokemonList)
    }
  },[searchPokemon, pokemonList])

  return (
    <div className='d-flex flex-row flex-wrap'>
    {loading && (<Spinner animation="border" variant="info" />)}
    {error && <div className="text-red-700">{error}</div>}
    {filterPokemons && filterPokemons.map((item,id) => {

    return(
    <PokeCard
      bgType = {item.types[0]?.type.name}
      key={id} 
      >
      <Card.Body>
        <Card.Title>{item.name[0].toUpperCase() + item.name.slice(1)}</Card.Title>
        <Card.Img variant="top" src={`${item.sprites.front_default}`} />
        <MainButton variant="primary" onClick={() => navigate(`/pokemon/${item.id}`)}>Show more info ...</MainButton>
      </Card.Body>
    </PokeCard>
    )})}
    </div>
    
  )
}

export default PokemonCard