const admin = async (req, res, next) => {
  // TODO: check admin role/permissions
  return res.status(501).json({ message: "Admin middleware not implemented" });
};

export default admin;
