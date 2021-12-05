import React from 'react'
import Furnitures_Category from './Furnitures_Category'
import { Link } from 'react-router-dom';
import furnituresCategoryData from './furnituresCategoryData'; 

const FurnituresProduct_Render = () => {
    return (    
        <>
            <h1 className="text-center mt-3">Furnitures</h1>

            <section  style={{margin: '2.5rem'}}>
            
                <div className="row justify-content-center">
                
                    {
                        furnituresCategoryData.furnituresCategoriesData.map((item, index) => {
                            return (
                                <Furnitures_Category 
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

export default FurnituresProduct_Render;
