import React from 'react'
import { CartProvider } from 'react-use-cart';
import MesaNegra_Render from './MesaNegra_Render';

const CartProviderMesaNegra = () => {
    return ( 
        <div>
            <CartProvider>
                <MesaNegra_Render/>
            </CartProvider>
        </div>
    )
}

export default CartProviderMesaNegra;