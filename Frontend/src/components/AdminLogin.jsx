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
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h3 className="text-2xl font-bold mb-6 text-center text-blue-600">Admin Signin</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              placeholder="Enter your fullname"
              className={`mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.fullname ? 'border-red-500' : 'border-gray-300'} focus:ring-blue-500`}
              {...register("fullname", { required: true })}
            />
            {errors.fullname && <span className="text-sm text-red-500">This field is required</span>}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className={`mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:ring-blue-500`}
              {...register("email", { required: true })}
            />
            {errors.email && <span className="text-sm text-red-500">This field is required</span>}
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className={`mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.password ? 'border-red-500' : 'border-gray-300'} focus:ring-blue-500`}
              {...register("password", { required: true })}
            />
            {errors.password && <span className="text-sm text-red-500">This field is required</span>}
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition duration-200"
          >
            Signin
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminSignup;
