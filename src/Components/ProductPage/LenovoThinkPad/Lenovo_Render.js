import React from 'react'
import { Link } from 'react-router-dom';
import LenovoThinkPad from './LenovoThinkPad';
import LenovoData from './Lenovo_Data';

const Lenovo_Render = () => {
    return (     
        <>
            <section>
            
                <div className="row justify-content-center">
                
                    {
                        LenovoData.lenovocategories.map((item, index) => {
                            return (
                                <LenovoThinkPad
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

export default Lenovo_Render;
