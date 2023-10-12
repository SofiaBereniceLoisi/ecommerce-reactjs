import './ItemListContainer.css';
import { useEffect, useState } from 'react';
import { pedirDatos } from "../../pedirDatos/pedirDatos";
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({greeting}) => {
    const [productos, setProductos] = useState([]);
    
    useEffect(() => {
        pedirDatos()
            .then((res) => {
                setProductos(res);
            })
    }, [])
    
    return (
        <div>
            <div className="greeting">
                <h1>{greeting} </h1>
            </div>
            <div>
                <ItemList productos={productos}/>
            </div>
            
        </div>
        
        
        
    )
}

export default ItemListContainer;