import React from 'react'
import { Link } from 'react-router-dom';
import XiaomiScooter from './XiaomiScooter';
import XiaomiScooter_Data from './XiaomiScooter_Data';

const XiaomiScooter_Render = () => {
    return (     
        <>
            <section>
            
                <div className="row justify-content-center">
                
                    {
                        XiaomiScooter_Data.xiaomicategories.map((item, index) => {
                            return (
                                <XiaomiScooter
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

export default XiaomiScooter_Render;
