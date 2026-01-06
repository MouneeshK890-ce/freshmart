import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import axios from "axios";
import empty from "../assets/empty.jpg";
import { FaFilter } from "react-icons/fa";

const Shop = () => {
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("");
  const [openFilter, setOpenFilter] = useState(false);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/MouneeshK890-ce/grocery-api/refs/heads/main/products.json"
      )
      .then((res) => setProducts(res.data))
      .catch(() => setError("Failed to load products"))
      .finally(() => setLoading(false));
  }, []);

  const toggleFilter = () => {
    setOpenFilter(!openFilter);
  };

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (category === "" || product.category === category) &&
      product.price >= priceRange[0] &&
      product.price <= priceRange[1]
  );

  return (
    <div className="max-w-6xl mx-auto flex flex-col lg:gap-6 my-7 lg:mt-28 mt-24 h-max">
      {/* Filter Section */}
      <div className="col-span-1 p-4 bg-gray-100 h-max rounded-lg fixed w-70 mb-10 hidden md:block">
        <h2 className="text-lg font-semibold mb-4"></h2>
        <input
          placeholder="Search..."
          className="mb-4 bg-white p-2 w-full rounded-md"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select
          className="w-full p-2 border rounded mb-4"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All Category</option>
          <option value="Fruits">Fruites</option>
          <option value="Dairy">Dairy</option>
          <option value="Bakery">Bakery</option>
          <option value="Vegetables">Vegetables</option>
          <option value="Meat">Meat</option>
        </select>
        <div className="mb-4">
          <label>
            Price Range: ₹{priceRange[0]} - ₹{priceRange[1]}
          </label>
          <input
            type="range"
            min="0"
            max="500"
            value={priceRange[1]}
            onChange={(e) =>
              setPriceRange([priceRange[0], Number(e.target.value)])
            }
          />
        </div>
        <button
          onClick={() => {
            setSearchQuery("");
            setCategory("");
            setPriceRange([0, 500]);
          }}
          className="bg-red-500 px-3 py-1 rounded-md text-white cursor-pointer"
        >
          Rest Filters
        </button>
      </div>
      {/* Mobile filter */}
      <div
        className={`md:hidden bg-gray-100 flex justify-between items-center mx-4 px-4 py-3 ${
          openFilter ? "rounded-t-md" : "rounded-md"
        }`}
      >
        <h1 className="fonr-semibold text-lg">Filters</h1>
        <FaFilter
          onClick={toggleFilter}
          className="text-gray-800 cursor-pointer"
        />
      </div>
      {openFilter ? (
        <div className="bg-gray-100 p-4 mx-4 rounded-b-md md-hidden">
          <input
            placeholder="Search..."
            className="mb-4 bg-white p-2 w-full rounded-md"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <select
            className="w-full p-2 border rounded mb-4"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">All Category</option>
            <option value="Fruits">Fruites</option>
            <option value="Dairy">Dairy</option>
            <option value="Bakery">Bakery</option>
            <option value="Vegetables">Vegetables</option>
            <option value="Meat">Meat</option>
          </select>
          <div className="mb-4 flex flex-col gap-2">
            <label>
              Price Range: ₹{priceRange[0]} - ₹{priceRange[1]}
            </label>
            <input
              type="range"
              min="0"
              max="500"
              value={priceRange[1]}
              onChange={(e) =>
                setPriceRange([priceRange[0], Number(e.target.value)])
              }
              className="w-37.5"
            />
          </div>
          <button
            onClick={() => {
              setSearchQuery("");
              setCategory("");
              setPriceRange([0, 500]);
            }}
            className="bg-red-500 px-3 py-1 rounded-md text-white cursor-pointer"
          >
            Rest Filters
          </button>
        </div>
      ) : (
        <div></div>
      )}

      {/* products section */}

      {loading ? (
        <p className="col-span-full text-center">Loading...</p>
      ) : error ? (
        <p className="col-span-full text-red-500 text-center">{error}</p>
      ) : filteredProducts.length === 0 ? (
        <div className="lg:ml-75 flex justify-center">
          <img src={empty} alt="No products" className="w-125" />
        </div>
      ) : (
        <div className="col-span-3 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:ml-75 px-4 md:px-0 mt-6 md:mt-0">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Shop;
