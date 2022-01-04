import React from 'react'
import { CartProvider } from 'react-use-cart';
import BabyBath from './BabyBath';


const BabyBathCartProvider = () => {
    return ( 
        <div>
            <CartProvider>
                <BabyBath />
            </CartProvider>
        </div>
    )
}

export default BabyBathCartProvider;