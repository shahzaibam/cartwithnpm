import React from 'react'
import { CartProvider } from 'react-use-cart';
import Iphone11_Render from './Iphone11_Render';


const CartProviderIphone11 = () => {
    return ( 
        <div>
            <CartProvider>
                <Iphone11_Render/>
            </CartProvider>
        </div>
    )
}

export default CartProviderIphone11;
