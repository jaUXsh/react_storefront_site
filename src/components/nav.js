import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">WELCOME</Link>
                </li>
                <li>
                    <Link to="/our-macarons">OUR MACARONS</Link>
                </li>
                <li>
                    <Link to="/gifts-and-parties">GIFTS & PARTIES</Link>
                </li>
                <li>
                    <Link to="/contact">CONTACT</Link>
                </li>
            </ul>
        </nav>
    )
};

export default Nav;