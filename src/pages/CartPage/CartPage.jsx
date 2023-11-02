import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./CartPage.css";
import { useNavigate } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import { Tooltip } from "@mui/material";

const CartPage = () => {

    const { cart, totalPrice, emptyCart, deleteItem } = useContext(CartContext);
    const navigate = useNavigate();

    return (
        <div className="cartContainer">
            <h1 className="cartTitle"> Carrito </h1>
            {
                cart.map((prod) => (
                    <div key={prod.id} className="productInCartContainer">
                        <div className="productInCartImg">
                            <img src={prod.image} alt="" />
                        </div>
                        <div className="productInCart">
                            <h3>{prod.title}</h3>
                            <p>Precio unitario: ${prod.price}</p>
                            <p>Subtotal: ${prod.price * prod.quantity}</p>
                            <p>Cantidad: {prod.quantity}</p>
                            <Tooltip title="Eliminar">
                                <DeleteIcon onClick={() => deleteItem(prod.id)} className="deleteIcon" />
                            </Tooltip>

                        </div>
                    </div>
                ))
            }
            <div className="totalPrice">
                {cart.length > 0 ? (
                    <div>
                        <button onClick={emptyCart}>Vaciar Carrito</button>
                        <h2>Total a pagar: ${totalPrice()}</h2>
                        <button onClick={() => navigate('/checkout')}>Comprar ahora</button>
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