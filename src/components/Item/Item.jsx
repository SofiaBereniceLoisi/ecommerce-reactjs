import { useNavigate } from "react-router-dom";
import "./Item.css";

const Item = ({producto}) => {
    const navigate = useNavigate();
    return (
        <div className="producto" onClick={() => navigate(`/detail/${producto.id}`)}>
            <img src={producto.imagen} alt="foto del producto" />
            <div className="detalle-producto">
                <h4>{producto.titulo}</h4>
                <p className="descripcion">Descripción: {producto.vistaprevia} </p>
                <p>Precio: ${producto.precio}</p>
            </div>
            <footer>
                <button className="ver-detalle" onClick={() => navigate(`/detail/${producto.id}`)}>Ver detalle</button>
            </footer>
        </div>
    )
}

export default Item
