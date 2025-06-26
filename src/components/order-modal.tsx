"use client";

import { useEffect, useRef, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { submitOrder } from "@/app/actions";
import { orderSchema, type OrderSchema, type Product } from "@/lib/types";
import { Loader2, User, Mail, Phone, MapPin, MessageSquare, Globe } from "lucide-react";

interface OrderModalProps {
  product: Product | null;
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

export function OrderModal({ product, isOpen, onOpenChange }: OrderModalProps) {
  const formRef = useRef<HTMLDivElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<OrderSchema>({
    resolver: zodResolver(orderSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      region: "",
      city: "",
      address: "",
      message: "",
      productName: "",
    },
  });

  useEffect(() => {
    if (product && isOpen) {
      // Reset scroll position when modal opens
      setTimeout(() => {
        if (formRef.current) {
          formRef.current.scrollTop = 0;
        }
      }, 100);
    }
    if (product) {
      form.reset({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        region: "",
        city: "",
        address: "",
        message: "",
        productName: product.name,
      });
    }
  }, [product, form, isOpen]);

  async function onSubmit(values: OrderSchema) {
    setIsSubmitting(true);
    const result = await submitOrder(values);
    setIsSubmitting(false);

    if (result.success) {
      toast({
        title: "Order Confirmed!",
        description: "Thank you! Your order has been confirmed. We’ll call you shortly.",
        className: "bg-accent text-accent-foreground border-green-500",
      });
      onOpenChange(false);
    } else {
      toast({
        title: "Submission Failed",
        description: result.error || "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent ref={formRef} className="sm:max-w-lg max-h-[90vh] overflow-y-auto bg-white" dir="rtl">
        <DialogHeader className="text-right">
          <DialogTitle className="font-headline text-2xl text-teal-600 text-right">طلب: {product?.name}</DialogTitle>
          <DialogDescription className="text-gray-600 text-right">
            أكمل النموذج أدناه لإتمام طلبك. سنتواصل معك قريبًا!
            <div className="mt-2 text-sm text-amber-600 flex items-center justify-end">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                <path d="M12 5v14"></path>
                <path d="m19 12-7 7-7-7"></path>
              </svg>
              مرر لأسفل لرؤية جميع الحقول وتأكيد طلبك
            </div>
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form id="contactForm" action="https://formspree.io/f/xldgyywr" method="POST" className="space-y-4" dir="rtl">
            {/* Product Name Field (read-only) */}
            <FormField
              control={form.control}
              name="productName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700 font-medium">اسم المنتج</FormLabel>
                  <FormControl>
                    <Input {...field} readOnly className="bg-gray-100 cursor-not-allowed border-gray-300 focus:border-teal-500 text-right" dir="rtl" />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 font-medium">الاسم</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <User className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input placeholder="أدخل الاسم" {...field} className="pr-10 border-gray-300 focus:border-teal-500 text-right" dir="rtl"/>
                      </div>
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 font-medium">النسب</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <User className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input placeholder="أدخل النسب" {...field} className="pr-10 border-gray-300 focus:border-teal-500 text-right" dir="rtl"/>
                      </div>
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 font-medium">Email</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Mail className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input placeholder="example@example.com" {...field} className="pr-10 border-gray-300 focus:border-teal-500 text-right" dir="rtl"/>
                      </div>
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 font-medium">رقم الهاتف</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Phone className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input placeholder="0666123456" {...field} className="pr-10 border-gray-300 focus:border-teal-500 text-right" dir="rtl"/>
                      </div>
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="region"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 font-medium">المدينة</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <MapPin className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input placeholder="الرباط، فاس، مراكش..." {...field} className="pr-10 border-gray-300 focus:border-teal-500 text-right" dir="rtl"/>
                      </div>
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 font-medium">الجهة</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <MapPin className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input placeholder="الرباط-سلا-القنيطرة، فاس-مكناس..." {...field} className="pr-10 border-gray-300 focus:border-teal-500 text-right" dir="rtl"/>
                      </div>
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700 font-medium">العنوان المنزلي</FormLabel>
                  <FormControl>
                     <div className="relative">
                        <MapPin className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
                        <Textarea
                          placeholder="العنوان التفصيلي"
                          {...field}
                          className="pr-10 border-gray-300 focus:border-teal-500 text-right" dir="rtl"
                        />
                      </div>
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700 font-medium text-right block">ملاحظات (اختياري)</FormLabel>
                  <FormControl>
                     <div className="relative">
                        <MessageSquare className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
                        <Textarea
                          placeholder="أي تعليمات أو أسئلة خاصة؟"
                          {...field}
                          className="min-h-24 pr-10 resize-none border-gray-300 focus:border-teal-500 text-right" dir="rtl"
                        />
                      </div>
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
            <DialogFooter className="mt-6 sticky bottom-0 pb-2 pt-2 bg-white/90 backdrop-blur-sm border-t border-gray-200 flex flex-row-reverse justify-between items-center">
              <Button type="button" variant="outline" onClick={() => onOpenChange(false)} className="border-gray-300 text-gray-700 hover:bg-gray-100">
                إلغاء
              </Button>
              <Button 
                type="submit" 
                disabled={isSubmitting} 
                className="bg-teal-500 hover:bg-teal-600 text-white font-medium"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  "تأكيد الطلب"
                )}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
