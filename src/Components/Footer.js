import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Footer = () => {
    return (
        <div>
            <footer class="bg-light text-center text-white">
                <div class="container p-4 pb-0">
                    <section class="mb-4">
                        <a
                            class="btn btn-primary btn-floating m-1"
                            style={{backgroundColor: '#3b5998'}}
                            href="https://www.facebook.com/"
                            role="button"
                        ><i class="fab fa-facebook-f"></i></a>

                        <a
                            class="btn btn-primary btn-floating m-1"
                            style={{backgroundColor: '#55acee'}}
                            href="https://www.twitter.com/"
                            role="button"
                        ><i class="fab fa-twitter"></i></a>

                        <a
                            class="btn btn-primary btn-floating m-1"
                            style={{backgroundColor: '#dd4b39'}}
                            href="https://www.googleplus.com/"
                            role="button"
                        ><i class="fab fa-google"></i></a>

                        <a
                            class="btn btn-primary btn-floating m-1"
                            style={{backgroundColor: '#ac2bac'}}
                            href="https://www.instagram.com/"
                            role="button"
                        ><i class="fab fa-instagram"></i></a>

                        <a
                            class="btn btn-primary btn-floating m-1"
                            style={{backgroundColor: '#0082ca'}}
                            href="https://www.linkedin.com/"
                            role="button"
                        ><i class="fab fa-linkedin-in"></i></a>
                        <a
                            class="btn btn-primary btn-floating m-1"
                            style={{backgroundColor: '#333333'}}
                            href="https://www.github.com/"
                            role="button"
                        ><i class="fab fa-github"></i></a>
                    </section>
                </div>

                <div class="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
                    © 2020 Copyright: Shebi Website
                </div>
            </footer>
        </div>
    )
}

export default Footer
