'use client';

import { categories } from "@/data/products";
import Link from "next/link";
import Image from "next/image";

export default function Categories() {
  return (
    <section className="py-16 px-4 bg-gray-100 text-black">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Shop by Category</h2>
        <p className="text-gray-500 mt-2">Find your favorite tech with ease</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto">
        {categories.map((cat) => (
          <Link
            href={cat.link}
            key={cat.id}
            className="block bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition"
          >
            <div className="relative w-full h-40">
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold">{cat.name}</h3>
              <span className="text-sm text-accent font-medium">Shop Now →</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}