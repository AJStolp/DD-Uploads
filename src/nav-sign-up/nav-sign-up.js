import React from 'react';
import { Link } from 'react-router-dom';
import './nav-sign-up.css';

function NavSignUp (props) {
        
        return (
            <nav>
               <ul >
                    <li>
                        <Link to='/' onClick={props.hideShowNav}>Sign Up Page</Link>
                    </li>
                </ul>
           </nav>
        )
    
}

export default NavSignUp