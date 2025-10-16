'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import type { LucideIcon } from 'lucide-react';
import {
    AlertCircle,
    Award,
    Briefcase,
    Calendar,
    CheckCircle2,
    FileText,
    Loader2,
    Mail,
    MapPin,
    Phone,
    Share2,
    User,
} from 'lucide-react';
import type React from 'react';
import { useActionState, useEffect, useRef } from 'react';
import { useFormStatus } from 'react-dom';
import { toast } from 'sonner';
import { sendApplication } from './actions'; // fix import to point to server action location

function FormFieldError({ message }: { message?: string }) {
    if (!message) return null;
    return (
        <p className='text-sm font-medium text-destructive mt-1'>{message}</p>
    );
}

interface FormFieldWithIconProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    icon?: LucideIcon;
    error?: string;
    required?: boolean;
    helperText?: string;
}

function FormFieldWithIcon({
    label,
    icon: Icon,
    error,
    required,
    helperText,
    className,
    disabled,
    ...props
}: FormFieldWithIconProps & { disabled?: boolean }) {
    return (
        <div className='space-y-2'>
            <Label className='font-medium flex items-center gap-2'>
                {Icon && <Icon className='h-4 w-4 text-muted-foreground' />}
                <span>
                    {label}
                    {required && (
                        <span className='text-destructive ml-1'>*</span>
                    )}
                </span>
            </Label>
            <Input
                className={`${error ? 'border-destructive' : ''} ${
                    className || ''
                }`}
                aria-invalid={!!error}
                disabled={disabled}
                {...props}
            />
            {helperText && (
                <p className='text-xs text-muted-foreground'>{helperText}</p>
            )}
            <FormFieldError message={error} />
        </div>
    );
}

interface FormSectionProps {
    title: string;
    icon?: LucideIcon;
    description?: string;
    children: React.ReactNode;
}

function FormSection({
    title,
    icon: Icon,
    description,
    children,
}: FormSectionProps) {
    return (
        <div className='space-y-4 pb-6 border-b border-border last:border-b-0 last:pb-0'>
            <div className='flex items-center gap-3'>
                {Icon && <Icon className='h-5 w-5 text-primary' />}
                <div>
                    <h3 className='text-lg font-semibold text-foreground'>
                        {title}
                    </h3>
                    {description && (
                        <p className='text-sm text-muted-foreground'>
                            {description}
                        </p>
                    )}
                </div>
            </div>
            <div className='space-y-4 mt-4'>{children}</div>
        </div>
    );
}

export default function CareersApplyForm() {
    const [state, formAction] = useActionState<
        { success: boolean; message?: string } | null,
        FormData
    >(sendApplication, null);

    const fileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (!state) return;
        if (state.success) {
            toast.success(
                state.message ??
                    'Thank you for applying. We will review your application and get back to you soon.'
            );
        } else {
            toast.error(state.message ?? 'Please try again.');
        }
    }, [state, toast]);

    return (
        <Card className='w-full shadow-lg'>
            <CardContent className='p-6 md:p-10'>
                <div className='mb-8'>
                    <h2 className='text-3xl md:text-4xl font-bold mb-2'>
                        Apply Now
                    </h2>
                    <p className='text-muted-foreground text-base'>
                        Fill out the form below to submit your application.
                        We&apos;ll review it and get back to you soon.
                    </p>
                </div>

                {state?.success && (
                    <div className='mb-6 p-4 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg flex gap-3 animate-in fade-in slide-in-from-top-2'>
                        <CheckCircle2 className='h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5' />
                        <div>
                            <p className='font-medium text-green-900 dark:text-green-100'>
                                {state.message}
                            </p>
                        </div>
                    </div>
                )}

                {state?.success === false && (
                    <div className='mb-6 p-4 bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 rounded-lg flex gap-3 animate-in fade-in slide-in-from-top-2'>
                        <AlertCircle className='h-5 w-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5' />
                        <div>
                            <p className='font-medium text-red-900 dark:text-red-100'>
                                {state.message}
                            </p>
                        </div>
                    </div>
                )}

                <form
                    action={formAction}
                    encType='multipart/form-data'
                    className='space-y-8'
                >
                    <FormSection
                        title='Personal Information'
                        icon={User}
                        description='Your basic contact details'
                    >
                        <div className='grid md:grid-cols-2 gap-6'>
                            <FormFieldWithIcon
                                label='First Name'
                                icon={User}
                                placeholder='John'
                                required
                                name='firstName'
                            />
                            <FormFieldWithIcon
                                label='Last Name'
                                placeholder='Doe'
                                required
                                name='lastName'
                            />
                        </div>

                        <FormFieldWithIcon
                            label='Email Address'
                            icon={Mail}
                            type='email'
                            placeholder='you@example.com'
                            required
                            name='email'
                        />

                        <div className='grid md:grid-cols-3 gap-6'>
                            <FormFieldWithIcon
                                label='Area Code'
                                placeholder='+91'
                                name='areaCode'
                            />
                            <div className='md:col-span-2'>
                                <FormFieldWithIcon
                                    label='Phone Number'
                                    icon={Phone}
                                    placeholder='82330 83333'
                                    required
                                    name='phone'
                                />
                            </div>
                        </div>
                    </FormSection>

                    <FormSection
                        title='Date of Birth'
                        icon={Calendar}
                        description='Your date of birth'
                    >
                        <FormFieldWithIcon
                            label='Date of Birth'
                            type='date'
                            name='dateOfBirth'
                        />
                    </FormSection>

                    <FormSection
                        title='Address'
                        icon={MapPin}
                        description='Your residential address'
                    >
                        <div className='grid md:grid-cols-2 gap-6'>
                            <FormFieldWithIcon
                                label='Street Address'
                                placeholder='123 Main St'
                                name='address1'
                            />
                            <FormFieldWithIcon
                                label='Street Address Line 2'
                                placeholder='Apartment, suite, etc.'
                                name='address2'
                            />
                        </div>

                        <div className='grid md:grid-cols-3 gap-6'>
                            <FormFieldWithIcon
                                label='City'
                                placeholder='City'
                                name='city'
                            />
                            <FormFieldWithIcon
                                label='State/Province'
                                placeholder='State/Province'
                                name='state'
                            />
                            <FormFieldWithIcon
                                label='Postal/Zip Code'
                                placeholder='123456'
                                name='postal'
                            />
                        </div>
                    </FormSection>

                    <FormSection
                        title='How Did You Hear About Us?'
                        icon={Share2}
                        description='Help us understand your source'
                    >
                        <div className='grid md:grid-cols-2 gap-6'>
                            <div className='space-y-2'>
                                <Label className='font-medium flex items-center gap-2'>
                                    <Share2 className='h-4 w-4 text-muted-foreground' />
                                    <span>
                                        Source{' '}
                                        <span className='text-destructive ml-1'>
                                            *
                                        </span>
                                    </span>
                                </Label>
                                <select
                                    name='hearAbout'
                                    className='w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 transition-colors'
                                    required
                                >
                                    <option value=''>Select one</option>
                                    <option value='Walk-In'>Walk-In</option>
                                    <option value='Employee'>
                                        Employee Referral
                                    </option>
                                    <option value='Newspaper Ad'>
                                        Newspaper Ad
                                    </option>
                                    <option value='Facebook'>Facebook</option>
                                    <option value='Twitter'>Twitter</option>
                                    <option value='Craigslist'>
                                        Craigslist
                                    </option>
                                    <option value='Others'>Others</option>
                                </select>
                            </div>
                            {false && (
                                <FormFieldWithIcon
                                    label='Please Specify'
                                    placeholder='Tell us where you heard about us'
                                    name='hearAboutOther'
                                />
                            )}
                        </div>
                    </FormSection>

                    <FormSection
                        title='Resume & Skills'
                        icon={Briefcase}
                        description='Your professional background'
                    >
                        <div className='space-y-6'>
                            <div className='space-y-2'>
                                <Label className='font-medium flex items-center gap-2'>
                                    <FileText className='h-4 w-4 text-muted-foreground' />
                                    <span>
                                        Upload Resume{' '}
                                        <span className='text-destructive ml-1'>
                                            *
                                        </span>
                                    </span>
                                </Label>
                                <p className='text-sm text-muted-foreground'>
                                    PDF or Word document (max 5MB)
                                </p>
                                <Input
                                    type='file'
                                    accept='.pdf,.doc,.docx'
                                    ref={fileInputRef}
                                    name='resume'
                                    className='cursor-pointer'
                                    aria-invalid={false}
                                />
                            </div>

                            <div className='space-y-2'>
                                <Label
                                    htmlFor='skills'
                                    className='font-medium flex items-center gap-2'
                                >
                                    <Briefcase className='h-4 w-4 text-muted-foreground' />
                                    <span>Job Skills and Training</span>
                                </Label>
                                <Textarea
                                    id='skills'
                                    name='skills'
                                    placeholder='Describe your relevant skills and experience...'
                                    className='min-h-[120px] resize-none'
                                />
                            </div>

                            <div className='space-y-2'>
                                <Label
                                    htmlFor='training'
                                    className='font-medium flex items-center gap-2'
                                >
                                    <Award className='h-4 w-4 text-muted-foreground' />
                                    <span>Training or Certifications</span>
                                </Label>
                                <Textarea
                                    id='training'
                                    name='training'
                                    placeholder='List relevant training, certifications, or courses...'
                                    className='min-h-[120px] resize-none'
                                />
                            </div>
                        </div>
                    </FormSection>

                    <SubmitButton />
                </form>
            </CardContent>
        </Card>
    );
}

function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <Button
            className='w-full'
            type='submit'
            aria-disabled={pending}
            size='lg'
        >
            {pending ? (
                <span className='inline-flex items-center gap-2'>
                    <Loader2 className='h-4 w-4 animate-spin' />
                    <span>Submitting...</span>
                </span>
            ) : (
                'Submit Application'
            )}
        </Button>
    );
}
