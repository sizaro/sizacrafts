import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useData } from "../../context/DataContext.jsx";
import Navbar from "../../components/common/Navbar.jsx";
import Footer from "../../components/common/Footer.jsx";

export default function ProductDetailPage() {
  const { id } = useParams();
  const { fetchVariantsByProduct, productVariants = [] } = useData();
  const navigate = useNavigate();

  const staticBaseUrl =
    import.meta.env.MODE === "development"
      ? "http://localhost:5500"
      : "https://salonmanagementsystemv2.onrender.com";

  useEffect(() => {
    fetchVariantsByProduct(id);
  }, []);

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-12">
        <button className="text-blue-600 mb-6" onClick={() => navigate(-1)}>
          ← Back
        </button>

        <h1 className="text-3xl font-bold mb-8">Product Variants</h1>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {productVariants.map((v) => (
            <div
              key={v.id}
              className="bg-white rounded-lg shadow-md p-4 flex flex-col"
            >
              <img
                src={
                  v.image_url
                    ? `${staticBaseUrl}${v.image_url}`
                    : "/placeholder-image.png"
                }
                alt={v.variant_name || v.name}
                className="h-48 object-cover rounded"
              />

              {/* Variant Name */}
              <h2 className="text-lg font-semibold mt-2">
                {v.variant_name || v.name}
              </h2>

              {/* Variant Description */}
              {v.description && (
                <p className="text-gray-600 text-sm mt-1">
                  {v.description}
                </p>
              )}

              {/* Price */}
              <p className="text-gray-800 font-bold mt-2">
                UGX {v.price}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
