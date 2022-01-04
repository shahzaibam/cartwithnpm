import React from 'react'
import { CartProvider } from 'react-use-cart';
import BabyBath_Render from './BabyBath_Render';


const CartProviderBabyBath = () => {
    return ( 
        <div>
            <CartProvider>
                <BabyBath_Render/>
            </CartProvider>
        </div>
    )
}

export default CartProviderBabyBath;
