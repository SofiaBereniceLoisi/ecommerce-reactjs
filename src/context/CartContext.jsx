import { createContext, useEffect, useState } from "react";

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

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    return (
        <CartContext.Provider value={{ cart, addToCart, quantityInCart, totalPrice, emptyCart }}>
            {children}
        </CartContext.Provider>
    )
}


