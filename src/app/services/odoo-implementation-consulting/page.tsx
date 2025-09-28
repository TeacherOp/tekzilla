import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
    Award,
    BookOpen,
    CheckCircle,
    Phone,
    Settings,
    Users,
} from 'lucide-react';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'Odoo Implementation and Consulting Services | Teckzilla Technologies',
    description:
        'Expert Odoo ERP implementation and consulting services by Teckzilla Technologies. Streamline your business operations with customized Odoo solutions.',
    keywords: [
        'Odoo implementation',
        'Odoo consulting',
        'ERP implementation',
        'business automation',
        'Odoo Gold Partner',
    ],
};

const OdooImplementationConsulting = () => {
    return (
        <div className='min-h-screen bg-background'>
            <main>
                {/* Hero Section */}
                <section className='section-gradient py-20'>
                    <div className='container mx-auto px-4'>
                        <div className='max-w-4xl mx-auto text-center '>
                            <h1 className='text-4xl md:text-5xl font-bold mb-6'>
                                Odoo Implementation and Consulting
                            </h1>
                            <p className='text-xl mb-8 opacity-90'>
                                Transform your business with expert Odoo ERP
                                implementation services from Teckzilla
                                Technologies, your trusted Odoo Gold Partner
                            </p>
                            <Button
                                size='lg'
                                variant='secondary'
                                className='text-primary '
                            >
                                Get Started Today
                            </Button>
                        </div>
                    </div>
                </section>
                <div className='w-full flex justify-center bg-white py-8'>
                    <Image
                        width={1000}
                        height={1000}
                        src='/Odoo-Implementation.webp'
                        alt='Odoo Implementation'
                        className='max-w-4xl w-full rounded-2xl shadow-lg object-cover'
                        loading='lazy'
                    />
                </div>

                {/* Introduction */}
                <section className='py-16'>
                    <div className='container mx-auto px-4'>
                        <div className='max-w-4xl mx-auto'>
                            <div className='text-center mb-12'>
                                <h2 className='text-3xl font-bold mb-6'>
                                    Why Choose Teckzilla for Odoo
                                    Implementation?
                                </h2>
                                <p className='text-lg text-muted-foreground'>
                                    <strong>Odoo</strong>, being the limelight
                                    in today's fast-paced business world, has an
                                    excellent and efficient management system
                                    that is key to success.{' '}
                                    <strong>Odoo ERP</strong> is a powerful tool
                                    that brings together different parts of your
                                    business into one system for all the ongoing
                                    business operations, making your operations
                                    smoother and boosting your productivity
                                    level. At Teckzilla, we excel in{' '}
                                    <strong>
                                        implementing and consulting Odoo ERP
                                        software
                                    </strong>
                                    , providing customized solutions to meet the
                                    specific needs of each client.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* How We Help */}
                <section className='bg-muted py-16'>
                    <div className='container mx-auto px-4'>
                        <div className='max-w-6xl mx-auto'>
                            <h2 className='text-3xl font-bold text-center mb-12'>
                                How Teckzilla Helps with Implementing Odoo ERP
                            </h2>
                            <p className='text-center text-lg text-muted-foreground mb-12'>
                                Teckzilla is here to make your{' '}
                                <strong>Odoo ERP implementation</strong> smooth
                                and successful in areas of planning and
                                executing workflow with higher value inputs just
                                by one click. Odoo ERP is a powerful tool that
                                enables your business operations to make quick
                                decisions in a faster-paced working environment,
                                and we, as an expert, help you get the most out
                                of it.
                            </p>

                            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                                <Card>
                                    <CardContent className='p-6'>
                                        <Users className='w-12 h-12 text-primary mb-4' />
                                        <h3 className='text-xl font-semibold mb-3'>
                                            Expert Guidance at First Call
                                        </h3>
                                        <p className='text-muted-foreground'>
                                            The{' '}
                                            <strong>
                                                best of ERP solutions
                                            </strong>{' '}
                                            in the{' '}
                                            <strong>Odoo New Release</strong>{' '}
                                            consists of smart technology that
                                            gives a 100% complete solution for
                                            business owners. Our team of
                                            certified Odoo experts understand
                                            the ins and outs of the software.
                                        </p>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardContent className='p-6'>
                                        <Settings className='w-12 h-12 text-primary mb-4' />
                                        <h3 className='text-xl font-semibold mb-3'>
                                            Complete Customized Solutions
                                        </h3>
                                        <p className='text-muted-foreground'>
                                            Every business is unique, and we
                                            recognize this. We customize Odoo to
                                            match your business processes and
                                            functions, making sure it fits
                                            perfectly in the right manner.
                                        </p>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardContent className='p-6'>
                                        <CheckCircle className='w-12 h-12 text-primary mb-4' />
                                        <h3 className='text-xl font-semibold mb-3'>
                                            All Inclusive Implementation
                                        </h3>
                                        <p className='text-muted-foreground'>
                                            Teckzilla handles the entire
                                            implementation process from start to
                                            finish. This includes data
                                            migration, module configuration, and
                                            system integration.
                                        </p>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardContent className='p-6'>
                                        <BookOpen className='w-12 h-12 text-primary mb-4' />
                                        <h3 className='text-xl font-semibold mb-3'>
                                            Training and Support
                                        </h3>
                                        <p className='text-muted-foreground'>
                                            Once Odoo is implemented, Teckzilla
                                            provides thorough training for your
                                            team. We make sure everyone knows
                                            how to use the new system
                                            effectively.
                                        </p>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardContent className='p-6'>
                                        <Award className='w-12 h-12 text-primary mb-4' />
                                        <h3 className='text-xl font-semibold mb-3'>
                                            Proven Excellence and Success
                                        </h3>
                                        <p className='text-muted-foreground'>
                                            Teckzilla has a proven track record
                                            of successful Odoo implementations
                                            across various industries, from
                                            manufacturing units to service
                                            providers.
                                        </p>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardContent className='p-6'>
                                        <Phone className='w-12 h-12 text-primary mb-4' />
                                        <h3 className='text-xl font-semibold mb-3'>
                                            Get Started with Teckzilla
                                        </h3>
                                        <p className='text-muted-foreground'>
                                            Implementing an ERP system like Odoo
                                            can be challenging, but with
                                            Teckzilla, you are in good hands.
                                            Contact us today to learn how we can
                                            help your business thrive.
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Key Benefits */}
                <section className='py-16'>
                    <div className='container mx-auto px-4'>
                        <div className='max-w-4xl mx-auto'>
                            <h2 className='text-3xl font-bold text-center mb-12'>
                                Key Benefits of Our Implementation Service
                            </h2>

                            <div className='grid md:grid-cols-2 gap-8'>
                                <div className='space-y-6'>
                                    <div className='flex items-start gap-4'>
                                        <CheckCircle className='w-6 h-6 text-green-500 mt-1 flex-shrink-0' />
                                        <div>
                                            <h4 className='font-semibold mb-2'>
                                                Reducing Omissions Caused by
                                                Employees
                                            </h4>
                                            <p className='text-muted-foreground'>
                                                For a human, there is always a
                                                scope of mistakes, but not for
                                                software. ERP system ensures
                                                that your barcode or product
                                                price is consistent across all
                                                your systems.
                                            </p>
                                        </div>
                                    </div>

                                    <div className='flex items-start gap-4'>
                                        <CheckCircle className='w-6 h-6 text-green-500 mt-1 flex-shrink-0' />
                                        <div>
                                            <h4 className='font-semibold mb-2'>
                                                Builds Customer Satisfaction
                                                Through Discount
                                            </h4>
                                            <p className='text-muted-foreground'>
                                                All the data collected in one
                                                software calculates the discount
                                                that can be given to a customer
                                                and enables calculation of
                                                retail store capacity.
                                            </p>
                                        </div>
                                    </div>

                                    <div className='flex items-start gap-4'>
                                        <CheckCircle className='w-6 h-6 text-green-500 mt-1 flex-shrink-0' />
                                        <div>
                                            <h4 className='font-semibold mb-2'>
                                                Offering to Pay with More
                                                Options
                                            </h4>
                                            <p className='text-muted-foreground'>
                                                POS service provides your
                                                customers multiple options to
                                                pay and make their purchase more
                                                promising.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className='space-y-6'>
                                    <div className='flex items-start gap-4'>
                                        <CheckCircle className='w-6 h-6 text-green-500 mt-1 flex-shrink-0' />
                                        <div>
                                            <h4 className='font-semibold mb-2'>
                                                Removal of Losses
                                            </h4>
                                            <p className='text-muted-foreground'>
                                                As your data are stored
                                                effectively in one place, there
                                                is less risk of casualties,
                                                loss, or embezzled inventory.
                                            </p>
                                        </div>
                                    </div>

                                    <div className='flex items-start gap-4'>
                                        <CheckCircle className='w-6 h-6 text-green-500 mt-1 flex-shrink-0' />
                                        <div>
                                            <h4 className='font-semibold mb-2'>
                                                Improving Check-out Process
                                            </h4>
                                            <p className='text-muted-foreground'>
                                                POS system ensures that all data
                                                is centralized, giving accurate
                                                information about pricing and
                                                finding the best products.
                                            </p>
                                        </div>
                                    </div>

                                    <div className='flex items-start gap-4'>
                                        <CheckCircle className='w-6 h-6 text-green-500 mt-1 flex-shrink-0' />
                                        <div>
                                            <h4 className='font-semibold mb-2'>
                                                Track Employee Working
                                            </h4>
                                            <p className='text-muted-foreground'>
                                                Using the POS database, you can
                                                quickly know how many hours an
                                                employee did the shift and keep
                                                track of their performance.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section className='bg-primary text-white py-16'>
                    <div className='container mx-auto px-4'>
                        <div className='max-w-4xl mx-auto text-center'>
                            <h2 className='text-3xl font-bold mb-6'>
                                Ready to Transform Your Business?
                            </h2>
                            <p className='text-xl mb-8 opacity-90'>
                                Contact Teckzilla today and get the best Odoo
                                ERP implementation services!
                            </p>

                            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-8'>
                                <div className='flex items-center gap-2'>
                                    <Phone className='w-5 h-5' />
                                    <span>+91-8233083333</span>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <Phone className='w-5 h-5' />
                                    <span>+91-9137018743</span>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <Phone className='w-5 h-5' />
                                    <span>+91-9833765812</span>
                                </div>
                            </div>

                            <Button
                                size='lg'
                                variant='secondary'
                                className='bg-white text-primary hover:bg-gray-100'
                            >
                                Contact Us Now
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default OdooImplementationConsulting;
