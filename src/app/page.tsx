"use client";

import { useRef } from "react";
import { Header } from "@/components/header";
import { ProductList } from "@/components/product-list";
import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";
import type { Product } from "@/lib/types";

const products: Product[] = [
	{
		id: 1,
		name: "حذاء كرة قدم",
		price: "300.00 DH",
		image: "/images/products/godass.webp",
		imageHint: "Chrollo",
	},
	{
		id: 2,
		name: "فرفارة صغيرة",
		price: "149.99 DH",
		image: "/images/products/refroi.webp",
		imageHint: "Hisoka",
	},
	{
		id: 3,
		name: "ساعة يد ذكية ",
		price: "249.99 DH ",
		image: "/images/products/watch.webp",
		imageHint: "Icone Novel",
	},
	{
		id: 4,
		name: "اقمسة صيفية ",
		price: "49.99 dh",
		image: "/images/products/tshirt.webp",
		imageHint: "Killua",
	},
];

export default function Home() {
	const contactRef = useRef<HTMLDivElement>(null);

	const handleContactClick = () => {
		contactRef.current?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<div className="min-h-screen text-foreground bg-white relative">
			<Header onContactClick={handleContactClick} />
			<div className="w-full flex justify-center mt-2">
				<div
					className="bg-green-600 text-white text-center rounded-xl px-6 py-3 shadow font-bold text-lg max-w-2xl mx-auto animate-pulse"
					dir="rtl"
				>
					مرحبًا بكم في متجر بروكسي! تسوق أفضل المنتجات بأمان وسهولة. الدفع عند
					الاستلام في جميع أنحاء المغرب، توصيل سريع وخدمة عملاء احترافية. راحتكم
					وثقتكم أولويتنا.
				</div>
			</div>
			<main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
				<div className="py-12 bg-white rounded-2xl shadow-lg">
					<ProductList products={products} />
				</div>
				<div
					ref={contactRef}
					className="py-12 mt-12 bg-white rounded-2xl shadow-lg"
				>
					<ContactForm />
				</div>
			</main>
			<Footer />
		</div>
	);
}
