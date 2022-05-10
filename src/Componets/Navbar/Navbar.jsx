import React from 'react';
import'./Navbar.css';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="App-nav">
        <div>
          <NavLink to="/profile">Profile</NavLink>
          </div>
        <div>
          <NavLink to="/dialogs">Messages</NavLink>
          </div>
        <div>
          <NavLink to="/news">News</NavLink>
        </div>
        <div>
          <NavLink to="/music">Music</NavLink>
        </div>
        <div className="App-nav_last">
          <NavLink to="#s">Settings</NavLink>
        </div>
      </nav>
    );
}

export default Navbar;