import db from "./database.js";

// =========================================================
// PRODUCTS CRUD
// =========================================================

// FETCH ALL PRODUCTS
export const fetchAllProductsModel = async () => {
  const { rows } = await db.query(`
    SELECT *
    FROM products p
    ORDER BY p.id DESC;
  `);
  return rows;
};

// FETCH SINGLE PRODUCT BY ID
export const fetchProductByIdModel = async (id) => {
  const { rows } = await db.query(
    `SELECT id, name, description, price_range, category_id, image_url
     FROM products
     WHERE id = $1`,
    [id]
  );
  return rows[0];
};

// CREATE PRODUCT
export const createProductModel = async ({ name, description, price_range, category_id, product_image }) => {
  const { rows } = await db.query(
    `INSERT INTO products (name, description, price_range, category_id, image_url)
     VALUES ($1, $2, $3, $4, $5)
     RETURNING *`,
    [name, description, price_range, category_id, product_image]
  );
  return rows[0];
};

// UPDATE PRODUCT
export const updateProductModel = async (id, { name, description, price_range, category_id, product_image }) => {
  const { rows } = await db.query(
    `UPDATE products
     SET name = $1,
         description = $2,
         price_range = $3,
         category_id = $4,
         image_url = $5
     WHERE id = $6
     RETURNING *`,
    [name, description, price_range, category_id, product_image, id]
  );
  return rows[0];
};

// DELETE PRODUCT
export const deleteProductModel = async (id) => {
  const { rowCount } = await db.query(
    `DELETE FROM products
     WHERE id = $1`,
    [id]
  );
  return rowCount > 0;
};

export const fetchProductsByCategoryModel = async (categoryId) => {
  const result = await db.query(
    "SELECT * FROM products WHERE category_id = $1 ORDER BY id ASC",
    [categoryId]
  );
  return result.rows;
};