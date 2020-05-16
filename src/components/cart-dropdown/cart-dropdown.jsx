import React from 'react'

import './cart-dropdown.scss'
import CustomButton from '../custombutton/custombutton'
import CartItem from '../cart-item/cart-item'
import { selectCartItems } from '../../redux/cart/cart-selectors'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom'
import { ToggleCartHidden } from '../../redux/cart/cart-actions'


const CartDropDown = ({ cartItems, history, dispatch }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>

        {
            cartItems.length ? ( 
               cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
            ) : (
                <span className='empty-message' >Your cart is empty</span>
            )
        }
    </div>
    <CustomButton onClick={ () => {
        history.push('/checkout')
        dispatch(ToggleCartHidden())
        }} > GO TO CHECKOUT </CustomButton>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropDown))