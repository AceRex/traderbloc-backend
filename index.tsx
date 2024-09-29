const express = require("express");
const PORT = 8080;

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the tradebloc Backend!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
