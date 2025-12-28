import fs from "fs";
import path from "path";
import {
  fetchAllProductsModel,
  fetchProductByIdModel,
  createProductModel,
  updateProductModel,
  deleteProductModel,
  fetchProductsByCategoryModel
} from "../models/productsModel.js";

// GET all products
export const getAllProducts = async (req, res) => {
  try {
    const products = await fetchAllProductsModel();
    res.json({ success: true, data: products });
  } catch (err) {
    console.error("Error fetching products:", err);
    res.status(500).json({ success: false, message: "Failed to fetch products" });
  }
};

// GET single product by ID
export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await fetchProductByIdModel(id);
    if (!product) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }
    res.json({ success: true, data: product });
  } catch (err) {
    console.error("Error fetching product:", err);
    res.status(500).json({ success: false, message: "Failed to fetch product" });
  }
};

// CREATE product
export const createProduct = async (req, res) => {
  try {
    const { name, description, category_id, price } = req.body;

    const product_image = req.file
      ? `/uploads/images/${req.file.filename}`
      : null;

    const data = { name, description, category_id, price, product_image };

    const newProduct = await createProductModel(data);
    res.status(201).json({ success: true, data: newProduct });
  } catch (err) {
    console.error("Error creating product:", err);
    res.status(500).json({ success: false, message: "Failed to create product" });
  }
};

// UPDATE product
export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, category_id, price } = req.body;

    if (!id) {
      return res.status(400).json({ success: false, message: "Missing product ID" });
    }

    const existingProduct = await fetchProductByIdModel(id);
    if (!existingProduct) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }

    let product_image = existingProduct.product_image;

    if (req.file && req.file.filename) {
      if (existingProduct.product_image) {
        const oldPath = path.join(process.cwd(), existingProduct.product_image);
        if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath);
      }
      product_image = `/uploads/images/${req.file.filename}`;
    }

    const data = { name, description, category_id, price, product_image };
    const updatedProduct = await updateProductModel(id, data);

    res.json({ success: true, data: updatedProduct });
  } catch (err) {
    console.error("Error updating product:", err);
    res.status(500).json({ success: false, message: "Failed to update product" });
  }
};

// DELETE product
export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await deleteProductModel(id);
    if (!deleted) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }
    res.json({ success: true, message: "Product deleted successfully" });
  } catch (err) {
    console.error("Error deleting product:", err);
    res.status(500).json({ success: false, message: "Failed to delete product" });
  }
};


// GET products by category ID
export const getProductsByCategoryId = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const products = await fetchProductsByCategoryModel(categoryId); // make sure this exists in your model
    res.json({ success: true, data: products });
  } catch (err) {
    console.error("Error fetching products by category:", err);
    res.status(500).json({ success: false, message: "Failed to fetch products by category" });
  }
};
