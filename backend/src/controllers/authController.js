import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { OAuth2Client } from "google-auth-library";
import User from "../models/User.js";

const googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "Name, email, and password are required." });
    }

    const normalizedEmail = email.toLowerCase().trim();
    const existingUser = await User.findOne({ email: normalizedEmail });
    if (existingUser) {
      return res.status(400).json({ message: "Email already in use." });
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const user = await User.create({
      name: name.trim(),
      email: normalizedEmail,
      passwordHash,
    });

    const token = jwt.sign(
      { _id: user._id, role: user.role },
      process.env.JWT_SECRET
    );

    const userSafe = user.toObject();
    delete userSafe.passwordHash;

    return res.status(201).json({ user: userSafe, token });
  } catch (error) {
    return res.status(400).json({ message: "Unable to register user." });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required." });
    }

    const normalizedEmail = email.toLowerCase().trim();
    const user = await User.findOne({ email: normalizedEmail });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials." });
    }

    const isMatch = await bcrypt.compare(password, user.passwordHash);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials." });
    }

    const token = jwt.sign(
      { _id: user._id, role: user.role },
      process.env.JWT_SECRET
    );

    const userSafe = user.toObject();
    delete userSafe.passwordHash;

    return res.status(200).json({ user: userSafe, token });
  } catch (error) {
    return res.status(400).json({ message: "Unable to login." });
  }
};

export const me = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-passwordHash");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json({ user });
  } catch (error) {
    console.error("Error in /me:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

export const googleLogin = async (req, res) => {
  try {
    const { idToken } = req.body;

    if (!idToken) {
      return res.status(400).json({ message: "idToken is required." });
    }

    const ticket = await googleClient.verifyIdToken({
      idToken,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    const googleId = payload?.sub;
    const email = payload?.email?.toLowerCase();
    const name = payload?.name;
    const avatar = payload?.picture;

    if (!googleId || !email) {
      return res.status(401).json({ message: "Invalid Google token." });
    }

    let user = await User.findOne({
      $or: [{ email }, { googleId }],
    });

    if (!user) {
      user = await User.create({
        googleId,
        name: name || "",
        email,
        avatar,
        role: "user",
        profileSetup: false,
      });
    } else if (!user.googleId) {
      user.googleId = googleId;
      if (!user.avatar && avatar) {
        user.avatar = avatar;
      }
      await user.save();
    }

    const token = jwt.sign(
      { _id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    const userSafe = user.toObject();
    delete userSafe.passwordHash;

    return res.status(200).json({ user: userSafe, token });
  } catch (error) {
    return res.status(401).json({ message: "Google login failed." });
  }
};