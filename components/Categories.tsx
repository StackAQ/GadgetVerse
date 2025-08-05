'use client';

import { categories } from "@/data/products";
import Link from "next/link";
import Image from "next/image";

export default function Categories() {
  return (
    <section className="py-12 px-4 bg-gray-50 text-black">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold">Shop by Category</h2>
        <p className="text-gray-600 mt-2">Explore what you need faster</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            href={cat.link}
            className="block border rounded-lg overflow-hidden hover:shadow-md transition"
          >
            <div className="relative w-full aspect-[4/3]">
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-2 text-center font-medium">{cat.name}</div>
          </Link>
        ))}
      </div>
    </section>
  );
}