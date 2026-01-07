import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../Redux/AuthSlice";



const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      login({
        username: formData.username,
        email: formData.email,
      })
    );

    alert("Logged in successfully!");
    navigate('/')
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <form className="bg-white shadow-md p-6 rounded-md w-90" onSubmit={handleSubmit}>
        <h2 className="text-xl font-bold mb-4">Login</h2>

        <label className="block mb-2 text-sm">Username</label>
        <input
          type="text"
          value={formData.username}
          name="username"
          className="border w-full p-2 mb-3"
          onChange={handleChange}
          required
        />

        <label className="block mb-2 text-sm">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          className="border w-full p-2 mb-3"
          onChange={handleChange}
          required
        />

        <label className="block mb-2 text-sm">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          className="border w-full p-2 mb-4"
          onChange={handleChange}
          required
        />

        <button className="bg-green-600 text-white w-full py-2 rounded">
          Log-in
        </button>
      </form>
    </div>
  );
};

export default Login;
