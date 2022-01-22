import React from 'react'
import { CartProvider } from 'react-use-cart';
import SnakeRing_Render from './SnakeRing_Render';


const CartProviderSnakeRing = () => {
    return ( 
        <div>
            <CartProvider>
                <SnakeRing_Render/>
            </CartProvider>
        </div>
    )
}

export default CartProviderSnakeRing;