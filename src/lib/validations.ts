import { z } from "zod";

export const contactMessageSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Nama minimal 2 karakter")
    .max(80, "Nama maksimal 80 karakter"),
  email: z.string().trim().email("Format alamat email tidak valid"),
  subject: z
    .string()
    .trim()
    .min(3, "Subjek minimal 3 karakter")
    .max(120, "Subjek maksimal 120 karakter"),
  message: z
    .string()
    .trim()
    .min(10, "Pesan minimal 10 karakter")
    .max(1000, "Pesan maksimal 1000 karakter"),
});

export type ContactMessageInput = z.infer<typeof contactMessageSchema>;
