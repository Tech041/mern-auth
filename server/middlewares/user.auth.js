import jwt from "jsonwebtoken";

const userAuth = async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return res.status(403).json({ message: "Please login" });
  }

  try {
    const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);
    if (tokenDecode.id) {
      req.body.userId = tokenDecode.id;
    }
    next();
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export default userAuth;
