import React, { useState } from "react";
import {
  FaApple,
  FaGoogle,
  FaEnvelope,
  FaLock,
  FaUser,
  FaEye,
  FaEyeSlash,
  FaUserCog,
} from "react-icons/fa";

const AuthPage = () => {
  const [activeModal, setActiveModal] = useState(null); // 'login' or 'signup'
  const [showPassword, setShowPassword] = useState(false);
  const Role = ["Tutor", "Student", "School Representative", "Proctor"];
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fullName: "",
    role: "",
  });

  const AuthModal = ({ type }) => {
    const isLogin = type === "login";

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(`${type} with:`, formData);
      // Handle auth logic here
    };

    const handleInputChange = (e) => {
      setFormData((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    };

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop with blur effect */}
        <div
          className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setActiveModal(null)}
        />

        {/* Modal */}
        <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md transform transition-all duration-300 scale-95 hover:scale-100">
          {/* Header */}
          <div className="p-8 pb-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                {isLogin ? "Welcome Back" : "Create Account"}
              </h2>
              <button
                onClick={() => setActiveModal(null)}
                className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors duration-200"
              >
                <span className="text-xl text-gray-500">×</span>
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {!isLogin && (
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <div className="relative">
                    <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-all duration-200 outline-none"
                      required={!isLogin}
                    />
                  </div>
                </div>
              )}
              {!isLogin && (
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Role
                  </label>
                  <div className="relative">
                    <FaUserCog
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm"
                      size={20}
                    />
                    <input
                      type="text"
                      name="role"
                      value={formData.role}
                      onChange={handleInputChange}
                      placeholder="Enter your Role eg: Tutor, Student, Propretor"
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-all duration-200 outline-none"
                      required={!isLogin}
                    />
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <div className="relative">
                  <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-all duration-200 outline-none"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="relative">
                  <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Enter your password"
                    className="w-full pl-12 pr-12 py-3 border border-gray-300 rounded-xl focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-all duration-200 outline-none"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>

              {isLogin && (
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-gray-300 text-gray-900 focus:ring-gray-900"
                    />
                    <span className="text-gray-600">Remember me</span>
                  </label>
                  <button
                    type="button"
                    className="text-gray-900 font-medium hover:text-gray-700 transition-colors duration-200"
                  >
                    Forgot password?
                  </button>
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-gray-900 text-white font-semibold py-3 px-4 rounded-xl hover:bg-gray-800 active:scale-95 transition-all duration-200"
              >
                {isLogin ? "Sign In" : "Create Account"}
              </button>
            </form>
          </div>

          {/* Footer */}
          <div className="px-8 py-6 border-t border-gray-200 bg-gray-50 rounded-b-2xl">
            <p className="text-center text-sm text-gray-600">
              {isLogin
                ? "Don't have an account? "
                : "Already have an account? "}
              <button
                type="button"
                onClick={() => setActiveModal(isLogin ? "signup" : "login")}
                className="text-gray-900 font-semibold hover:text-gray-700 transition-colors duration-200"
              >
                {isLogin ? "Sign up" : "Sign in"}
              </button>
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white flex">
      {/* Illustration Section */}
      <div className="hidden lg:flex lg:flex-1 bg-gradient-to-br from-gray-50 to-blue-50 items-center justify-center p-12">
        <div className="max-w-md text-center">
          {/* Abstract Auth Illustration */}
          <div className="relative mb-8">
            <div className="w-80 h-80 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl flex items-center justify-center mx-auto">
              <div className="relative">
                {/* User Icon */}
                <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-6">
                  <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center">
                    <FaLock className="text-white text-lg" />
                  </div>
                </div>

                {/* Security Shield */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center">
                  <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-sm">✓</span>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-blue-200 rounded-2xl opacity-60"></div>
                <div className="absolute -bottom-8 right-4 w-10 h-10 bg-purple-200 rounded-2xl opacity-40"></div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Secure Access to Your Learning Journey
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Join thousands of students who trust us with their academic success.
            Your data is protected with enterprise-grade security.
          </p>
        </div>
      </div>

      {/* Auth Section */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gray-900 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">TP</span>
              </div>
              <h1 className="text-2xl font-bold text-gray-900">TestPrep</h1>
            </div>

            <h2 className="text-4xl font-bold text-gray-900 mb-4">Welcome</h2>
            <p className="text-gray-600 text-lg">
              Sign in to your account or create a new one
            </p>
          </div>

          {/* Social Sign In */}
          <div className="space-y-4 mb-8">
            <button className="w-full flex items-center justify-center gap-3 py-3 px-4 border-2 border-gray-300 rounded-xl hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 group">
              <FaGoogle className="text-gray-700 text-lg" />
              <span className="font-medium text-gray-900">
                Continue with Google
              </span>
            </button>

            <button className="w-full flex items-center justify-center gap-3 py-3 px-4 border-2 border-gray-300 rounded-xl hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 group">
              <FaApple className="text-gray-700 text-lg" />
              <span className="font-medium text-gray-900">
                Continue with Apple
              </span>
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center mb-8">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="px-4 text-sm text-gray-500 font-medium">OR</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* Email Auth Options */}
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => setActiveModal("login")}
              className="py-3 px-6 border-2 border-gray-900 text-gray-900 font-semibold rounded-xl hover:bg-gray-900 hover:text-white active:scale-95 transition-all duration-200"
            >
              Sign In
            </button>

            <button
              onClick={() => setActiveModal("signup")}
              className="py-3 px-6 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 active:scale-95 transition-all duration-200"
            >
              Sign Up
            </button>
          </div>

          {/* Footer */}
          <div className="mt-12 text-center">
            <p className="text-sm text-gray-500">
              By continuing, you agree to our{" "}
              <button className="text-gray-900 font-medium hover:text-gray-700 transition-colors duration-200">
                Terms of Service
              </button>{" "}
              and{" "}
              <button className="text-gray-900 font-medium hover:text-gray-700 transition-colors duration-200">
                Privacy Policy
              </button>
            </p>
          </div>
        </div>
      </div>

      {/* Modals */}
      {activeModal === "login" && <AuthModal type="login" />}
      {activeModal === "signup" && <AuthModal type="signup" />}
    </div>
  );
};

export default AuthPage;
