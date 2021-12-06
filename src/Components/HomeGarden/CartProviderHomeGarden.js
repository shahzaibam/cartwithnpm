import React from 'react'
import NavBar from '../NavBar'
import Carousel from '../Carousel'
import { CartProvider } from 'react-use-cart';
import Home from '../ProductRender';
import Cart from '../Cart';
import HomeGardenProduct_Render from './HomeGardenProduct_Render';

const CartProviderHomeGarden = () => {
    return ( 
        <div>
            <CartProvider>
                <HomeGardenProduct_Render />
            </CartProvider>
        </div>
    )
}

export default CartProviderHomeGarden;
