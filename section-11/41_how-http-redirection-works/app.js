import express from "express";

const app = express();

app.get("/directory", (req, res) => {
  // res.set({
  //   location: "/folder",
  // });
  // res.status(301).end();

  //With express method:
  //automatically sets status and location
  res.redirect("/folder");
});

app.get("/folder", (req, res) => {
  res.json({
    name: "images",
    files: ["Node.png", "js.webp"],
  });
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
