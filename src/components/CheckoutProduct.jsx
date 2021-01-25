import React, { useEffect } from "react";
import { convertNumberWithCommas } from "./Cart";
import { useStateValue } from "../StateProvider";

function CheckoutProduct({ img, title, price, rating, id }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = (id) => {
    // Remove item from basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img src={img} alt="" />
      <div className="checkoutProduct_info">
        <h2>{title}</h2>
        <div className="checkoutProduct__price">
          <span>Ksh</span>
          <span>{convertNumberWithCommas(price)}</span>
        </div>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p key={_}>⭐</p>
            ))}
        </div>
        <button onClick={() => removeFromBasket(id)} className="remove">
          Remove from Basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
