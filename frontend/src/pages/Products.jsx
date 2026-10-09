import SectionTitle from "../components/SectionTitle";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";
import { useState } from "react";

export default function Products({ onAddToCart }) {
  const [searchTerm, setSearchTerm] = useState(""); // Placeholder for search term state
  const [selectedCategory, setSelectedCategory] = useState("All categories"); // Placeholder for category filter state
  const [sortOption, setSortOption] = useState("Sort by"); // Placeholder for sort option state
  const filteredProducts = products.filter((product) => {
    return (
      product.title.toLowerCase().includes(searchTerm.toLowerCase().trim()) &&
      (selectedCategory === "All categories" ||
        product.category === selectedCategory)
    );
  });

  const sortedProducts = [...filteredProducts];
  if (sortOption === "Price: Low to High") {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sortOption === "Price: High to Low") {
    sortedProducts.sort((a, b) => b.price - a.price);
  }

  function resetFilters() {
    setSearchTerm("");
    setSelectedCategory("All categories");
    setSortOption("Sort by");
  }
  return (
    <main className="container-page section-space">
      <SectionTitle
        eyebrow="Catalog"
        title="All products"
        text="Static controls. Your job is to connect them to state later."
      />
      <div className="card mb-8 grid gap-4 p-5 md:grid-cols-4">
        <input
          className="rounded-xl border px-4 py-3 outline-none"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="rounded-xl border px-4 py-3"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option>All categories</option>
          <option>Audio</option>
          <option>Tech</option>
        </select>
        <select
          className="rounded-xl border px-4 py-3"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option>Sort by</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
        </select>
        <button onClick={resetFilters} className="rounded-xl bg-green-500 px-4 py-3 font-semibold text-white">
          Reset filters
        </button>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
        ))}
      </div>
    </main>
  );
}
