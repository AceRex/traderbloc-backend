const express = require("express");
// @ts-ignore
const connectDB = require("./db/connect.tsx");
const PORT = 8080;

const app = express();

connectDB();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the tradebloc Backend!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
