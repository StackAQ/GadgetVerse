'use client';

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      className="relative text-white py-24 px-4 text-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1611186871348-b2f61a9e1ac7?auto=format&fit=crop&w=1350&q=80')",
      }}
    >
      
      <div className="absolute inset-0 bg-black bg-opacity-70" />

      <div className="relative z-10 max-w-3xl mx-auto">
        <motion.h1
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight"
        >
          GadgetVerse
        </motion.h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300">
          Smart Tech. Smarter Design. Explore custom gadgets like never before.
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <Button className="mt-8 px-8 py-4 text-lg font-semibold rounded-xl bg-accent text-black shadow-lg hover:scale-105 transition">
            Explore Gadgets
          </Button>
        </motion.div>
      </div>
    </section>
  );
}