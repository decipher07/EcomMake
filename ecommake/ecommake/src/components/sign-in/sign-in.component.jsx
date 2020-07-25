import React from 'react'

import './sign-in.styles.scss'

class SignIn extends React.Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({email:'', password: ''})
    }

    handleChange = event => {
        const {value, name } = event.target;

        this.setState({ [name] :  value })
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>Already Have An Account</h2>
                <span>Sign In With Your Email And Password</span>

                <form onSubmit={this.handleSubmit}>
                    <input name="email" type="email" onChange={this.handleChange} value={this.state.email} required />
                    <label>Email</label>
                    <input name="password" type="password" onChange={this.handleChange} value={this.state.password} required />
                    <label>Password</label>

                    <input type='submit' value='Submit Form' />
                </form>
            </div>
        )
    }
}

export default SignIn