import { NavLink } from "react-router-dom";
import { useCart } from "../Providers/CartProvider";
import "./Navigation.css";

const Navigation = () => {
  const { cart } = useCart();
  return (
    <header className="mainNav">
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/cart">Cart {cart.length}</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
