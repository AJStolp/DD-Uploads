import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    render() {
        return (
           <nav>
               <ul>
                    <li>
                        <Link to='/Sign-in'>Log-In</Link>
                        <Link to='/'>Sign Up Page</Link>
                    </li>
                </ul>
           </nav>
        )
    }
}

export default Nav