"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const categories = ["Phones", "Laptops", "Gaming", "Accessories", "Smart Home"];

const CategoryMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="flex items-center gap-1 hover:text-blue-500"
        onClick={() => setOpen(!open)}
      >
        Categories <ChevronDown size={18} />
      </button>

      {open && (
        <div className="absolute top-full left-0 mt-2 w-48 bg-white border rounded shadow-lg z-50">
          {categories.map((cat) => (
            <Link
              key={cat}
              href={`/categories/${cat.toLowerCase()}`}
              className="block px-4 py-2 hover:bg-gray-100"
              onClick={() => setOpen(false)}
            >
              {cat}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryMenu;