import React from 'react'
import NavBar from '../NavBar'
import Carousel from '../Carousel'
import { CartProvider } from 'react-use-cart';
import Home from '../ProductRender';
import Cart from '../Cart';
import SportsProduct_Render from './SportsProduct_Render';

const CartProviderSports = () => {
    return ( 
        <div>
            <CartProvider>
                <SportsProduct_Render />
            </CartProvider>
        </div>
    )
}

export default CartProviderSports;
