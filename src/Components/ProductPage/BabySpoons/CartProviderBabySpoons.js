import React from 'react'
import { CartProvider } from 'react-use-cart';
import BabySpoons_Render from './BabySpoons_Render';


const CartProviderBabySpoons = () => {
    return ( 
        <div>
            <CartProvider>
                <BabySpoons_Render/>
            </CartProvider>
        </div>
    )
}

export default CartProviderBabySpoons;
