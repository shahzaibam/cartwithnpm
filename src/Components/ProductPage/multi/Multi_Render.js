import React from 'react'
import { Link } from 'react-router-dom';
import Multi from './Multi';
import MultiData from './Multi_Data';

const Multi_Render = () => {
    return (     
        <>
            <section>
            
                <div className="row justify-content-center">
                
                    {
                        MultiData.multicategories.map((item, index) => {
                            return (
                                <Multi
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

export default Multi_Render;
