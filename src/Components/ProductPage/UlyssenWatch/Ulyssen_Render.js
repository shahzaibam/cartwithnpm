import React from 'react'
import { Link } from 'react-router-dom';
import Ulyssen from './Ulyssen';
import Ulyssen_Data from './Ulyssen_Data';

const Ulyssen_Render = () => {
    return (     
        <>
            <section>
            
                <div className="row justify-content-center">
                
                    {
                        Ulyssen_Data.ulyssencategories.map((item, index) => {
                            return (
                                <Ulyssen
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

export default Ulyssen_Render;
