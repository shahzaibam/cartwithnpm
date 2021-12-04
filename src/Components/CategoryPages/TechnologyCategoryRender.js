import React from 'react'
import techcategoryData from './techcategoryData';
import TechnologyCategory from './TechnologyCategory';
import { Link } from 'react-router-dom';


const TechnologyCategoryRender = () => {
    return (
        <>
            <h1 className="text-center mt-3">Phone Category</h1>
            <div>

                <section style={{ margin: '2.5rem' }}>

                    <div className="d-flex justify-content-center">

                        {
                            techcategoryData.techcategoriesData.map((item, index) => {
                                return (
                                    // <TechnologyCategory
                                    //     img={item.img}
                                    //     category={item.category}
                                    //     title={item.title}
                                    //     desc={item.desc}
                                    //     price={item.price + '€'}
                                    //     item={item}
                                    //     path={item.path}
                                    //     key={index}
                                    // />

                                    <div class="card" style={{ width: '18rem' }}>
                                        <img class="card-img-top" src={item.img} alt="Card image cap" />
                                        <div class="card-body">
                                            <h5 class="card-title">{item.title}</h5>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a href="#" class="btn btn-primary">Go somewhere</a>
                                        </div>
                                    </div>

                                    

                                )
                            })
                        }

                    </div>

                </section>
            </div>
        </>
    )
}

export default TechnologyCategoryRender;
