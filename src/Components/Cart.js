import React from 'react'
import { useCart } from 'react-use-cart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

export const Cart = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,

    } = useCart(); 
    if (isEmpty) return <h1 className="text-center">Your Cart is empty</h1>
    return ( 
        <section className="py-4 container" style={{width: '600px'}}>
            <div className="row justify-content-center">
                <div className="col-12">
                    <h5>Cart ({totalUniqueItems}) total Items: ({totalItems})</h5>
                    <table className="table table-light ">
                        <tbody>

                            {items.map((item, index) => {
                                return (
                                    <tr key={index} >
                                        <td>
                                            <img src={item.img} style={{ height: '6rem' }} />
                                        </td>
                                        <td style={{paddingTop: '2rem'}}>
                                            {item.title}
                                        </td>

                                        <td style={{paddingTop: '2rem'}}>
                                            {item.price + '€'}
                                        </td>
 
                                        <td style={{paddingTop: '1rem'}}>
                                            <button className="btn btn-danger m-2" onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                                            <a className="text-decoration-none">{item.quantity}</a>
                                            <button className="btn btn-primary m-2" onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                                            <button className="btn btn-danger" onClick={() => removeItem(item.id)}><FontAwesomeIcon icon={faTrashAlt}/></button>
                                        </td>
                                    </tr>
                                )
                            })}

                        </tbody>
                    </table>
                </div>
                <div className="col-auto ms-auto">
                    <h2>Total Price: ({Math.round(cartTotal)}€)</h2>
                </div>
                <div className="col-auto ms-auto">
                    <button 
                    className="btn btn-danger ms-auto m-2"
                    onClick={() => emptyCart()}
                    >Clear Cart</button>
                </div>

            </div>

        </section>
    )
}

export default Cart;
