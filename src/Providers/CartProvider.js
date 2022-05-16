import { createContext, useContext, useReducer } from "react";
import cartReducer from "./cartReducer";

const CartContext = createContext();
const CartContextDispatcher = createContext();

const initialState = {
  cart: [],
  total: 0,
};

const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialState);
  return (
    <CartContext.Provider value={cart}>
      <CartContextDispatcher.Provider value={dispatch}>
        {children}
      </CartContextDispatcher.Provider>
    </CartContext.Provider>
  );
};

export default CartProvider;

// Now that's our Context component
// and i want to have it in my all component
// So go to app.js and ... see yourself 😋
//--------------------------------------------
// Custom hook

export const useCart = () => useContext(CartContext);

export const useCarActions = () => useContext(CartContextDispatcher);
