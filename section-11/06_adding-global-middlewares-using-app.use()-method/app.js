import express from "express";

const app = express();
const port = 4000;

// app.use((req, res, next) => {
//   req.on("data", (chunk) => {
//     const reqBody = JSON.parse(chunk.toString());
//     req.body = reqBody;
//     // console.log(reqBody);
//     next();
//   });
// });

// Instead of doing all above app.use() code we can directly do
// Inside of req.body it sets the data we are getting in body, its more efficent, and should be used for production ready apps
// What express.json returns is a middleware
app.use(express.json());

app.get("/", (req, res) => {
  console.log(req.url);
  console.log(req.route.path);
  res.end("Home Route");
});

app.get("/user", (req, res) => {
  console.log(req.url);
  res.end("Aviral");
});

app.post("/user", (req, res) => {
  console.log(req.body);
  res.end("Post Aviral");
});

app.get("/login", (req, res, next) => {
  console.log(req.url);
  res.end("Logged In");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
