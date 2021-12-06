import React from 'react'
import NavBar from './NavBar'
import Carousel from './Carousel'
import { CartProvider } from 'react-use-cart';
import Home from './ProductRender';
import Cart from './Cart';
import Product_Render from './PhoneCategory/Product_Render';
import Phone_Category from './PhoneCategory/Phone_Category';
import SportsProduct_Render from './SportsAndEntertainment/SportsProduct_Render'


const HomeComponent = () => {
    return ( 
        <div>
            <Carousel />
            <CartProvider>
                <Home />
                <Cart />
                <Product_Render />

            </CartProvider>
        </div>
    )
}

export default HomeComponent
