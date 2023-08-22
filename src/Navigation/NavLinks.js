import React from 'react';
import { Link } from 'react-router-dom';
import './NavLinks.css';
const NavLinks = (props) => {
    return (
        
        <ul className="nav-links">  
            <li><Link to="/new">NEW</Link></li>
            <li><Link to="/search">SEARCH</Link></li>
            <li><Link to="/create">CREATE</Link></li>
            <li><Link to="/auth">PROFILE</Link></li>
        </ul>  
    );
}
export default NavLinks;