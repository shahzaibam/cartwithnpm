import React from 'react'
import { Link } from "react-router-dom";

const IPhone11black = () => {
    return (
        <>
            <div class="container-fluid mt-4 mb-3">
                <div class="row">
                    <div class="col-md-5 pr-2">

                        <div class="demo">
                            <ul id="lightSlider">
                                <img src="https://www.backmarket.es/cdn-cgi/image/format=auto,quality=75,width=1920/https://d1eh9yux7w8iql.cloudfront.net/product_images/product_images/290057_b4c7419d-aa1b-47dc-a956-4afbd61d7d1f-thumb.jpg" height="400px" width="400px" />
                            </ul>
                        </div>

                    </div>
                    <div class="col-md-7">
                        <div class="about"> <h3 class="font-weight-bold">Iphone 11</h3>
                            <h4 class="font-weight-bold">749€
                            </h4>
                        </div>
                        <hr />
                        <div className="color-div" style={{ width: '200px' }}>
                            <h5>Color</h5>
                            {         /*                   <div className="d-flex justify-content-between">
*/}
                            <div className="d-flex justify-content-between">
                                <div>
                                    <button className="btn text-white" style={{ background: '#E91E63', borderRadius: '100%', height: '30px', outlineColor: 'blue' }} onClick={() => alert('pink')}></button>
                                    <p>Pink</p>
                                </div>

                                <div>
                                    <button className="btn bg-info text-white" style={{ borderRadius: '100%', height: '30px', outlineColor: 'blue' }} onClick={() => alert('blue')}></button>
                                    <p>Blue</p>
                                </div>
                                <div>
                                    <button className="btn bg-dark text-white" style={{ borderRadius: '100%', height: '30px', outlineColor: 'blue' }} onClick={() => alert('black')}></button>
                                    <p>Black</p>
                                </div>
                            </div>
                            {/*                            </div>*/}
                        </div>

                        <hr />


                        <div className="storage-div">
                            <h5>Storage</h5>

                            <div class="row">
                                <div class="col-sm-4">
                                    <Link to="/">
                                        <div class="card" style={{ cursor: 'pointer' }}>
                                            <div class="card-body">
                                                <h5 class="card-title">64GB</h5>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div class="col-sm-4">
                                    <Link to="/">
                                        <div class="card" style={{ cursor: 'pointer' }}>
                                            <div class="card-body">
                                                <h5 class="card-title">128GB</h5>
                                            </div>
                                        </div>
                                    </Link>
                                </div>

                                <div class="col-sm-4">
                                    <Link to="/">
                                        <div class="card" style={{ cursor: 'pointer' }}>
                                            <div class="card-body">
                                                <h5 class="card-title">256GB</h5>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div class="buttons mt-4 "> <button class="btn btn-danger btn-long buy" onClick={() => alert("your product has been added to the cart")}>Buy it Now</button> </div>

                        <hr />
                        <div class="product-description">
                            <div class="mt-2"> <h4 class="font-weight-bold">Description</h4>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos hic reprehenderit veritatis blanditiis perferendis ad debitis assumenda expedita dicta, molestiae cupiditate optio incidunt doloremque dolores vitae modi minima voluptas harum soluta voluptatum aliquam quisquam quos rerum! Nostrum magni impedit necessitatibus assumenda culpa sequi tempora a, deserunt in dolor magnam odit aspernatur.</p>

                            </div>
                        </div>
                    </div>
                    <div class="card mt-2"> <span>Similar items:</span>
                        <div class="similar-products mt-2 d-flex flex-row">
                            <div class="card border p-1" style={{ width: '9rem', marginRight: '3px' }}> <img src="https://muynuevo.com/wp-content/webpc-passthru.php?src=https://muynuevo.com/wp-content/uploads/GOLD-1-1.png&nocache=1" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h6 class="card-title">999€</h6>
                                </div>
                            </div>
                            <div class="card border p-1" style={{ width: '9rem', marginRight: '3px' }}> <img src="https://b282c5de4f50ed30d5ce-25e9f6b52714e6c3d4dbb7e330152014.ssl.cf3.rackcdn.com//siweb_uno_thumb_medium/content/781356/3310-DS_2.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h6 class="card-title">99€</h6>
                                </div>
                            </div>
                            <div class="card border p-1" style={{ width: '9rem', marginRight: '3px' }}> <img src="https://images.samsung.com/es/smartphones/galaxy-note20/buy/carousel/mobile/005-galaxynote20ultra-mysticbronze.jpg?imwidth=720" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h6 class="card-title">9€</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default IPhone11black
