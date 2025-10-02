import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { siteConfig } from '@/site.config';
import {
    ArrowRight,
    CheckCircle,
    Lightbulb,
    Target,
    TrendingUp,
    Users,
} from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'Odoo Consulting Services | Expert ERP Consultation | Teckzilla',
    description:
        'Get expert Odoo consulting services from Teckzilla. We provide business requirements assessment, bespoke mapping, and comprehensive ERP consultation solutions.',
    keywords: [
        'Odoo consulting',
        'ERP consultation',
        'business requirements assessment',
        'Odoo customization',
        'CRM consultation',
    ],
    alternates: {
        canonical: `${siteConfig.site_domain}/odoo-consulting`,
    },
    metadataBase: new URL(`${siteConfig.site_domain}/odoo-consulting`),
    robots: {
        index: true,
        follow: true,
    },
};

const OdooConsulting = () => {
    return (
        <div className='min-h-screen bg-background'>
            {/* Hero Section */}
            <section className='relative py-20 px-4 bg-gradient-to-r from-primary/10 to-primary-foreground/10'>
                <div className='container mx-auto max-w-6xl'>
                    <div className='grid lg:grid-cols-2 gap-12 items-center'>
                        <div>
                            <h1 className='text-4xl md:text-5xl font-bold text-foreground mb-6'>
                                Odoo Consulting Services
                            </h1>
                            <p className='text-lg text-muted-foreground mb-8 leading-relaxed'>
                                Entrepreneurs and businesses willing to get
                                their businesses on track have the ultimate
                                deal. At Teckzilla, our Odoo Development
                                Services are the best suite of practices that
                                will help you streamline all your business
                                processes in a swift.
                            </p>
                            <Button
                                size='lg'
                                className='bg-primary hover:bg-primary/90'
                            >
                                Get Expert Consultation
                                <ArrowRight className='ml-2 h-5 w-5' />
                            </Button>
                        </div>
                        <div className='relative'>
                            <Image
                                width={1000}
                                height={1000}
                                src='/consulting-for-real-estate-computer-for-website-businessman-businessmen.webp'
                                alt='Odoo Consulting'
                                className='rounded-2xl shadow-2xl'
                                loading='lazy'
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Value Proposition */}
            <section className='py-16 px-4'>
                <div className='container mx-auto max-w-6xl'>
                    <div className='text-center mb-12'>
                        <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-4'>
                            Why Choose Our Odoo Consulting?
                        </h2>
                        <p className='text-lg text-muted-foreground max-w-3xl mx-auto'>
                            We have extensive experience in providing ERP and
                            CRM services to several companies and organizations.
                            Our consulting practices incorporate analyzing Odoo
                            customization, implementation, training, migration,
                            and support.
                        </p>
                    </div>

                    <div className='grid md:grid-cols-3 gap-8'>
                        <Card className='border-none shadow-lg hover:shadow-xl transition-shadow'>
                            <CardContent className='p-6 text-center'>
                                <div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4'>
                                    <Target className='h-8 w-8 text-primary' />
                                </div>
                                <h3 className='text-xl font-semibold mb-3'>
                                    Tailored Solutions
                                </h3>
                                <p className='text-muted-foreground'>
                                    Highly-integrated and economical solutions
                                    customized for your business needs and
                                    complexities.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className='border-none shadow-lg hover:shadow-xl transition-shadow'>
                            <CardContent className='p-6 text-center'>
                                <div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4'>
                                    <Users className='h-8 w-8 text-primary' />
                                </div>
                                <h3 className='text-xl font-semibold mb-3'>
                                    Expert Team
                                </h3>
                                <p className='text-muted-foreground'>
                                    Experienced consultants specialized in ERP
                                    and CRM solutions across various industries.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className='border-none shadow-lg hover:shadow-xl transition-shadow'>
                            <CardContent className='p-6 text-center'>
                                <div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4'>
                                    <TrendingUp className='h-8 w-8 text-primary' />
                                </div>
                                <h3 className='text-xl font-semibold mb-3'>
                                    Proven Results
                                </h3>
                                <p className='text-muted-foreground'>
                                    Track record of successful implementations
                                    handling accounting, inventory, sales, and
                                    operations.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Critical Domains */}
            <section className='py-16 px-4 bg-muted/50'>
                <div className='container mx-auto max-w-6xl'>
                    <div className='text-center mb-12'>
                        <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-4'>
                            Critical Domains Of Our Odoo Consultation
                        </h2>
                    </div>

                    <div className='grid lg:grid-cols-2 gap-12 items-center mb-16'>
                        <div>
                            <h3 className='text-2xl font-semibold mb-4 flex items-center'>
                                <CheckCircle className='h-6 w-6 text-primary mr-2' />
                                Assessing Business Requirements
                            </h3>
                            <p className='text-muted-foreground mb-6 leading-relaxed'>
                                Odoo Consultation at Teckzilla caters
                                identification and classification of business
                                requirements. We analyze your current processes
                                and identify areas for improvement and
                                optimization.
                            </p>
                            <ul className='space-y-2'>
                                <li className='flex items-center text-muted-foreground'>
                                    <CheckCircle className='h-4 w-4 text-primary mr-2' />
                                    Comprehensive business process analysis
                                </li>
                                <li className='flex items-center text-muted-foreground'>
                                    <CheckCircle className='h-4 w-4 text-primary mr-2' />
                                    Requirement documentation and validation
                                </li>
                                <li className='flex items-center text-muted-foreground'>
                                    <CheckCircle className='h-4 w-4 text-primary mr-2' />
                                    Gap analysis and solution recommendations
                                </li>
                            </ul>
                        </div>
                        <div className='relative'>
                            <Image
                                src='/technology_solution_assessment_for_business_requirements_slide01.webp'
                                alt='Business Requirements Assessment'
                                width={1000}
                                height={1000}
                                className='rounded-2xl shadow-xl'
                                loading='lazy'
                            />
                        </div>
                    </div>

                    <div className='grid lg:grid-cols-2 gap-12 items-center'>
                        <div className='lg:order-2'>
                            <h3 className='text-2xl font-semibold mb-4 flex items-center'>
                                <Lightbulb className='h-6 w-6 text-primary mr-2' />
                                Bespoke Mapping
                            </h3>
                            <p className='text-muted-foreground mb-6 leading-relaxed'>
                                We create customized mapping solutions that
                                align perfectly with your business workflow and
                                operational requirements. Our bespoke approach
                                ensures maximum efficiency and user adoption.
                            </p>
                            <ul className='space-y-2'>
                                <li className='flex items-center text-muted-foreground'>
                                    <CheckCircle className='h-4 w-4 text-primary mr-2' />
                                    Custom workflow design and optimization
                                </li>
                                <li className='flex items-center text-muted-foreground'>
                                    <CheckCircle className='h-4 w-4 text-primary mr-2' />
                                    Process automation recommendations
                                </li>
                                <li className='flex items-center text-muted-foreground'>
                                    <CheckCircle className='h-4 w-4 text-primary mr-2' />
                                    Integration planning with existing systems
                                </li>
                            </ul>
                        </div>
                        <div className='lg:order-1'>
                            <div className='bg-gradient-to-br from-primary/10 to-orange-500/10 p-8 rounded-2xl'>
                                <div className='grid grid-cols-2 gap-4'>
                                    <div className='bg-background p-4 rounded-lg shadow-sm'>
                                        <h4 className='font-semibold text-sm mb-2'>
                                            Workflow Analysis
                                        </h4>
                                        <div className='h-2 bg-primary/20 rounded-full'>
                                            <div className='h-2 bg-primary rounded-full w-4/5'></div>
                                        </div>
                                    </div>
                                    <div className='bg-background p-4 rounded-lg shadow-sm'>
                                        <h4 className='font-semibold text-sm mb-2'>
                                            Process Mapping
                                        </h4>
                                        <div className='h-2 bg-primary/20 rounded-full'>
                                            <div className='h-2 bg-primary rounded-full w-3/5'></div>
                                        </div>
                                    </div>
                                    <div className='bg-background p-4 rounded-lg shadow-sm'>
                                        <h4 className='font-semibold text-sm mb-2'>
                                            Integration Plan
                                        </h4>
                                        <div className='h-2 bg-primary/20 rounded-full'>
                                            <div className='h-2 bg-primary rounded-full w-5/6'></div>
                                        </div>
                                    </div>
                                    <div className='bg-background p-4 rounded-lg shadow-sm'>
                                        <h4 className='font-semibold text-sm mb-2'>
                                            Optimization
                                        </h4>
                                        <div className='h-2 bg-primary/20 rounded-full'>
                                            <div className='h-2 bg-primary rounded-full w-4/6'></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className='py-16 px-4 bg-primary text-primary-foreground'>
                <div className='container mx-auto max-w-4xl text-center'>
                    <h2 className='text-3xl md:text-4xl font-bold mb-4'>
                        Ready to Transform Your Business?
                    </h2>
                    <p className='text-xl mb-8 opacity-90'>
                        Get expert Odoo consultation and take your business to
                        the next level with our proven methodologies.
                    </p>
                    <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                        <Button
                            size='lg'
                            variant='secondary'
                            className='bg-background text-primary hover:bg-background/90'
                        >
                            Schedule Consultation
                            <ArrowRight className='ml-2 h-5 w-5' />
                        </Button>
                        <Button
                            size='lg'
                            variant='outline'
                            className='text-black'
                        >
                            Download Brochure
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OdooConsulting;
