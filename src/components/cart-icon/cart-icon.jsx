import React from 'react'
import './cart-item.scss'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { selectCartItemsCount } from '../../redux/cart/cart-selectors'
import { ToggleCartHidden } from '../../redux/cart/cart-actions'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

const CartIcon = ({ ToggleCartHidden, itemCount }) => (
    <div className='cart-icon' onClick={ToggleCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{itemCount}</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    ToggleCartHidden: () => dispatch(ToggleCartHidden())
})

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)