import { getCartTotal } from "../services/cartServices";
import { Item } from "../ts/items";

const baseURL = "http://localhost:5555/clone-f0897/us-central1/api";

export const getCreatePaymentUrl = (cart: Item[]) =>
  `${baseURL}/payments/create?total=${getCartTotal(cart) * 100}`; // strip expects payment in cents
