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