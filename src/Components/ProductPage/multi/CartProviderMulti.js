import React from 'react'
import { CartProvider } from 'react-use-cart';
import Multi_Render from './Multi_Render';

const CartProviderMulti = () => {
    return ( 
        <div>
            <CartProvider>
                <Multi_Render/>
            </CartProvider>
        </div>
    )
}

export default CartProviderMulti;