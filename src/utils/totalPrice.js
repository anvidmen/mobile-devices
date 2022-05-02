const calculateTotalPrice = cartItems => {
    return cartItems.reduce((totalItemsPrice, currentItem) =>
      totalItemsPrice + currentItem.totalPrice
    , 0)
}

export default calculateTotalPrice
