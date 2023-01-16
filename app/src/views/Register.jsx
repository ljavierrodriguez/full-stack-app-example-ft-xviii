import React, { useEffect } from 'react'
import { useContext } from 'react'
import { AppContext } from '../store/AppContext'
import { useNavigate } from 'react-router-dom';

function Register() {
    const navigate = useNavigate()
    const { store, actions } = useContext(AppContext);

    const handleSubmit = e => {
        e.preventDefault();
        const {email, password, biography, linkedin, github } = store;
        if(email !== '' && password !== ''){
            actions.register({ email, password, biography, linkedin, github }, navigate)
        }
    }

    useEffect(() => {
        if(store.currentUser) navigate('/');
    }, [store.currentUser])


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <form className="row g-3" onSubmit={handleSubmit}>
                        <div className="col-md-6">
                            <label htmlFor="email" className="form-label">
                                Email
                            </label>
                            <input type="email" className="form-control" id="email" value={store.email}  onChange={actions.handleChange}/>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="password" className="form-label">
                                Password
                            </label>
                            <input type="password" className="form-control" id="password" value={store.password}  onChange={actions.handleChange}/>
                        </div>
                        <div className="col-12">
                            <label htmlFor="biography" className="form-label">
                                Biography
                            </label>
                            <textarea id="biography" cols="30" rows="3" className="form-control" value={store.biography} onChange={actions.handleChange}></textarea>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="linkedin" className="form-label">
                                Linkedin
                            </label>
                            <input type="text" className="form-control" id="linkedin" value={store.linkedin}  onChange={actions.handleChange}/>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="github" className="form-label">
                                Github
                            </label>
                            <input type="text" className="form-control" id="github" value={store.github} onChange={actions.handleChange} />
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