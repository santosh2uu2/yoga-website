import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function AdminLogin() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const adminInfo = {
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4001/admin/login", adminInfo)
      .then((res) => {
        if (res.data) {
          toast.success("Admin Logged in Successfully");
          localStorage.setItem("Admin", JSON.stringify(res.data.admin));
          setTimeout(() => {
            navigate("/admin");
          }, 1000);
        }
      })
      .catch((err) => {
        if (err.response) {
          toast.error("Error: " + err.response.data.message);
        }
      });
  };

  return (
    <div>
      <h3>Admin Login</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            type="email"
            placeholder="Enter your email"
            {...register("email", { required: true })}
          />
          {errors.email && <span>This field is required</span>}
        </div>
        <div>
          <input
            type="password"
            placeholder="Enter your password"
            {...register("password", { required: true })}
          />
          {errors.password && <span>This field is required</span>}
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default AdminLogin;
