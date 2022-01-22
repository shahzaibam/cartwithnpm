import React from 'react'
import { CartProvider } from 'react-use-cart';
import Paletin_Render from './Paletin_Render';

const CartProviderPaletin = () => {
    return ( 
        <div>
            <CartProvider>
                <Paletin_Render/>
            </CartProvider>
        </div>
    )
}

export default CartProviderPaletin;