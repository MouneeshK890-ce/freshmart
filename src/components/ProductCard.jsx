import { ShoppingCart } from "lucide-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../Redux/CartSlice";
import { Flip, toast } from "react-toastify";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);

  const addToCart = (product) => {
    const productExists = cart.some((item) => item.id === product.id);
    if (productExists) {
      let newUnit = product.unit;
      newUnit += 1;
      dispatch(setCart([...cart])); // return the same cart without adding duplicate product
      toast.info("Product is already in the cart", {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Flip,
      });
    } else {
      dispatch(setCart([...cart, product])); // Add products if not already in cart
      toast.success("Product is added to your cart!", {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Flip,
      });
    }
  };

  return (
    <div className="overflow-hidden transition-all hover:shadow-md border border-gray-200 rounded-lg">
      <div>
        <div className=" bg-gray-200 ">
          <img
            src={product.image}
            alt={product.name}
            className="object-cover w-full h-48.75"
          />
        </div>
        <div className="px-3 border-t-2 border-gray-200">
          <p className="text-sm mt-1 text-gray-700">{product.category}</p>
          <h3 className="font-semibold text-sm mt-1 h-10 text-gray-900 line-clamp-2">
            {product.name}
          </h3>
          <p className="text-sm text-gray-900 mt-1">{product.quantity}</p>
          <p className="font-bold mt-1 text-gray-900 ">
            ₹{product.price?.toFixed(2)}
          </p>
        </div>
      </div>
      <div className="p-4 pt-1">
        <button
          onClick={() => addToCart(product)}
          className="w-full bg-green-600 hover:bg-green-700 text-white flex items-center justify-center py-2 rounded-lg cursor-pointer"
        >
          <ShoppingCart className="w-4 h-4 mr-2" /> Add to Cart{" "}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
