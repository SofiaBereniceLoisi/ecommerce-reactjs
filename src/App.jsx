import './App.css';
import CategoriasMenu from './components/CategoriasMenu/CategoriasMenu';
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div>
      <NavBar/>
      <CategoriasMenu/>
      <ItemListContainer greeting={'Bienvenidos a la tienda online La Frida Crochet'}/>
      <Footer/>
    </div>
  );
}

export default App;
