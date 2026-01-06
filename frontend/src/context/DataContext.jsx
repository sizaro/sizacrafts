import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const [status, setStatus] = useState(true);

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [productVariants, setProductVariants] = useState([]);

  const navigate = useNavigate();
  // src/context/DataContext.jsx
const API_URL = import.meta.env.VITE_API_URL ?? "/api";


  // ------------------------
  // AUTH
  // ------------------------


  


// const loginUser = async (credentials) => {
//     console.log("🔹 Sending login request with:", { credentials });
//     try {
//       const res = await axios.post(`${API_URL}/auth/login`, credentials, {
//         withCredentials: true,
//       });
//       const { user } = res.data;
//       console.log("user in logged in context", user)
//       setUser(user);

//       if (!user) {
//         throw new Error("Invalid login response — user missing");
//       }

//       return user;
//     } catch (err) {
//       console.error("Error during loginUser:", err);
//       throw err;
//     }
//   };



const loginUser = async (credentials) => {
    console.log("🔹 Sending login request with:", { credentials });
    try {
      const res = await axios.post(`${API_URL}/auth/login`, credentials, {
        withCredentials: true,
      });
      const { user } = res.data;
      console.log("user in logged in context", user)
      setUser(user);
      if (user?.role === "admin"){
      navigate("/admin/dashboard")
    }
      return user;
    } catch (err) {
      console.error("Error during loginUser:", err)
      throw err;
    }
  };

  const checkAuth = async () => {
  try {
    const res = await axios.get(`${API_URL}/auth/check`, {
      withCredentials: true,
    });
    const user = res.data
    setUser(res.data);

    console.log("authed user in context", user)

    if (user?.role === "admin"){
      navigate("/admin/dashboard")
      
    };


  } catch(err) {
  console.log("Auth check failed:", err.message);

  } finally {
    setStatus(false);
  }
};

  const logoutUser = async () => {
    try {
      await axios.post(`${API_URL}/auth/logout`, {}, { withCredentials: true });
    } catch (err) {
      console.error("Error during logout:", err);
    } finally {
      setUser(null);
      navigate("/")
    }
  };


  console.log( "authenticated in data context",user, status);


  // ------------------------
  // CATEGORIES CRUD
  // ------------------------
  const fetchCategories = async () => {
    try {
      const res = await axios.get(`${API_URL}/categories`, { withCredentials: true });
      console.log("categories in context", res.data.data)
      setCategories(res.data.data);
      return res.data;
    } catch (err) {
      console.error("Error fetching categories:", err);
      throw err;
    }
  };

  const fetchCategoryById = async (id) => {
    try {
      const res = await axios.get(`${API_URL}/categories/${id}`, { withCredentials: true });
      return res.data;
    } catch (err) {
      console.error("Error fetching category by ID:", err);
      throw err;
    }
  };

  const createCategory = async (data) => {
    try {
      const res = await axios.post(`${API_URL}/categories`, data, { withCredentials: true });
      await fetchCategories();
      return res.data;
    } catch (err) {
      console.error("Error creating category:", err);
      throw err;
    }
  };

  const updateCategory = async (id, data) => {
    try {
      const res = await axios.put(`${API_URL}/categories/${id}`, data, { withCredentials: true });
      await fetchCategories();
      return res.data;
    } catch (err) {
      console.error("Error updating category:", err);
      throw err;
    }
  };

  const deleteCategory = async (id) => {
    try {
      await axios.delete(`${API_URL}/categories/${id}`, { withCredentials: true });
      await fetchCategories();
    } catch (err) {
      console.error("Error deleting category:", err);
      throw err;
    }
  };

  // ------------------------
  // PRODUCTS CRUD
  // ------------------------


  const fetchProducts = async () => {
    try {
      const res = await axios.get(`${API_URL}/products`, { withCredentials: true });
      console.log("products in context", res.data.data)
      setProducts(res.data.data);
      return res.data;
    } catch (err) {
      console.error("Error fetching products:", err);
      throw err;
    }
  };
  const fetchProductsByCategory = async (categoryId) => {
  try {
    const res = await axios.get(`${API_URL}/products/category/${categoryId}`, { 
      withCredentials: true
    });
    console.log("products in context", res.data.data)
    setProducts(res.data.data);
    return res.data;
  } catch (err) {
    console.error("Error fetching products:", err);
    throw err;
  }
};


  const fetchProductById = async (id) => {
    try {
      const res = await axios.get(`${API_URL}/products/${id}`, { withCredentials: true });
      return res.data;
    } catch (err) {
      console.error("Error fetching product by ID:", err);
      throw err;
    }
  };

  const createProduct = async (data) => {
    try {
      const res = await axios.post(`${API_URL}/products`, data, { withCredentials: true });
      if (data.category_id) await fetchProductsByCategory(data.category_id);
      return res.data;
    } catch (err) {
      console.error("Error creating product:", err);
      throw err;
    }
  };

  const updateProduct = async (id, data) => {
    try {
      const res = await axios.put(`${API_URL}/products/${id}`, data, { withCredentials: true });
      if (data.category_id) await fetchProductsByCategory(data.category_id);
      return res.data;
    } catch (err) {
      console.error("Error updating product:", err);
      throw err;
    }
  };

  const deleteProduct = async (id, categoryId) => {
    try {
      await axios.delete(`${API_URL}/products/${id}`, { withCredentials: true });
      if (categoryId) await fetchProductsByCategory(categoryId);
    } catch (err) {
      console.error("Error deleting product:", err);
      throw err;
    }
  };

  // ------------------------
  // PRODUCT VARIANTS CRUD
  // ------------------------
  const fetchVariantsByProduct = async (productId) => {
  try {
    const res = await axios.get(`${API_URL}/product-variants/product/${productId}`, {
      withCredentials: true
    });
    setProductVariants(res.data.data);
    return res.data;
  } catch (err) {
    console.error("Error fetching product variants:", err);
    throw err;
  }
};


  const fetchVariantById = async (id) => {
    try {
      const res = await axios.get(`${API_URL}/product-variants/${id}`, { withCredentials: true });
      return res.data;
    } catch (err) {
      console.error("Error fetching variant by ID:", err);
      throw err;
    }
  };

  const createVariant = async (data) => {
    try {
      const res = await axios.post(`${API_URL}/product-variants`, data, { withCredentials: true });
      if (data.product_id) await fetchVariantsByProduct(data.product_id);
      return res.data;
    } catch (err) {
      console.error("Error creating variant:", err);
      throw err;
    }
  };

  const updateVariant = async (id, data) => {
    try {
      const res = await axios.put(`${API_URL}/product-variants/${id}`, data, { withCredentials: true });
      if (data.product_id) await fetchVariantsByProduct(data.product_id);
      return res.data;
    } catch (err) {
      console.error("Error updating variant:", err);
      throw err;
    }
  };

  const deleteVariant = async (id, productId) => {
    try {
      await axios.delete(`${API_URL}/product-variants/${id}`, { withCredentials: true });
      if (productId) await fetchVariantsByProduct(productId);
    } catch (err) {
      console.error("Error deleting variant:", err);
      throw err;
    }
  };

  const fetchAllVariants = async () => {
  try {
    const res = await axios.get(`${API_URL}/product-variants`, { withCredentials: true });
    setProductVariants(res.data.data);
    return res.data;
  } catch (err) {
    console.error("Error fetching all product variants:", err);
    throw err;
  }
};


  // ------------------------
  // INITIAL LOAD
  // ------------------------

  return (
    <DataContext.Provider
      value={{
        user,
        loading,
        loginUser,
        checkAuth,
        logoutUser,
        categories,
        products,
        productVariants,
        fetchCategories,
        fetchCategoryById,
        createCategory,
        updateCategory,
        deleteCategory,
        fetchProducts,
        fetchProductsByCategory,
        fetchProductById,
        createProduct,
        updateProduct,
        deleteProduct,
        fetchVariantsByProduct,
        fetchVariantById,
        createVariant,
        updateVariant,
        deleteVariant,
        fetchAllVariants
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
