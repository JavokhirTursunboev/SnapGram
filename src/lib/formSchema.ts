import * as z from "zod";

export const SignUpSchema = z.object({
  name: z.string().min(2, { message: "Must be 2  or more characters" }).max(50),
  username: z.string().min(2).max(50),
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters" }),
});
