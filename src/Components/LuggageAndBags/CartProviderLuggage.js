import React from 'react'
import NavBar from '../NavBar'
import Carousel from '../Carousel'
import { CartProvider } from 'react-use-cart';
import Home from '../ProductRender';
import Cart from '../Cart';
import LuggageAndBags_Render from './LuggageAndBags_Render';

const CartProviderLuggage = () => {
    return ( 
        <div>
            <CartProvider>
                <LuggageAndBags_Render />
            </CartProvider>
        </div>
    )
}

export default CartProviderLuggage;
