import React from 'react'
import { Link } from 'react-router-dom';
import NikeSport from './NikeSport';
import NikeSport_Data from './NikeSport_Data';

const NikeSport_Render = () => {
    return (     
        <>
            <section>
            
                <div className="row justify-content-center">
                
                    {
                        NikeSport_Data.nikesportcategories.map((item, index) => {
                            return (
                                <NikeSport
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

export default NikeSport_Render;
