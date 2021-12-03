const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("API for Birthday Wishes");
});

app.get("/api/wishes/:name", (req, res) => {
  res.send(`Happy Birthday, ${req.params.name}`);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening in port ${port}`));
