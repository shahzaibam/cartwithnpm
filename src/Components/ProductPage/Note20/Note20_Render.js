import React from 'react'
import { Link } from 'react-router-dom';
import Note20 from './Note20';
import Note20_Data from './Note20_Data';

const Note20_Render = () => {
    return (     
        <>
            <section>
            
                <div className="row justify-content-center">
                
                    {
                        Note20_Data.n20categories.map((item, index) => {
                            return (
                                <Note20
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

export default Note20_Render;
