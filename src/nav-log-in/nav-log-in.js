import React from 'react';
import { Link } from 'react-router-dom';
import './nav-log-in.css';

function Nav (props) {
        
        return (
            <nav className='nav-in-out'>
               <ul>
                    <li>
                        <Link to='/sign-in-form' className='log-out'>Log Out</Link>
                    </li>
                    <li>
                        <Link to='/Sign-in' onClick={props.hideShowNav} className='log-in'>Log-In</Link>
                    </li>
                </ul>
           </nav>
        )
    
}

export default Nav