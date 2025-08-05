'use client'

import { categories } from "@/data/products";
import Link from "next/link";

export default function Categories() {
  return (
    <section className="py-16 px-4 bg-gray-100 text-black">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Shop by Category</h2>
        <p className="text-gray-600 mt-2">Find gadgets based on your interest</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {categories.map((cat) => (
          <Link
            href={cat.link}
            key={cat.id}
            className="group bg-white rounded-xl shadow hover:shadow-lg transition"
          >
            <div className="overflow-hidden rounded-t-xl">
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-40 object-cover group-hover:scale-105 transition"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="font-semibold text-lg">{cat.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}