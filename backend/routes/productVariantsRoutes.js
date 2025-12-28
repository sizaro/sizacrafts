import express from "express";
import upload from "../middleware/upload.js";
import {
  getAllProductVariants,
  getProductVariantById,
  getVariantsByProductId,
  createProductVariant,
  updateProductVariant,
  deleteProductVariant,
} from "../controllers/productVariantsController.js";

const router = express.Router();

router.get("/", getAllProductVariants);
router.get("/:id", getProductVariantById);
router.get("/product/:productId", getVariantsByProductId);
router.post("/", upload.single("variant_image"), createProductVariant);
router.put("/:id", upload.single("variant_image"), updateProductVariant);
router.delete("/:id", deleteProductVariant);

export default router;
