import React from 'react'
import NavBar from '../NavBar' 
import Carousel from '../Carousel'
import { CartProvider } from 'react-use-cart';
import Home from '../ProductRender';
import Cart from '../Cart';
import BeautyProduct_Render from './BeautyProduct_Render'

const CartProviderBeautyHealth = () => {
    return ( 
        <div>
            <CartProvider>
                <BeautyProduct_Render />
            </CartProvider>
        </div>
    )
}

export default CartProviderBeautyHealth;
