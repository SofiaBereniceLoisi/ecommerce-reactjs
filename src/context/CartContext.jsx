import { createContext, useEffect, useState } from "react";
import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css";

export const CartContext = createContext();

const initialCart = JSON.parse(localStorage.getItem("cart"));

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState(initialCart);

    const addToCart = (producto, quantity) => {
        const productoAgregado = { ...producto, quantity };
        const newCart = [...cart];
        const isInCart = newCart.find((producto) => producto.id === productoAgregado.id)

        if (isInCart) {
            isInCart.quantity += quantity;
        } else {
            newCart.push(productoAgregado);
        }
        setCart(newCart);
    };

    const quantityInCart = () => {
        return cart.reduce((acc, prod) => acc + prod.quantity, 0)
    }

    const totalPrice = () => {
        return cart.reduce((acc, prod) => acc + prod.precio * prod.quantity, 0);
    }

    const emptyCart = () => {
        setCart([]);
    }

    const deleteItem = (id) => {
        const updatedCart = cart.filter((producto) => producto.id !== id);
        setCart(updatedCart);
        Toastify({
            text: "Producto eliminado" ,
            duration: 3000,
            close: true,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
            className: "toastifyDeletedItem",
        }).showToast();
    }

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    return (
        <CartContext.Provider value={{ cart, addToCart, quantityInCart, totalPrice, emptyCart, deleteItem }}>
            {children}
        </CartContext.Provider>
    )
}


