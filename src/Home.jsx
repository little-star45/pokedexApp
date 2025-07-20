import { useState } from 'react'
import PokemonCard from './pokemonCard'
import Footer from './Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form, Button } from 'react-bootstrap'

import { MainButton, SearchButton, ResetButton, MyFooter } from './MainStyles'

function Home() {
  const [tempSearchPokemon, setTempSearchPokemon] = useState(null)
  const [searchPokemon, setSearchPokemon] = useState(null)
  return (
    <>
    <div className='container my-4'>
      <div className='row mb-4'>
        <div className='col-md-6'>
          <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search by id or name"
                  className="me-2"
                  aria-label="Search"
                  onChange={e => setTempSearchPokemon(e.target.value)}
                />
                <SearchButton type='button' onClick={()=>setSearchPokemon(tempSearchPokemon)}>Search</SearchButton>
                <ResetButton type='button' onClick={()=>setSearchPokemon(null)}>Reset</ResetButton>
          </Form>
        </div>
      </div>
    </div>


      <div className='row'>
        <div className='col'>
          <PokemonCard 
            searchPokemon={searchPokemon}
          />
        </div>
      </div>
     <div className='container my-4'>
      <MyFooter className='row mb-4'>
        <Footer/>
      </MyFooter>
        
     </div>
     
    </>
  )
}

export default Home
