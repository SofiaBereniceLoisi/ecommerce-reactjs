import { NavLink } from "react-router-dom";
import "./CategoriasMenu.css";


const CategoryMenu = () => {
    return (
        <div className="categoryContainer">
            <ul className="categoryItems">
                <li><NavLink className={({ isActive }) => isActive ? "categoryLinkActive" : "categoryLink"} to='/'>Catálogo completo</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? "categoryLinkActive" : "categoryLink"} to='/products/ropa'>Ropa</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? "categoryLinkActive" : "categoryLink"} to='/products/colgantes'>Colgantes</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? "categoryLinkActive" : "categoryLink"} to='/products/muñecos'>Muñecos</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? "categoryLinkActive" : "categoryLink"} to='/products/combos'>Combos</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? "categoryLinkActive" : "categoryLink"} to='/products/varios'>Varios</NavLink></li>
            </ul>
        </div>
    )
}

export default CategoryMenu;