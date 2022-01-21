import React from 'react'
import { Link } from 'react-router-dom';
import Nokia from './Nokia';
import Nokia_Data from './Nokia_Data';

const Nokia_Render = () => {
    return (     
        <>
            <section>
            
                <div className="row justify-content-center">
                
                    {
                        Nokia_Data.nokiacategories.map((item, index) => {
                            return (
                                <Nokia
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

export default Nokia_Render;
