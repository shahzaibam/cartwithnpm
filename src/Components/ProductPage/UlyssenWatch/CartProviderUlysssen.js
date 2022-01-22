import React from 'react'
import { CartProvider } from 'react-use-cart';
import Ulyssen_Render from './Ulyssen_Render';

const CartProviderUlyssen = () => {
    return ( 
        <div>
            <CartProvider>
                <Ulyssen_Render/>
            </CartProvider>
        </div>
    )
}

export default CartProviderUlyssen;