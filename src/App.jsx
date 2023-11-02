import "./App.css";
// COMPONENTS-------------  
import CategoryMenu from "./components/CategoryMenu/CategoryMenu";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
// REACT ROUTER DOM---------
import { BrowserRouter, Routes, Route } from "react-router-dom";
// PAGES--------------------
import Home from "./pages/HomePage/HomePage";
import SobreNosotros from "./pages/AboutPage/AboutPage";
import NotFound from "./pages/NotFoundPage/NotFoundPage";
import Detail from "./pages/DetailPage/DetailPage";
import CartPage from "./pages/CartPage/CartPage";
import CheckOut from "./pages/CkeckOutPage/CheckOut";
import ContactPage from "./pages/ContactPage/ContactPage";
// CONTEXT -----------------
import { CartProvider } from "./context/CartContext";

function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <div className="Nav">
            <NavBar />
            <CategoryMenu />
          </div>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobreNosotros" element={<SobreNosotros />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/products/:category" element={<ItemListContainer />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckOut />} />
          </Routes>

          <div className="Footer">
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
