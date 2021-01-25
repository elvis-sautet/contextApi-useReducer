import { Button } from "@material-ui/core";
import React from "react";
import CurencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider";
import { getBasketTotals } from "../reducer";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  console.log(basket);
  const proceedCheckOut = () => {
    alert("thank you for your purchase!");
    dispatch({
      type: "PROCEED_TO_CHECKOUT",
      basket: basket,
    });
  };
  return (
    <div className="subtotal">
      <CurencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} Items): <strong>{`${value}`}</strong>
            </p>
          </>
        )}
        decimalScale={2}
        value={getBasketTotals(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={" Ksh "}
      />
      <Button
        onClick={proceedCheckOut}
        size="small"
        variant="contained"
        color="primary"
      >
        Proceed to Checkout
      </Button>
    </div>
  );
}

export default Subtotal;
