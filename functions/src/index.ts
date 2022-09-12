import * as functions from "firebase-functions";
import express, { Request, Response } from "express";
import cors from "cors";
import Stripe from "stripe";

const stripe = new Stripe(String(process.env.STRIPE_SK), {
  apiVersion: "2022-08-01",
});

// Config
const app = express();

// Middleware
app.use(cors({ origin: "*" }));
app.use(express.json());

// Routes
app.get("/", (req: Request, res: Response) => {
  res.send("hello");
});

app.post("/payment/create", async (req: Request, res: Response) => {
  const total = Number(req.query.total);
  console.log(`Payment request recieved: ${total}`);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of currency
    currency: "usd",
  });
  res.status(201).send({ clientSecret: paymentIntent.client_secret });
});

// Listen
exports.api = functions.https.onRequest(app);
