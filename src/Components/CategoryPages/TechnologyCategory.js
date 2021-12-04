import React from 'react'
import phonecategoryData from './techcategoryData'
import { Link } from "react-router-dom";

const TechnologyCategory = (props) => {
    return (

        <div>
            <div>


                <div class="card" style={{ width: '18rem' }}>
                    <img class="card-img-top" src={props.img} alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="card-title">{props.title}</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default TechnologyCategory
