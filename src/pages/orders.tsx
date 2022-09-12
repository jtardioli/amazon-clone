import {
  collection,
  DocumentData,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { NextPage } from "next";
import { useEffect, useState } from "react";

import { db } from "../config/firebase.config";
import { useStateValue } from "../contexts/StateProvider";
import Order, { OrderInterface } from "../components/products/order";

const Orders: NextPage = () => {
  const [{ cart, user }, dispatch] = useStateValue();

  const [orders, setOrders] = useState<{ id: string; data: OrderInterface }[]>(
    []
  );

  useEffect(() => {
    if (user) {
      const ordersRef = collection(db, `users/${user?.uid}/orders`);
      const q = query(ordersRef, orderBy("created", "desc"));

      onSnapshot(q, (snapshot) => {
        const snap = snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }));
        setOrders(snap as { id: string; data: OrderInterface }[]);
      });
    }
  }, []);
  console.log(orders);
  return (
    <main>
      <div>Your Orders</div>
      {orders.map((order) => (
        <Order key={order.id} order={order} />
      ))}
    </main>
  );
};

export default Orders;
