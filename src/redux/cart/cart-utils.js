export const addItemToCart = (CartItems, cartItemToAdd) => {
    const existingCartItem = CartItems.find(CartItem => CartItem.id === cartItemToAdd.id)

    if(existingCartItem) {
        return CartItems.map(CartItem => 
            CartItem.id === cartItemToAdd.id
            ? {...CartItem, quantity: CartItem.quantity +1}
            :   CartItem
            )
    }

    return [ ...CartItems, { ...cartItemToAdd, quantity: 1 } ]
}

export const removeItemCart = (CartItems, cartItemToRemove) => {
    const existingCartItem = CartItems.find(cartItem => cartItem.id === cartItemToRemove.id)

    if(existingCartItem.quantity === 1) {
        return CartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }

    return CartItems.map(
        cartItem => cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity -1 }
        : cartItem
    )
}