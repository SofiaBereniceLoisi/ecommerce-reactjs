import "./NavBar.css";
import logo from'./logo.png';
import CartWidget from "../CartWidget/CartWidget";
import AvatarIcon from "../Avatar/Avatar";
import { Link } from "react-router-dom";


const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="logoNavbar">
                <Link to='/'><img src={logo} alt="logo-frida" /></Link>
            </div>
            <ul className="navbarList">
                <li><Link to="/" style={{"color":"black", "textDecoration":"none"}}>Home</Link></li>
                <li><Link to="/sobreNosotros" style={{"color":"black", "textDecoration":"none"}}>Sobre nosotras</Link></li>
                <li><Link to="/contact"style={{"color":"black", "textDecoration":"none"}} >Contacto</Link></li>
            </ul>
            <CartWidget/>
            <AvatarIcon/>
        </nav>
    )
}

export default NavBar;