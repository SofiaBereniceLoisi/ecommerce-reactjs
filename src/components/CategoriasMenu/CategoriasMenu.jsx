import { NavLink } from "react-router-dom";
import "./CategoriasMenu.css";


const CategoriasMenu = () => {
    return (
        <div className="categoryContainer">
            <ul className="categoryItems">
                <li><NavLink className={({isActive}) => isActive ? "categoryLinkActive" : "categoryLink"} to='/'>Catálogo completo</NavLink></li>
                <li><NavLink className={({isActive}) => isActive ? "categoryLinkActive" : "categoryLink"} to='/productos/ropa'>Ropa</NavLink></li>
                <li><NavLink className={({isActive}) => isActive ? "categoryLinkActive" : "categoryLink"} to='/productos/colgantes'>Colgantes</NavLink></li>
                <li><NavLink className={({isActive}) => isActive ? "categoryLinkActive" : "categoryLink"} to='/productos/muñecos'>Muñecos</NavLink></li>
                <li><NavLink className={({isActive}) => isActive ? "categoryLinkActive" : "categoryLink"} to='/productos/combos'>Combos</NavLink></li>
                <li><NavLink className={({isActive}) => isActive ? "categoryLinkActive" : "categoryLink"} to='/productos/varios'>Varios</NavLink></li>
            </ul>
        </div>
    )
}

export default CategoriasMenu;