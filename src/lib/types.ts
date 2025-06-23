import { z } from "zod";

export interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  imageHint: string;
}

export const orderSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters."),
  lastName: z.string().min(2, "Last name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email."),
  phone: z.string().min(10, "Please enter a valid phone number."),
  region: z.string().min(2, "Region must be at least 2 characters."),
  city: z.string().min(2, "City must be at least 2 characters."),
  address: z.string().min(5, "Address must be at least 5 characters."),
  message: z.string().optional(),
  productName: z.string(),
});

export type OrderSchema = z.infer<typeof orderSchema>;
