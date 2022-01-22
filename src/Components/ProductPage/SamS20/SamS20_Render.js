import React from 'react'
import { Link } from 'react-router-dom';
import SamS20 from './SamS20';
import SamS20_Data from './SamS20_Data';

const SamS20_Render = () => {
    return (     
        <>
            <section>
            
                <div className="row justify-content-center">
                
                    {
                        SamS20_Data.s20categories.map((item, index) => {
                            return (
                                <SamS20
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

export default SamS20_Render;
