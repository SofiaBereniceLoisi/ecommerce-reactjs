import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './CartWidget.css';


const CartWidget = () => {
    return (
        <div className='CartWidget'>
            <ShoppingCartIcon sx={{ fontSize: 20 }}/>
            <span className='cartNumber'>0</span>
        </div>
    )
}

export default CartWidget;