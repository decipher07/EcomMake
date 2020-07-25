import React from 'react'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import {signInWithGoogle} from '../../firebase/firebase.utils'

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

        this.setState({ [name] :  value})
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>Already Have An Account</h2>
                <span>Sign In With Your Email And Password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="email" handleChange={this.handleChange} label="email" value={this.state.email} required />
                    <FormInput name="password" type="password" handleChange={this.handleChange} label="password" value={this.state.password} required />

                    <CustomButton type='submit' >
                        SIGN IN
                    </CustomButton>
                    <CustomButton  onClick={signInWithGoogle}>
                        {' '}
                        SignIn With Google {' '}
                    </CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn