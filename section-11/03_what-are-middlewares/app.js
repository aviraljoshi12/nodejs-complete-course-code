import express from "express";

const app = express();

const port = 4000;

//Two types of Middlewares:
app.get(
  "/",
  (req, res, next) => {
    // Request Handler Middlewares - 3 params

    try {
      console.log("Running Middleware 1");
      // throw new Error("Error!");
      res.write("Hello World1!");
      next();
    } catch (err) {
      next("hii");
    }
  },
  (err, req, res, next) => {
    // Error Handler Middlewares - 4 params

    //If we send something inside next() which is a truthy value, then this error middleware will get in action
    //Or any error is thrown on our some current middleware
    console.log("Running Error Middleware");
    res.end("Error Found");
  },
  (req, res) => {
    // Request Handler Middlewares - 2 params
    console.log("Running Middleware 2");
    res.end("Hello World2!");
  }
);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
