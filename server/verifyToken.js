const jwt = require("jsonwebtoken");

const verify = (req, res, next) => {
  const authHeader = req.headers.token;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.SECRET_KEY, (err, admin) => {
      if (err) res.status(404).json("Invalid Token");
      req.admin = admin;
      next();
    });
  } else {
    return res.status(404).json("You are not authenticated!");
  }
};

module.exports = verify;
