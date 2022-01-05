import React from 'react'
import { Link } from 'react-router-dom';
import BabyCart from './BabyCart'
import babyCartData from './babyCartData';

const BabyCart_Render = () => {
    return (     
        <>
            <section>
            
                <div className="row justify-content-center">
                
                    {
                        babyCartData.babycartcategories.map((item, index) => {
                            return (
                                <BabyCart 
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

export default BabyCart_Render;
