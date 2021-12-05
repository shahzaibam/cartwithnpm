import React from 'react'
import Electronics_Category from './Electronics_Category'
import { Link } from 'react-router-dom';
import electronicCategoryData from './electronicCategoryData'; 

const ElectronicsProduct_Render = () => {
    return (    
        <>
            <h1 className="text-center mt-3">Electronics</h1>

            <section  style={{margin: '2.5rem'}}>
            
                <div className="row justify-content-center">
                
                    {
                        electronicCategoryData.electronicCategoriesData.map((item, index) => {
                            return (
                                <Electronics_Category 
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

export default ElectronicsProduct_Render;
