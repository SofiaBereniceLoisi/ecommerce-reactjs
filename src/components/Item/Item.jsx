import "./Item.css";

const Item = ({producto}) => {
    return (
        <div className="producto">
            <img src={producto.imagen} alt="foto del producto" />
            <div className="detalle-producto">
                <h4>{producto.titulo}</h4>
                <p className="descripcion">Descripción: {producto.vistaprevia} </p>
                <p>Precio: ${producto.precio}</p>
            </div>
            <footer>
                <button className="ver-detalle">Ver detalle</button>
            </footer>
        </div>
    )
}

export default Item
