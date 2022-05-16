import React from 'react';
import'./Navbar.css';
import {NavLink} from 'react-router-dom';



const Navbar = () => {

  let activeStyle = {
    // textDecoration: "underline",
    color: "#338fdb",
  };

  // let activeClassName = "active";//--ком стр пишет,что я его не использ)

    return (
        <nav className="App-nav">
        <div>
          <NavLink to="/profile" style={({ isActive }) => isActive ? activeStyle : undefined}>Profile</NavLink>
          </div>
        <div>
          <NavLink to="/dialogs" style={({ isActive }) => isActive ? activeStyle : undefined}>Messages</NavLink>
          </div>
        <div>
          <NavLink to="/news" style={({ isActive }) => isActive ? activeStyle : undefined}>News</NavLink>
        </div>
        <div>
          <NavLink to="/music" style={({ isActive }) => isActive ? activeStyle : undefined}>Music</NavLink>
        </div>
        <div>
          <NavLink to="/friends" style={({ isActive }) => isActive ? activeStyle : undefined}>Friends</NavLink>
        </div>
        <div>
          <NavLink to="/users" style={({ isActive }) => isActive ? activeStyle : undefined}>Users</NavLink>
        </div>
        <div className="App-nav_last">
          <NavLink to="#s" style={({ isActive }) => isActive ? activeStyle : undefined}>Settings</NavLink>
        </div>
      </nav>
    );
}

export default Navbar;
