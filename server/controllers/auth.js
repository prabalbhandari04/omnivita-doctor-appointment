const jwt = require("jsonwebtoken");

// config from environment
const config = process.env;

// function to verify token 
const verifyToken = (req, res, next) => {
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"];

    // decode token
  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  // verify token
  try {
    const decoded = jwt.verify(token, config.TOKEN_KEY);
    req.user = decoded;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  // next middleware
  return next();
};

// export verifyToken
module.exports = verifyToken;