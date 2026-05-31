"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

const FormSchema = z.object({
  id: z.string(),
  name: z
    .string()
    .min(1, "Full name is required")
    .max(255, "Full name cannot be longer then 255 characters"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  image_url: z
    .string()
    .min(1, "Image is required")
    .max(255, "Image name cannot be longer then 255 characters"),
});

export type State = {
  errors?: {
    name?: string[];
    email?: string[];
    image_url?: string[];
  };
  message?: string | null;
};

const CreateCustomer = FormSchema.omit({ id: true });

export async function createCustomer(prevState: State, formData: FormData) {
  // --- LAYER 1: Expected errors (validation) ---
  const validatedFields = CreateCustomer.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    image_url: formData.get("image_url"),
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create Customer.",
    };
  }

  // Prepare data for insertion into the database
  const { name, email, image_url } = validatedFields.data;

  // --- LAYER 2: Unexpected errors (database crash) ---
  // try/catch for things outside your control
  try {
    await sql`
  INSERT INTO customers (name, email, image_url)
  VALUES (${name}, ${email}, ${image_url})
  `;
  } catch (error) {
    return {
      message: "Database Error: Failed to Create Customer",
    };
  }

  // Revalidate the cache for the invoices page and redirect the user.
  revalidatePath("/dashboard/customers");
  redirect("/dashboard/customers");
}

// const UpdateInvoice = FormSchema.omit({ id: true, date: true });

// export async function updateInvoice(
//   id: string,
//   prevState: State,
//   formData: FormData
// ) {
//   // --- LAYER 1: Expected errors (validation) ---
//   const validatedFields = UpdateInvoice.safeParse({
//     customerId: formData.get("customerId"),
//     amount: formData.get("amount"),
//     status: formData.get("status"),
//   });

//   // If form validation fails, return errors early. Otherwise, continue.
//   if (!validatedFields.success) {
//     return {
//       errors: validatedFields.error.flatten().fieldErrors,
//       message: "Missing Fields. Failed to Update Invoice.",
//     };
//   }

//   // Prepare data for update
//   const { customerId, amount, status } = validatedFields.data;
//   const amountInCents = amount * 100;

//   try {
//     await sql`
//     UPDATE invoices
//     SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
//     WHERE id = ${id}
//   `;
//   } catch (error) {
//     console.error("Database Error:", error);
//     return {
//       message: "Database Error: Failed to Update Invoice",
//     };
//   }

//   revalidatePath("/dashboard/invoices");
//   redirect("/dashboard/invoices");
// }

// export async function deleteInvoice(id: string) {
//   // throw new Error("Failed to delete invoice");
//   try {
//     await sql`DELETE FROM invoices WHERE id = ${id}`;
//   } catch (error) {
//     throw new Error("Failed to Delete Invoice");
//   }
//   revalidatePath("/dashboard/invoices");
// }
