import React from 'react';
import { Link } from 'react-router-dom';
import './nav-sign-up.css';

function NavSignUp (props) {
        
        return (
            <nav className='list-nav'>
               <ul>
                    <li>
                        <Link to='/' onClick={props.hideShowNav} className='sign-up-link'>Sign Up Page</Link>
                        {/* <Link to='/upload-videos' className='upload-videos sign-up-link'>Upload Videos</Link> */}
                    </li>
                </ul>
           </nav>
        )
    
}

export default NavSignUp