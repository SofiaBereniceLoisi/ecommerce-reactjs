import { createContext, useEffect, useState } from "react";
import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css";

export const CartContext = createContext();

const initialCart = JSON.parse(localStorage.getItem("cart"));

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState(initialCart);

    const addToCart = (product, quantity) => {
        const addedProduct = { ...product, quantity };
        const newCart = [...cart];
        const isInCart = newCart.find((product) => product.id === addedProduct.id)

        if (isInCart) {
            isInCart.quantity += quantity;
        } else {
            newCart.push(addedProduct);
        }
        setCart(newCart);
    };

    const quantityInCart = () => {
        return cart.reduce((acc, prod) => acc + prod.quantity, 0)
    }

    const totalPrice = () => {
        return cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0);
    }

    const emptyCart = () => {
        setCart([]);
    }

    const deleteItem = (id) => {
        const updatedCart = cart.filter((product) => product.id !== id);
        setCart(updatedCart);
        Toastify({
            text: "Producto eliminado",
            duration: 3000,
            close: true,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
            className: "toastify",
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


