import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useData } from "../../context/DataContext.jsx";
import Navbar from "../../components/common/Navbar.jsx";
import Footer from "../../components/common/Footer.jsx";

export default function CategoryPage() {
  const { id } = useParams();
  const { fetchProductsByCategory, products = [] } = useData();
  const navigate = useNavigate();

  useEffect(() => {
    fetchProductsByCategory(id)
  }, []);

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-12">
        <button
          className="text-blue-600 mb-6"
          onClick={() => navigate("/products")}
        >
          ← Back to Categories
        </button>
        <h1 className="text-3xl font-bold mb-8">Products</h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md p-4 flex flex-col"
            >
              <img
                src={product.image_url}
                alt={product.name}
                className="h-48 object-cover rounded"
              />
              <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
              <p className="text-gray-800 font-bold mt-1">UGX {product.price}</p>
              <button
                onClick={() => navigate(`/products/product/${product.id}`)}
                className="mt-auto bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
              >
                View Variants
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
