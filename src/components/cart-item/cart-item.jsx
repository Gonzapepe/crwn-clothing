import React from 'react'
import './cart-item.scss'
import { ReactComponent as CartIcon } from '../../assets/shopping-bag.svg'
import { ToggleCartHidden } from '../../redux/cart/cart-actions'
import { connect } from 'react-redux'

const CartItem = ({ ToggleCartHidden }) => (
    <div className='cart-icon' onClick={ToggleCartHidden}>
        <CartIcon className='shopping-icon'/>
        <span className='item-count'>0</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    ToggleCartHidden: () => dispatch(ToggleCartHidden())
})

export default connect(null, mapDispatchToProps)(CartItem)