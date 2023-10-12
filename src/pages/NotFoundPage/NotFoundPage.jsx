import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
    const navigate = useNavigate();

    return (
        <div className="ErrorPage">
            <h1>¡Oops! Parece que la página que estás buscando no existe.</h1>
            <button onClick={() => navigate('/')}>Volver a la página principal</button>
        </div>
    )
}

export default NotFoundPage;