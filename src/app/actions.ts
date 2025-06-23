"use server";

import { orderSchema, type OrderSchema } from "@/lib/types";

export async function submitOrder(data: OrderSchema) {
  const validatedFields = orderSchema.safeParse(data);

  if (!validatedFields.success) {
    return { success: false, error: "Invalid data provided." };
  }

  // In a real application, you would save the data to a database here.
  // For this example, we simulate a successful submission.
  console.log("New Order Submitted:", validatedFields.data);

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  return { success: true };
}
