import './styles/App.css'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import NaviBar from './components/Navigation';
import { PokemonProvider } from './pokemonContext';
import PokemonSubpage from './pages/PokemonSubpage';

function App() {
  return (
    <>
      <PokemonProvider>
        <BrowserRouter basename="/pokedexApp">
          <div style={{ minWidth: '80%', margin: '80px auto 0 auto', padding: '1rem' }}>
            <NaviBar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/pokemon/:id' element={<PokemonSubpage/>} />
            </Routes>
          </div>
        </BrowserRouter>
      </PokemonProvider>
    </>
  )
}

export default App