import React from 'react'
import phoneCategoryData from './phoneCategoryData';
import Phone_Category from './Phone_Category';
import { Link } from 'react-router-dom';
import phonecategoryData from './phoneCategoryData';
 

const Product_Render = () => {
    return (    
        <>
            <h1 className="text-center mt-3">Phone Category</h1>

            <section  style={{margin: '2.5rem'}}>
            
                <div className="row justify-content-center">
                
                    {
                        phonecategoryData.phonecategoriesData.map((item, index) => {
                            return (
                                <Phone_Category 
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

export default Product_Render;
