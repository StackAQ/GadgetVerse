'use client';

import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Search, ShoppingCart, User } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">
        
        <Link href="/" className="text-xl font-bold text-black">
          GadgetVerse
        </Link>

        <div className="flex-1 mx-6 hidden md:flex">
          <Input
            type="search"
            placeholder="Search gadgets, brands, accessories..."
            className="w-full max-w-lg"
          />
        </div>

        <div className="flex items-center gap-4">
          <Link href="/account" className="flex items-center gap-1 text-sm text-black hover:text-accent">
            <User size={20} />
            <span className="hidden md:inline">Account</span>
          </Link>
          <Link href="/cart" className="relative text-black hover:text-accent">
            <ShoppingCart size={22} />
            {/* Optional cart badge */}
            {/* <span className="absolute -top-1 -right-2 bg-accent text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">3</span> */}
          </Link>
        </div>
      </div>

      <nav className="bg-gray-100 py-2 px-4 text-sm hidden md:flex gap-6">
        <Link href="/categories/phones" className="hover:text-accent">Phones</Link>
        <Link href="/categories/wearables" className="hover:text-accent">Wearables</Link>
        <Link href="/categories/audio" className="hover:text-accent">Audio</Link>
        <Link href="/categories/accessories" className="hover:text-accent">Accessories</Link>
        <Link href="/categories/computing" className="hover:text-accent">Computing</Link>
      </nav>
    </header>
  );
}