import React from 'react'

import './custombutton.scss'

const CustomButton = ({ children, inverted, isGoogleSignIn, ...otherProps }) => (
    <button className={` ${inverted ? 'google-sign-in' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
        {children}
    </button>
)

export default CustomButton