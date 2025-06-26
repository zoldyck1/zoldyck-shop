import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Menu, User, ShoppingBag, HelpCircle, Info, MessageSquare } from "lucide-react";

export function Header({ onContactClick }: { onContactClick: () => void }) {
  return (
    <header className="py-4 bg-[#E53935] border-b border-[#c62828]">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-white font-extrabold text-3xl tracking-widest drop-shadow-lg select-none" style={{ letterSpacing: '0.15em', fontFamily: 'PT Sans, Arial, sans-serif' }}>
            PROXY <span className="text-[#FFD600]">STORE</span>
          </span>
        </div>
        <div className="flex items-center justify-end">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white hover:bg-[#c62828]">
                <Menu className="h-7 w-7" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64 p-0 bg-white">
              <nav className="flex flex-col gap-2 p-6">
                <a href="/" className="flex items-center gap-2 px-4 py-3 rounded-lg text-[#333] hover:bg-[#F5F5F5] font-bold text-lg transition">
                  <ShoppingBag className="h-5 w-5" /> المتجر
                </a>
                <a href="/account" className="flex items-center gap-2 px-4 py-3 rounded-lg text-[#333] hover:bg-[#F5F5F5] font-bold text-lg transition">
                  <User className="h-5 w-5" /> حسابي
                </a>
                <a href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2 px-4 py-3 rounded-lg text-white bg-[#E53935] hover:bg-[#c62828] font-bold text-lg transition">
                  <ShoppingBag className="h-5 w-5" /> طلب المنتجات
                </a>
                <a href="/about" className="flex items-center gap-2 px-4 py-3 rounded-lg text-[#333] hover:bg-[#F5F5F5] font-bold text-lg transition">
                  <Info className="h-5 w-5" /> من نحن
                </a>
                <a href="/faq" className="flex items-center gap-2 px-4 py-3 rounded-lg text-[#333] hover:bg-[#F5F5F5] font-bold text-lg transition">
                  <HelpCircle className="h-5 w-5" /> أسئلة شائعة
                </a>
                <a href="#contact" onClick={e => { e.preventDefault(); onContactClick(); }} className="flex items-center gap-2 px-4 py-3 rounded-lg text-white bg-[#E53935] hover:bg-[#c62828] font-bold text-lg transition">
                  <MessageSquare className="h-5 w-5" /> للتواصل معنا
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
