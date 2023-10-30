import "./App.css";
import CategoriasMenu from "./components/CategoriasMenu/CategoriasMenu";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
// REACT ROUTER DOM---------
import { BrowserRouter, Routes, Route } from "react-router-dom";
// PAGES--------------------
import Home from "./pages/HomePage/HomePage";
import SobreNosotros from "./pages/AboutPage/AboutPage";
import RecursosGratuitos from "./pages/RecursosPage/RecursosPage";
import NotFound from "./pages/NotFoundPage/NotFoundPage";
import Detail from "./pages/DetailPage/DetailPage";
import CartPage from "./pages/CartPage/CartPage";
// CONTEXT -----------------
import { CartContext } from "./context/CartContext";
import { useState } from "react";


function App() {

  const [cart, setCart] = useState([]);

  const addToCart = (producto, quantity) => {
    const productoAgregado = { ...producto, quantity };
    const newCart = [...cart];
    const isInCart = newCart.find((producto) => producto.id === productoAgregado.id)

    if (isInCart) {
      isInCart.quantity += quantity;
    } else {
      newCart.push(productoAgregado);
    }
    setCart(newCart);
  };

  const quantityInCart = () => {
    return cart.reduce((acc, prod) => acc + prod.quantity, 0)
  }

  const totalPrice = () => {
    return cart.reduce((acc, prod) => acc + prod.precio * prod.quantity, 0);
  }

  const emptyCart = () => {
    setCart([]);
  }


  return (
    <CartContext.Provider value={{ cart, addToCart, quantityInCart, totalPrice, emptyCart}}>
      <BrowserRouter>
        <div className="App">
          <div className="Nav">
            <NavBar />
            <CategoriasMenu />
          </div>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobreNosotros" element={<SobreNosotros />} />
            <Route path="/recursosGratuitos" element={<RecursosGratuitos />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/productos/:categoria" element={<ItemListContainer />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>

          <div className="Footer">
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;
