const express = require("express");
const cors = require("cors");
const UserRoute = require("./routes/UserRoute");
const rooms = ["General", "Technology", "Anime", "Privated"];
const path = require("path");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

app.use("/users", UserRoute);

//config env
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "backend/config/config.env" });
}

app.get("/rooms", (req, res) => {
  res.json(rooms);
});

//production;

app.use(express.static(path.join(__dirname, "../frontend/build")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
});

module.exports = app;
