const auth = async (req, res, next) => {
  // TODO: verify JWT and attach user to request
  return res.status(501).json({ message: "Auth middleware not implemented" });
};

export default auth;
