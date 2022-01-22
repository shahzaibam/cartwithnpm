import React from 'react'
import { CartProvider } from 'react-use-cart';
import Note20_Render from './Note20_Render';


const CartProviderNote20 = () => {
    return ( 
        <div>
            <CartProvider>
                <Note20_Render/>
            </CartProvider>
        </div>
    )
}

export default CartProviderNote20;