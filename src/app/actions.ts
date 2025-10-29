'use server';

import { z } from 'zod';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid phone number format.'),
  email: z.string().email('Invalid email address.'),
  subject: z.string().min(1, 'Please select a subject.'),
  grade: z.string().min(1, 'Please select a grade.'),
  message: z.string().optional(),
  formType: z.enum(['demo', 'register']),
});

export type FormState = {
  message: string;
  status: 'success' | 'error' | 'idle';
};

export async function submitForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay

  const rawFormData = Object.fromEntries(formData.entries());
  const validatedFields = formSchema.safeParse(rawFormData);

  if (!validatedFields.success) {
    console.error(validatedFields.error.flatten().fieldErrors);
    return {
      message: 'There was an error with your submission. Please check the fields and try again.',
      status: 'error',
    };
  }

  const { name, formType } = validatedFields.data;
  console.log('New Submission:', validatedFields.data);

  if (formType === 'demo') {
    return {
      message: `Thanks, ${name}! Your free demo request has been received. We will contact you shortly.`,
      status: 'success',
    };
  }

  return {
    message: `Welcome, ${name}! Your registration is complete. We'll help you find the perfect tutor soon.`,
    status: 'success',
  };
}
