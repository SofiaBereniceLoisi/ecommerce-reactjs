import { useState, useEffect } from "react";
import { pedirItemPorId } from "../../pedirDatos/pedirDatos";
import { useNavigate, useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import "./DetailPage.css"

const DetailPage = () => {

    const navigate = useNavigate();

    let { id } = useParams();
    const [producto, setProducto] = useState([]);

    useEffect(() => {
        pedirItemPorId(Number(id))
            .then((res) => {
                setProducto(res)
            })
    }, [id])


    return (
        <div className="itemDetailPage">
            <ItemDetail producto={producto} />
            <div>
                <button onClick={() => navigate('/')} className="buttonToHomePage">Seguir comprando</button>
            </div>

        </div>

    )
}

export default DetailPage;