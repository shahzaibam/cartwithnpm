import React from 'react'
import { CartProvider } from 'react-use-cart';
import NikeSport_Render from './NikeSport_Render';

const CartProviderNikeSport = () => {
    return ( 
        <div>
            <CartProvider>
                <NikeSport_Render/>
            </CartProvider>
        </div>
    )
}

export default CartProviderNikeSport;