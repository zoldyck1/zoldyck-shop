"use client";

import { useState } from "react";
import { ProductCard } from "@/components/product-card";
import { OrderModal } from "@/components/order-modal";
import type { Product } from "@/lib/types";

interface ProductListProps {
  products: Product[];
}

export function ProductList({ products }: ProductListProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleOrderClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleModalOpenChange = (isOpen: boolean) => {
    if (!isOpen) {
      setSelectedProduct(null);
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onOrderClick={handleOrderClick} />
        ))}
      </div>
      <OrderModal 
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onOpenChange={handleModalOpenChange}
      />
    </>
  );
}
