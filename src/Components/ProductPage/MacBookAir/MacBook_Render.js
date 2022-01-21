import React from 'react'
import { Link } from 'react-router-dom';
import MacBook from './MacBook';
import MacBookData from './MacBook_Data';

const MacBook_Render = () => {
    return (     
        <>
            <section>
            
                <div className="row justify-content-center">
                
                    {
                        MacBookData.maccategories.map((item, index) => {
                            return (
                                <MacBook
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

export default MacBook_Render;
