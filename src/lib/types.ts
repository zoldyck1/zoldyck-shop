import { z } from "zod";

export interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  imageHint: string;
}

export const orderSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email."),
  phone: z.string().min(10, "Please enter a valid phone number."),
  city: z.string().min(2, "City must be at least 2 characters."),
  message: z.string().optional(),
  productName: z.string(),
});

export type OrderSchema = z.infer<typeof orderSchema>;
