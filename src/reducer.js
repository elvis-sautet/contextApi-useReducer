export const initialState = {
  basket: [],
};

export const getBasketTotals = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

      break;
    case "REMOVE_FROM_BASKET":
      // Logic for removing from the basket
      let newBasket = [...state.basket];
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        // Item exits in the basket remove it
        newBasket.splice(index, 1);
        console.log("removed");
      } else {
        console.warn(`cant remove item of ${action.id} as its not found`);
      }
      return {
        ...state,
        basket: newBasket,
      };

      break;
    case "PROCEED_TO_CHECKOUT":
      // Logic for removing from the basket
      let basketContainer = [...state.basket];
      basketContainer.splice(0, basketContainer.length);
      return {
        ...state,
        basket: basketContainer,
      };

      break;
    default:
      return state;
  }
}

export default reducer;
