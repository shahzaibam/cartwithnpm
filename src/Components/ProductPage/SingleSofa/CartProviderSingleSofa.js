import React from 'react'
import { CartProvider } from 'react-use-cart';
import SingleSofa_Render from './SingleSofa_Render';


const CartProviderSingleSofa = () => {
    return ( 
        <div>
            <CartProvider>
                <SingleSofa_Render/>
            </CartProvider>
        </div>
    )
}

export default CartProviderSingleSofa;