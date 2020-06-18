import React from 'react';
import './sign-up.css';
import TokenService from '../services/token-service';
import AuthApiService from '../services/auth-api-service';

class SignIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
           error: null,
        }
    }
    static defaultProps = {
        onLoginSuccess: () => {}
}

    // onUsernameChange = async (user) => {
    //     user.preventDefault();
    //     await this.setState({
    //         username: user.target.value,
    //     })
    // }

    // onPasswordChange = async (password) => {
    //     password.preventDefault();
    //     await this.setState({
    //         password:password.target.value
    //     })
    // }

    handleSubmitJwtAuth = event => {
        event.preventDefault();

        const { username, password } = event.target;
        console.log(username.value, 'username')
        console.log(password.value, 'password')

        // TokenService.saveAuthToken(
        //     TokenService.makeBasicAuthToken(username.value, password.value)
        // )
        AuthApiService.postLogin({
            username: username.value,
            password: password.value,
        })
            .then(res => {
                console.log(res, 'hey I am res sign-in page!')
                username.value = ''
                password.value = ''
                TokenService.saveAuthToken(res.authToken)
                this.props.onLoginSuccess()
            })
            .catch(res => {
                this.setState({ error: null })
            })
    }

    render() {
        return (
            <div className='main-container'>
                <form className='sign-in' onSubmit={this.handleSubmitJwtAuth}>
                    <p htmlFor='email'>Enter Your Username:</p>
                    {/* <input onChange={(e) => this.onUsernameChange(e)}  type='text' required id='email' className='sign-in-inputs' placeholder='Username'></input> */}
                    <input name='username' type='text' required id='email' className='sign-in-inputs' placeholder='Username'></input>
                    <p htmlFor='password'>Enter Your Password:</p>
                    {/* <input onChange={(e) => this.onPasswordChange(e)} type='password' id='password' required className='sign-in-inputs' placeholder='Password'></input> */}
                    <input name='password' type='password' id='password' required className='sign-in-inputs' placeholder='Password'></input>
                    <button type='submit' className='landing-buttons child'>Sign In!</button>
                </form>
            </div>
        )
    }
}

export default SignIn