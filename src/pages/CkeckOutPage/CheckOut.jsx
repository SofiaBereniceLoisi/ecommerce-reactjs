import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CheckOut = () => {

    const { cart, totalPrice, emptyCart } = useContext(CartContext )

    return (
        <div>

        </div>
    )
}

export default CheckOut