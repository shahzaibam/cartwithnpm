import React from 'react'
import { Link } from 'react-router-dom';
import Paletin from './Paletin';
import Paletin_Data from './Paletin_Data';

const Paletin_Render = () => {
    return (     
        <>
            <section>
            
                <div className="row justify-content-center">
                
                    {
                        Paletin_Data.paletincategories.map((item, index) => {
                            return (
                                <Paletin
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

export default Paletin_Render;
