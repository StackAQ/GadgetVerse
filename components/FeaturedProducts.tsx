'use client';

import ProductCard from "./ProductCard";
import { products } from "@/data/products";
import Link from "next/link";

export default function FeaturedProducts() {
  const grouped = products.reduce((acc, product) => {
    const category = product.category;
    if (!acc[category]) acc[category] = [];
    acc[category].push(product);
    return acc;
  }, {} as Record<string, typeof products>);

  return (
    <section id="featured" className="py-16 px-4 bg-white text-black">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Featured Products</h2>
        <p className="text-gray-500 mt-2">Top picks from each category</p>
      </div>

      <div className="space-y-16 max-w-6xl mx-auto">
        {Object.entries(grouped).map(([category, items]) => (
          <div key={category}>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-semibold">{category}</h3>
              <Link
                href={`/categories/${category.toLowerCase()}`}
                className="text-accent font-medium hover:underline"
              >
                See All
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {items.slice(0, 4).map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}