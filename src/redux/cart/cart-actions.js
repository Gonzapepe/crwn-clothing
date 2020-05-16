import CartActionTypes from './cart-types'

export const ToggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_STATE
})

export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
})

export const removeItem = item => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
})

export const clearCartItem = item => ({
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
})