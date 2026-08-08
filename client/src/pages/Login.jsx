import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../context/AuthContext";
import API from "../api/authApi";

function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
  setLoading(true);

  try {
    const response = await API.post("/auth/login", {
      email: data.email,
      password: data.password,
    });

    login(response.data.user, response.data.token);

    alert(response.data.message);

    navigate("/");
  } catch (error) {
    console.log(error);

    alert(
      error.response?.data?.message || "Login Failed"
    );
  } finally {
    setLoading(false);
  }
};

  return (
    <section className="bg-slate-950 min-h-screen flex items-center justify-center px-6 py-10">
  <div className="w-full max-w-md bg-slate-900 rounded-2xl shadow-2xl p-8 border border-slate-800">

    <h1 className="text-4xl font-bold text-white text-center">
      Welcome Back
    </h1>

    <p className="text-slate-400 text-center mt-3">
      Login to continue shopping at TechStore.
    </p>

    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-8 space-y-5"
    >

      {/* Email */}
      <div>

        <input
          type="email"
          placeholder="Enter your email"
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
          placeholder="Enter your password"
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

      {/* Remember + Forgot */}
      <div className="flex items-center justify-between text-sm">

        <label className="flex items-center gap-2 text-slate-300 cursor-pointer">
          <input type="checkbox" />
          Remember Me
        </label>

        <button
          type="button"
          className="text-blue-500 hover:text-blue-400"
        >
          Forgot Password?
        </button>

      </div>

      {/* Login Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-700 text-white py-4 rounded-xl font-semibold transition"
      >
        {loading ? "Logging In..." : "Login"}
      </button>

    </form>

    <p className="text-center text-slate-400 mt-8">
      Don't have an account?{" "}
      <Link
        to="/register"
        className="text-blue-500 hover:underline"
      >
        Register
      </Link>
    </p>

  </div>
</section>
  );
}

export default Login;