import React from 'react'
import NavBar from '../NavBar'
import Carousel from '../Carousel'
import { CartProvider } from 'react-use-cart';
import Home from '../ProductRender';
import Cart from '../Cart';
import AllRender from './AllRender';

const CartProviderAllProducts = () => {
    return ( 
        <div>
            <CartProvider>
                <AllRender />
            </CartProvider>
        </div>
    )
}

export default CartProviderAllProducts;
