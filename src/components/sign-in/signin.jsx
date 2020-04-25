import React, { Component } from 'react'

import './signin.scss'
import FormInput from '../form-input/form-input'
import CustomButton from '../custombutton/custombutton'
import { signInWithGoogle } from '../../firebase/firebase-utils'
import { auth } from '../../firebase/firebase-utils'

class SignIn extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password:''
        }
    }


handleSubmit = async event => {
    event.preventDefault()
        
    const { email, password } = this.state
    try {
        
        

        await auth.createUserWithEmailAndPassword(email, password)
        
        this.setState({ email: '', password: '' })

    } catch (error) {
        console.error(error)
    }

    
}

handleChange = event => {
    const { name, value } = event.target

    this.setState({ [name]: value })
}



render(){

    return(
        <div className='sign-in'>
            <h1> Ya tengo una cuenta </h1>
            <span>Iniciar sesión con tu mail y contraseña</span>

            <form onSubmit={this.handleSubmit} >
                <FormInput handleChange={this.handleChange} type='email' name='email' value={this.state.email} label='email' required  />

                <FormInput handleChange={this.handleChange} name='password' type='password' value={this.state.password} label='password' required />

                <div className='buttons'>
                <CustomButton type='submit'> INICIAR SESIÓN </CustomButton>
                <CustomButton onClick={signInWithGoogle} isGoogleSignIn > INICIAR SESIÓN CON GOOGLE </CustomButton>
                </div>
            </form>
        </div>
    )
}

}

export default SignIn