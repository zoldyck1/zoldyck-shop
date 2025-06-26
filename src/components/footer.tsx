"use client";

import Image from "next/image";
import { FaWhatsapp, FaInstagram, FaEnvelope } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className="bg-[#E53935] text-white py-3" dir="rtl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="md:col-span-2">
            <div className="flex items-center mb-2 justify-end">
              <span className="text-lg font-extrabold tracking-widest select-none" style={{ letterSpacing: '0.12em', fontFamily: 'PT Sans, Arial, sans-serif' }}>
                PROXY <span className="text-[#FFD600]">STORE</span>
              </span>
            </div>
            <p className="text-[#FFD600] text-center text-xs" dir="rtl">
              متجرك الشامل لكل منتجات بروكسي.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-2 text-right text-white text-base" dir="rtl">المنتجات</h3>
            <ul className="space-y-1 text-[#FFD600] text-right text-xs" dir="rtl">
              <li><a href="#" className="hover:text-white">طلب المنتوجات</a></li>
              <li><a href="#" className="hover:text-white">للتواصل معنا</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-[#fff3] flex flex-col sm:flex-row-reverse justify-between items-center">
          <div className="flex space-x-2 mb-2 sm:mb-0 mx-auto">
            <a href="https://wa.me/+212687080393" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:from-green-500 hover:to-green-700 text-white p-1 rounded-full shadow-lg transition-all duration-200 ease-in-out transform hover:scale-110">
              <FaWhatsapp size={16} />
            </a>
            <a href="https://www.instagram.com/11___liebert/" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:from-pink-500 hover:to-pink-700 text-white p-1 rounded-full shadow-lg transition-all duration-200 ease-in-out transform hover:scale-110">
              <FaInstagram size={16} />
            </a>
            <a href="mailto:ayoubl.zoldyck@gmail.com" className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white p-1 rounded-full shadow-lg transition-all duration-200 ease-in-out transform hover:scale-110">
              <FaEnvelope size={16} />
            </a>
          </div>
          <p className="text-[#FFD600] text-xs text-center" dir="rtl">
            © {new Date().getFullYear()} متجر بروكسي. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
}
