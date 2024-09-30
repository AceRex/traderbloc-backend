import express from "express";
import router from "./api/auth.js";
import { errorHandler, notFound } from "./middleware/middleware.js";
import connectDB from "./db/connect.js";

const port = process.env.PORT || 5090;
const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res, next) =>
  res.json("You are now connected to the server")
);
app.use("/api/user", router);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`listening on ${port}`));
