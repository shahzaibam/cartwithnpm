import React from 'react'
import { CartProvider } from 'react-use-cart';
import TravelBag_Render from './TravelBag_Render';

const CartProviderTravelBag = () => {
    return ( 
        <div>
            <CartProvider>
                <TravelBag_Render/>
            </CartProvider>
        </div>
    )
}

export default CartProviderTravelBag;