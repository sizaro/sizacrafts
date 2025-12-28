import express from "express";
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

// POST create a new category
router.post("/", createCategory);

// PUT update category by id
router.put("/:id", updateCategory);

// DELETE category by id
router.delete("/:id", deleteCategory);

export default router;
