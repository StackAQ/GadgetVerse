import Image from "next/image";

interface ProductProps {
  id: string;
  name: string;
  price: string;
  image: string;
  category: string;
}

export default function ProductCard({ name, price, image }: ProductProps) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-md transition overflow-hidden">
      <Image
        src={image}
        alt={name}
        width={400}
        height={400}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h4 className="font-semibold text-lg">{name}</h4>
        <p className="text-accent text-sm mt-1">{price}</p>
      </div>
    </div>
  );
}