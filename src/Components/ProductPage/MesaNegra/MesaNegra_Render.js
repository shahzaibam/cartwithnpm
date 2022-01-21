import React from 'react'
import { Link } from 'react-router-dom';
import MesaNegra from './MesaNegra';
import MesaNegra_Data from './MesaNegra_Data';

const MesaNegra_Render = () => {
    return (     
        <>
            <section>
            
                <div className="row justify-content-center">
                
                    {
                        MesaNegra_Data.mesacategories.map((item, index) => {
                            return (
                                <MesaNegra
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

export default MesaNegra_Render;
