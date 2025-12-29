// routes/authRoutes.js
import express from "express";
import passport from "passport";
import {forgotPasswordController, resetPasswordController  } from "../controllers/authController.js"


const router = express.Router();

// Login with Passport local strategy
router.post("/login", passport.authenticate("local"), (req, res) => {
  console.log("logged in user in backend")
  const { id, username, email, role } = req.user;
  res.json({ user: { id, username, email, role } });
});

// Check if user is authenticated
router.get("/check", (req, res) => {
  if (req.isAuthenticated()) {
    const { id, username, email, role } = req.user;
    res.json({ user: { id, username, email, role } });
  } else {
    res.status(401).json({ message: "Not authenticated" });
  }
});

// Logout
router.post("/logout", (req, res) => {
  req.logout(err => {
    if (err) return res.status(500).json({ error: "Logout failed" });
    res.json({ message: "Logged out successfully" });
  });
});

// forgot password

router.post("/forgot-password", forgotPasswordController);
router.put("/reset-password", resetPasswordController);

export default router;
