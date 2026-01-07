import React, { useEffect } from "react";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import { useData } from "../../context/DataContext";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const staticBaseUrl =
    import.meta.env.MODE === "development"
      ? "http://localhost:5500"
      : "https://sizacrafts.onrender.com";

  const { fetchProducts, categories, products, fetchCategories } = useData();
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "Saleh",
      feedback: "The crafting is skilled, makes me look my best on occasions especially Sundays.",
      img: `${staticBaseUrl}/images/client-1.jpg`,
    },
    {
      id: 2,
      name: "Mama Linda",
      feedback: "Perfect for bulk orders. My shop customers love them.",
      img: `${staticBaseUrl}/images/client-2.jpg`,
    },
    {
      id: 3,
      name: "Sarah",
      feedback: "Amazing handmade gifts. I ordered from abroad and delivery was smooth.",
      img: `${staticBaseUrl}/images/client-3.jpg`,
    },
  ];

  return (
    <div className="bg-gray-50 flex flex-col min-h-screen">
      <Navbar />

      {/* ================= HERO SECTION ================= */}
      <header className="relative w-full h-[60vh] overflow-hidden">

  {/* IMAGE */}
  <img
    src="/images/crafts_hero.jpg"
    alt="SizaCrafts Handmade Beads"
    className="absolute inset-0
      w-full h-full
      object-cover
      object-bottom"
  />

  {/* DESKTOP OVERLAY TEXT */}
  <div
    className="
      absolute inset-0
      hidden md:flex
      flex-col justify-center
      items-start
      pl-12 lg:pl-24
      text-white
      max-w-xl
    "
    style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}
  >
    <h1 className="text-5xl lg:text-6xl font-bold mb-2">
      SizaCrafts
    </h1>

    <h3 className="text-2xl lg:text-3xl font-semibold mb-4">
      Crafted in Africa with Passion. Loved Worldwide.
    </h3>

    <p className="mb-6">
      Explore our exclusive collection of handmade bead jewelry, home décor, and custom gifts.
    </p>

    <button className="bg-blue-600 px-6 py-3 rounded-lg shadow-lg font-semibold hover:bg-blue-700 transition">
      Explore Products
    </button>
  </div>
</header>

{/* MOBILE TEXT BELOW IMAGE */}
<div
  className="
    md:hidden
    px-6 py-8
    text-block text-black bg-amber-50
  "
>
  <h1 className="text-3xl font-bold mb-2">
    SizaCrafts
  </h1>

  <h3 className="text-xl font-semibold mb-4">
    Crafted in Africa with Passion. Loved Worldwide.
  </h3>

  <p className="mb-6">
    Explore our exclusive collection of handmade bead jewelry, home décor, and custom gifts.
  </p>

  <button className="bg-blue-600 px-6 py-3 rounded-lg shadow-lg font-semibold hover:bg-blue-700 transition">
    Explore Products
  </button>
</div>

      {/* ================= WELCOME SECTION ================= */}
      <section className="py-16 px-6 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Welcome to SizaCrafts</h2>
        <p className="text-gray-600 mb-4 max-w-3xl mx-auto">
          At SizaCrafts, we celebrate the beauty of African beadwork. Our artisans carefully craft each piece by hand,
          creating unique jewelry, home décor, and gifts that carry tradition and passion.
        </p>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Whether you're looking for a special gift, decorating your home, or shopping for yourself, SizaCrafts
          offers high-quality, handcrafted products loved both locally and worldwide.
        </p>
      </section>

      {/* ================= VISION & MISSION ================= */}
      <section className="py-16 bg-white px-6 max-w-7xl mx-auto text-block md:text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Vision & Mission</h2><br />
        <p className="text-gray-600 max-w-3xl mx-auto">
          <strong>Vision:</strong> To make African handcrafted beadwork known and loved worldwide.
        </p><br />
        <p className="text-gray-600 max-w-3xl mx-auto mt-2">
          <strong>Mission:</strong> To create high-quality bead products, support talented artisans, and delight our
          customers with authentic, beautiful, and sustainable creations.
        </p>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
<section className="py-16 bg-gray-50">
  <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Why Choose SizaCrafts?
      </h2>
  <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center gap-10">

    {/* IMAGE SIDE */}
    <div className="w-full md:w-[45%]">
      <img
        src="/images/beads workshop.jpg"
        alt="Handcrafted African Beads"
        className="w-full h-80 md:h-[420px] object-cover rounded-xl shadow-lg"
      />
    </div>

    {/* TEXT SIDE */}
    <div className="w-full md:w-[50%]">

      <p className="text-gray-600 mb-6">
        We don’t just sell bead products — we tell stories through craftsmanship.
        Every piece is carefully handmade with love, culture, and attention to detail.
      </p>

      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <span className="text-blue-600 text-xl">✔</span>
          <p className="text-gray-700">
            <strong>Authentic Handmade Craftsmanship</strong> — Every product is crafted by skilled African artisans.
          </p>
        </div>

        <div className="flex items-start gap-3">
          <span className="text-blue-600 text-xl">✔</span>
          <p className="text-gray-700">
            <strong>Premium Quality Materials</strong> — We use durable, high-quality beads and finishes.
          </p>
        </div>

        <div className="flex items-start gap-3">
          <span className="text-blue-600 text-xl">✔</span>
          <p className="text-gray-700">
            <strong>Custom & Bulk Orders Available</strong> — Perfect for gifts, events, shops, and special occasions.
          </p>
        </div>

        <div className="flex items-start gap-3">
          <span className="text-blue-600 text-xl">✔</span>
          <p className="text-gray-700">
            <strong>Worldwide Delivery</strong> — Loved locally and shipped safely across borders.
          </p>
        </div>
      </div>

      <button
        onClick={() => navigate("/products")}
        className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
      >
        Explore Our Products
      </button>
    </div>

  </div>
</section>


      {/* ================= CATEGORIES ================= */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Explore Our Categories</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-10">
            Discover our range of handmade beadwork, from fashion to home décor to custom gifts.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
  {categories.length > 0 ? (
    categories.slice(0, 6).map((cat) => (
      <div
        key={cat.id}
        className="
          w-full 
          sm:w-[48%] 
          lg:w-[30%]
          bg-gray-50 rounded-xl shadow-md overflow-hidden 
          hover:shadow-lg transition
          flex flex-col
        "
      >
        <img
          src={`${staticBaseUrl}${cat.image_url}`}
          alt={cat.name}
          className="w-full h-64 object-cover"
        />

        <div className="p-4 flex-1">
          <h3 className="text-xl font-semibold mb-2">{cat.name}</h3>
          <p className="text-gray-600 text-sm">{cat.description}</p>
        </div>

        <div className="p-4 pt-0">
          <button
            onClick={() => navigate(`/products/category/${cat.id}`)}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            View Products
          </button>
        </div>
      </div>
    ))
  ) : (
    <p className="text-gray-600 text-center w-full">
      Loading categories...
    </p>
  )}
</div>

          {categories.length > 6 && (
            <div className="text-center mt-6">
              <button
                onClick={() => navigate(`/products`)}
                className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
              >
                View All Categories
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ================= FEATURED PRODUCTS ================= */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">Featured Products</h2>
        <div className="flex flex-wrap justify-center gap-6">
  {products.length > 0 ? (
    products.slice(0, 6).map((product) => (
      <div
        key={product.id}
        className="
          w-full
          sm:w-[100%]
          lg:w-[100%]
          bg-white rounded-xl shadow-md overflow-hidden
          hover:shadow-lg transition
          flex flex-col h-80"
      >
        {/* IMAGE */}
        <div className="h-64 bg-gray-200 overflow-hidden">
          <img
            src={`${staticBaseUrl}${product.image_url}`}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* BUTTON */}
        <div className="p-4 pt-0 text-center">
          <h3 className="text-lg font-semibold text-gray-800 mb-1">
            {product.name}
          </h3>
          <p className="text-gray-600 text-sm">
            {product.description}
          </p>
          <p className="text-gray-800 font-bold mt-2">
            Price Range: {product.price_range}
          </p>
          <button
            onClick={() => navigate(`/products/product/${product.id}`)}
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
          >
            View items
          </button>
        </div>
      </div>
    ))
  ) : (
    <p className="text-gray-600 text-center w-full">
      Loading featured products...
    </p>
  )}
</div>

        {products.length > 6 && (
          <div className="text-center mt-6">
            <button
              onClick={() => navigate(`/products-all`)}
              className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
            >
              View All Products
            </button>
          </div>
        )}
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10 text-gray-800">What Our Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((c) => (
              <div key={c.id} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                <p className="text-gray-700 italic mb-3">“{c.feedback}”</p>
                <h4 className="font-semibold text-gray-800">{c.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-1  text-amber-700 bg-gray-150 text-center">
        <img
          src={`/images/contact us (2).jpg`}
          alt="Handmade Beads"
          className="w-full md:h-80 h-64 object-cover object-center rounded-xl mb-6 shadow-md"
        />
        <h2 className="text-3xl font-bold mb-4">Ready to Place an Order?</h2>
        <p className="text-lg mb-6 max-w-3xl mx-auto">
          Contact us via WhatsApp, Email, or Facebook for retail and wholesale orders. Our team is ready to craft
          your perfect handmade bead product.
        </p>
        <button className="bg-white text-blue-600 hover:text-white px-6 py-3 rounded-lg shadow-lg font-semibold hover:bg-amber-500 transition">
          Contact Us Now
        </button>
      </section>

      <Footer />
    </div>
  );
}
