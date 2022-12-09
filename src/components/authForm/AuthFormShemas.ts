import { z } from 'zod';

export const SignUpSchema = z.object({
  firstName: z
    .string()
    .min(1, 'Field is required')
    .max(32, 'Must be less than 32'),
  lastName: z
    .string()
    .min(1, 'Field is required')
    .max(32, 'Must be less than 32'),
  email: z.string().min(1, 'Field is required').email('Field is invalid'),
  password: z
    .string()
    .min(8, 'Must be more than 8')
    .max(32, 'Must be less than 32'),
  policy: z
    .boolean()
    .refine((val) => val === true, 'You need accept private privacy'),
});

export const SignInSchema = SignUpSchema.pick({
  password: true,
  email: true,
});

export type SignInInput = z.infer<typeof SignInSchema>;
export type SignUpInput = z.infer<typeof SignUpSchema>;
export type FormInputType = SignInInput & SignUpInput;
