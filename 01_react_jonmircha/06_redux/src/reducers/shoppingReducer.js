import {
  ADD_TO_CART,
  CLEAR_CART,
  REMOVE_ALL_FROM_CART,
  REMOVE_ONE_FROM_CART,
} from "../types";

const shoppingInitialState = {
  products: [
    { id: 1, name: "Producto 1", price: 100 },
    { id: 2, name: "Producto 2", price: 200 },
    { id: 3, name: "Producto 3", price: 300 },
    { id: 4, name: "Producto 4", price: 400 },
    { id: 5, name: "Producto 5", price: 500 },
  ],
  cart: [],
  resultOfCart: 0,
};

export default function shoppingReducer(state = shoppingInitialState, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      let newItem = state.products.find(
        (product) => product.id === action.payload
      );

      let itemInCart = state.cart.find((item) => item.id === newItem.id);

      return itemInCart
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === newItem.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
            resultOfCart: state.resultOfCart + newItem.price,
          }
        : {
            ...state,
            cart: [
              ...state.cart,
              {
                ...newItem,
                quantity: 1,
              },
            ],
            resultOfCart: state.resultOfCart + newItem.price,
          };
    }
    case REMOVE_ONE_FROM_CART: {
      let itemToDel = state.cart.find(
        (product) => product.id === action.payload
      );

      let cartFiltered = state.cart.filter(
        (product) => product.id !== itemToDel.id
      );

      return itemToDel.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === itemToDel.id
                ? {
                    ...item,
                    quantity: item.quantity - 1,
                  }
                : item
            ),
            resultOfCart: state.resultOfCart - itemToDel.price,
          }
        : {
            ...state,
            cart: [...cartFiltered],
            resultOfCart: state.resultOfCart - itemToDel.price,
          };
    }
    case REMOVE_ALL_FROM_CART: {
      let itemsToDel = state.cart.find(
        (product) => product.id === action.payload
      );

      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== itemsToDel.id),
        resultOfCart:
          state.resultOfCart - itemsToDel.price * itemsToDel.quantity,
      };
    }
    case CLEAR_CART:
      return shoppingInitialState;

    default:
      return state;
  }
}
