import React from 'react';

import { Link } from 'react-router-dom';

function Navbar() {
    return(
        <ul>
            <li><Link to="/" className="active">Home</Link></li>
            <li><Link to="/jobs">Jobs</Link></li>
            <li><Link to="/contacts">Contacts</Link></li>
        </ul>
    )
}

export default Navbar;