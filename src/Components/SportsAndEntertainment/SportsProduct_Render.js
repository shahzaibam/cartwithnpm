import React from 'react'
import Sports_Category from './Sports_Category'
import { Link } from 'react-router-dom';
import sportsCategoryData from './SportsCategoryData';

const SportsProduct_Render = () => {
    return (    
        <>
            <h1 className="text-center mt-3">Sports & Entertainment</h1>

            <section  style={{margin: '2.5rem'}}>
            
                <div className="row justify-content-center">
                
                    {
                        sportsCategoryData.sportsCategoriesData.map((item, index) => {
                            return (
                                <Sports_Category 
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

export default SportsProduct_Render;
