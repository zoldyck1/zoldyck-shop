"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { FaWhatsapp, FaInstagram, FaEnvelope } from 'react-icons/fa';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export function ContactForm() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(data: ContactFormValues) {
    // Form will be submitted to Formspree via the action attribute
    // This function will still run for client-side feedback
    console.log(data);
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We will get back to you shortly.",
    });
    // Form will be reset after successful submission to Formspree
  }

  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4 bg-[#F5F5F5] rounded-xl shadow-lg flex flex-col md:flex-row items-start justify-center space-y-8 md:space-y-0 md:space-x-8" dir="rtl">
      <div className="w-full md:w-1/2">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#333]" dir="rtl">للتواصل معنا</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} action="https://formspree.io/f/xldgyywr" method="POST" className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#777] font-medium text-right block">الاسم</FormLabel>
                  <FormControl>
                    <Input placeholder="أدخل اسمك" {...field} className="border-[#eee] focus:border-[#E53935] text-right bg-white text-[#333] placeholder-[#bbb]" dir="rtl" />
                  </FormControl>
                  <FormMessage className="text-[#E53935]" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#777] font-medium text-right block">البريد الإلكتروني</FormLabel>
                  <FormControl>
                    <Input placeholder="أدخل بريدك الإلكتروني" {...field} className="border-[#eee] focus:border-[#E53935] text-right bg-white text-[#333] placeholder-[#bbb]" dir="rtl" />
                  </FormControl>
                  <FormMessage className="text-[#E53935]" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#777] font-medium text-right block">الرسالة</FormLabel>
                  <FormControl>
                    <Textarea placeholder="أدخل رسالتك هنا" {...field} className="border-[#eee] focus:border-[#E53935] min-h-[120px] text-right bg-white text-[#333] placeholder-[#bbb]" dir="rtl" />
                  </FormControl>
                  <FormMessage className="text-[#E53935]" />
                </FormItem>
              )}
            />
            {/* Hidden field for Formspree to identify the form */}
            <input type="hidden" name="form-name" value="contact" />
            <Button type="submit" className="w-full bg-[#E53935] hover:bg-[#c62828] text-white font-medium shadow-md transition-all duration-200 ease-in-out">إرسال الرسالة</Button>
          </form>
        </Form>
      </div>
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center space-y-4 mt-8 md:mt-0">
        <h3 className="text-2xl font-bold text-[#333]">أو تواصل معنا مباشرة</h3>
        <a href="https://wa.me/+212687080393" target="_blank" rel="noopener noreferrer" className="w-full max-w-xs flex items-center justify-center bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:from-green-500 hover:to-green-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-200 ease-in-out transform hover:scale-105">
          <FaWhatsapp size={24} className="ml-3" />
          <span>واتساب</span>
        </a>
        <a href="https://www.instagram.com/11___liebert/" target="_blank" rel="noopener noreferrer" className="w-full max-w-xs flex items-center justify-center bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:from-pink-500 hover:to-pink-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-200 ease-in-out transform hover:scale-105">
          <FaInstagram size={24} className="ml-3" />
          <span>انستغرام</span>
        </a>
        <a href="mailto:ayoubl.zoldyck@gmail.com" className="w-full max-w-xs flex items-center justify-center bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-200 ease-in-out transform hover:scale-105">
          <FaEnvelope size={24} className="ml-3" />
          <span>بريد إلكتروني</span>
        </a>
      </div>
    </div>
  );
}