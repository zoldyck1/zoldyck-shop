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
      </div>
    </header>
  );
}
