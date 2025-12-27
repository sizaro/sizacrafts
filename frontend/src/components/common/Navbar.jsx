// src/components/common/Navbar.jsx
import React, { useState, useRef, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Modal from "../../components/Modal.jsx";
import LoginForm from "../../components/auth/login.jsx";
import UserForm from "../../components/UserForm.jsx";
import { useData } from "../../context/DataContext.jsx";
import ForgotPasswordForm from "../../components/auth/ForgotPasswordForm.jsx";
import ToastModal from "../../components/ToastModal.jsx";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState(null);
  const [accountOptions, setAccountOptions] = useState(false);
  const [authForm, setAuthForm] = useState("login");
  const [toast, setToast] = useState({ message: "", type: "success" });

  const { loginUser, createUser, checkAuth, forgotPassword } = useData();
  const navigate = useNavigate();
  const accountRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (accountRef.current && !accountRef.current.contains(event.target)) {
        setAccountOptions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (loginOpen || registerOpen) setAccountOptions(false);
  }, [loginOpen, registerOpen]);

  const handleLogin = async ({ email, password }) => {
    setLoading(true);
    setLoginError(null);
    try {
      const res = await loginUser({ email, password });
      await checkAuth();
      setLoginOpen(false);
      if (res.role === "owner") navigate("/owner");
      else if (res.role === "customer") navigate("/customer");
      else navigate("/");
    } catch (err) {
      setLoginError(err?.response?.data?.message || "Sign in failed");
    } finally {
      setLoading(false);
    }
  };

  const handleCustomerRegister = async (formData) => {
    try {
      await createUser(formData);
      setRegisterOpen(false);
      setLoginOpen(true);
    } catch (err) {
      alert("Account creation failed");
    }
  };

  const handleForgotPasswordSubmit = async (email) => {
    setLoading(true);
    const res = await forgotPassword(email);
    setLoading(false);
    if (res.success) {
      setToast({ message: `Reset link sent to ${email}`, type: "success" });
      setTimeout(() => {
        setLoginOpen(false);
        setAuthForm("login");
        setToast({ message: "", type: "success" });
      }, 5000);
    } else {
      setToast({ message: res.message || "Something went wrong", type: "error" });
      setTimeout(() => setToast({ message: "", type: "error" }), 5000);
    }
  };

  const handleForgotPassword = () => setAuthForm("forgot");
  const handleBackToLogin = () => setAuthForm("login");

  return (
    <nav className="bg-amber-50 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <NavLink to="/" className="md:text-2xl text-l font-bold text-amber-800">
          SizaCrafts
        </NavLink>

        {/* Hamburger Mobile */}
        <button
          className="sm:hidden text-amber-800 text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } absolute sm:static top-13 left-0 w-full sm:w-auto bg-amber-50 sm:flex sm:space-x-6 shadow sm:shadow-none`}
        >
          {["/", "/about", "/products", "/contact"].map((link, idx) => {
            const label = link === "/" ? "Home" : link.slice(1).charAt(0).toUpperCase() + link.slice(2);
            return (
              <NavLink
                key={idx}
                to={link}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md font-medium transition border-b-2 ${
                    isActive
                      ? "border-amber-700"
                      : "border-transparent hover:border-amber-700"
                  } text-gray-800 hover:text-amber-700`
                }
              >
                {label}
              </NavLink>
            );
          })}

          {/* Account Dropdown */}
          <div className="relative" ref={accountRef}>
            <button
              onClick={() => setAccountOptions(!accountOptions)}
              className="block bg-amber-700 text-white mx-4 my-2 px-4 py-2 rounded hover:bg-amber-800 transition"
            >
              Account
            </button>

            {accountOptions && (
              <div className="absolute left-0 w-40 bg-white shadow rounded">
                <button
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  onClick={() => setLoginOpen(true)}
                >
                  Login
                </button>
                <button
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  onClick={() => setRegisterOpen(true)}
                >
                  Create Account
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modals */}
      <Modal isOpen={loginOpen} onClose={() => setLoginOpen(false)}>
        {authForm === "login" ? (
          <LoginForm
            onSubmit={handleLogin}
            onCancel={() => setLoginOpen(false)}
            loading={loading}
            error={loginError}
            onForgotPassword={handleForgotPassword}
          />
        ) : (
          <ForgotPasswordForm
            onSubmit={handleForgotPasswordSubmit}
            onCancel={handleBackToLogin}
            loading={loading}
          />
        )}
      </Modal>

      <Modal isOpen={registerOpen} onClose={() => setRegisterOpen(false)}>
        <UserForm
          role="customer"
          onSubmit={handleCustomerRegister}
          onClose={() => setRegisterOpen(false)}
        />
      </Modal>

      {toast.message && (
        <ToastModal
          message={toast.message}
          type={toast.type}
          duration={5000}
          onClose={() => setToast({ message: "", type: toast.type })}
        />
      )}
    </nav>
  );
}
