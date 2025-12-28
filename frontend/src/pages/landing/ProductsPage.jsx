import React, { useEffect } from "react";
import { useData } from "../../context/DataContext.jsx";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/common/Navbar.jsx";
import Footer from "../../components/common/Footer.jsx";

export default function ProductsPage() {
  const { categories, fetchCategories } = useData();
  const navigate = useNavigate();

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-8">Product Categories</h1>
        <section className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Explore Our Unique Creations</h1>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Discover the finest handcrafted beadwork from Sizacrafts. Browse our wide range of products across Jewelry, Home Décor, and Custom Gifts.
            Each piece is lovingly made with attention to detail, perfect for yourself or as a thoughtful gift.
          </p>
        </section>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between"
            >
              <h2 className="text-xl font-semibold">{cat.name}</h2>
              <p className="text-gray-600 mt-2">{cat.description}</p>
              <button
                onClick={() => navigate(`/products/category/${cat.id}`)}
                className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
              >
                View
              </button>
            </div>
          ))}
        </div>

        <section className="text-center mt-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Looking for Something Special?</h2>
          <p className="text-gray-700 mb-6 max-w-xl mx-auto">
            Our artisans can create custom beadwork tailored to your style or event. From personalized gifts to unique décor, your perfect piece is just a message away.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg font-semibold hover:bg-green-700 transition"
          >
            Contact Us for Custom Orders
          </button>
        </section>
      </div>
      <Footer />
    </>
  );
}
