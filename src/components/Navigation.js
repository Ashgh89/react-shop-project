import { NavLink } from "react-router-dom";
import style from "./Navigation.module.css";

const Navigation = () => {
  return (
    <header className={style.mainNav}>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/">Cart</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
