import jwt from "jsonwebtoken";

const userProfileAuth = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return res.status(403).json({ message: "Please login" });
  }

  try {
    const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);
    if (tokenDecode.id) {
      req.user = { id: tokenDecode.id };
    }
    next();
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

export default userProfileAuth;
