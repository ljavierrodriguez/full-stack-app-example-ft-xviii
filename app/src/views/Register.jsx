import React from 'react'

function Register() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label htmlFor="email" className="form-label">
                                Email
                            </label>
                            <input type="email" className="form-control" id="email" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="password" className="form-label">
                                Password
                            </label>
                            <input type="password" className="form-control" id="password" />
                        </div>
                        <div className="col-12">
                            <label htmlFor="biography" className="form-label">
                                Biography
                            </label>
                            <textarea id="biography" cols="30" rows="3" className="form-control"></textarea>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="linkedin" className="form-label">
                                Linkedin
                            </label>
                            <input type="text" className="form-control" id="linkedin" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="github" className="form-label">
                                Github
                            </label>
                            <input type="text" className="form-control" id="github" />
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary">
                                Register
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Register