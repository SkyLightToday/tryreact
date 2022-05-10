import React from 'react';
import'./Navbar.css';

const Navbar = () => {
    return (
        <nav className="App-nav">
        <div>
          <a href="/profile">Profile</a>
          </div>
        <div>
          <a href="/dialogs">Messages</a>
          </div>
        <div>
          <a href="#s">News</a>
        </div>
        <div>
          <a href="#s">Music</a>
        </div>
        <div className="App-nav_last">
          <a href="#s">Settings</a>
        </div>
      </nav>
    );
}

export default Navbar;