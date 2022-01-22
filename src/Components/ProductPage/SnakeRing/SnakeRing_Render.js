import React from 'react'
import { Link } from 'react-router-dom';
import SnakeRing from './SnakeRing';
import SnakeRing_Data from './SnakeRing_Data';

const SnakeRing_Render = () => {
    return (     
        <>
            <section>
            
                <div className="row justify-content-center">
                
                    {
                        SnakeRing_Data.SnakeRingcategories.map((item, index) => {
                            return (
                                <SnakeRing
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

export default SnakeRing_Render;
