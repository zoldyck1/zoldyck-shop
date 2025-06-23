"use client";

import { useEffect, useState } from "react";
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
import { Loader2, User, Mail, Phone, MapPin, MessageSquare } from "lucide-react";

interface OrderModalProps {
  product: Product | null;
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

export function OrderModal({ product, isOpen, onOpenChange }: OrderModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<OrderSchema>({
    resolver: zodResolver(orderSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      city: "",
      message: "",
      productName: "",
    },
  });

  useEffect(() => {
    if (product) {
      form.reset({
        name: "",
        email: "",
        phone: "",
        city: "",
        message: "",
        productName: product.name,
      });
    }
  }, [product, form]);

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
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="font-headline text-2xl text-primary">Order: {product?.name}</DialogTitle>
          <DialogDescription>
            Complete the form below to finalize your order. We'll be in touch soon!
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input placeholder="John Doe" {...field} className="pl-10"/>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                     <FormControl>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input placeholder="you@example.com" {...field} className="pl-10"/>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input placeholder="(123) 456-7890" {...field} className="pl-10"/>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>City</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input placeholder="New York" {...field} className="pl-10"/>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message (Optional)</FormLabel>
                  <FormControl>
                     <div className="relative">
                        <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Textarea
                          placeholder="Any special instructions or questions?"
                          {...field}
                          className="pl-10"
                        />
                      </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
                Cancel
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Confirm Order"
                )}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
