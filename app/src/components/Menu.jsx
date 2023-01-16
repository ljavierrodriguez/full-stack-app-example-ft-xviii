import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../store/AppContext'

function Menu() {
    const { store, actions } = useContext(AppContext);
    const handleLogout = e => {
        e.preventDefault();
        actions.logout()
    }
    return (
        <ul className="nav justify-content-center">

            {
                store.currentUser === null ?
                    (
                        <>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/register">Register</Link>
                            </li>
                        </>

                    ) : (
                        <>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/profile">Profile</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href='/logout' onClick={handleLogout}>Logout</a>
                            </li>
                        </>
                    )
            }

        </ul>
    )
}

export default Menu