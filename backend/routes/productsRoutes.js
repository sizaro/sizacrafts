import express from "express";
import upload from "../middleware/upload.js";
import {
  getAllProducts,
  getProductById,
  getProductsByCategoryId,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productsController.js";

const router = express.Router();

router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.get("/category/:categoryId", getProductsByCategoryId);
router.post("/", upload.single("product_image"), createProduct);
router.put("/:id", upload.single("product_image"), updateProduct);
router.delete("/:id", deleteProduct);

export default router;
