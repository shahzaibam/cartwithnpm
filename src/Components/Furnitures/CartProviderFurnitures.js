import React from 'react'
import NavBar from '../NavBar'
import Carousel from '../Carousel'
import { CartProvider } from 'react-use-cart';
import Home from '../ProductRender';
import Cart from '../Cart';
import FurnituresProduct_Render from './FurnituresProduct_Render';

const CartProviderFurnitures = () => {
    return ( 
        <div>
            <CartProvider>
                <FurnituresProduct_Render/>
            </CartProvider>
        </div>
    )
}

export default CartProviderFurnitures;
