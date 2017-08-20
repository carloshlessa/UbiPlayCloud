import React from 'react';
import {NavLink} from 'react-router-dom';

const Nav = () => {
    return (
            <nav>
                <ul className="transition">
                    <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
                    <li><NavLink exact to="/music" activeClassName="active">Music</NavLink></li>
                    <li><NavLink exact to="/login" activeClassName="active">Login</NavLink></li>
                </ul>
            </nav>
    )
};

export default Nav;
