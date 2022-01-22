import React from 'react'
import { CartProvider } from 'react-use-cart';
import XiaomiScooter_Render from './XiaomiScooter_Render';

const CartProviderXiaomiScooter = () => {
    return ( 
        <div>
            <CartProvider>
                <XiaomiScooter_Render/>
            </CartProvider>
        </div>
    )
}

export default CartProviderXiaomiScooter;