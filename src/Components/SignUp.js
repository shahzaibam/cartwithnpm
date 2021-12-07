import React from 'react'
import {Link} from 'react-router-dom'

const SignUp = () => {
    return (
        <div>
            <h1>Sign Up</h1>

                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="SignInModalLabel">Sign Up</h5>
                        </div>
                        <div className="modal-body">
                            <form className="form">
                                <input className="w-100 mt-2 mb-2" type="text" placeholder="Name" /><br />
                                <input className="w-100 mt-2 mb-2" type="text" placeholder="Surname" /><br />
                                <label for="birthdate">Birth Date</label>
                                <input id="birthdate" className="w-100 mt-2 mb-2" type="date" /><br />
                                <input className="w-100 mt-2 mb-2" type="text" placeholder="Email Address" /><br />
                                <input className="w-100 mt-2 mb-2" type="password" placeholder="Password" /><br />
                                <input className="w-100 mt-2 mb-2" type="password" placeholder="Repeat the Password" /><br />
                                <input className="btn btn-primary w-100" type="submit" value="Sign Up" />

                            </form>
                        </div>
                        <div className="modal-footer">
                            <Link to="https://www.facebook.com/">Facebook</Link>
                            <Link to="https://www.twitter.com/">Twitter</Link>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default SignUp
