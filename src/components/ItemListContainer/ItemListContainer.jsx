import './ItemListContainer.css';
import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from "firebase/firestore";
import { dataBase } from "../../firebase/config";

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const { category } = useParams();

    useEffect(() => {
        const productsRef = collection(dataBase, "products");
        const q = category  ? query(productsRef, where("category", "==", category)) : productsRef;

        getDocs(q)
            .then((res) => {
                setProducts(
                    res.docs.map((doc) => {
                        return { ...doc.data(), id: doc.id }
                    })
                )
            })
    }, [category])

    return (
        <div>
            <div className="greeting">
                <h1>{greeting} </h1>
            </div>
            <div className='productos-contenedor'>
                <h3>Chusmeá nuestro catálogo completo de productos</h3>
                <ItemList products={products} />
            </div>

        </div>
    )
}

// pedirDatos()
//             .then((res) => {
//                 if (categoria) {
//                     const productosFiltrados = res.filter((prod) => prod.categoria === categoria);
//                     setProductos(productosFiltrados);
//                 } else {
//                     setProductos(res);
//                 }
//             })

export default ItemListContainer;