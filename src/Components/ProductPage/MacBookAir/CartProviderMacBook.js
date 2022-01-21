import React from 'react'
import { CartProvider } from 'react-use-cart';
import MacBook_Render from './MacBook_Render';


const CartProviderMacBook = () => {
    return ( 
        <div>
            <CartProvider>
                <MacBook_Render/>
            </CartProvider>
        </div>
    )
}

export default CartProviderMacBook;
