'use client';

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section
  className="relative text-white py-24 px-4 text-center bg-cover bg-center"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1413708617479-50918bc877eb?auto=format&fit=crop&w=1600&q=80')",
  }}
>
  <div className="absolute inset-0 bg-black bg-opacity-70" />
  <div className="relative z-10 max-w-3xl mx-auto">
    <h1 className="text-4xl md:text-6xl font-bold">GadgetVerse</h1>
    <p className="mt-4 text-lg md:text-xl text-gray-300">
      Smart Tech. Smarter Design. Explore custom gadgets like never before.
    </p>
    <motion.a
  href="#featured"
  whileHover={{ scale: 1.05 }}
  className="mt-8 inline-block px-6 py-3 bg-accent text-black font-semibold rounded-xl shadow-lg transition"
>
  Explore Gadgets
</motion.a>
  </div>
</section>
  );
}