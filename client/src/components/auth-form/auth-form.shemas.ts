import { z } from 'zod';
import i18n from '@/localization/i18next';

export const SignUpSchema = z.object({
  firstName: z
    .string()
    .min(1, i18n.t('MODALS.AUTH.VALIDATION.LAST_NAME_MIN'))
    .max(32, i18n.t('MODALS.AUTH.VALIDATION.LAST_NAME_MIN')),
  lastName: z
    .string()
    .min(1, i18n.t('MODALS.AUTH.VALIDATION.LAST_NAME_MIN'))
    .max(32, i18n.t('MODALS.AUTH.VALIDATION.LAST_NAME_MAX')),
  nickname: z
    .string()
    .min(1, i18n.t('MODALS.AUTH.VALIDATION.USERNAME_MIN'))
    .max(32, i18n.t('MODALS.AUTH.VALIDATION.USERNAME_MIN')),
  email: z
    .string()
    .min(1, i18n.t('MODALS.AUTH.VALIDATION.EMAIL_MIN'))
    .email(i18n.t('MODALS.AUTH.VALIDATION.EMAIL_FORMAT')),
  password: z
    .string()
    .min(8, i18n.t('MODALS.AUTH.VALIDATION.PASSWORD_MIN'))
    .max(32, i18n.t('MODALS.AUTH.VALIDATION.PASSWORD_MAX')),
  policy: z
    .boolean()
    .refine(
      (val) => val === true,
      i18n.t('MODALS.AUTH.VALIDATION.POLICY_ACCEPT'),
    ),
});

export const SignInSchema = SignUpSchema.pick({
  password: true,
  email: true,
});

export type SignInInput = z.infer<typeof SignInSchema>;
export type SignUpInput = z.infer<typeof SignUpSchema>;
export type FormInputType = SignInInput & SignUpInput;
