import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../Redux/AuthSlice";

const ResponsiveMenu = ({ isNavOpen, setIsNavOpen }) => {
  const { user, isAuthenticated } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div
      className={`${
        isNavOpen ? "left-0" : "left-full"
      } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-green-100 px-8 pb-6 pt-16 text-black md:hidden rounded-r-xl shadow-md transition-all`}
    >
      <div>
        <div>
          <h1 className="text-green-600 text-3xl font-bold">FreshMart</h1>
        </div>

        {isAuthenticated && user && (
          <h2 className="mt-3 text-xl font-semibold">Hi, {user.username}</h2>
        )}

        <nav className="mt-12 ">
          <ul className="flex flex-col gap-7 text-xl font-semibold">
            <Link
              to={"/"}
              className="cursor-pointer"
              onClick={() => setIsNavOpen(false)}
            >
              <li>Home</li>
            </Link>
            <Link
              to={"/shop"}
              className="cursor-pointer"
              onClick={() => setIsNavOpen(false)}
            >
              <li>Shop</li>
            </Link>
            <Link
              to={"/about"}
              className="cursor-pointer"
              onClick={() => setIsNavOpen(false)}
            >
              <li>About</li>
            </Link>
            <Link
              to={"/contact"}
              className="cursor-pointer"
              onClick={() => setIsNavOpen(false)}
            >
              <li>Contact</li>
            </Link>
            {isAuthenticated ? (
              <button
                onClick={() => {
                  dispatch(logout());
                  navigate("/");
                  setIsNavOpen(false);
                }}
                className="px-3 py-1 w-max cursor-pointer rounded-md bg-blue-500 text-white flex items-center gap-1"
              >
                Logut
                <FaChevronLeft />
              </button>
            ) : (
              <Link to={"/login"} onClick={() => setIsNavOpen(false)}>
                <button className="px-3 py-1 w-max cursor-pointer rounded-md bg-green-600 text-white flex items-center gap-1">
                  Login
                  <FaChevronRight />
                </button>
              </Link>
            )}
          </ul>
        </nav>
      </div>
      <div>
        <h1>Made with Mouneesh</h1>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
