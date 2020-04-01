import React from 'react';

import { NavLink } from 'react-router-dom';

function Navbar() {
    return(
        <ul>
            <li><NavLink exact to="/" >Home</NavLink></li>
            <li><NavLink exact to="/jobs" >Jobs</NavLink></li>
            <li><NavLink exact to="/contacts" >Contacts</NavLink></li>
        </ul>
    )
}

export default Navbar;