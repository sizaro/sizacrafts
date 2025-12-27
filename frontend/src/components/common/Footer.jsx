// src/components/common/Footer.jsx
import React from "react";

export default function Footer() {
  const whatsappNumber = "+256700000000";
  const facebookUrl = "https://www.facebook.com/YourPage";
  const instagramUrl = "https://www.instagram.com/YourPage";
  const emailAddress = "info@sizacrafts.com";

  return (
    <footer className="bg-amber-50 text-gray-800 py-12 mt-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="mb-6 md:mb-0">
          <h2 className="text-2xl font-bold text-amber-800 mb-2">SizaCrafts</h2>
          <p className="max-w-sm text-gray-700">
            Crafted in Africa with passion, loved worldwide. We create unique handmade bead products 
            including jewelry, home decor, and personalized gifts for all occasions.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          <a
            href={`https://wa.me/${whatsappNumber.replace(/[\+\s]/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-amber-800 transition"
          >
            <img src="/images/whatsapp_icon.png" alt="WhatsApp" className="w-6 h-6" />
            WhatsApp
          </a>
          <a
            href={facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-amber-800 transition"
          >
            <img src="/images/facebook_icon.png" alt="Facebook" className="w-6 h-6" />
            Facebook
          </a>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-amber-800 transition"
          >
            <img src="/images/instagram_icon.png" alt="Instagram" className="w-6 h-6" />
            Instagram
          </a>
          <a
            href={`mailto:${emailAddress}`}
            className="flex items-center gap-2 hover:text-amber-800 transition"
          >
            <img src="/images/email_icon.png" alt="Email" className="w-6 h-6" />
            Email
          </a>
        </div>
      </div>

      <div className="mt-8 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} SizaCrafts. All rights reserved.
      </div>
    </footer>
  );
}
