import './ItemListContainer.css';
import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from "firebase/firestore";
import { dataBase } from "../../firebase/config";
import { BeatLoader } from 'react-spinners';

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const { category } = useParams();

    useEffect(() => {
        const productsRef = collection(dataBase, "products");
        const q = category ? query(productsRef, where("category", "==", category)) : productsRef;

        getDocs(q)
            .then((res) => {
                setProducts(
                    res.docs.map((doc) => {
                        return { ...doc.data(), id: doc.id }
                    })
                );
            })
    }, [category])

    return (
        <div>
            <div className="greeting">
                <h1>{greeting} </h1>
            </div>
            <div className='productos-contenedor'>
                <h3>Chusmeá nuestro catálogo de productos</h3>
                {products.length > 0 ? (
                    <ItemList products={products} />
                ) : (
                    <div className="spinner-container">
                        <BeatLoader className='' color="#3D403A" cssOverride={{ "justifyContent": "center", "alignItems": "center" }} />
                    </div>
                )}
            </div>
        </div>
    )
}

export default ItemListContainer;