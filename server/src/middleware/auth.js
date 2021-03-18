const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

const auth = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ msg: "no token ,Unauthorization user" });
  const isCustomAuth = token?.length < 500; // google token is greater than 500 character

  try {
    if (token && isCustomAuth) {
      const decoded = await jwt.verify(token, JWT_SECRET);
      req.userId = decoded.id;
    } else {
      const decoded = jwt.decode(token);
      req.userId = decoded?.sub;
      return res.json(decoded);
    }

    next();
  } catch (error) {
    res.status(400).json({ msg: "Token is not Valid" });
  }
};

module.exports = auth;

// try {
//   const decoded = await jwt.verify(token, JWT_SECRET);
//   req.userId = decoded.id;
//   next();
// } catch (error) {
//   res.status(400).json({ msg: "Token is not Valid" });
// }
