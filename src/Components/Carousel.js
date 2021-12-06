import React from 'react'

const Carousel = () => {
    return (
        <>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        {/*<img src="https://d1ez3020z2uu9b.cloudfront.net/imagecache/blog-photos/17596_Fill_800_800.jpg" className="d-block w-100" alt="..." height="400px"/>*/}
                        <img src="https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className="d-block w-100" alt="..." height="400px"/>
                    </div>
                    <div className="carousel-item">
                        {/*<img src="https://thelandscapephotoguy.com/wp-content/uploads/2019/01/landscape%20new%20zealand%20S-shape.jpg" className="d-block w-100" alt="..." height="400px"/>*/}
                        <img src="https://www.ocimagazine.es/wp-content/uploads/2017/10/Nike-flash-sale-01.jpg" className="d-block w-100" alt="..." height="400px"/>
                    </div>
                    <div className="carousel-item">
                        {/*<img src="https://store-images.s-microsoft.com/image/apps.13801.13777613854529434.257959da-c3a7-4c0c-bc46-4eab0d9b3b45.74fd1573-5988-4d86-bbaa-911fc4e99efe?mode=scale&q=90&h=1080&w=1920" className="d-block w-100" alt="..." height="400px"/>*/}
                        <img src="https://i2.wp.com/rematch.net/wp-content/uploads/2019/06/Nike-Sale-Up-to-50-off-2019.png?fit=1200%2C700&ssl=1" className="d-block w-100" alt="..." height="400px"/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default Carousel
