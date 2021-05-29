import React from 'react';
import { NavLink,Link } from 'react-router-dom';

function Nav() {
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <div className="navbar-nav">
                <NavLink exact to="/" className="nav-item nav-link">Home</NavLink>
                <NavLink to="/users" className="nav-item nav-link">Users</NavLink>
                <NavLink to="/about" className="nav-item nav-link">About</NavLink>
                <NavLink to="/contact" className="nav-item nav-link">Contact</NavLink>
                <NavLink to="/add" className="nav-item nav-link">Add</NavLink>
                <NavLink to="/mull" className="nav-item nav-link">Mull</NavLink>
                <Link to="/mull" className="nav-item nav-link">Mull 123</Link>




                
            </div>
        </nav>
    );
}

export { Nav };