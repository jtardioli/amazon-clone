import { getCartTotal } from "../services/cartServices";
import { Item } from "../ts/items";

const baseURL = "http://localhost:5555/clone-f0897/us-central1/api";

export const getCreatePaymentUrl = (cart: Item[]) =>
  `${baseURL}/payment/create?total=${getCartTotal(cart) * 100}`; // stripe expects payment in cents
