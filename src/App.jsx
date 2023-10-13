import './App.css';
import CategoriasMenu from './components/CategoriasMenu/CategoriasMenu';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
// REACT ROUTER DOM---------
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// PAGES--------------------
import Home from './pages/HomePage/HomePage';
import SobreNosotros from './pages/AboutPage/AboutPage';
import RecursosGratuitos from './pages/RecursosPage/RecursosPage';
import NotFound from './pages/NotFoundPage/NotFoundPage';
import Detail from "./pages/DetailPage/DetailPage";

function App() {
  return (
    <BrowserRouter>
      <div className='App'>

        <div className='Nav'>
          <NavBar/>
          <CategoriasMenu/>

        </div>

        <Routes>
          <Route path='/' element={ <Home/> } />
          <Route path='/sobreNosotros' element={ <SobreNosotros/> } />
          <Route path='/recursosGratuitos' element={ <RecursosGratuitos/> } />
          <Route path='/detail/:id' element={ <Detail/> } />
          <Route path='*' element={ <NotFound/> } />
        </Routes>

        <div className='Footer'>
          <Footer/>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
