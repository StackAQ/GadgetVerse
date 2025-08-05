import Link from "next/link";
import { X } from "lucide-react";

interface MobileDrawerProps {
  onClose: () => void;
}

const MobileDrawer = ({ onClose }: MobileDrawerProps) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 z-50">
      <div className="bg-white w-64 h-full shadow-lg p-5">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xl font-bold">Menu</span>
          <button onClick={onClose} aria-label="Close menu">
            <X />
          </button>
        </div>

        <nav className="flex flex-col gap-4">
          <Link href="/" onClick={onClose}>Home</Link>
          <Link href="/categories" onClick={onClose}>Categories</Link>
          <Link href="/deals" onClick={onClose}>Deals</Link>
          <Link href="/brands" onClick={onClose}>Brands</Link>
          <Link href="/support" onClick={onClose}>Support</Link>
          <Link href="/login" onClick={onClose}>Login</Link>
          <Link href="/cart" onClick={onClose}>Cart</Link>
        </nav>
      </div>
    </div>
  );
};

export default MobileDrawer;