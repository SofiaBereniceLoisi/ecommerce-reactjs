import { useState, useEffect } from "react";
import { pedirItemPorId } from "../../pedirDatos/pedirDatos";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import "./DetailPage.css"

const DetailPage = () => {
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
        </div>
        
    )
}

export default DetailPage;