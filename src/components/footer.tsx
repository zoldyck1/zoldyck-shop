"use client";

import Image from "next/image";
import { FaWhatsapp, FaInstagram, FaEnvelope } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className="bg-transparent text-gray-800 py-8" dir="rtl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4 justify-end">
              <Image
                src="/images/footer-logo.svg"
                alt="Zoldyck Shop Footer Logo"
                width={32}
                height={32}
                priority
              />
            </div>
            <p className="text-gray-600 text-center" dir="rtl">
              متجرك الشامل لكل منتجات بروكسي.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-right text-[#333]" dir="rtl">المنتجات</h3>
            <ul className="space-y-2 text-[#666] text-right" dir="rtl">
              <li><a href="#" className="hover:text-[#E53935]">طلب المنتوجات</a></li>
              <li><a href="#" className="hover:text-[#E53935]">للتواصل معنا</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-[#eee] flex flex-col sm:flex-row-reverse justify-between items-center">
          <div className="flex space-x-4 mb-4 sm:mb-0 mx-auto">
            <a href="https://wa.me/+212687080393" target="_blank" rel="noopener noreferrer" className="bg-[#333] hover:bg-[#444] text-white p-2 rounded-full shadow-lg transition-all duration-200 ease-in-out transform hover:scale-110">
              <FaWhatsapp size={20} />
            </a>
            <a href="https://www.instagram.com/11___liebert/" target="_blank" rel="noopener noreferrer" className="bg-[#333] hover:bg-[#444] text-white p-2 rounded-full shadow-lg transition-all duration-200 ease-in-out transform hover:scale-110">
              <FaInstagram size={20} />
            </a>
            <a href="mailto:ayoubl.zoldyck@gmail.com" className="bg-[#333] hover:bg-[#444] text-white p-2 rounded-full shadow-lg transition-all duration-200 ease-in-out transform hover:scale-110">
              <FaEnvelope size={20} />
            </a>
          </div>
          <p className="text-[#777] text-sm text-center" dir="rtl">
            © {new Date().getFullYear()} متجر بروكسي. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
}
