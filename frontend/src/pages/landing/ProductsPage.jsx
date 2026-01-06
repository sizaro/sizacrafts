import React, { useEffect } from "react";
import { useData } from "../../context/DataContext.jsx";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/common/Navbar.jsx";
import Footer from "../../components/common/Footer.jsx";
import MetaTags from "../../components/common/MetaTags"
export default function ProductsPage() {
  const { categories, fetchCategories } = useData();
  const navigate = useNavigate();

  const staticBaseUrl =
    import.meta.env.MODE === "development"
      ? "http://localhost:5500"
      : "https://salonmanagementsystemv2.onrender.com";

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <>
     <MetaTags
            title="Products"
            description="Crafted in Africa with passion. Handmade bead jewelry and décor."
            url="https://sizacrafts.com"
          />
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <section className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Explore Our Various Categories
          </h1>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Discover the finest handcrafted beadwork from Sizacrafts. Browse our wide range of products across Jewelry,
            Home Décor, and Custom Gifts.
          </p>
        </section>

        {/* Categories Grid */}
        <div className="flex flex-wrap justify-center gap-6 text-center">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="w-full
          sm:w-[100%]
          lg:w-[30%]
          bg-white rounded-xl shadow-md overflow-hidden
          hover:shadow-lg transition
          flex flex-col h-80"
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

        {/* Custom Orders Section */}
        <section className="text-center mt-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Looking for Something Special?
          </h2>
          <p className="text-gray-700 mb-6 max-w-xl mx-auto">
            Our artisans can create custom beadwork tailored to your style or event.
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
