// src/pages/Landing/Products.jsx
import React, { useState } from "react";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";

// ========== MOCK DATA ==========
const categories = [
  {
    id: 1,
    name: "Jewelry & Wearables",
    description: "Necklaces, bracelets, earrings, and anklets crafted by hand.",
    image: "/images/category-jewelry.jpg",
  },
  {
    id: 2,
    name: "Home Décor",
    description: "Beaded mats, wall art, table décor — handcrafted with care.",
    image: "/images/category-home.jpg",
  },
  {
    id: 3,
    name: "Gifts & Custom Orders",
    description: "Personalized beadwork for events, weddings, and special gifts.",
    image: "/images/category-gifts.jpg",
  },
];

const products = [
  { id: 1, categoryId: 1, name: "Beaded Necklace", price: 20000, image: "/images/necklace.jpg" },
  { id: 2, categoryId: 1, name: "Beaded Earrings", price: 12000, image: "/images/earrings.jpg" },
  { id: 3, categoryId: 2, name: "Beaded Doormat", price: 35000, image: "/images/doormat.jpg" },
  { id: 4, categoryId: 2, name: "Beaded Wall Hanging", price: 25000, image: "/images/wall-hanging.jpg" },
  { id: 5, categoryId: 3, name: "Custom Gift Set", price: 50000, image: "/images/custom-gift.jpg" },
];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = selectedCategory
    ? products.filter((p) => p.categoryId === selectedCategory.id)
    : [];

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-6 py-16">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-gray-800 mb-12 text-center">
          Our Products
        </h1>

        {/* Categories */}
        {!selectedCategory && (
          <section className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat) => (
              <div
                key={cat.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg cursor-pointer transition"
                onClick={() => setSelectedCategory(cat)}
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4 text-center">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    {cat.name}
                  </h2>
                  <p className="text-gray-600 text-sm">{cat.description}</p>
                </div>
              </div>
            ))}
          </section>
        )}

        {/* Products in Category */}
        {selectedCategory && !selectedProduct && (
          <section>
            <button
              className="mb-6 text-blue-600 hover:underline"
              onClick={() => setSelectedCategory(null)}
            >
              ← Back to Categories
            </button>
            <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">
              {selectedCategory.name}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProducts.map((p) => (
                <div
                  key={p.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg cursor-pointer"
                  onClick={() => setSelectedProduct(p)}
                >
                  <div className="h-64 bg-gray-200 flex items-center justify-center overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">{p.name}</h3>
                    <p className="text-gray-800 font-bold mt-2">UGX {p.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Detailed Product */}
        {selectedProduct && (
          <section>
            <button
              className="mb-6 text-blue-600 hover:underline"
              onClick={() => setSelectedProduct(null)}
            >
              ← Back to {selectedCategory.name}
            </button>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="rounded-xl shadow-lg w-full h-auto object-cover"
              />
              <div>
                <h2 className="text-3xl font-bold mb-2 text-gray-800">{selectedProduct.name}</h2>
                <p className="text-gray-800 font-bold text-xl mb-4">UGX {selectedProduct.price}</p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel ligula scelerisque,
                  finibus nulla et, efficitur urna. Fusce feugiat, sapien eget ultricies ultrices, orci lacus
                  pellentesque metus, sit amet tincidunt risus arcu nec nulla.
                </p>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg font-semibold hover:bg-blue-700 transition">
                  Contact to Order
                </button>
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
