import React from 'react';
import {NavLink} from 'react-router-dom';

const NavItem = props => {
    return (
        <li className="nav-item">
            <NavLink to={props.destination} className="nav-link" activeClassName="active">{props.linkText}</NavLink>
        </li>
    );
}

export default NavItem;