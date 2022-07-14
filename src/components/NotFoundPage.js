import React from 'react';
import { NavLink } from 'react-router-dom';
const NotFoundPage = () => {
    return (
        <div>
            <h1>Oops! Page Not Found</h1>
            <h6><NavLink to='/'>Return to Previous Page</NavLink></h6>
        </div>
    );
}
export default NotFoundPage;