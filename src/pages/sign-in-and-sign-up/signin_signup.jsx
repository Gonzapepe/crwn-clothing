import React from 'react'

import './signin_signup.scss'
import SignIn from '../../components/sign-in/signin'
import SignUp from '../../components/sign-up/sign-up'

const SignInAndSignUp = () => (
    <div className='sign-in-and-sign-up'> 
        <SignIn />
        <SignUp />
    </div>
)

export default SignInAndSignUp