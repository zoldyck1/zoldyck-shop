import { Header } from "@/components/header";
import { ProductList } from "@/components/product-list";
import type { Product } from "@/lib/types";

const products: Product[] = [
  {
    id: 1,
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
    </div>
  );
}
