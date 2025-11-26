import express from "express";

const app = express();
const PORT = 4000;

app.use(express.static("public"));

app.get("/api", (req, res) => {
  console.log(req.headers.origin);
  res.set("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
  res.json({ message: "Hello, world get!" });
});

app.post("/api", (req, res) => {
  res.json({ message: "Hello, world post!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
