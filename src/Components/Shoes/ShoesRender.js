import React from 'react'
import { Link } from 'react-router-dom';
import shoesCategoryData from './shoesCategoryData';
import Shoes_Category from './Shoes_Category';

const ShoesRender = () => {
    return (    
        <>
            <h1 className="text-center mt-3">Shoes</h1>

            <section  style={{margin: '2.5rem'}}>
            
                <div className="row justify-content-center">
                
                    {
                        shoesCategoryData.shoesCategoriesData.map((item, index) => {
                            return (
                                <Shoes_Category 
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

export default ShoesRender;
