import * as z from "zod";

export const TodoInputSchema = z.object({
  content: z.string().min(3).max(100),
  title: z.string().min(3).max(100),
  name: z.string().min(3).max(100),
  email: z.string().email(),
  phone: z.string().min(3).max(100),
  tags: z.string().min(3).max(100),
  date: z.string().min(3).max(100),
});

export type TodoInput = z.infer<typeof TodoInputSchema>;
