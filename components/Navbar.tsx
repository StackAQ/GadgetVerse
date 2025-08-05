"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import MobileDrawer from "./MobileDrawer";
import CategoryMenu from "./CategoryMenu";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <header className="border-b bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left: Logo */}
        <Link href="/" className="text-xl font-bold">
          GadgetVerse
        </Link>

        {/* Center: Search bar */}
        <div className="hidden md:flex flex-1 mx-4 max-w-lg">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring"
          />
        </div>

        {/* Right: Nav Links + Cart */}
        <div className="hidden md:flex items-center gap-6">
          <CategoryMenu />

          <Link href="/deals">Deals</Link>
          <Link href="/brands">Brands</Link>
          <Link href="/support">Support</Link>
          <Link href="/login">Login</Link>

          <Link href="/cart" className="relative">
            <ShoppingCart />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
              3
            </span>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden"
          onClick={() => setIsDrawerOpen(true)}
          aria-label="Open menu"
        >
          <Menu />
        </button>
      </div>

      {/* Mobile Drawer */}
      {isDrawerOpen && (
        <MobileDrawer onClose={() => setIsDrawerOpen(false)} />
      )}
    </header>
  );
};

export default Navbar;