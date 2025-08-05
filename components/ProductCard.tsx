type ProductProps = {
  id: string;
  name: string;
  price: string;
  image: string;
  category: string;
};

export default function ProductCard({ name, price, image }: ProductProps) {
  return (
    <div className="bg-gray-100 rounded-xl shadow hover:shadow-md transition">
      <img
        src={image}
        alt={name}
        className="w-full h-40 object-cover rounded-t-xl"
      />
      <div className="p-4">
        <h4 className="font-semibold text-lg">{name}</h4>
        <p className="text-accent font-medium mt-1">{price}</p>
      </div>
    </div>
  );
}