import {
  ADD_CART,
  DECREMENT_COST,
  INCREMENT_COST,
  REMOVE_CART,
} from "./app.actions";

// heplers
import { calcPrice } from "../utils/calcPrice";
const items = localStorage.getItem('newCarts') !== null ? JSON.parse(localStorage.getItem('newCarts')) : []

// initialState
const initialState = {
  // carts: [],
  carts: items,
  cost: 0,
};

export function appReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_CART: {
      let tempProductItem = { ...payload, quatity: 1 };
      state.carts.push(tempProductItem);

      const cost = calcPrice(state.carts);
      const newCarts = [...state.carts].map(item => ({...item }));
      localStorage.setItem('newCarts',JSON.stringify(newCarts))
      return {
        ...state,
        // carts: state.carts,
        carts: newCarts,
        cost: cost,
      };
      // const newCarts = [...state.carts, payload].map(item => ({...item, quatity: 1 }));
      // const cost = calcPrice(newCarts)
      // return {
      //   ...state,
      //   carts: newCarts,
      //   cost: cost, 
      // }
    }

    case REMOVE_CART: {
      const newCarts = [...state.carts];
      const index = newCarts.findIndex((item) => item.id === payload);
      newCarts.splice(index, 1);
      const cost = calcPrice(newCarts);
      localStorage.setItem('newCarts',JSON.stringify(newCarts))
      return {
        ...state,
        carts: newCarts,
        cost,
      };
    }

    case INCREMENT_COST: {
      const newCarts = [...state.carts];
      const index = newCarts.findIndex((item) => item.id === payload);
      newCarts[index].quatity += 1;
      const cost = calcPrice(newCarts);
      localStorage.setItem('newCarts',JSON.stringify(newCarts))
      return {
        ...state,
        carts: newCarts,
        cost,
      };
    }

    case DECREMENT_COST: {
      const newCarts = [...state.carts];
      const index = newCarts.findIndex((item) => item.id === payload);
      newCarts[index].quatity -= 1;
      const cost = newCarts.reduce(
        (acc, cart) => (acc += cart.price * cart.quatity),
        0
      ); // 208.97

      // remove item if quatity < 1
      if (newCarts[index].quatity < 1) {
        newCarts.splice(index, 1);
      }
      localStorage.setItem('newCarts',JSON.stringify(newCarts))
      return {
        ...state,
        carts: newCarts,
        cost,
      };
    }

    default:
      return state;
  }
}
