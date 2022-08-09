const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./app/models");

const Role = db.role;
// db.sequelize.sync();
var corsOption = {
  origin: "http://localhost:3306",
};

app.use(cors(corsOption));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to yash application." });
});

require("./app/routes/auth.routes")(app);
require("./app/routes/user.routes")(app);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

// function initial() {
//   Role.create({
//     id: 1,
//     name: "user",
//   });
//   Role.create({
//     id: 2,
//     name: "moderator",
//   });
//   Role.create({
//     id: 3,
//     name: "admin",
//   });
// }
// return initial();
