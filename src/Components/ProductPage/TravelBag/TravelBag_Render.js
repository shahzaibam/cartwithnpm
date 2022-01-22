import React from 'react'
import { Link } from 'react-router-dom';
import SweatShirt from './TravelBag';
import SweatShirt_Data from './TravelBag_Data';

const TravelBag_Render = () => {
    return (     
        <>
            <section>
            
                <div className="row justify-content-center">
                
                    {
                        SweatShirt_Data.sweatshirtcategories.map((item, index) => {
                            return (
                                <SweatShirt
                                    img={item.img}
                                    title={item.title}
                                    desc={item.desc}
                                    price={item.price + '€'}
                                    item={item}
                                    path={item.path}
                                    key={index}
                                />

                            )
                        })
                    }

                </div>

            </section>
        </>
    )
}

export default TravelBag_Render;
