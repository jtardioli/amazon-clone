import { Item } from "../ts/items";

export const getCartTotal = (cart: Item[]): number => {
  return cart?.reduce((amount, item) => item.price + amount, 0);
};
