import * as functions from "firebase-functions";
import express, { Request, Response } from "express";
import cors from "cors";

// Config
const app = express();

// Middleware
app.use(cors({ origin: true }));
app.use(express.json());

// Routes
app.get("/", (req: Request, res: Response) => {
  res.send("hello");
});

// Listen
exports.api = functions.https.onRequest(app);
