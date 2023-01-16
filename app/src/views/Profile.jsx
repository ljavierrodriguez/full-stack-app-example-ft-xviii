import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../store/AppContext';

function Profile() {

    const navigate = useNavigate();
    const { store, actions } = useContext(AppContext);


    useEffect(() => {
        if (!store.currentUser) navigate('/login');
        actions.getProfile();
    }, [])

    useEffect(() => {
        if (!store.currentUser) navigate('/login');
        actions.getProfile();
    }, [store.currentUser])


    const handleSubmit = e => {
        e.preventDefault();
        const { profile } = store;
        actions.updateProfile(profile, navigate);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    {
                        !!store.profile ? (
                            <form className="row g-3" onSubmit={handleSubmit}>
                                <div className="col-md-12">
                                    <label htmlFor="email" className="form-label">
                                        Email
                                    </label>
                                    <input type="email" className="form-control" disabled id="email" readOnly value={store.profile?.email} onChange={actions.handleChangeProfile} />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="biography" className="form-label">
                                        Biography
                                    </label>
                                    <textarea id="biography" cols="30" rows="3" className="form-control" value={store.profile?.biography} onChange={actions.handleChangeProfile}></textarea>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="linkedin" className="form-label">
                                        Linkedin
                                    </label>
                                    <input type="text" className="form-control" id="linkedin" value={store.profile?.linkedin} onChange={actions.handleChangeProfile}/>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="github" className="form-label">
                                        Github
                                    </label>
                                    <input type="text" className="form-control" id="github" value={store.profile?.github} onChange={actions.handleChangeProfile}/>
                                </div>
                                <div className="col-12">
                                    <button type="submit" className="btn btn-warning">
                                        Update Profile
                                    </button>
                                </div>
                            </form>
                        ) : (
                            <div className="spinner-border text-info" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        )
                    }

                </div>
            </div>
        </div >
    )
}

export default Profile