import React from 'react'
import { CartProvider } from 'react-use-cart';
import SamS20_Render from './SamS20_Render';


const CartProviderSamS20 = () => {
    return ( 
        <div>
            <CartProvider>
                <SamS20_Render/>
            </CartProvider>
        </div>
    )
}

export default CartProviderSamS20;