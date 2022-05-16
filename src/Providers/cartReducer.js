const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const updatedCart = [...state.cart];
      const updatedItemIndex = updatedCart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (updatedItemIndex < 0) {
        updatedCart.push({ ...action.payload, quantity: 1 });
        //ODER-------------
        // return {
        //   ...state,
        //   cart: [...state.cart, { ...action.payload, quantity: 1 }],
        // };
      } else {
        const updatedItem = { ...updatedCart[updatedItemIndex] };
        updatedItem.quantity++;
        updatedCart[updatedItemIndex] = updatedItem;
      }
      return { ...state, cart: updatedCart };
    default:
      return state;
  }
};

export default cartReducer;
// The findIndex() method returns the index of the first element in the array that satisfies the provided
// testing function. Otherwise, it returns -1, indicating that no element passed the test.