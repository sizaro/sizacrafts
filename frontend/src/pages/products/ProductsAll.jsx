// src/pages/Landing/ProductsAll.jsx
import React, { useEffect } from "react";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import { useData } from "../../context/DataContext";

export default function ProductsAll() {
  const { products, fetchProducts } = useData();

  const staticBaseUrl =
    import.meta.env.MODE === "development"
      ? "http://localhost:5500"
      : "https://sizacrafts.onrender.com";

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="bg-gray-50 flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-12 text-center">
          All Products
        </h1>

        {products.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
              >
                <div className="h-64 bg-gray-200 flex items-center justify-center overflow-hidden">
                  <img
                    src={
                      product.image_url
                        ? `${staticBaseUrl}${product.image_url}`
                        : "/placeholder-image.png"
                    }
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {product.description}
                  </p>
                  <p className="text-gray-800 font-bold mt-2">
                    UGX {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600 text-center">Loading products...</p>
        )}
      </main>
      <Footer />
    </div>
  );
}
