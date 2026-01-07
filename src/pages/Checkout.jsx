import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCart } from "../Redux/CartSlice";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cart } = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [address, setAddress] = useState({
    name: "",
    house: "",
    street: "",
    city: "",
    pincode: "",
    phone: "",
  });

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.unit,
    0
  );

  function handlePlaceOrder() {
    // simple validation
    if (
      !address.name ||
      !address.phone ||
      !address.street ||
      !address.city ||
      !address.pincode
    ) {
      alert("Please fill all delivery details");
      return;
    }

    // clear cart
    dispatch(setCart([]));


    // redirect
    navigate("/success");
  }

  return (
    <div className="pt-24 min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      {/* Order Summary */}
      <div className="bg-white shadow p-4 rounded mb-4">
        <h2 className="font-semibold mb-2">Order Summary</h2>

        {cart.length === 0 ? (
          <p>No items in Cart</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="flex justify-between mb-1">
              <span>
                {item.name} x {item.unit}
              </span>
              <span>₹{item.price * item.unit}</span>
            </div>
          ))
        )}

        <hr className="my-3" />
        <div className="flex justify-between font-semibold">
          <span>Total</span>
          <span>₹{totalPrice + 5}</span>
        </div>
      </div>
      {/* Delivery Form */}
      <div className="grid grid-cols-1 gap-4">
        <h2 className="font-semibold mb-2">Delivery Details</h2>
        <input
          type="text"
          className="border-b p-2 rounded"
          value={address.name}
          placeholder="Full Name"
          onChange={(e) => setAddress({ ...address, name: e.target.value })}
        />
        <input
          type="text"
          className="border-b p-2 rounded"
          value={address.house}
          placeholder="House/ Flat / Floor NO."
          onChange={(e) => setAddress({ ...address, house: e.target.value })}
        />
        <input
          type="text"
          className="border-b p-2 rounded"
          value={address.street}
          placeholder="Apartment / Road / Area (Recommended)"
          onChange={(e) => setAddress({ ...address, street: e.target.value })}
        />
        <input
          type="text"
          className="border-b p-2 rounded"
          value={address.phone}
          placeholder="Receiver's Mobile Number"
          onChange={(e) => setAddress({ ...address, phone: e.target.value })}
        />
        <div className="grid grid-cols-2 gap-3">
          <input
            type="text"
            placeholder="city"
            className="border p-2 rounded"
            value={address.city}
            onChange={(e) => setAddress({ ...address, city: e.target.value })}
          />
          <input
            type="text"
            placeholder="Pincode"
            className="border p-2 rounded"
            value={address.pincode}
            onChange={(e) =>
              setAddress({ ...address, pincode: e.target.value })
            }
          />
        </div>
      </div>
      <button
        onClick={handlePlaceOrder}
        className="bg-green-600 text-white w-full py-3 cursor-pointer mt-4 rounded font-semibold"
      >
        Place Order
      </button>
    </div>
  );
};

export default Checkout;
