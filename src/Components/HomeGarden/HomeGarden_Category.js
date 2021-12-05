import React from 'react'
import { useCart } from 'react-use-cart'
import { Link } from "react-router-dom";

const HomeGarden_Category = (props) => {

    const { addItem } = useCart();
 
  
    return ( 

        <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4 itemcard">

            <div class="card p-0 overflow-hidden h-100 shadow">
                <Link to={`/${props.path}`}><img src={props.img} class="card-img-top img-fluid bg-dark" height="100px" /></Link>
                <div class="card-body text-center">
                    <h5 class="card-title">{props.title}</h5>
                    <h5 class="card-title">{props.price}</h5>
                    <p class="card-text">{props.desc}</p>
                    <Link className="btn btn-danger" style={{ marginRight: '1rem' }} to={`/${props.path}`}>View Product</Link>
                    <button className="btn btn-success ml-3" onClick={
                        () => addItem(props.item)
                    }>Add to cart</button>
                </div>
            </div>
            
        </div>

    )
}

export default HomeGarden_Category;
