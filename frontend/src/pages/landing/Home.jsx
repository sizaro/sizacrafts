import React from "react";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";

// ================= MOCK DATA =================
const featuredProducts = [
  {
    id: 1,
    name: "Beaded Necklace",
    description: "Handmade African beaded necklace, perfect for any occasion.",
    price: 20000,
    image: "/images/necklace.jpg",
  },
  {
    id: 2,
    name: "Beaded Earrings",
    description: "Elegant handcrafted earrings made with love and precision.",
    price: 12000,
    image: "/images/earrings.jpg",
  },
  {
    id: 3,
    name: "Beaded Doormat",
    description: "Beautiful handmade beaded doormat to decorate your home.",
    price: 35000,
    image: "/images/doormat.jpg",
  },
  {
    id: 4,
    name: "Beaded Bracelet",
    description: "Colorful, handmade bracelets that express your style.",
    price: 8000,
    image: "/images/bracelet.jpg",
  },
];

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

const testimonials = [
  {
    id: 1,
    name: "Amina",
    feedback: "Beautiful craftsmanship! The quality exceeded my expectations.",
    img: "/images/client-1.jpg",
  },
  {
    id: 2,
    name: "David",
    feedback: "Perfect for bulk orders. My shop customers love them.",
    img: "/images/client-2.jpg",
  },
  {
    id: 3,
    name: "Sarah",
    feedback: "Amazing handmade gifts. I ordered from abroad and delivery was smooth.",
    img: "/images/client-3.jpg",
  },
];

// ================= HOME COMPONENT =================
export default function Home() {
  return (
    <div className="bg-gray-50 flex flex-col min-h-screen">
      <Navbar />

      {/* ================= HERO SECTION ================= */}
      <header className="relative w-full h-[80vh] overflow-hidden">
        <img
          src="/images/crafts_hero.jpg"
          alt="SizaCrafts Handmade Beads"
          className="w-full h-full object-cover brightness-75"
        />
        <div
          className="absolute inset-0 hidden md:flex flex-col justify-center items-center text-center text-white px-4"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)" }}
        >
          <h1 className="text-3xl md:text-6xl font-bold mb-2">SizaCrafts</h1>
          <h3 className="md:text-3xl font-semibold mb-4 text-2xl">
            Crafted in Africa with Passion. Loved Worldwide.
          </h3>
          <p className="mb-4 max-w-md mx-auto">
            Explore our exclusive collection of handmade bead jewelry, home décor, and custom gifts.
          </p>
          <div className="mt-4 bg-blue-600 px-6 py-3 rounded-lg shadow-lg font-semibold hover:bg-blue-700 transition">
            Explore Products
          </div>
        </div>
      </header>

      {/* ================= WELCOME SECTION ================= */}
      <section className="py-16 px-6 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Welcome to SizaCrafts</h2>
        <p className="text-gray-600 mb-4 max-w-3xl mx-auto">
          At SizaCrafts, we celebrate the beauty of African beadwork. Our artisans carefully craft each piece by hand,
          creating unique jewelry, home décor, and gifts that carry tradition and passion. Every item tells a story and
          brings the rich colors and textures of Africa to your life.
        </p>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Whether you're looking for a special gift, decorating your home, or shopping for yourself, SizaCrafts
          offers high-quality, handcrafted products loved both locally and worldwide.
        </p>
      </section>

      {/* ================= VISION & MISSION ================= */}
      <section className="py-16 bg-white px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Vision & Mission</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            <strong>Vision:</strong> To make African handcrafted beadwork known and loved worldwide.
          </p>
          <p className="text-gray-600 max-w-3xl mx-auto mt-2">
            <strong>Mission:</strong> To create high-quality bead products, support talented artisans, and delight our
            customers with authentic, beautiful, and sustainable creations.
          </p>
        </div>
      </section>

      {/* ================= PURPOSE / WHY US ================= */}
      <section className="py-16 bg-gray-100 px-6 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Why Choose SizaCrafts?</h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-4">
          We combine tradition, skill, and passion to bring you unique handcrafted items. Our products are perfect for:
        </p>
        <ul className="text-gray-600 max-w-3xl mx-auto list-disc list-inside space-y-2">
          <li>Retail customers looking for unique fashion accessories</li>
          <li>Wholesale buyers and shops seeking authentic African bead products</li>
          <li>Gifting for special occasions with personalized touch</li>
          <li>Home décor lovers wanting to add authentic charm</li>
        </ul>
      </section>

      {/* ================= FEATURED PRODUCTS ================= */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">Featured Products</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
              <div className="h-64 bg-gray-200 flex items-center justify-center overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">{product.name}</h3>
                <p className="text-gray-600 text-sm">{product.description}</p>
                <p className="text-gray-800 font-bold mt-2">UGX {product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CATEGORIES ================= */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Explore Our Categories</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-10">
            Discover our range of handmade beadwork, from fashion to home décor to custom gifts.
          </p>
          <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div key={cat.id} className="bg-gray-50 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{cat.name}</h3>
                  <p className="text-gray-600 text-sm">{cat.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10 text-gray-800">What Our Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((c) => (
              <div key={c.id} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                <img
                  src={c.img}
                  alt={c.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                />
                <p className="text-gray-700 italic mb-3">“{c.feedback}”</p>
                <h4 className="font-semibold text-gray-800">{c.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-16 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Place an Order?</h2>
        <p className="text-lg mb-6 max-w-3xl mx-auto">
          Contact us via WhatsApp, Email, or Facebook for retail and wholesale orders. Our team is ready to craft
          your perfect handmade bead product.
        </p>
        <img
          src="/images/final_cta.jpg"
          alt="Handmade Beads"
          className="w-full md:h-96 h-64 object-cover rounded-xl mb-6 shadow-md"
        />
        <button className="bg-white text-blue-600 px-6 py-3 rounded-lg shadow-lg font-semibold hover:bg-gray-100 transition">
          Contact Us Now
        </button>
      </section>

      <Footer />
    </div>
  );
}
