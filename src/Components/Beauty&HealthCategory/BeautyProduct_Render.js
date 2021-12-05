import React from 'react'
import Beauty_Category from './Beauty_Category';
import { Link } from 'react-router-dom';
import beautycategoryData from './beautyCategoryData';
 

const BeautyProduct_Render = () => {
    return (    
        <>
            <h1 className="text-center mt-3">Beauty&Health</h1>

            <section  style={{margin: '2.5rem'}}>
            
                <div className="row justify-content-center">
                
                    {
                        beautycategoryData.beautycategoriesData.map((item, index) => {
                            return (
                                <Beauty_Category 
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

export default BeautyProduct_Render;
