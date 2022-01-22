import React from 'react'
import { Link } from 'react-router-dom';
import Iphon11max from './Iphon11max';
import Iph11max_Data from './Iph11max_Data';

const Iph11max_Render = () => {
    return (     
        <>
            <section>
            
                <div className="row justify-content-center">
                
                    {
                        Iph11max_Data.iph11categories.map((item, index) => {
                            return (
                                <Iphon11max
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

export default Iph11max_Render;
