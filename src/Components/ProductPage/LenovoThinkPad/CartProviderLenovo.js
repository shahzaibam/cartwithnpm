import React from 'react'
import { CartProvider } from 'react-use-cart';
import Lenovo_Render from './Lenovo_Render';


const CartProviderLenovo = () => {
    return ( 
        <div>
            <CartProvider>
                <Lenovo_Render/>
            </CartProvider>
        </div>
    )
}

export default CartProviderLenovo;
