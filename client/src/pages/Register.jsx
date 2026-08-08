import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../context/AuthContext";
import API from "../api/authApi";

function Register() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");
  const onSubmit = async (data) => {
  setLoading(true);

  try {
    const response = await API.post("/auth/register", {
      name: data.name,
      email: data.email,
      password: data.password,
    });

    login(response.data.user, response.data.token);

    alert(response.data.message);

    navigate("/");
  } catch (error) {
    console.log(error);

    alert(
      error.response?.data?.message || "Registration Failed"
    );
  } finally {
    setLoading(false);
  }
};


  return (
    <section className="bg-slate-950 min-h-screen flex items-center justify-center px-6 py-10">
  <div className="w-full max-w-lg bg-slate-900 rounded-2xl shadow-2xl p-8 border border-slate-800">

    <h1 className="text-4xl font-bold text-white text-center">
      Create Account
    </h1>

    <p className="text-slate-400 text-center mt-3">
      Join TechStore and start shopping today.
    </p>

    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-8 space-y-5"
    >

      {/* Full Name */}
      <div>

        <input
          type="text"
          placeholder="Full Name"
          {...register("name", {
            required: "Full name is required",
            minLength: {
              value: 3,
              message: "Minimum 3 characters",
            },
          })}
          className="w-full bg-slate-800 text-white p-4 rounded-xl outline-none border border-slate-700 focus:border-blue-500"
        />

        {errors.name && (
          <p className="text-red-500 text-sm mt-2">
            {errors.name.message}
          </p>
        )}

      </div>

      {/* Email */}
      <div>

        <input
          type="email"
          placeholder="Email Address"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: "Enter a valid email",
            },
          })}
          className="w-full bg-slate-800 text-white p-4 rounded-xl outline-none border border-slate-700 focus:border-blue-500"
        />

        {errors.email && (
          <p className="text-red-500 text-sm mt-2">
            {errors.email.message}
          </p>
        )}

      </div>

      {/* Password */}
      <div className="relative">

        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Minimum 6 characters",
            },
          })}
          className="w-full bg-slate-800 text-white p-4 rounded-xl outline-none border border-slate-700 focus:border-blue-500 pr-14"
        />

        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>

        {errors.password && (
          <p className="text-red-500 text-sm mt-2">
            {errors.password.message}
          </p>
        )}

      </div>

      {/* Confirm Password */}
      <div className="relative">

        <input
          type={showConfirmPassword ? "text" : "password"}
          placeholder="Confirm Password"
          {...register("confirmPassword", {
            required: "Confirm your password",
            validate: (value) =>
              value === password || "Passwords do not match",
          })}
          className="w-full bg-slate-800 text-white p-4 rounded-xl outline-none border border-slate-700 focus:border-blue-500 pr-14"
        />

        <button
          type="button"
          onClick={() =>
            setShowConfirmPassword(!showConfirmPassword)
          }
          className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
        >
          {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
        </button>

        {errors.confirmPassword && (
          <p className="text-red-500 text-sm mt-2">
            {errors.confirmPassword.message}
          </p>
        )}

      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-700 text-white py-4 rounded-xl font-semibold transition"
      >
        {loading ? "Creating Account..." : "Create Account"}
      </button>

    </form>

    <p className="text-slate-400 text-center mt-8">
      Already have an account?{" "}
      <Link
        to="/login"
        className="text-blue-500 hover:underline"
      >
        Login
      </Link>
    </p>

  </div>
</section>
  );
}

export default Register;