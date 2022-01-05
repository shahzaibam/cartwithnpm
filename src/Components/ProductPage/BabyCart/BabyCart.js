import React from 'react'
import { useCart } from 'react-use-cart'
import { Link } from "react-router-dom";

const BabyCart = (props) => {

    const { addItem } = useCart();


    return (
        <>
            <div className="container mt-4 mb-3">
                <div className="row">
                    <div className="col-md-5 pr-2">

                        <div className="demo">
                            <ul id="lightSlider">
                                <Link to={`/${props.path}`}><img src={props.img} height="400px" width="400px" /></Link>
                            </ul>
                        </div>

                    </div>
                    <div className="col-md-7">
                        <div className="about"> <h3 className="font-weight-bold">{props.title}</h3>
                            <h4 className="font-weight-bold">{props.price}</h4>
                            <Link className="btn btn-danger" style={{ marginRight: '1rem' }} to={`/${props.path}`}>View Product</Link>
                            <button className="btn btn-success ml-3" onClick={
                                () => alert(('product added '), addItem(props.item))
                            } >Add to cart</button>
                        </div>
                        <hr />
                        <div className="product-description">
                            <div className="mt-2"> <h4 className="font-weight-bold">Description</h4>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos hic reprehenderit veritatis blanditiis perferendis ad debitis assumenda expedita dicta, molestiae cupiditate optio incidunt doloremque dolores vitae modi minima voluptas harum soluta voluptatum aliquam quisquam quos rerum! Nostrum magni impedit necessitatibus assumenda culpa sequi tempora a, deserunt in dolor magnam odit aspernatur.</p>
                            </div>
                        </div>
                    </div>
                    <div className="card mt-2"> <span>Similar items:</span>
                        <div className="similar-products mt-2 d-flex flex-row">
                            <div className="card border p-1" style={{ width: '9rem', marginRight: '3px' }}> <img src="https://muynuevo.com/wp-content/webpc-passthru.php?src=https://muynuevo.com/wp-content/uploads/GOLD-1-1.png&nocache=1" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h6 className="card-title">999€</h6>
                                </div>
                            </div>
                            <div className="card border p-1" style={{ width: '9rem', marginRight: '3px' }}> <img src="https://b282c5de4f50ed30d5ce-25e9f6b52714e6c3d4dbb7e330152014.ssl.cf3.rackcdn.com//siweb_uno_thumb_medium/content/781356/3310-DS_2.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h6 className="card-title">99€</h6>
                                </div>
                            </div>
                            <div className="card border p-1" style={{ width: '9rem', marginRight: '3px' }}> <img src="https://images.samsung.com/es/smartphones/galaxy-note20/buy/carousel/mobile/005-galaxynote20ultra-mysticbronze.jpg?imwidth=720" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h6 className="card-title">9€</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BabyCart;
