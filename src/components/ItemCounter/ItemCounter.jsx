import "./ItemCounter.css";


const ItemCounter = ( {quantity, decrement, increment, addToCart} ) => {
    

    return (
        <div className="counter">
            <div className="controls">
                <button className="button" onClick={decrement}>-</button>
                <h4 className="quantityNumber">{quantity}</h4>
                <button className="button" onClick={increment}>+</button>
            </div>
            <div>
                <button className="addToCart" onClick={addToCart}>Añadir al carrito</button>
            </div>
        </div>
    )
}

export default ItemCounter;