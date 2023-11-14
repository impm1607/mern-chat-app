const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET || "my name is prachi ", {
    expiresIn: "30d",
  });
};

module.exports = generateToken;
