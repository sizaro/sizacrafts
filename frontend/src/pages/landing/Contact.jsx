// src/pages/Landing/Contact.jsx
import React from "react";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import MetaTags from "../../components/common/MetaTags"

export default function Contact() {
  return (
    <>
       <MetaTags
              title="Contact"
              description="Crafted in Africa with passion. Handmade bead jewelry and décor."
              url="https://sizacrafts.com"
            />

    
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 px-6 py-16 max-w-7xl mx-auto space-y-16">

        {/* Hero Section */}
        <section className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Get in Touch</h1>
          <p className="text-gray-700 mb-4 text-lg">
            Have questions, want to place an order, or collaborate with us? We'd love to hear from you!
          </p>
          <p className="text-gray-600 mb-6">
            Our team responds promptly to all messages. Reach out through WhatsApp, Email, Phone, or social media below.
          </p>
        </section>

        {/* How to Contact */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">How to Reach Us</h2>
          <p className="text-gray-700 max-w-3xl mx-auto mb-6">
            We want to make it easy for you to connect with us. Whether you have a question about our products, need advice, or want to place an order, our team is ready to assist.
          </p>

          <section className="text-center">
          <img
            src="/images/contact us.jpg"
            alt="Contact Illustration"
            className="w-full md:h-96 h-64 object-cover rounded-xl shadow-md mx-auto mb-6"
          />
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Ready to reach out? Click any of the contact options below and connect with us immediately. We look forward to assisting you!
          </p>
        </section>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="https://wa.me/256700000000"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-6 py-3 rounded-lg shadow hover:bg-green-600 transition"
            >
              WhatsApp
            </a>
            <a
              href="mailto:info@sizacrafts.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
            >
              Email
            </a>
            <a
              href="tel:+256700000000"
              className="bg-gray-800 text-white px-6 py-3 rounded-lg shadow hover:bg-gray-900 transition"
            >
              Call Us
            </a>
            <a
              href="https://facebook.com/sizacrafts"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-800 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-900 transition"
            >
              Facebook
            </a>
            <a
              href="https://instagram.com/sizacrafts"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-500 text-white px-6 py-3 rounded-lg shadow hover:bg-pink-600 transition"
            >
              Instagram
            </a>
          </div>
        </section>

        {/* Prompt Response Assurance */}
        <section className="bg-white rounded-xl shadow-md p-10 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Prompt and Friendly Support</h2>
          <p className="text-gray-700 max-w-3xl mx-auto mb-4">
            Your inquiries are important to us. We pride ourselves on responding quickly and professionally to every message.
          </p>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Whether it's a quick question or a detailed request, you can expect a friendly and helpful response.
          </p>
        </section>

      </main>

      <Footer />
    </div>
    </>
  );
}
