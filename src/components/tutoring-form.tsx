'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useFormState } from 'react-dom';
import { useEffect, useRef } from 'react';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import { submitForm, type FormState } from '@/app/actions';
import { Loader2 } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  phone: z.string().regex(/^\+?[1-9]\d{9,14}$/, 'Please enter a valid phone number.'),
  email: z.string().email('Please enter a valid email address.'),
  subject: z.string({ required_error: 'Please select a subject.' }).min(1, 'Please select a subject.'),
  grade: z.string({ required_error: 'Please select a grade.' }).min(1, 'Please select a grade.'),
  message: z.string().optional(),
});

type TutoringFormValues = z.infer<typeof formSchema>;

const subjects = ["Mathematics", "Physics", "Chemistry", "Biology", "English", "Hindi", "Social Studies", "Computer Science", "Economics", "Accountancy"];
const grades = ["Class 1-5", "Class 6-8", "Class 9-10", "Class 11-12", "JEE/NEET"];

interface TutoringFormProps {
  formType: 'demo' | 'register';
  title: string;
  icon: React.ReactNode;
  buttonText: string;
  buttonIcon: React.ReactNode;
  theme: 'primary' | 'accent';
}

export default function TutoringForm({ formType, title, icon, buttonText, buttonIcon, theme }: TutoringFormProps) {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  
  const initialState: FormState = { message: '', status: 'idle' };
  const [state, formAction] = useFormState(submitForm, initialState);

  const form = useForm<TutoringFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      message: '',
    },
  });

  const { formState: { isSubmitting } } = form;

  useEffect(() => {
    if (state.status === 'success') {
      toast({
        title: 'Success!',
        description: state.message,
      });
      form.reset();
      formRef.current?.reset();
    } else if (state.status === 'error') {
      toast({
        variant: 'destructive',
        title: 'Submission Failed',
        description: state.message,
      });
    }
  }, [state, toast, form]);

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center text-2xl">
          {icon}
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            ref={formRef}
            action={formAction}
            className="space-y-4"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="+91 98765 43210" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input placeholder="you@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subject</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {subjects.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="grade"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Grade / Course</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a grade" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {grades.map(g => <SelectItem key={g} value={g}>{g}</SelectItem>)}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message (Optional)</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Any specific requirements..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <input type="hidden" name="formType" value={formType} />
            <Button
              type="submit"
              size="lg"
              className={cn(
                "w-full font-bold",
                theme === 'primary' && 'bg-primary hover:bg-primary/90',
                theme === 'accent' && 'bg-accent text-accent-foreground hover:bg-accent/90',
              )}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              ) : (
                buttonIcon
              )}
              {isSubmitting ? 'Submitting...' : buttonText}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
