const express = require("express");
const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/get", (req, res) => {
  res.send("hyunsun");
});

app.post("/post", (req, res) => {
  const postText = req.body.postText;
  res.send(postText);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
