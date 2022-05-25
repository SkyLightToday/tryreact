import React from 'react';
import './Header.css';
import {NavLink} from 'react-router-dom';
import BlackCat from './../../assets/img/catblack.jpg';


const Header = (props) => {
    return (
        <header className="App-header">
         <img src={BlackCat} alt='logo' />
         <div className='BadNightCats'>
             <h1>BadNightCats</h1>
         </div>
        <div className="loginBlock">
            {props.isAuth ? props.login:
            <NavLink to={'/login'} className="login">Login</NavLink>}
        </div>
        </header>
    );
}

export default Header;