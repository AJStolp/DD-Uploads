import React from 'react';
import './sign-up.css';
import TokenService from '../services/token-service';

class SignIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
        }
    }
    static defaultProps = {
        onLoginSuccess: () => {}
}

    onUsernameChange = async (user) => {
        user.preventDefault();
        await this.setState({
            username: user.target.value,
        })
        console.log(this.state.username)
    }

    onPasswordChange = async (password) => {
        password.preventDefault();
        await this.setState({
            password:password.target.value
        })
        console.log(this.state.password)
    }

    handleFormSubmit = (submit) => {
        submit.preventDefault();

        const { username, password } = submit.target;

        TokenService.saveAuthToken(
            TokenService.makeBasicAuthToken(username, password)
        )
        this.props.onLoginSuccess();
    }

    render() {
        return (
            <div className='main-container'>
                <form className='sign-in' onSubmit={submit => this.handleFormSubmit(submit)}>
                    <p htmlFor='email'>Enter Your Username:</p>
                    <input onChange={(e) => this.onUsernameChange(e)}  type='text' required id='email' className='sign-in-inputs' placeholder='Username'></input>
                    <p htmlFor='password'>Enter Your Password:</p>
                    <input onChange={(e) => this.onPasswordChange(e)} type='password' id='password' required className='sign-in-inputs' placeholder='Password'></input>
                    <button type='submit' className='landing-buttons child'>Sign In!</button>
                </form>
            </div>
        )
    }
}

export default SignIn