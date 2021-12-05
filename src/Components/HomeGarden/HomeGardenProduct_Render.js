import React from 'react'
import { Link } from 'react-router-dom';
import homeGardenCategoryData from './homeGardenCategoryData';
import HomeGarden_Category from './HomeGarden_Category';

const HomeGardenProduct_Render = () => {
    return (    
        <>
            <h1 className="text-center mt-3">Home & Garden</h1>

            <section  style={{margin: '2.5rem'}}>
            
                <div className="row justify-content-center">
                
                    {
                        homeGardenCategoryData.homeGardenCategoriesData.map((item, index) => {
                            return (
                                <HomeGarden_Category 
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

export default HomeGardenProduct_Render;
