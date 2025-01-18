// src/App.js
import React from 'react';
import {  Link } from 'react-router-dom';

import RoutesComponent from './Components/RoutesComponent';

const App = () => {
  return (
    <div>
      <div className='container mt-5'>
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
          <Link className='navbar-brand' to='/'>
            Home
          </Link>
          <div className='collapse navbar-collapse'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <Link className='nav-link' to='/signin'>
                  Sign In
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/signup'>
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div>
          <h1>Welcome to My User Authentication App</h1>
          <RoutesComponent />
        </div>
      </div>
    </div>
  );
};

export default App;
