import fs from "fs";
import path from "path";
import {
  fetchAllProductVariantsModel,
  fetchProductVariantByIdModel,
  createProductVariantModel,
  updateProductVariantModel,
  deleteProductVariantModel,
  fetchVariantsByProductModel
} from "../models/productVariantsModel.js";

// GET all product variants
export const getAllProductVariants = async (req, res) => {
  try {
    const variants = await fetchAllProductVariantsModel();
    res.json({ success: true, data: variants });
  } catch (err) {
    console.error("Error fetching product variants:", err);
    res.status(500).json({ success: false, message: "Failed to fetch product variants" });
  }
};

// GET single product variant by ID
export const getProductVariantById = async (req, res) => {
  try {
    const { id } = req.params;
    const variant = await fetchProductVariantByIdModel(id);
    if (!variant) {
      return res.status(404).json({ success: false, message: "Product variant not found" });
    }
    res.json({ success: true, data: variant });
  } catch (err) {
    console.error("Error fetching product variant:", err);
    res.status(500).json({ success: false, message: "Failed to fetch product variant" });
  }
};

// CREATE product variant
export const createProductVariant = async (req, res) => {
  try {
    const { name, product_id, price } = req.body;

    const variant_image = req.file
      ? `/uploads/images/${req.file.filename}`
      : null;

    const data = { name, product_id, price, variant_image };

    const newVariant = await createProductVariantModel(data);
    res.status(201).json({ success: true, data: newVariant });
  } catch (err) {
    console.error("Error creating product variant:", err);
    res.status(500).json({ success: false, message: "Failed to create product variant" });
  }
};

// UPDATE product variant
export const updateProductVariant = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, product_id, price } = req.body;

    if (!id) {
      return res.status(400).json({ success: false, message: "Missing variant ID" });
    }

    const existingVariant = await fetchProductVariantByIdModel(id);
    if (!existingVariant) {
      return res.status(404).json({ success: false, message: "Product variant not found" });
    }

    let variant_image = existingVariant.variant_image;

    if (req.file && req.file.filename) {
      if (existingVariant.variant_image) {
        const oldPath = path.join(process.cwd(), existingVariant.variant_image);
        if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath);
      }
      variant_image = `/uploads/images/${req.file.filename}`;
    }

    const data = { name, product_id, price, variant_image };
    const updatedVariant = await updateProductVariantModel(id, data);

    res.json({ success: true, data: updatedVariant });
  } catch (err) {
    console.error("Error updating product variant:", err);
    res.status(500).json({ success: false, message: "Failed to update product variant" });
  }
};

// DELETE product variant
export const deleteProductVariant = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await deleteProductVariantModel(id);
    if (!deleted) {
      return res.status(404).json({ success: false, message: "Product variant not found" });
    }
    res.json({ success: true, message: "Product variant deleted successfully" });
  } catch (err) {
    console.error("Error deleting product variant:", err);
    res.status(500).json({ success: false, message: "Failed to delete product variant" });
  }
};

export const getVariantsByProductId = async (req, res) => {
  try {
    const { productId } = req.params;
    const variants = await fetchVariantsByProductModel(productId);
    res.json({ success: true, data: variants });
  } catch (err) {
    console.error("Error fetching variants by product ID:", err);
    res.status(500).json({ success: false, message: "Failed to fetch variants" });
  }
};