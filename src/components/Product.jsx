import React, { useEffect } from "react";
import { useStateValue } from "../StateProvider";
import { convertNumberWithCommas } from "./Cart";

function Product({ id, img, title, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // Add item to basket

    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        img,
        title,
        price,
        rating,
      },
    });
  };

  return (
    <div className="productt">
      <div className="product">
        <h3>{title}</h3>
        <div className="price">
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
        <img src={img} alt="" />
      </div>
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}

export default Product;
