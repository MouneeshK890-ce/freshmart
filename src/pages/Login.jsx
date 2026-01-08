import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../Redux/AuthSlice";
import { IoIosArrowForward } from "react-icons/io";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isAuthenticated, user } = useSelector((state) => state.auth);

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

  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      {isAuthenticated && user ? (
        <div className="bg-white shadow-md p-6 flex flex-col items-center rounded-md w-90">
          <h1 className="text-6xl">🔐</h1>
          <h2 className="text-2xl font-bold mb-1">Login successful</h2>
          <p className="font-semibold text-sm text-gray-500">
            Shop confidently with secure and fast checkout
          </p>
          <hr className="w-full mb-2 mt-1 text-gray-500"/>
          <p className="font-semibold text-gray-500">
            Fresh groceries delivered to your doorstep
          </p>
          <button onClick={() => navigate('/shop')} className="flex items-center justify-center cursor-pointer font-semibold bg-green-600 mt-3 gap-2 text-white rounded py-2 w-fit px-3">
              Go to Shop
            <IoIosArrowForward size={20}/>
          </button>
          <p className="font-bold mt-2 text-gray-600 text-sm">Wellcome back! {user.username}</p>
        </div>
     
      ) : (
           <form
          className="bg-white shadow-md p-6 rounded-md w-90"
          onSubmit={handleSubmit}
        >
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
      )}
    </div>
  );
};

export default Login;
