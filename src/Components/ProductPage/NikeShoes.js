import React from 'react'
import { Link } from "react-router-dom";


const NikeShoes = () => {
    return (
        <>
            <div class="container-fluid mt-4 mb-3">
                <div class="row">
                    <div class="col-md-5 pr-2">

                        <div class="demo">
                            <ul id="lightSlider">
                                <img src="https://images.nike.com/is/image/DotCom/CU3504_005?$NIKE_PWP_GRAY$&wid=420&hei=420" height="400px" width="400px" />
                            </ul>
                        </div>

                    </div>
                    <div class="col-md-7">
                        <div class="about"> <h3 class="font-weight-bold">Nike Shoes
                        </h3>
                            <h4 class="font-weight-bold">59.99€
                            </h4>
                        </div>
                        <hr />

                        <div className="storage-div">
                            <h5>Size</h5>

                            <div class="row">
                                <div class="col-sm-2">
                                    <Link to="/">
                                        <div class="card" style={{ cursor: 'pointer' }}>
                                            <div class="card-body">
                                                <h5 class="card-title">39</h5>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div class="col-sm-2">
                                    <Link to="/">
                                        <div class="card" style={{ cursor: 'pointer' }}>
                                            <div class="card-body">
                                                <h5 class="card-title">40</h5>
                                            </div>
                                        </div>
                                    </Link>
                                </div>

                                <div class="col-sm-2">
                                    <Link to="/">
                                        <div class="card" style={{ cursor: 'pointer' }}>
                                            <div class="card-body">
                                                <h5 class="card-title">41</h5>
                                            </div>
                                        </div>
                                    </Link>
                                </div>

                                <div class="col-sm-2">
                                    <Link to="/">
                                        <div class="card" style={{ cursor: 'pointer' }}>
                                            <div class="card-body">
                                                <h5 class="card-title">42</h5>
                                            </div>
                                        </div>
                                    </Link>
                                </div>

                                <div class="col-sm-2">
                                    <Link to="/">
                                        <div class="card" style={{ cursor: 'pointer' }}>
                                            <div class="card-body">
                                                <h5 class="card-title">43.5</h5>
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

export default NikeShoes
