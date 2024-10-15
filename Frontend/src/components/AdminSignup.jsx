import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function AdminSignup() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const adminInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };

    try {
      const res = await axios.post("http://localhost:4001/admin/signup", adminInfo);
      if (res.data) {
        toast.success("Admin Signup Successfully");
        localStorage.setItem("Admin", JSON.stringify(res.data.admin));
        navigate("/admin");
      }
    } catch (err) {
      if (err.response) {
        toast.error("Error: " + err.response.data.message);
      } else {
        toast.error("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h3 className="text-3xl font-semibold mb-6 text-center text-gray-800">Admin Signup</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              placeholder="Enter your fullname"
              className={`mt-2 block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 ${errors.fullname ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'} transition duration-300`}
              {...register("fullname", { required: true })}
            />
            {errors.fullname && <span className="text-sm text-red-500 mt-1">This field is required</span>}
          </div>

          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className={`mt-2 block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'} transition duration-300`}
              {...register("email", { required: true })}
            />
            {errors.email && <span className="text-sm text-red-500 mt-1">This field is required</span>}
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className={`mt-2 block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 ${errors.password ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'} transition duration-300`}
              {...register("password", { required: true })}
            />
            {errors.password && <span className="text-sm text-red-500 mt-1">This field is required</span>}
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 transition duration-300"
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminSignup;
