import React, {createContext, useState, useEffect} from "react"

export const PokemonContext = createContext()
const POKEMONONSITE = 40

export const PokemonProvider = ({ children }) => {

    const [pokemonList, setPokemonList] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPokemonData = async () => {
            
            try {
                const requests = []
                for (let i=1; i<=POKEMONONSITE; i++){
                    requests.push(fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`))
                }
                const responses = await Promise.all(requests)
                const filterResponses = responses.filter(res => res.ok)
                const pokemonData = await Promise.all(filterResponses.map(res => res.json()))
                setPokemonList(pokemonData);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
            };
        
        fetchPokemonData()
    }, []);


  return (
    <PokemonContext.Provider value={{ pokemonList, loading, error, setPokemonList }}>
      {children}
    </PokemonContext.Provider>
  );
};