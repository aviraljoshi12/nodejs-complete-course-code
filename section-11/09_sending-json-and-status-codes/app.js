import express from "express";

const app = express();
const port = 4000;

app.get("/", (req, res) => {
  //Instead of sending JSON this way:
  // res.setHeader("Content-Type", "application/json");
  // res.end(JSON.stringify({ message: "Hello World!!" }));

  //We can send json as
  // res.json({ message: "Hello World!!" });

  //Also we can send status code directly as:
  res.status(201).json({ message: "Hello World!!" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
