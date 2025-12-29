import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import SidebarFooter from "../common/SidebarFooter";

export default function AdminSidebar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();

  const isActive = (path) => location.pathname.startsWith(path);

  const linkClass = (path) =>
    `block px-4 py-2 rounded transition-colors ${
      isActive(path)
        ? "bg-gray-700 font-semibold"
        : "hover:bg-gray-700"
    }`;

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <>
      {/* ================= MOBILE TOP BAR ================= */}
      <div className="md:hidden bg-gray-900 p-4 flex justify-between items-center text-white fixed top-0 left-0 right-0 z-50">
        <span className="font-bold text-lg">SizaCrafts Admin</span>
        <button
          onClick={() => setMenuOpen(true)}
          className="text-2xl focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* ================= DESKTOP SIDEBAR ================= */}
      <aside className="hidden md:flex w-64 h-screen bg-gray-900 text-white fixed top-0 left-0 flex-col shadow-lg pt-16">
        <div className="px-6 font-bold text-xl mb-4">
          SizaCrafts Admin
        </div>

        <div className="flex-1 overflow-y-auto px-2">
          <ul className="space-y-1 text-sm">
            <li>
              <Link to="/admin/dashboard" className={linkClass("/admin/dashboard")}>
                Dashboard
              </Link>
            </li>

            <li>
              <Link to="/admin/products" className={linkClass("/admin/products")}>
                Products
              </Link>
            </li>

            <li>
              <Link to="/admin/categories" className={linkClass("/admin/categories")}>
                Categories
              </Link>
            </li>

            <li>
              <Link to="/admin/variants" className={linkClass("/admin/variants")}>
                Product Variants
              </Link>
            </li>

            <li>
              <Link to="/admin/orders" className={linkClass("/admin/orders")}>
                Orders
              </Link>
            </li>

            <li>
              <Link to="/admin/customers" className={linkClass("/admin/customers")}>
                Customers
              </Link>
            </li>

            <li>
              <Link to="/admin/reports" className={linkClass("/admin/reports")}>
                Reports
              </Link>
            </li>

            <li className="mt-10">
              <SidebarFooter />
            </li>
          </ul>
        </div>
      </aside>

      {/* ================= MOBILE SLIDE MENU ================= */}
      <div
        ref={menuRef}
        className={`fixed top-0 left-0 h-screen w-full bg-gray-900 text-white z-50 transform transition-transform duration-300 pt-16 px-4 md:hidden ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="px-6 font-bold text-xl">
          SizaCrafts Admin
        </div>

        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-4 right-4 text-xl focus:outline-none"
        >
          ✕
        </button>

        <div className="h-full overflow-y-auto mt-6 mb-10">
          <ul className="space-y-1 text-sm">
            <li>
              <Link
                to="/admin/dashboard"
                onClick={() => setMenuOpen(false)}
                className={linkClass("/admin/dashboard")}
              >
                Dashboard
              </Link>
            </li>

            <li>
              <Link
                to="/admin/products"
                onClick={() => setMenuOpen(false)}
                className={linkClass("/admin/products")}
              >
                Products
              </Link>
            </li>

            <li>
              <Link
                to="/admin/categories"
                onClick={() => setMenuOpen(false)}
                className={linkClass("/admin/categories")}
              >
                Categories
              </Link>
            </li>

            <li>
              <Link
                to="/admin/variants"
                onClick={() => setMenuOpen(false)}
                className={linkClass("/admin/variants")}
              >
                Product Variants
              </Link>
            </li>

            <li>
              <Link
                to="/admin/orders"
                onClick={() => setMenuOpen(false)}
                className={linkClass("/admin/orders")}
              >
                Orders
              </Link>
            </li>

            <li>
              <Link
                to="/admin/customers"
                onClick={() => setMenuOpen(false)}
                className={linkClass("/admin/customers")}
              >
                Customers
              </Link>
            </li>

            <li>
              <Link
                to="/admin/reports"
                onClick={() => setMenuOpen(false)}
                className={linkClass("/admin/reports")}
              >
                Reports
              </Link>
            </li>

            <li className="mt-10">
              <SidebarFooter />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
