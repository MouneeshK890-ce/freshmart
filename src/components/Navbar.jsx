import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import { ShoppingCart } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import CartComp from "./CartComp";
import { useSelector, useDispatch } from "react-redux";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import { logout } from "../Redux/AuthSlice";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [isNavOpen, setIsNavOpen] = useState(false);

  const { cart } = useSelector((state) => state.cart);

  const { isAuthenticated } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClose = () => {
    setIsOpen(false);
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div>
      <div className="mx-auto flex justify-between px-6 py-3 fixed top-0 z-20 bg-green-100 w-full border border-gray-100 shadow-xl lg:px-45">
        {/* logo section */}
        <Link to={"/"}>
          {" "}
          <img src={Logo} alt="" className="md:w-52 w-40" />
        </Link>
        {/* menu section */}
        <nav className="flex md:gap-5 gap-4">
          <ul className="text-xl font-semibold md:flex items-center gap-7 hidden">
            <Link to={"/"}>
              <li>Home</li>
            </Link>
            <Link to={"/shop"}>
              <li>Shop</li>
            </Link>
            <Link to={"/about"}>
              <li>About</li>
            </Link>
            <Link to={"/contact"}>
              <li>Contact</li>
            </Link>
          </ul>
          <Link
            className="relative md:mt-[0.55rem] mt-[0.2rem]"
            onClick={() => setIsOpen(true)}
          >
            <ShoppingCart className="w-6 h-6" />
            <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center ">
              {cart.length}
            </span>
          </Link>
          {isAuthenticated ? (
            <button
              onClick={() => {
                dispatch(logout());
                navigate('/');
              }}
              className="px-3 py-1 w-max rounded-md bg-blue-500 cursor-pointer text-white gap-1 hidden md:block"
            >
              Logout
            </button>
          ) : (
            <Link to={"/login"} className="mt-[0.3rem]">
              <button className="px-3 py-1 w-max rounded-md bg-green-600 cursor-pointer text-white gap-1 hidden md:block">
                Login
              </button>
            </Link>
          )}
          {isNavOpen ? (
            <HiMenuAlt3
              className="h-7 w-7 md:hidden cursor-pointer"
              onClick={toggleNav}
            />
          ) : (
            <HiMenuAlt1
              className="h-7 w-7 md:hidden cursor-pointer"
              onClick={toggleNav}
            />
          )}
        </nav>
      </div>

      {isNavOpen && (
        <ResponsiveMenu isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      )}

      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black/70 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
      <CartComp isOpen={isOpen} onClose={onClose} />
    </div>
  );
};

export default Navbar;
