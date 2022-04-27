import express, { json } from "express";
const app = express();
import dotenv from "dotenv";
import connectionDB from "./config/db.js";
import productRouter from "./routes/product.js";
import userRouter from "./routes/user.js";
import orderRouter from "./routes/order.js";
import { notFound, errorHandle } from "./middleware/errorMiddleware.js";

dotenv.config();
connectionDB();

app.use(express.json());

app.use("/api/products", productRouter);
app.use("/api/users", userRouter);
app.use("/api/order", orderRouter);

app.get("/api/config/paypal", (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID);
});

app.use(notFound);
app.use(errorHandle);

const port = process.env.PORT | 5000;

app.listen(port, () => {
  console.log(`Server running or port ${port} ${process.env.NODE_ENV}`);
});
