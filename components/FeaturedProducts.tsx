'use client';

import ProductCard from "./ProductCard";
import products from "@/data/products";

export default function FeaturedProducts() {
  return (
    <section className="py-16 px-4 bg-white text-black">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Featured Gadgets</h2>
        <p className="text-gray-500 mt-2">Handpicked tech that you'll love</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
}
