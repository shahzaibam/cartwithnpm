import React from 'react'
import NavBar from '../NavBar'
import Carousel from '../Carousel'
import { CartProvider } from 'react-use-cart';
import Home from '../ProductRender';
import Cart from '../Cart';
import ShoesRender from './ShoesRender';

const CartProviderShoes = () => {
    return ( 
        <div>
            <CartProvider>
                <ShoesRender />
            </CartProvider>
        </div>
    )
}

export default CartProviderShoes;
