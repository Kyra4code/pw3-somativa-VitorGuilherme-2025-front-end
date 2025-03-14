import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Container from './components/layout/Container';
import NavBar from './components/layout/NavBar';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Teams from './components/pages/Teams';

function App() {
  return (
    <>
    <div>
      <BrowserRouter>

        <Container>

          <Routes>
            <Route path='/' element={<NavBar/>}>

              <Route path='/' element={<Home/>}/>

              <Route path='/teams' element={<Teams/>}/>

              <Route path="/login" element={<Login/>}/>

            </Route>
          </Routes>
          
        </Container>

      </BrowserRouter>

    </div>

    </>
  );
}

export default App;
