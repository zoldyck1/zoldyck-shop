"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Product } from "@/lib/types";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  product: Product;
  onOrderClick: (product: Product) => void;
}

export function ProductCard({ product, onOrderClick }: ProductCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 rounded-lg">
      <CardHeader className="p-0">
        <div className="aspect-video relative">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            data-ai-hint={product.imageHint}
          />
        </div>
      </CardHeader>
      <div className="flex flex-col flex-grow p-4 space-y-4">
        <CardContent className="p-0 flex-grow">
          <CardTitle className="text-xl font-headline leading-tight">{product.name}</CardTitle>
        </CardContent>
        <CardFooter className="p-0 flex-col items-start space-y-4">
          <p className="text-2xl font-bold text-primary">{product.price}</p>
          <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold" onClick={() => onOrderClick(product)}>
            <ShoppingCart className="mr-2 h-4 w-4" /> Order Now
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
}
