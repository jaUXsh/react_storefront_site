import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="navigation">
            <ul className="nav-list">
                <li className="nav-item">
                    <Link to="/">WELCOME</Link>
                </li>
                <li className="nav-item">
                    <Link to="/our-macarons">OUR MACARONS</Link>
                </li>
                <li className="nav-item">
                    <Link to="/gifts-and-parties">GIFTS & PARTIES</Link>
                </li>
                <li className="nav-item">
                    <Link to="/contact">CONTACT</Link>
                </li>
            </ul>
        </nav>
    )
};

export default Nav;