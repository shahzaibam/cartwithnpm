import React from 'react'
import NavBar from '../NavBar'
import Carousel from '../Carousel'
import { CartProvider } from 'react-use-cart';
import Home from '../ProductRender';
import Cart from '../Cart';
import BabyProduct_Render from './BabyProduct_Render'


const CartProviderBaby = () => {
    return ( 
        <div>
            <CartProvider>
                <BabyProduct_Render />
            </CartProvider>
        </div>
    )
}

export default CartProviderBaby;
