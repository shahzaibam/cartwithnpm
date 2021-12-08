import React from 'react'
import data from './data';
import Itemcard from './Itemcard';
import { Link } from 'react-router-dom';
import Product_Render from './PhoneCategory/Product_Render';
import SportsProduct_Render from './SportsAndEntertainment/SportsProduct_Render';

const Home = () => {
    return (   
        <>
            <h1 className="text-center mt-3">All Products</h1>

            <section  style={{margin: '2.5rem'}}>
            
                <div className="row justify-content-center">
                
                    {
                        data.productData.map((item, index) => {
                            return (
                                <Itemcard 
                                    id={item.id}
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

export default Home;
