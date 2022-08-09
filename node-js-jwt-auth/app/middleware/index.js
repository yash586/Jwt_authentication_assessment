const authJwt = require("../middleware/authJWT");
const verifySignUp = require("./verifySignUp");

module.exports = {
  authJwt,
  verifySignUp,
};
