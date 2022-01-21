import React from 'react'
import { CartProvider } from 'react-use-cart';
import NikeShoes_Render from './NikeShoes_Render';

const CartProviderNikeShoes = () => {
    return ( 
        <div>
            <CartProvider>
                <NikeShoes_Render/>
            </CartProvider>
        </div>
    )
}

export default CartProviderNikeShoes;