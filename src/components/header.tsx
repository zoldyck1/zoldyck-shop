<<<<<<< HEAD
import { Package } from "lucide-react";

export function Header() {
  return (
    <header className="py-8 bg-card border-b shadow-sm">
      <div className="container mx-auto text-center">
        <div className="flex justify-center items-center gap-4 mb-2">
          <Package className="h-10 w-10 sm:h-12 sm:w-12 text-primary" />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-headline text-foreground">
            ShopSimple
          </h1>
        </div>
        <p className="mt-2 max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground">
          Modern products, simple ordering.
        </p>
=======
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Header({ onContactClick }: { onContactClick: () => void }) {
  return (
    <header className="py-4 bg-transparent border-b border-gray-200">
      <div className="container mx-auto flex items-center justify-between">
        <div className="relative w-48 h-20">
          <Image
            src="/images/your-picture.jpg"
            alt="proxy Shop Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
        <div className="flex items-center justify-end space-x-4">
          <Button 
            variant="default" 
            className="bg-red-800 hover:bg-red-900 text-white px-6 py-2.5 text-lg shadow-lg transition-all duration-200 ease-in-out transform hover:scale-105"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            لطلب المنتوجات
          </Button>
          <Button 
            variant="default" 
            className="bg-red-800 hover:bg-red-900 text-white px-6 py-2.5 text-lg shadow-lg transition-all duration-200 ease-in-out transform hover:scale-105"
            onClick={onContactClick}
          >
            للتواصل معنا
          </Button>
        </div>
>>>>>>> a630d1c (Update contact and footer links, center footer buttons, and change shop name to Proxy Shop)
      </div>
    </header>
  );
}
