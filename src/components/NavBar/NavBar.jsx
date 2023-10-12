import "./NavBar.css";
import logo from'./logo.png';
import CartWidget from "../CartWidget/CartWidget";
import AvatarIcon from "../Avatar/Avatar";


const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="logoNavbar">
                <img src={logo} alt="logo-frida" />
            </div>
            <ul className="navbarList">
                <li>Home</li>
                <li>Sobre nosotros</li>
                <li>Recursos Gratuitos</li>
            </ul>
            <CartWidget/>
            <AvatarIcon/>
        </nav>
    )
}

export default NavBar;