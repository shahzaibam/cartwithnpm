import React from 'react'
import { Link } from 'react-router-dom';
import BabySpoons from './BabySpoons'
import babySpoonsData from './babySpoonsData'

const BabySpoons_Render = () => {
    return (     
        <>
            <section>
            
                <div className="row justify-content-center">
                
                    {
                        babySpoonsData.babyspoonscategories.map((item, index) => {
                            return (
                                <BabySpoons
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

export default BabySpoons_Render;
