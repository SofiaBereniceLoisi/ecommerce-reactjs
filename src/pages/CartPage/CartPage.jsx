import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./CartPage.css";
import { useNavigate } from "react-router-dom";

const CartPage = () => {

    const { cart, totalPrice, emptyCart } = useContext(CartContext);
    const navigate = useNavigate();

    return (
        <div className="cartContainer">
            <h1 className="cartTitle"> Carrito </h1>
            {
                cart.map((prod) => (
                    <div key={prod.id} className="productInCartContainer">
                        <div className="productInCartImg">
                            <img src={prod.imagen} alt="" />
                        </div>
                        <div className="productInCart">
                            <h3>{prod.titulo}</h3>
                            <p>Precio unitario: ${prod.precio}</p>
                            <p>Total: ${prod.precio * prod.quantity}</p>
                            <p>Cantidad: {prod.quantity}</p>
                        </div>
                        <div>

                        </div>
                    </div>
                ))
            }
            <div className="totalPrice">
                {cart.length > 0 ? (
                    <div>
                        <button onClick={emptyCart}>Vaciar Carrito</button>
                        <h2>Total a pagar: ${totalPrice()}</h2>
                        <button>Comprar ahora</button>
                        <button onClick={() => navigate('/')}>Seguir comprando</button>
                    </div>
                ) : (
                    <div>
                        <p> El carrito está vacío  :(</p>
                        <button onClick={() => navigate('/')}>Volver a la página principal</button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default CartPage;