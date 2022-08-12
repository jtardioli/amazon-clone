import { getCartTotal } from "../services/cartServices";
import { Item } from "../ts/items";

const baseURL = "...";

export const getCreatePaymentUrl = (cart: Item[]) =>
  `${baseURL}/payments/create?total=${getCartTotal(cart) * 100}`; // strip expects payment in cents
