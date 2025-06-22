'use client';

import { motion } from "framer-motion";
import Image from "next/image";

type Product = {
  id: string;
  name: string;
  price: string;
  image: string;
};

export default function ProductCard({ id, name, price, image }: Product) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-gray-100 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all"
    >
      <Image
        src={image}
        alt={name}
        width={500}
        height={500}
        className="object-cover w-full h-64"
      />
      <div className="p-4">
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-sky-500 font-bold mt-1">{price}</p>
      </div>
    </motion.div>
  );
}
