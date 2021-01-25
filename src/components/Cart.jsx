import React from "react";
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

export function convertNumberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function Cart() {
  const [{ basket }] = useStateValue();
  return (
    <div className="cart">
      <div>
        <img
          className="cart__add"
          src="https://ke.jumia.is/cms/2021/W03/JG/STB/KE_Cross_JG_Live_0121_STB.gif"
          alt=""
        />
        {basket?.length === 0 ? (
          <div>
            <h2>Your shopping Basket is empty</h2>
          </div>
        ) : (
          <div className="checkout">
            <h2>Your shopping Basket</h2>
            {/* list of check out products */}
            {basket.map((item) => (
              <CheckoutProduct
                key={item.id}
                id={item.id}
                title={item.title}
                rating={item.rating}
                price={item.price}
                img={item.img}
              />
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Cart;
