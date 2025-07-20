import './App.css'
import Home from './Home'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NaviBar from './Navigation';
import { PokemonProvider } from './pokemonContext';
import PokemonSubpage from './PokemonSubpage';

function App() {
  return (
     <>
     <PokemonProvider>
      <div style={{minWidth:'80%', margin:'80px auto 0 auto', padding:'1rem'}}>
      <NaviBar/>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/pokemon/:id' element={<PokemonSubpage/>}></Route>
        </Routes>
      </Router>
      </div>
    </PokemonProvider>
    </>
  )
}

export default App
