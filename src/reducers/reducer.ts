import { State } from "../contexts/StateProvider";
import { Item } from "../ts/items";

import { User } from "firebase/auth";
import { stat } from "fs";

export interface Action {
  type: ActionType;
  item?: Item;
  id?: number;
  user?: User | null;
}

export enum ActionType {
  ADD_TO_CART = "ADD_TO_CART",
  REMOVE_FROM_CART = "REMOVE_FROM_CART",
  SET_USER = "SET_USER",
  EMPTY_CART = "EMPTY_CART",
}

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case ActionType.ADD_TO_CART:
      if (!action.item) break;
      return {
        ...state,
        cart: [...state.cart, action.item],
      };
    case ActionType.REMOVE_FROM_CART:
      const index = state.cart.findIndex((item) => item.id === action.id);
      let newCart = [...state.cart];
      if (index < 0) {
        console.warn(
          `Can't remove product (id: ${action.id}): as its not in the cart!`
        );
        return state;
      }
      newCart.splice(index, 1);
      return { ...state, cart: newCart };
    case ActionType.SET_USER:
      return { ...state, user: action.user };
    case ActionType.EMPTY_CART:
      return { ...state, cart: [] };
    default:
      return state;
  }
  return state;
};
