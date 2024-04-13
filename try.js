const port = 3000,
  express = require("express"),
  app = express();

app.get("/", (req, res) => {
  res.send("welcome to home page");
});

app.post("/", function (req, res) {
  res.send("POST request to the homepage");
});

app.listen(port, () => {
  console.log(`the server running at ${port}`);
});
