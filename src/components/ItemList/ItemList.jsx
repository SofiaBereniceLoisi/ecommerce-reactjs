import "./ItemList.css";
import Item from "../Item/Item";

const ItemList = ({ products }) => {
    return (
        <div className="productosContainer">
            <div className="productos">
                {products.map((prod) => <Item product={prod} key={prod.id} />)}
            </div>
        </div>
    )
}

export default ItemList;