import { Link } from "react-router-dom";
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
                    <Link to="https://www.instagram.com/soffii.loisi/" style={{ 'textDecoration': 'none' }}><li>Instagram</li></Link>
                    <Link to="https://wa.me/1136236328" style={{ 'textDecoration': 'none' }}><li>WhatsApp</li></Link>
                    <Link to="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJZcRKJCLWBNWcQFfKzHKmlxfzpFHGxhwLDKSGXPHqXzWxTvdjNjsPbnSHgkWMTZtTsMqML" style={{ 'textDecoration': 'none' }}><li>EMail</li></Link>
                    <Link to="https://www.linkedin.com/in/sof%C3%ADaloisi/" style={{ 'textDecoration': 'none' }}><li>LinkedIn</li></Link>
                </ul>
            </div>
            <div className="derechos">
                <p>© Todos los derechos reservados - 2023 | Sofía Loisi</p>
            </div>
        </div>
    )
}

export default Footer;