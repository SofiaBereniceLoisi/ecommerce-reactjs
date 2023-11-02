import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { useForm } from 'react-hook-form';
import './CheckOut.css';
import { collection, addDoc } from 'firebase/firestore';
import { dataBase } from '../../firebase/config';
import { useNavigate } from 'react-router-dom';

const CheckOut = () => {
    const navigate = useNavigate()

    const [orderId, setOrderId] = useState("")

    const { cart, totalPrice, emptyCart } = useContext(CartContext);
    const { register, handleSubmit } = useForm();

    const sendPurchaseForm = (data) => {
        const order = {
            customer: data,
            products: cart,
            total: totalPrice(),
        }

        const ordersRef = collection(dataBase, "orders");
        addDoc(ordersRef, order)
            .then((doc) => {
                setOrderId(doc.id);
                emptyCart();
            })
    }

    if (orderId) {
        return (
            <div className='purchaseComplete'>
                <h2>¡Muchas gracias por tu compra!</h2>
                <p className='orderOfPurchase'>Orden de compra: {orderId} </p>
                <button onClick={() => navigate('/')}>Volver a la página principal</button>
            </div>
        )
    }

    return (
        <div className='formContainer'>
            <h1>Finalizar compra</h1>
            <h2>Formulario de check-out</h2>
            <form className='form' onSubmit={handleSubmit(sendPurchaseForm)}>

                <input required type="text" placeholder='Ingresá tu nombre' {...register("nombre")} />
                <input required type="email" placeholder='Ingresá tu correo electrónico' {...register("email")} />
                <input required type="phone" placeholder='Ingresá tu celular' {...register("celular")} />
                <button className='buttonComprar' type='submit'>Comprar</button>
            </form>
        </div>
    )
}

export default CheckOut;