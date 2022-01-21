import React from 'react'
import { Link } from 'react-router-dom';
import NikeShoes from './NikeShoes';
import NikeShoes_Data from './NikeShoes_Data';

const NikeShoes_Render = () => {
    return (     
        <>
            <section>
            
                <div className="row justify-content-center">
                
                    {
                        NikeShoes_Data.nikecategories.map((item, index) => {
                            return (
                                <NikeShoes
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

export default NikeShoes_Render;
