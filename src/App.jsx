import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting={'Bienvenidos a la tienda online La Frida Crochet'}/>
    </div>
  );
}

export default App;
