"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
<<<<<<< HEAD
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
=======
import { GlassCard } from "@/components/glass-card";
import { motion } from "framer-motion";
>>>>>>> a630d1c (Update contact and footer links, center footer buttons, and change shop name to Proxy Shop)
import type { Product } from "@/lib/types";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  product: Product;
  onOrderClick: (product: Product) => void;
}

export function ProductCard({ product, onOrderClick }: ProductCardProps) {
  return (
<<<<<<< HEAD
    <Card className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 rounded-lg">
      <CardHeader className="p-0">
        <div className="aspect-video relative">
=======
    <GlassCard className="group flex flex-col overflow-hidden">
      <motion.div
        className="p-0"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="aspect-[4/3] relative overflow-hidden bg-gray-100 rounded-lg">
>>>>>>> a630d1c (Update contact and footer links, center footer buttons, and change shop name to Proxy Shop)
          <Image
            src={product.image}
            alt={product.name}
            fill
<<<<<<< HEAD
            className="object-cover"
=======
            className="object-cover transition-transform duration-500 group-hover:scale-110"
>>>>>>> a630d1c (Update contact and footer links, center footer buttons, and change shop name to Proxy Shop)
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            data-ai-hint={product.imageHint}
          />
        </div>
<<<<<<< HEAD
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
=======
      </motion.div>
      <motion.div 
        className="flex flex-col flex-grow p-4 space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="p-0 flex-grow">
          <h3 className="text-lg font-headline leading-tight text-gray-800">{product.name}</h3>
        </div>
        <div className="p-0 flex-col items-start space-y-4">
          <p className="text-lg font-bold text-gray-800">{product.price}</p>
          <Button 
            className="w-full bg-red-600 hover:bg-red-700 text-white backdrop-blur-sm font-bold border-0 text-sm py-2 shadow-lg transition-colors duration-200"
            onClick={() => onOrderClick(product)}
          >
            <ShoppingCart className="mr-2 h-4 w-4" /> اشتري الان
          </Button>
        </div>
      </motion.div>
    </GlassCard>

>>>>>>> a630d1c (Update contact and footer links, center footer buttons, and change shop name to Proxy Shop)
  );
}
