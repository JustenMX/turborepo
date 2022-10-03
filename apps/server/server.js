const express = require("express");
const morgan = require("morgan");

const app = express();
const port = process.env.PORT ?? 3000;

app.use(express.static("../client/dist"));
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
