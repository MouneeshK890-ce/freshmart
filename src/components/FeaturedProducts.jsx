import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";
import { Link } from "react-router-dom";

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/MouneeshK890-ce/grocery-api/refs/heads/main/products.json"
      )
      .then((res) => {
        const shuffled = [...res.data].sort(() => Math.random() - 0.5);
        setProducts(shuffled.slice(0, 5));
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="py-12 px-3 md:px-0">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold md:pl-2 mb-8">Featured Products</h2>
        {loading ? (
          <p className="text-center py-6">Loading...</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-6 md:px-8">
            {products.map((product) => {
              return <ProductCard key={product.id} product={product} />;
            })}
          </div>
        )}
        <div className="mt-8 text-center">
          <Link to={'/shop'}>
            <button className="rounded-full border py-2 px-3 border-gray-500 cursor-pointer">
              View All Products
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
