import React from 'react'
import { Link } from 'react-router-dom';
import luggageAndBagsCategoryData from './luggageAndBagsCategoryData';
import LuggageAndBags_Category from './LuggageAndBags_Category';

const LuggageAndBags_Render = () => {
    return (    
        <>
            <h1 className="text-center mt-3">Luggage And Bags</h1>

            <section  style={{margin: '2.5rem'}}>
            
                <div className="row justify-content-center">
                
                    {
                        luggageAndBagsCategoryData.luggageAndBagsCategoriesData.map((item, index) => {
                            return (
                                <LuggageAndBags_Category 
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

export default LuggageAndBags_Render;
