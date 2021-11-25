import React from 'react'
import NavBar from './NavBar'
import Carousel from './Carousel'
import { CartProvider } from 'react-use-cart';
import Home from './Home';
import Cart from './Cart';


const HomeComponent = () => {
    return (
        <div>

            <Carousel />
            <CartProvider>
            <Home />
{/*            <Cart />*/}
          </CartProvider>
        </div>
    )
}

export default HomeComponent
