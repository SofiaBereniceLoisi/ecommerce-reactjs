import "./Footer.css";
import img from "./logofooter.png";

const Footer = () => {
    return (
        <div className="footer">
            <div className="quienes-somos">
                <img src={img} alt="logo footer" />
                <p>Todos los productos estan hechos 100% a mano y con mucho amor.</p>
                <p className="gracias">¡Gracias por elegirnos!</p>
            </div>
            <div className="redes">
                <h3>Seguinos en nuestras redes sociales</h3>
                <ul>
                    <li>Instagram</li>
                    <li>WhatsApp</li>
                    <li>EMail</li>
                    <li>LinkedIn</li>
                </ul>
            </div>
            <div className="derechos">
                <p>© Todos los derechos reservados - 2023 | Sofía Loisi</p>
            </div>
        </div>
    ) 
}

export default Footer;