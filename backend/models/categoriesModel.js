import db from "./database.js";

// =========================================================
// CATEGORIES CRUD
// =========================================================

// FETCH ALL CATEGORIES
export const fetchAllCategoriesModel = async () => {
  const { rows } = await db.query(`
    SELECT 
      id,
      name,
      description,
      image_url
    FROM categories
    ORDER BY id DESC;
  `);
  return rows;
};

// FETCH SINGLE CATEGORY BY ID
export const fetchCategoryByIdModel = async (id) => {
  const { rows } = await db.query(
    `SELECT id, name, description, image_url
     FROM categories
     WHERE id = $1`,
    [id]
  );
  return rows[0];
};

// CREATE CATEGORY
export const createCategoryModel = async ({ name, description, image_url }) => {
  const { rows } = await db.query(
    `INSERT INTO categories (name, description, image_url)
     VALUES ($1, $2, $3)
     RETURNING *`,
    [name, description, image_url]
  );
  return rows[0];
};

// UPDATE CATEGORY
export const updateCategoryModel = async (id, { name, description, image_url }) => {
  const { rows } = await db.query(
    `UPDATE categories
     SET name = $1,
         description = $2,
         image_url = $3
     WHERE id = $4
     RETURNING *`,
    [name, description, image_url, id]
  );
  return rows[0];
};

// DELETE CATEGORY
export const deleteCategoryModel = async (id) => {
  const { rowCount } = await db.query(
    `DELETE FROM categories
     WHERE id = $1`,
    [id]
  );
  return rowCount > 0;
};
