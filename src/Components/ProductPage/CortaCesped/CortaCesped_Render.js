import React from 'react'
import { Link } from 'react-router-dom';
import CortaCesped from './CortaCesped'
import CortaCespedData from './CortaCespedData'

const CortaCesped_Render = () => {
    return (     
        <>
            <section>
            
                <div className="row justify-content-center">
                
                    {
                        CortaCespedData.cortacespedcategories.map((item, index) => {
                            return (
                                <CortaCesped
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

export default CortaCesped_Render;
