import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartWidget = () => {
    return (
        <div className='CartWidget'>
            <ShoppingCartIcon sx={{ fontSize: 20 }}/>
            <span>0</span>
        </div>
    )
}

export default CartWidget