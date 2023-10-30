import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './CartWidget.css';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';


const CartWidget = () => {

    const { quantityInCart } = useContext(CartContext);

    return (
        <div className='CartWidget'>
            <ShoppingCartIcon sx={{ fontSize: 20 }} />
            <span className='cartNumber'>{quantityInCart()}</span>
        </div>
    )
}

export default CartWidget;