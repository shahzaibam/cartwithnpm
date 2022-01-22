import React from 'react'
import { Link } from 'react-router-dom';
import SingleSofa from './SingleSofa';
import SingleSofa_Data from './SingleSofa_Data';

const SingleSofa_Render = () => {
    return (     
        <>
            <section>
            
                <div className="row justify-content-center">
                
                    {
                        SingleSofa_Data.singlesofacategories.map((item, index) => {
                            return (
                                <SingleSofa
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

export default SingleSofa_Render;
