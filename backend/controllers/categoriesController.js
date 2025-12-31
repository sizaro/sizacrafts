import fs from "fs";
import path from "path";
import {
  fetchAllCategoriesModel,
  fetchCategoryByIdModel,
  createCategoryModel,
  updateCategoryModel,
  deleteCategoryModel,
} from "../models/categoriesModel.js";

// GET all categories
export const getAllCategories = async (req, res) => {
  try {
    const categories = await fetchAllCategoriesModel();
    res.json({ success: true, data: categories });
  } catch (err) {
    console.error("Error fetching categories:", err);
    res.status(500).json({ success: false, message: "Failed to fetch categories" });
  }
};

// GET single category by ID
export const getCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await fetchCategoryByIdModel(id);
    if (!category) {
      return res.status(404).json({ success: false, message: "Category not found" });
    }
    res.json({ success: true, data: category });
  } catch (err) {
    console.error("Error fetching category:", err);
    res.status(500).json({ success: false, message: "Failed to fetch category" });
  }
};

// CREATE category
export const createCategory = async (req, res) => {
  try {
    const { name, description } = req.body;

    const category_image = req.file
      ? `/uploads/images/${req.file.filename}`
      : null;

    const data = { name, description, category_image };
    console.log("data in the controller for category", data)

    const newCategory = await createCategoryModel(data);
    res.status(201).json({ success: true, data: newCategory });
  } catch (err) {
    console.error("Error creating category:", err);
    res.status(500).json({ success: false, message: "Failed to create category" });
  }
};

// UPDATE category
export const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;

    if (!id) {
      return res.status(400).json({ success: false, message: "Missing category ID" });
    }

    const existingCategory = await fetchCategoryByIdModel(id);
    if (!existingCategory) {
      return res.status(404).json({ success: false, message: "Category not found" });
    }

    let category_image = existingCategory.image_url;

    if (req.file && req.file.filename) {
      if (existingCategory.image_url) {
        const oldPath = path.join(process.cwd(), existingCategory.image_url);
        if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath);
      }
      category_image = `/uploads/images/${req.file.filename}`;
    }

    const data = { name, description, category_image };
    console.log("data in the controller for updating category", data)
    const updatedCategory = await updateCategoryModel(id, data);

    res.json({ success: true, data: updatedCategory });
  } catch (err) {
    console.error("Error updating category:", err);
    res.status(500).json({ success: false, message: "Failed to update category" });
  }
};

// DELETE category
export const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await deleteCategoryModel(id);
    if (!deleted) {
      return res.status(404).json({ success: false, message: "Category not found" });
    }
    res.json({ success: true, message: "Category deleted successfully" });
  } catch (err) {
    console.error("Error deleting category:", err);
    res.status(500).json({ success: false, message: "Failed to delete category" });
  }
};
