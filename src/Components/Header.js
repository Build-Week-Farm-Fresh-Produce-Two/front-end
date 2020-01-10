import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
                <h2>Farm Fresh Produce</h2>
                <nav className="header-nav">
                    <Link className="link" to="/Home">Home</Link>
                    <Link className="link" to="/">Login</Link>
                    <Link className="link" to="/NewAccountForm">Register</Link>
                </nav>
        </div>
    )
}

export default Header;