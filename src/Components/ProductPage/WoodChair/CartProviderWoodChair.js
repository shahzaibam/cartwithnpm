import React from 'react'
import { CartProvider } from 'react-use-cart';
import WoodChair_Render from './WoodChair_Render';

const CartProviderWoodChair = () => {
    return ( 
        <div>
            <CartProvider>
                <WoodChair_Render/>
            </CartProvider>
        </div>
    )
}

export default CartProviderWoodChair;