import { useNavigate } from "react-router-dom";
import "./Item.css";

const Item = ({product}) => {
    const navigate = useNavigate();
    return (
        <div className="producto" onClick={() => navigate(`/detail/${product.id}`)}>
            <img src={product.image} alt="foto del producto" />
            <div className="detalle-producto">
                <h4>{product.title}</h4>
                <p className="descripcion">Descripción: {product.preview} </p>
                <p>Precio: ${product.price}</p>
            </div>
            <footer>
                <button className="ver-detalle" onClick={() => navigate(`/detail/${product.id}`)}>Ver detalle</button>
            </footer>
        </div>
    )
}

export default Item;
