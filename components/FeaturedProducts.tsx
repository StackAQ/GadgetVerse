'use client';

import ProductCard from "./ProductCard";
import products from "@/data/products";
import Link from "next/link";

export default function FeaturedProducts() {
  // Group products by category
  const grouped = products.reduce((acc, product) => {
    if (!acc[product.category]) acc[product.category] = [];
    acc[product.category].push(product);
    return acc;
  }, {} as Record<string, typeof products>);

  return (
    <section id="featured" className="py-16 px-4 bg-white text-black">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Featured Gadgets</h2>
        <p className="text-gray-500 mt-2">Handpicked tech that you'll love</p>
      </div>

      <div className="space-y-16 max-w-6xl mx-auto">
        {Object.entries(grouped).map(([category, items]) => (
          <div key={category}>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-semibold">{category}</h3>
              <Link
                href={`/category/${category.toLowerCase()}`}
                className="text-accent font-medium hover:underline"
              >
                See All
              </Link>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
              {items.slice(0, 3).map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}