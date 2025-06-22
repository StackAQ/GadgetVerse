'use client';

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="text-center py-20 bg-gradient-to-b from-gray-900 to-black text-white">
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-bold"
      >
        GadgetVerse
      </motion.h1>
      <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-xl mx-auto">
        Smart Tech. Smarter Design. Explore custom gadgets like never before.
      </p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        className="mt-8 px-6 py-3 bg-accent text-black font-semibold rounded-xl shadow-lg"
      >
        Explore Gadgets
      </motion.button>
    </section>
  );
}
