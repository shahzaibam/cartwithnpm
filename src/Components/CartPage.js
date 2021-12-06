import React from 'react'
import { CartProvider } from 'react-use-cart';
import Cart from './Cart'

export const CartPage = () => {
    return (
        <div>
            <CartProvider>
                <Cart />
            </CartProvider>
        </div>
    )
}

export default CartPage
