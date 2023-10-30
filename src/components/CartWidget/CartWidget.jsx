import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './CartWidget.css';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';


const CartWidget = () => {

    const { quantityInCart } = useContext(CartContext);

    return (
        <div className='CartWidget'>
            <Link to={'/cart'} className='CartWidget' style={{'color': 'black'}}>
                <ShoppingCartIcon sx={{ fontSize: 20 }} />
                <span className='cartNumber'>{quantityInCart()}</span>
            </Link>
        </div>
    )
}

export default CartWidget;