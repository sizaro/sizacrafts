import db from "./database.js";

// =========================================================
// PRODUCT VARIANTS CRUD
// =========================================================

// FETCH ALL VARIANTS
export const fetchAllProductVariantsModel = async () => {
  const { rows } = await db.query(`
    SELECT 
      pv.id,
      pv.product_id,
      pv.variant_name,
      pv.additional_price,
      pv.stock,
      pv.image_url
    FROM product_variants pv
    ORDER BY pv.id DESC;
  `);
  return rows;
};

// FETCH SINGLE VARIANT BY ID
export const fetchProductVariantByIdModel = async (id) => {
  const { rows } = await db.query(
    `SELECT id, product_id, variant_name, additional_price, stock, image_url
     FROM product_variants
     WHERE id = $1`,
    [id]
  );
  return rows[0];
};

// CREATE VARIANT
export const createProductVariantModel = async ({ product_id, variant_name, additional_price, stock, image_url }) => {
  const { rows } = await db.query(
    `INSERT INTO product_variants (product_id, variant_name, additional_price, stock, image_url)
     VALUES ($1, $2, $3, $4, $5)
     RETURNING *`,
    [product_id, variant_name, additional_price, stock, image_url]
  );
  return rows[0];
};

// UPDATE VARIANT
export const updateProductVariantModel = async (id, { product_id, variant_name, additional_price, stock, image_url }) => {
  const { rows } = await db.query(
    `UPDATE product_variants
     SET product_id = $1,
         variant_name = $2,
         additional_price = $3,
         stock = $4,
         image_url = $5
     WHERE id = $6
     RETURNING *`,
    [product_id, variant_name, additional_price, stock, image_url, id]
  );
  return rows[0];
};

// DELETE VARIANT
export const deleteProductVariantModel = async (id) => {
  const { rowCount } = await db.query(
    `DELETE FROM product_variants
     WHERE id = $1`,
    [id]
  );
  return rowCount > 0;
};

export const fetchVariantsByProductModel = async (productId) => {
  const result = await db.query(
    "SELECT * FROM product_variants WHERE product_id=$1 ORDER BY id ASC",
    [productId]
  );
  return result.rows;
};