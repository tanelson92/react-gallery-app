import React from 'react';
import { NavLink } from 'react-router-dom';
const Nav = () => {
    return (
        <nav className="main-nav">
            <ul>
            <li><NavLink to='/monkeys'>Monkeys</NavLink></li>
            <li><NavLink to='/dogs'>Dogs</NavLink></li>
            <li><NavLink to='/cats'>Cats</NavLink></li>
            </ul>
        </nav>
    );
}
export default Nav;