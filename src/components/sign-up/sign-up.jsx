import React from 'react'

import CustomButton from '../custombutton/custombutton'
import FormInput from '../form-input/form-input'
import './sign-up.scss'
import { auth, createUserProfileDocument } from '../../firebase/firebase-utils' 

class SignUp extends React.Component {
    constructor(){
        super()

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault()
        const { email, password, confirmPassword, displayName } = this.state

        if(password !== confirmPassword) {
            alert('Las contraseñas no son iguales')
            return
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password)    

            await createUserProfileDocument(user, { displayName })

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        } catch (error) {
            console.error(error)            
        }   
        
    
    }

    handleChange = event => {
        const { name, value } = event.target

        this.setState({ [name]: value })
    }

    render(){
        const { displayName, email, password, confirmPassword } = this.state
        return(
            <div className='sign-up' >
                <h2 className='title' >Crear cuenta con email y contraseña</h2>
                <span> Crear cuenta con email y contraseña </span>
                <form className='sign-up-form' onSubmit={this.handleSubmit} >
                    <FormInput label='Nombre' type='text' onChange={this.handleChange} name='displayName' value={displayName} required />
                    <FormInput label='email' type='email' name='email' onChange={this.handleChange} value={email} required />
                    <FormInput label='contraseña' type='password' name='password' onChange={this.handleChange} value={password} required />
                    <FormInput label='Confirmar contraseña' type='password' name='confirmPassword' onChange={this.handleChange} value={confirmPassword} required />

                    <CustomButton type='submit' > REGISTRARSE </CustomButton>

                </form>
            </div>
        )
    }
}

export default SignUp