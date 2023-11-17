import "./aboutPage.css";
import { useNavigate } from "react-router-dom";

const AboutPage = () => {
    const navigate = useNavigate();

    return (
        <div className="aboutPage">
            <div>
                <h1>Sobre Nosotras</h1>
                <p>Somos un grupo de amigas que le gusta mucho pasar su tiempo creando cosas lindas.</p>
                <p>Todo lo que verás en la pagina esta hecho 100% a mano y con mucho amor.</p>
            </div>
            <div className="btn-Contacto">
            <button onClick={() => navigate('/contact')}>Quiero contactarme con ustedes!</button>
            </div>
        </div>
    )
}

export default AboutPage;