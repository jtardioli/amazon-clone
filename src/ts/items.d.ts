import { URL } from "./utils";

export interface Item {
  id: number;
  title: string;
  img: URL;
  price: number;
  rating: number;
}
