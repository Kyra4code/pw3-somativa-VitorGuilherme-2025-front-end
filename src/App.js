import './App.css';
import { useState } from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Container from './components/layout/Container';
import NavBar from './components/layout/NavBar';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Pokemons from './components/pages/Pokemons';
import Cadastro from './components/pages/Cadastro';
import Teams from './components/pages/Teams';
import PokeDetails from './components/pages/PokeDetails';

function App() {

  // const [OpenModal,setoOpenModal] = useState(false);

  return (
    <>
    <div>
      <BrowserRouter>

        <Container>

          <Routes>
            <Route path='/' element={<NavBar/>}>

              <Route path='/' element={<Home/>}/>

              <Route path='/pokemons' element={<Pokemons/>}/>

              <Route path="/login" element={<Login> <Home/> </Login> } />

              <Route path='/cadastro' element={<Cadastro/>}/>

              <Route path='/times' element={<Teams/>}/>

            </Route>

          </Routes>
          
        </Container>

        <Routes>

          <Route path='/PokeDetails/:poke_id' element={<PokeDetails/>}/>
          
        </Routes>

      </BrowserRouter>

    </div>

    </>
  );
}

export default App;
