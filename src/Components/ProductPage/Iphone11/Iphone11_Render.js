import React from 'react'
import { Link } from 'react-router-dom';
import Iphone11black from './IPhone11black'
import Iphone11Data from './Iphone11Data'

const Iphone11_Render = () => {
    return (     
        <>
            <section>
            
                <div className="row justify-content-center">
                
                    {
                        Iphone11Data.cortacespedcategories.map((item, index) => {
                            return (
                                <Iphone11black
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

export default Iphone11_Render;
