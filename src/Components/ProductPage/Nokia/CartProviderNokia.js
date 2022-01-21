import React from 'react'
import { CartProvider } from 'react-use-cart';
import Nokia_Render from './Nokia_Render';

const CartProviderNokia = () => {
    return ( 
        <div>
            <CartProvider>
                <Nokia_Render/>
            </CartProvider>
        </div>
    )
}

export default CartProviderNokia;