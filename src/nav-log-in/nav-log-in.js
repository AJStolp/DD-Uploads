import React from 'react';
import TokenService from '../services/token-service';
import { Link } from 'react-router-dom';
import './nav-log-in.css';
import { FaRegistered, FaSignInAlt } from 'react-icons/fa';

class Nav extends React.Component {
    handleLogoutClick = () => {
        TokenService.clearAuthToken()
        // window.location.reload(false);
    }
    renderLogoutLink() {
        return (
            <div>
                <Link onClick={this.handleLogoutClick} to='/' className='log-out'>Logout</Link>
            </div>
        )
    }
    renderLoginLink() {
        return (
            <div>
                <Link to='/' className='log-out signIn-register'>Register</Link>
                <Link to='/Sign-in' className='log-out '>Sign-in</Link>
            </div>

        )
    }
        render() {
            return (
                <nav className='nav-in-out'>
                   <ul className='nav-bar'>
                        {/* <li>
                            <Link to='/sign-in' className='log-out'>Sign-In</Link>
                        </li> */}
                    <FaRegistered className='registered-icon'/>
                    {TokenService.hasAuthToken() ? this.renderLogoutLink() : this.renderLoginLink()}
                    <FaSignInAlt className='sign-in-icon'/>
                    </ul>
               </nav>
            )
        }
}
    
export default Nav
