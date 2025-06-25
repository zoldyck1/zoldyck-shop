<<<<<<< HEAD
import { Header } from "@/components/header";
import { ProductList } from "@/components/product-list";
import type { Product } from "@/lib/types";
=======
"use client";

import { useRef } from "react";
import { Header } from "@/components/header";
import { ProductList } from "@/components/product-list";
import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";
import type { Product } from "@/lib/types";
import { FluidBackground } from "@/components/fluid-background";
>>>>>>> a630d1c (Update contact and footer links, center footer buttons, and change shop name to Proxy Shop)

const products: Product[] = [
  {
    id: 1,
<<<<<<< HEAD
    name: "Acoustic Guitar",
    price: "$299.99",
    image: "https://placehold.co/600x400.png",
    imageHint: "acoustic guitar",
  },
  {
    id: 2,
    name: "Wireless Headphones",
    price: "$149.99",
    image: "https://placehold.co/600x400.png",
    imageHint: "wireless headphones",
  },
  {
    id: 3,
    name: "Modern Bookshelf",
    price: "$249.99",
    image: "https://placehold.co/600x400.png",
    imageHint: "modern bookshelf",
  },
  {
    id: 4,
    name: "Espresso Machine",
    price: "$499.99",
    image: "https://placehold.co/600x400.png",
    imageHint: "espresso machine",
  },
  {
    id: 5,
    name: "Smart Watch",
    price: "$279.99",
    image: "https://placehold.co/600x400.png",
    imageHint: "smart watch",
  },
  {
    id: 6,
    name: "Leather Backpack",
    price: "$189.99",
    image: "https://placehold.co/600x400.png",
    imageHint: "leather backpack",
  },
  {
    id: 7,
    name: "Yoga Mat",
    price: "$49.99",
    image: "https://placehold.co/600x400.png",
    imageHint: "yoga mat",
  },
  {
    id: 8,
    name: "Desk Lamp",
    price: "$89.99",
    image: "https://placehold.co/600x400.png",
    imageHint: "desk lamp",
  },
];


export default function Home() {
  return (
    <div className="bg-background min-h-screen text-foreground">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ProductList products={products} />
      </main>
      <footer className="py-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} ShopSimple. All Rights Reserved.
      </footer>
=======
    name: "Chrollo",
    price: "$299.99",
    image: "/images/products/chrollo.jfif",
    imageHint: "Chrollo",
  },
  {
    id: 2,
    name: "Hisoka",
    price: "$149.99",
    image: "/images/products/hisoka.jfif",
    imageHint: "Hisoka",
  },
  {
    id: 3,
    name: "Icone Novel",
    price: "$249.99",
    image: "/images/products/icone novel.webp",
    imageHint: "Icone Novel",
  },
  {
    id: 4,
    name: "Killua",
    price: "$499.99",
    image: "/images/products/killua.webp",
    imageHint: "Killua",
  },
  {
    id: 5,
    name: "Logic",
    price: "$279.99",
    image: "/images/products/logic.jpg",
    imageHint: "Logic",
  },
  {
    id: 6,
    name: "Novel",
    price: "$189.99",
    image: "/images/products/novel.jpeg",
    imageHint: "Novel",
  },
  {
    id: 7,
    name: "Philo",
    price: "$49.99",
    image: "/images/products/philo.jpeg",
    imageHint: "Philo",
  },
  {
    id: 8,
    name: "Philosophy",
    price: "$89.99",
    image: "/images/products/philosophy.webp",
    imageHint: "Philosophy",
  },
  {
    id: 9,
    name: "Science",
    price: "$89.99",
    image: "/images/products/science.jpeg",
    imageHint: "Science",
  },
];

export default function Home() {
  const contactRef = useRef<HTMLDivElement>(null);

  const handleContactClick = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen text-foreground relative">
      <FluidBackground />
      <Header onContactClick={handleContactClick} />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="py-12 backdrop-blur-sm bg-white/80 rounded-2xl shadow-lg">
          <ProductList products={products} />
        </div>
        <div ref={contactRef} className="py-12 mt-12 backdrop-blur-sm bg-white/80 rounded-2xl shadow-lg">
          <ContactForm />
        </div>
      </main>
      <Footer />
>>>>>>> a630d1c (Update contact and footer links, center footer buttons, and change shop name to Proxy Shop)
    </div>
  );
}
