import React from 'react';
import './sign-up.css';
import TokenService from '../services/token-service';
import AuthApiService from '../services/auth-api-service';

class SignIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
           error: "",
        }
    }
    static defaultProps = {
        onLoginSuccess: () => {}
    }
    handleSubmitJwtAuth = event => {
        event.preventDefault();

        const { username, password } = event.target;

        AuthApiService.postLogin({
            username: username.value,
            password: password.value,
        })
            .then(res => {
                username.value = ''
                password.value = ''
                TokenService.saveAuthToken(res.authToken)
                window.location.assign('/upload-videos')
                this.props.onLoginSuccess()
            })
            .catch(res => {
                this.setState({
                    error: res.error
                })
            })
    }

    render() {
        return (
            <div className='main-container'>
                <form className='sign-in border-gradient-purple' onSubmit={this.handleSubmitJwtAuth}>
                    <p htmlFor='email'>Enter Your Username:</p>
                    {/* <input onChange={(e) => this.onUsernameChange(e)}  type='text' required id='email' className='sign-in-inputs' placeholder='Username'></input> */}
                    <input name='username' type='text' required id='email' className='sign-in-inputs' placeholder='Username'></input>
                    <p htmlFor='password'>Enter Your Password:</p>
                    {/* <input onChange={(e) => this.onPasswordChange(e)} type='password' id='password' required className='sign-in-inputs' placeholder='Password'></input> */}
                    <input name='password' type='password' id='password' required className='sign-in-inputs' placeholder='Password'></input>
                    <button type='submit' className='landing-buttons child'>Sign In!</button>
                </form>
                <div className='alert'>
                    <p><strong>{this.state.error}</strong></p>
                </div>
            </div>
        )
    }
}

export default SignIn