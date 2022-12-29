const express = require("express");
require("dotenv").config();

const app = express();

app.use(express.static("public"));

app.use("/api/", require("./routes/index"));

app.listen(process.env.PORT, () => {
  console.log(`Server running on ${process.env.PORT}`);
});
