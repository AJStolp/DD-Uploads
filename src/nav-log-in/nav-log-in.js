import React from 'react';
import { Link } from 'react-router-dom';
import './nav-log-in.css';

function Nav (props) {
        
        return (
            <nav>
               <ul>
                    <li>
                        <Link to='/Sign-in' onClick={props.hideShowNav} className='nav-log-in'>Log-In</Link>
                    </li>
                </ul>
           </nav>
        )
    
}

export default Nav