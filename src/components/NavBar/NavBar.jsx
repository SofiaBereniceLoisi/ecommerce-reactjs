// import React from "react";
import "./NavBar.css";
import logo from'./logo.png';

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="logoNavbar">
            <img src={logo} alt="logo-frida" />
            </div>
            <ul className="navbarList">
                <li>Home</li>
                <li>Productos</li>
                <li>Tutoriales</li>
            </ul>
        </nav>
    )
}

export default NavBar