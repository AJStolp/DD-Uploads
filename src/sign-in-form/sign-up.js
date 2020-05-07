import React from 'react';
import './sign-up.css';

class SignIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email:'',
            password:'',
        }
    }

    onEmailChange = (email) => {
        email.preventDefault();
        this.setState({
            email:email.target.value,
        })
        console.log(this.state.email)
    }

    onPasswordChange = (password) => {
        password.preventDefault();
        this.setState({
            password:password.target.value
        })
        console.log(this.state.password)
    }
    render() {
        return (
            <div className='main-container'>
                <form className='sign-in'>
                    <label htmlFor='email'>Enter Your Email:</label>
                    <input onChange={(e) => this.onEmailChange(e)}  type='email' required id='email' className='landing-inputs child' placeholder='Email'></input>
                    <label htmlFor='password'>Enter Your Password:</label>
                    <input onChange={(e) => this.onPasswordChange(e)} type='password' id='password' required className='landing-inputs child' placeholder='Password'></input>
                    <button type='submit' className='landing-buttons child'>Sign In!</button>
                </form>
            </div>
        )
    }
}

export default SignIn