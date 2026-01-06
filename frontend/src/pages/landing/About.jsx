import React from "react";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import { motion } from "framer-motion";
import MetaTags from "../../components/common/MetaTags"

// ================= MOCK DATA =================
const users = [
  {
    id: 1,
    first_name: "Eva",
    last_name: "",
    role: "Founder & CEO",
    title: "Founder & CEO",
    bio: "Eva is passionate about promoting African handcrafted beadwork worldwide. Dedicated to quality and authenticity.",
    image_url: "/images/eva.jpeg",
  },
  {
    id: 2,
    first_name: "Ruth",
    last_name: "K",
    role: "Manager",
    title: "Operations Manager",
    bio: "Ruth ensures smooth daily operations and supports our artisans to achieve excellence in every product.",
    image_url: "/images/ruth.jpeg",
  },
  {
    id: 3,
    first_name: "Ruth",
    last_name: "E",
    role: "Asst Manager",
    title: "Professional designer",
    bio: "Ruth ensures our artisan's designs achieve excellence in every product.",
    image_url: "/images/esaete.jpeg",
  },
];

// Helper functions
const fullName = (user) => `${user.first_name || ""} ${user.last_name || ""}`;
const getImage = (user, fallback) => user.image_url || fallback;

export default function About() {
  const owner = users.find((u) => u.role.includes("Founder")) || {};
  const manager = users.find((u) => u.role === "Manager") || {};
  const asstManager = users.find((u)=>u.role === "Asst Manager") || {};
  const employees = users.filter(
    (u) => u.role !== "Founder & CEO" && u.role !== "Manager" && u.role !== "Asst Manager"
  );

  return (
    <>
    <MetaTags
        title="About"
        description="Crafted in Africa with passion. Handmade bead jewelry and décor."
        url="https://sizacrafts.com"
      />
      
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <header className="bg-gradient-to-r from-gray-300 to-amber-300 text-black py-20 text-center">
        <h1 className="md:text-5xl text-2xl font-bold mb-4">About SizaCrafts</h1>
        <p className="max-w-2xl mx-auto text-lg">
          Where passion meets creativity — founded and led by{" "}
          <span className="font-semibold">{fullName(owner)}</span>, aiming to
          promote authentic handcrafted products worldwide.
        </p>
      </header>

      <main className="flex-1 px-6 py-16 max-w-6xl mx-auto space-y-16">
        {/* Owner Section */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div className=" w-full flex flex-col justify-center items-center">
            <img
              src={getImage(owner, "/images/default_owner.webp")}
              alt={fullName(owner)}
              className="rounded-xl shadow-lg h-[380px]"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">
              {fullName(owner)}
            </h2>
            <p className="text-indigo-600 font-medium mb-4">{owner.title}</p>
            <p className="text-gray-700 leading-relaxed">{owner.bio}</p>
          </div>
        </section>

        {/* Our Story */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Story</h2>
          <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed mb-6">
            SizaCrafts started with a vision to share the beauty of African
            handcrafted beadwork with the world. Our team of skilled artisans
            create unique jewelry, home décor, and gifts with care and passion.
          </p>
          <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Every product tells a story, combining traditional techniques with
            contemporary designs. Our goal is to connect communities, preserve
            cultural heritage, and delight customers everywhere.
          </p>
        </section>

        {/* Manager Section */}
        {manager.id && (
          <section className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">
                {fullName(manager)}
              </h2>
              <p className="text-indigo-600 font-medium mb-4 ">{manager.title}</p>
              <p className="text-gray-700 leading-relaxed">{manager.bio}</p>
            </div>
            <div className="flex flex-col justify-center items-center order-1 md:order-2">
              <img
              src={getImage(manager, "/images/default_manager.webp")}
              alt={fullName(manager)}
              className="rounded-2xl shadow-lg w-80 h-auto object-cover order-1 md:order-2"
            />
            </div>
            
          </section>
        )}

         {/*Assistant Manager Section */}
        {asstManager.id && (
          <section className="flex flex-col w-full justify-center items-center">
            <div className="order-1 md:order-2">
              <img
              src={getImage(asstManager, "/images/default_manager.webp")}
              alt={fullName(asstManager)}
              className="rounded-2xl shadow-lg w-80 h-auto object-cover flex flex-col w-full justify-center items-center"
            />
            </div>
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">
                {fullName(asstManager)}
              </h2>
              <p className="text-indigo-600 font-medium mb-4">{asstManager.title}</p>
              <p className="text-gray-700 leading-relaxed">{asstManager.bio}</p>
            </div>
          </section>
        )}

        {/* Employee Team Section */}
        {employees.length > 0 && (
          <motion.section
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="py-12 bg-gray-50"
          >
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
              Meet Our Artisans
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
              {employees.map((emp, index) => (
                <motion.div
                  key={emp.id}
                  initial={{ opacity: 0, x: -80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.2 }}
                  whileHover={{
                    scale: 1.05,
                    y: -8,
                    boxShadow:
                      "0px 10px 25px rgba(0, 0, 0, 0.15), 0px 5px 10px rgba(0, 0, 0, 0.1)",
                    transition: { type: "spring", stiffness: 220, damping: 14 },
                  }}
                  className="bg-white shadow-md rounded-xl overflow-hidden transition-transform"
                >
                  <motion.img
                    src={getImage(emp, "/images/default_employee.webp")}
                    alt={fullName(emp)}
                    className="w-full h-auto md:h-[200px] object-cover rounded-t-xl"
                  />
                  <motion.div className="p-4 text-center">
                    <h3 className="text-lg font-semibold text-gray-800">{fullName(emp)}</h3>
                    <p className="text-gray-500 text-sm mt-1">{emp.specialty}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}
      </main>

      <Footer />
    </div>
    
    </>
  );
}
