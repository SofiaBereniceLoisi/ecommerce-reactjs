import { useNavigate } from "react-router-dom";
import imgNotFound from "../../img/notfound.png"
import "./NotFoundPage.css";

const NotFoundPage = () => {
    const navigate = useNavigate();

    return (
        <div className="errorPage">
            <img className="imgNotFound" src={imgNotFound} alt="notFound" />
            <h1>¡Oops! Parece que la página que estás buscando no existe.</h1>
            <button onClick={() => navigate('/')}>Volver a la página principal</button>
        </div>
    )
}

export default NotFoundPage;