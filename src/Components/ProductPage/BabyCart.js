import React from 'react'
import { Link } from "react-router-dom";


const BabyCart = () => {
    return (
        <>
            <div className="container-fluid mt-4 mb-3">
                <div className="row">
                    <div className="col-md-5 pr-2">

                        <div className="demo">
                            <ul id="lightSlider">
                                <img src="https://sc04.alicdn.com/kf/H708540fdfa90484f86ab9a043873e629G.jpg" height="400px" width="400px" />
                            </ul>
                        </div>

                    </div>
                    <div className="col-md-7">
                        <div className="about"> <h3 className="font-weight-bold">Baby Cart</h3>
                            <h4 className="font-weight-bold">42.55€</h4>
                        </div>
                        <hr />

                        <div className="storage-div">
                            <h5>Size "Baby's Month"</h5>

                            <div className="row">
                                <div className="col-sm-2">
                                    <Link to="/">
                                        <div className="card" style={{ cursor: 'pointer' }}>
                                            <div className="card-body">
                                                <h5 className="card-title">2-4</h5>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-sm-2">
                                    <Link to="/">
                                        <div className="card" style={{ cursor: 'pointer' }}>
                                            <div className="card-body">
                                                <h5 className="card-title">4-6</h5>
                                            </div>
                                        </div>
                                    </Link>
                                </div>

                                <div className="col-sm-2">
                                    <Link to="/">
                                        <div className="card" style={{ cursor: 'pointer' }}>
                                            <div className="card-body">
                                                <h5 className="card-title">6-8</h5>
                                            </div>
                                        </div>
                                    </Link>
                                </div>

                                <div className="col-sm-2">
                                    <Link to="/">
                                        <div className="card" style={{ cursor: 'pointer' }}>
                                            <div className="card-body">
                                                <h5 className="card-title">8-10</h5>
                                            </div>
                                        </div>
                                    </Link>
                                </div>

                                <div className="col-sm-2">
                                <Link to="/">
                                    <div className="card" style={{ cursor: 'pointer' }}>
                                        <div className="card-body">
                                            <h5 className="card-title">10-12</h5>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            </div>
                        </div>
                        <div className="buttons mt-4 "> <button className="btn btn-danger btn-long buy" onClick={() => alert("your product has been added to the cart")}>Buy it Now</button> </div>

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