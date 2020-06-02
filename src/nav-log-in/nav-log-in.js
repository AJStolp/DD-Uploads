import React from 'react';
import { Link } from 'react-router-dom';
import './nav-log-in.css';
import TokenService from '../services/token-service';

class Nav extends React.Component {
    handleLogoutClick = () => {
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
                <Link to='/' className='log-out'>Register</Link>
                <Link to='/Sign-in' className='log-out'>Sign-in</Link>
            </div>

        )
    }



        render() {
            return (
                <nav className='nav-in-out'>
                   <ul>
                        <li>
                            <Link to='/sign-in' className='log-out'>Sign-In</Link>
                        </li>
                    </ul>
                    {TokenService.hasAuthToken() ? this.renderLogoutLink() : this.renderLoginLink()}
               </nav>
            )
        }
}
    
export default Nav
