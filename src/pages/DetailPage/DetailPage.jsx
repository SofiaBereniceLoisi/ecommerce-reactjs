import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import "./DetailPage.css"
import { doc, getDoc } from "firebase/firestore";
import { dataBase } from "../../firebase/config";

const DetailPage = () => {

    const navigate = useNavigate();

    const { id } = useParams();
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const docRef = doc(dataBase, "products", id);
        getDoc(docRef)
            .then((res) => {
                setProduct(
                    { ...res.data(), id: res.id }
                );
            })
    }, [id])


    return (
        <div className="itemDetailPage">
            <ItemDetail product={product} />
            <div>
                <button onClick={() => navigate('/')} className="buttonToHomePage">Seguir comprando</button>
            </div>
        </div>
    )
}

export default DetailPage;