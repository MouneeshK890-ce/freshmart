import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";

const Success = () => {
  const orderId = "FM-" + Math.floor(100000 + Math.random() * 900000);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col text-center max-w-md w-full">
        <div className="text-white bg-green-600 rounded-full p-4 text-3xl mb-3 self-center">
          <FaCheck />
        </div>

        <h1 className="text-2xl font-bold mb-2">Order Placed Successfully!</h1>

        <p className="text-gray-500 font-medium mb-6">
          Order ID: <span className="text-green-600">{orderId}</span>
        </p>

        <p className="text-gray-600 mb-6">
          Thank you for shopping with us. Your order is being processed — we’ll
          deliver it soon! 🚚
        </p>

        <Link
          to="/"
          className="bg-green-600 text-white py-2 px-6 rounded inline-block"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default Success;
