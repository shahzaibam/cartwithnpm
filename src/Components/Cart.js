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
        <section className="py-4 container col-12" style={{width: '450px'}}>
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
                                        <td>
                                            {item.title}
                                        </td>

                                        <td>
                                            {item.price + '€'}
                                        </td>
 
                                        <td>
                                            <button className="btn btn-danger" onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                                            <a className="text-decoration-none">{item.quantity}</a>
                                            <button className="btn btn-primary" onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                                            <button className="btn btn-danger" onClick={() => removeItem(item.id)}><FontAwesomeIcon icon={faTrashAlt}/></button>
                                        </td>
                                    </tr>
                                )
                            })}

                        </tbody>
                    </table>
                </div>
                <div className="col-auto ms-auto">
                    <h2>Total Price: ({cartTotal}€)</h2>
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
