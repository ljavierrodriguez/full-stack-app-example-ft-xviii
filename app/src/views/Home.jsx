import React from 'react'
import { useEffect } from 'react';
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../store/AppContext'

function Home() {
  const navigate = useNavigate();
  const { store } = useContext(AppContext);

  useEffect(() => {
    if (!store.currentUser) navigate('/login');

  }, [store.currentUser])


  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          Home
        </div>
      </div>
    </div>
  )
}

export default Home