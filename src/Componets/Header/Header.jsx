import React from 'react';
import './Header.css';
import {NavLink} from 'react-router-dom';

const Header = (props) => {
    return (
        <header className="App-header">
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcJJIWs4QdkA5XBuWjPlqA_IFwsPCtR4f_mql4qyvlKA&s' alt='logo' />
        <div className="loginBlock">
            {props.isAuth ? props.login:
            <NavLink to={'/login'} className="login">Login</NavLink>}
        </div>
        </header>
    );
}

export default Header;