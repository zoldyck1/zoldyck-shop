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
      </div>
    </header>
  );
}
