import jwt from "jsonwebtoken";

const verifyJWT = async (req, res, next) => {
  let { authorization } = req.headers;
  console.log("authorization", authorization);
  authorization = authorization.split(" ")[1];
  const decodedJWT = jwt.decode(authorization);
  if (!decodedJWT) {
    res.status(403).json({ message: "Unauthorized access" });
  }
  console.log(decodedJWT);
  req.userId = decodedJWT.id;
  next();
};

export { verifyJWT };
