import React from 'react'
import NavBar from '../NavBar'
import Carousel from '../Carousel'
import { CartProvider } from 'react-use-cart';
import Home from '../ProductRender';
import Cart from '../Cart';
import Product_Render from './Product_Render';


const CartProviderPhone = () => {
    return ( 
        <div>
            <CartProvider>
                <Product_Render />

            </CartProvider>
        </div>
    )
}

export default CartProviderPhone;
