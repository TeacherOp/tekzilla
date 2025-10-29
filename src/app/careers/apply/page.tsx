import CareersApplyForm from '@/components/careers-apply-form';

export const metadata = {
    title: 'Apply to Careers at Teckzilla',
    description: 'Submit your application form for careers at Teckzilla.',
};

export default function ApplyPage() {
    return (
        <main className="container mx-auto px-4 py-10">
            <h1 className="text-3xl font-semibold mb-6">Apply for a Career at Teckzilla</h1>
            <p className="mb-6">
                Please fill out the form below and attach your resume. Our team will review your application and contact you.
            </p>
            <CareersApplyForm />
        </main>
    );
}
