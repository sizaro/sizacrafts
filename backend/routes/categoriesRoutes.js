import express from "express";
import upload from "../middleware/upload.js"; // handles file uploads
import {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../controllers/categoriesController.js";

const router = express.Router();

// GET all categories
router.get("/", getAllCategories);

// GET single category by id
router.get("/:id", getCategoryById);

// POST create a new category with optional image upload
router.post("/", upload.single("category_image"), createCategory);

// PUT update category by id with optional image upload
router.put("/:id", upload.single("category_image"), updateCategory);

// DELETE category by id
router.delete("/:id", deleteCategory);

export default router;
