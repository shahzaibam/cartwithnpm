import React from 'react'
import { Link } from 'react-router-dom';
import BabyBath from './BabyBath'
import babyBathData from './babyBathData';

const BabyBath_Render = () => {
    return (     
        <>
            <section>
            
                <div className="row justify-content-center">
                
                    {
                        babyBathData.babybathcategories.map((item, index) => {
                            return (
                                <BabyBath 
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

export default BabyBath_Render;
