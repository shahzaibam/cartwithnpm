import React from 'react'
import { CartProvider } from 'react-use-cart';
import SweatShirt_Render from './SweatShirt_Render';


const CartProviderSweatShirt = () => {
    return ( 
        <div>
            <CartProvider>
                <SweatShirt_Render/>
            </CartProvider>
        </div>
    )
}

export default CartProviderSweatShirt;