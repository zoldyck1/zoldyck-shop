"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/glass-card";
import { motion } from "framer-motion";
import type { Product } from "@/lib/types";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  product: Product;
  onOrderClick: (product: Product) => void;
}

export function ProductCard({ product, onOrderClick }: ProductCardProps) {
  return (
    <GlassCard className="group flex flex-col overflow-hidden bg-white max-w-xl mx-auto">
      <motion.div
        className="p-0"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="aspect-[4/3] relative overflow-hidden bg-gray-100 rounded-lg">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            data-ai-hint={product.imageHint}
          />
        </div>
      </motion.div>
      <motion.div
        className="flex flex-col flex-grow p-10 space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="p-0 flex-grow">
          <h3 className="text-lg font-headline leading-tight text-[#333]">
            {product.name}
          </h3>
        </div>
        <div className="p-0 flex-col items-start space-y-4">
          <p className="text-lg font-bold text-[#666]">{product.price}</p>
          <Button
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold border-0 text-lg py-4 shadow-lg transition-colors duration-200"
            onClick={() => onOrderClick(product)}
          >
            <ShoppingCart className="mr-2 h-6 w-6" /> اشتري الان
          </Button>
        </div>
      </motion.div>
    </GlassCard>
  );
}
