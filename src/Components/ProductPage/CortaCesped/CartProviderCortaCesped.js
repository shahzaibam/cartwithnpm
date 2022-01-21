import React from 'react'
import { CartProvider } from 'react-use-cart';
import CortaCesped_Render from './CortaCesped_Render';


const CartProviderCortaCesped = () => {
    return ( 
        <div>
            <CartProvider>
                <CortaCesped_Render/>
            </CartProvider>
        </div>
    )
}

export default CartProviderCortaCesped;
