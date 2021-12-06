import React from 'react'
import NavBar from '../NavBar'
import Carousel from '../Carousel'
import { CartProvider } from 'react-use-cart';
import Home from '../ProductRender';
import Cart from '../Cart';
import ElectronicsProduct_Render from './ElectronicsProduct_Render';

const CartProviderElectronics = () => {
    return ( 
        <div>
            <CartProvider>
                <ElectronicsProduct_Render/>
            </CartProvider>
        </div>
    )
}

export default CartProviderElectronics;
