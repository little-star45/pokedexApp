import './styles/App.css'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import NaviBar from './components/Navigation';
import { PokemonProvider } from './pokemonContext';
import PokemonSubpage from './pages/PokemonSubpage';
import Footer from './components/Footer';
import { MyFooter } from './styles/MainStyles';

function App() {
  return (
    <>
      <PokemonProvider>
        <BrowserRouter basename="/pokedexApp">
          <div style={{ minWidth: '80%', margin: '80px 0 2rem 2rem', padding: '1rem', textAlign:'center', alignContent:'center'}}>
            <NaviBar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/pokemon/:id' element={<PokemonSubpage/>} />
            </Routes>
          </div>
          <MyFooter>
            <Footer/>
          </MyFooter>
        </BrowserRouter>
      </PokemonProvider>
    </>
  )
}

export default App