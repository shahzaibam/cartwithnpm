import React from 'react'
import { CartProvider } from 'react-use-cart';
import BabyCart_Render from './BabyCart_Render';


const CartProviderBabyCart = () => {
    return ( 
        <div>
            <CartProvider>
                <BabyCart_Render/>
            </CartProvider>
        </div>
    )
}

export default CartProviderBabyCart;
