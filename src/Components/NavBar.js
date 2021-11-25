import React from 'react';
import { useState } from 'react';
import { CartProvider } from 'react-use-cart';
import Cart from './Cart';
import { Link } from "react-router-dom";



export function NavBar() {

    return (
        <>

            <nav class="navbar navbar-expand-lg navbar-light bg-light pb-4">
                <div class="container-fluid">
                    <Link class="navbar-brand h6 ml-3 mr-3 mt-2 web-title" to="/">EShopping</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link active mr-3" aria-current="page" to="/">Home</Link>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle`mr-3" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categories
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link to="/productAppareal" className="dropdown-item">Appareal & Accessories</Link>
                                    <Link to="/BabyProducts" className="dropdown-item">Baby Products</Link>
                                    <Link to="/Beauty&Health" className="dropdown-item">Beauty & Health</Link>
                                    <Link to="/Electronics" className="dropdown-item">Electronics</Link>
                                    <Link to="/Furnitures" className="dropdown-item">Furniture</Link>
                                    <Link to="/Home&Garden" className="dropdown-item">Home & Garden</Link>
                                    <Link to="/Luggage&Bags" className="dropdown-item">Luggage and Bags</Link>
                                    <Link to="/Shoes" className="dropdown-item">Shoes</Link>
                                    <Link to="/Sports&Entertainment" className="dropdown-item">Sports and Entertainment</Link>
                                    <Link to="#" className="dropdown-item"></Link>
                                    <Link to="/AllCategories" className="dropdown-item">All Categories</Link>
                                </ul>
                            </li>

                            <Link to="/cart" className="nav-link mr-3">
                                Cart
                            </Link>

                            <Link type="button" className="nav-link mr-3" data-bs-toggle="modal" data-bs-target="#SignInModal">
                                Sign In
                            </Link>

                            <Link to="/signup" className="nav-link mr-3">
                                Sign Up
                            </Link>


                            <div className="modal" id="SignInModal" aria-labelledby="SignInModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="SignInModalLabel">Sign In</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <h6>Sign In with your email address</h6>
                                            <form className="form">
                                                <input className="w-100 mt-2 mb-2" type="text" placeholder="Email address" /><br />
                                                <input className="w-100 mt-2 mb-2" type="password" placeholder="Password" /><br />
                                                <input type="checkbox" id="RememberCheckBox" value="Remember" />&nbsp;
                                                <label for="RememberCheckBox">Remember me</label><br />
                                                <input className="btn btn-primary w-100" type="submit" value="Sign In" />

                                            </form>
                                        </div>
                                        <div className="modal-footer">
                                            <Link to="https://www.facebook.com/">Facebook</Link>
                                            <Link to="https://www.twitter.com/">Twitter</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle`mr-3" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Cart
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <CartProvider>
                                        <Cart />
                                    </CartProvider>
                                </ul>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>







        </>
    )
}

export default NavBar
