import './ItemListContainer.css';
import { useEffect, useState } from 'react';
import { pedirDatos } from "../../pedirDatos/pedirDatos";
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({greeting}) => {
    const [productos, setProductos] = useState([]);
    const { categoria } = useParams();

    useEffect(() => {
        pedirDatos()
            .then((res) => {
                if (categoria){
                    const productosFiltrados = res.filter((prod) => prod.categoria === categoria);
                    setProductos (productosFiltrados);
                }else{
                    setProductos(res);
                }
            })
    }, [categoria])
    
    return (
        <div>
            <div className="greeting">
                <h1>{greeting} </h1>
            </div>
            <div className='productos-contenedor'>
                <h3>Chusmeá nuestro catálogo completo de productos</h3>
                <ItemList productos={productos}/>
            </div>
            
        </div>
        
        
        
    )
}

export default ItemListContainer;