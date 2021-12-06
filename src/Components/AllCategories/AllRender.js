import React from 'react'
import { Link } from 'react-router-dom';
import data from '../data';
import All_Category from './All_Category'

const AllRender = () => {
    return (    
        <>
            <h1 className="text-center mt-3">All Categories</h1>

            <section  style={{margin: '2.5rem'}}>
            
                <div className="row justify-content-center">
                
                    {
                        data.productData.map((item, index) => {
                            return (
                                <All_Category 
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

export default AllRender;
