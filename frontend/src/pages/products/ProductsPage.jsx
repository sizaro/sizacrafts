import React, { useEffect } from "react";
import { useData } from "../../context/DataContext.jsx";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/common/Navbar.jsx";
import Footer from "../../components/common/Footer.jsx";

export default function ProductsPage() {
  const { categories, fetchCategories } = useData();
  const navigate = useNavigate();

  const staticBaseUrl =
    import.meta.env.MODE === "development"
      ? "http://localhost:5500"
      : "https://sizacrafts.onrender.com";

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-8">Product Categories</h1>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between"
            >
              {/* Category Image */}
              <div className="h-48 w-full mb-4 overflow-hidden rounded">
                <img
                  src={
                    cat.image_url
                      ? `${staticBaseUrl}${cat.image_url}`
                      : "/placeholder-image.png"
                  }
                  alt={cat.name}
                  className="h-full w-full object-cover"
                />
              </div>

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
      </div>
      <Footer />
    </>
  );
}
