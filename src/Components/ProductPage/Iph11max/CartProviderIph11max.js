import React from 'react'
import { CartProvider } from 'react-use-cart';
import Iph11max_Render from './Iph11max_Render';

const CartProviderIph11max = () => {
    return ( 
        <div>
            <CartProvider>
                <Iph11max_Render/>
            </CartProvider>
        </div>
    )
}

export default CartProviderIph11max;