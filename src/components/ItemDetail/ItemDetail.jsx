import { useContext, useState } from "react";
import ItemCounter from "../ItemCounter/ItemCounter";
import "./ItemDetail.css";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ product }) => {
    const { addToCart } = useContext(CartContext);

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
                <img src={product.image} alt={product.title} />
            </div>
            <div className="detalleProducto">
                <h3>{product.title}</h3>
                <p>Código del producto: {product.id}</p>
                <p>Categoría: {product.category}</p>
                <p className="descripcionDetalle">{product.description}</p>
                <p className="itemPrecio">Precio: ${product.price}</p>
            </div>
            <div className="counterCarrito">
                <ItemCounter
                    quantity={quantity}
                    increment={increment}
                    decrement={decrement}
                    addToCart={() => { addToCart(product, quantity) }}
                />
            </div>
        </div>
    );
};

export default ItemDetail;
