require("dotenv/config");
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const Card = require("./models/card.model");
const cardRoutes = require("./routes/card.routes");
// Connect to DB
connectDB();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send("Hello TheWebDev");
});

app.use("/dating/cards", cardRoutes);

app.listen(port, () => {
  console.log(`Server is up on PORT: ${port}`);
});
