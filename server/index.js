const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/api/get", (req, res) => {
  res.status(200).send("It works!");
});

app.listen(4050, () => console.log(`Jammin on 4050`));
