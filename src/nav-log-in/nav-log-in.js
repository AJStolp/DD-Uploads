import React from 'react';
import TokenService from '../services/token-service';
import { Link } from 'react-router-dom';
import './nav-log-in.css';

class Nav extends React.Component {
    handleLogoutClick = () => {
        TokenService.clearAuthToken()
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
    // handleSubmitBasicAuth = e => {
    //     e.preventDefault();
    //     const { username, password } = e.target;

    //     TokenService.saveAuthToken(
    //         TokenService.makeBasicAuthToken(username.value, password.value)
    //     )

    //     username.value = ''
    //     password.value= ''
    // }



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
