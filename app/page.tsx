import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Hero />
      {/* Add FeaturedProducts and more later */}
      <Footer />
    </main>
  );
}
