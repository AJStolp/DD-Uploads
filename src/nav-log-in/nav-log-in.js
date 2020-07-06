import React from "react";
import TokenService from "../services/token-service";
import { Link } from "react-router-dom";
import "./nav-log-in.css";

class Nav extends React.Component {
	handlePageRefresh = () => {
		window.location.reload();
	};

	handleLogoutClick = () => {
		TokenService.clearAuthToken();
		this.handlePageRefresh();
	};

	renderLogoutLink() {
		return (
			<div>
				<Link
					onClick={this.handleLogoutClick}
					id='txt'
					to='/Sign-up'
					className='log-out'
				>
					Logout
				</Link>
			</div>
		);
	}
	renderLoginLink() {
		return (
			<div>
				<Link to='/' className='log-out signIn-register border'>
					Register
				</Link>
				<Link to='/Sign-in' className='log-out '>
					Sign-in
				</Link>
			</div>
		);
	}
	render() {
		return (
			<nav className='nav-in-out'>
				<ul className='nav-bar'>
					{/* <li>
                            <Link to='/sign-in' className='log-out'>Sign-In</Link>
                        </li> */}
					{TokenService.hasAuthToken()
						? this.renderLogoutLink()
						: this.renderLoginLink()}
				</ul>
			</nav>
		);
	}
}

export default Nav;
