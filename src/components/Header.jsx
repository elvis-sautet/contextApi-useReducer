import React from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Cart from "./Cart";
import { ShoppingBasket } from "@material-ui/icons";
import { useStateValue } from "../StateProvider";

function Header() {
  const [{ basket }] = useStateValue();
  console.log(basket);
  return (
    <nav className="header__navigation">
      <div className="header">
        <Link to="/" className="link">
          <h2>JSstore</h2>
        </Link>
        <div className="header__basket">
          <Link to="/Cart" className="link header__basket">
            <ShoppingCartIcon className="ShoppingCartIcon" />
            <p>{basket?.length}</p>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
