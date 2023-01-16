import React, { useContext } from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../store/AppContext';

function Login() {
    const navigate = useNavigate()
    const { store, actions } = useContext(AppContext);

    const handleSubmit = e => {
        e.preventDefault();
        const { email, password } = store;
        if (email !== '' && password !== '') {
            actions.login({ email, password }, navigate)
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
                            <input type="email" className="form-control" id="email" value={store.email} onChange={actions.handleChange} />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="password" className="form-label">
                                Password
                            </label>
                            <input type="password" className="form-control" id="password" value={store.password} onChange={actions.handleChange}/>
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary">
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login