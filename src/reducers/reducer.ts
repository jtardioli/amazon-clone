import { State } from "../contexts/StateProvider";
import { Item } from "../ts/items";

export interface Action {
  type: ActionType;
  item?: Item;
  itemId?: number;
}

export enum ActionType {
  ADD_TO_CART = "ADD_TO_CART",
  REMOVE_FROM_CART = "REMOVE_FROM_CART",
}

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case ActionType.ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.item],
      };
    case ActionType.REMOVE_FROM_CART:
      const index = state.cart.findIndex((item) => {
        item.id = action.itemId;
      });

      let newCart = structuredClone(state.cart);

    default:
      return state;
  }
};
