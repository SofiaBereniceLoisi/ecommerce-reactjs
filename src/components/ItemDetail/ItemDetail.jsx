import { useContext, useState } from "react";
import ItemCounter from "../ItemCounter/ItemCounter";
import "./ItemDetail.css";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ producto }) => {
    const { cart, addToCart } = useContext(CartContext);
    console.log(cart);

    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        setQuantity(quantity + 1);
    };

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className="ItemDetail-container">
            <div className="detalleProductoImg">
                <img src={producto.imagen} alt={producto.titulo} />
            </div>
            <div className="detalleProducto">
                <h3>{producto.titulo}</h3>
                <p>Código del producto: {producto.id}</p>
                <p>Categoría: {producto.categoria}</p>
                <p className="descripcionDetalle">{producto.descripcion}</p>
                <p className="itemPrecio">Precio: ${producto.precio}</p>
            </div>
            <div className="counterCarrito">
                <ItemCounter
                    quantity={quantity}
                    increment={increment}
                    decrement={decrement}
                    addToCart={() => { addToCart(producto, quantity) }}
                />
            </div>
        </div>
    );
};

export default ItemDetail;
