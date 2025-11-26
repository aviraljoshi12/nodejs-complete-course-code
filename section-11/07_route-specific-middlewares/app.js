import express from "express";

const app = express();
const port = 4000;

// app.use("/users", (req, res, next) => {
//   res.send("first middleware");
// });

app.use(express.json());

app.use("/admin", (req, res, next) => {
  if (req.body.password === "secret") {
    next();
  } else {
    res.end("Invalid Credentials");
  }
});

app.post("/admin", (req, res) => {
  res.end("Hello Admin");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
