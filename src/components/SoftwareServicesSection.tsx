import { Card, CardContent } from '@/components/ui/card';
import { ArrowRightIcon } from 'lucide-react';
import Image from 'next/image';

const SoftwareServicesSection = () => {
    const services = [
        {
            imageSlug: 'odoo-consulting-demo',
            title: 'Odoo Implementation & Consulting',
            description:
                'Optimize operations with expert Odoo implementation services. Get a free demo and consultation to start planning and implementing Odoo in just 10 minutes!',
        },
        {
            imageSlug: 'odoo-data-migration',
            title: 'Odoo Migration',
            description:
                'Seamlessly upgrade your system with our expert Odoo migration services. All your data is more secure, handled, and transferred on the Odoo Platform.',
        },
        {
            imageSlug: 'odoo-support-experts',
            title: 'Odoo Support',
            description:
                'Receive comprehensive assistance with our dedicated Odoo support services. Feel free to reach out to our experts on call for any questions you have.',
        },
        {
            imageSlug: 'odoo-training-sessions',
            title: 'Odoo Training',
            description:
                'Enhance your skills with our professional Odoo training programs. Master Odoo with our training sessions available online or in person.',
        },
    ];

    return (
        <section className='py-20 bg-background'>
            <div className='container mx-auto px-4'>
                <div className='text-center mb-16'>
                    <p className='text-primary font-semibold text-lg mb-4'>
                        WHAT MAKES US THE BEST?
                    </p>
                    <h2 className='text-4xl md:text-5xl font-bold text-foreground'>
                        Discover Our Software Services
                    </h2>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    {services.map((service, index) => (
                        <Card
                            key={service.imageSlug}
                            className='group relative overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2'
                        >
                            <CardContent className='p-0'>
                                {/* Image Container */}
                                <div className='relative overflow-hidden rounded-lg mb-6 h-64'>
                                    <Image
                                        src={`/${service.imageSlug}.png`}
                                        alt={service.title}
                                        fill
                                        sizes='100vw'
                                        className='object-contain h-64 w-fit transition-transform duration-500 group-hover:scale-105'
                                    />
                                    <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                                </div>

                                {/* Content */}
                                <div className='p-6'>
                                    <h3 className='text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300'>
                                        {service.title}
                                    </h3>
                                    <p className='text-muted-foreground text-sm leading-relaxed mb-4'>
                                        {service.description}
                                    </p>

                                    {/* Call to Action */}
                                    <div className='flex items-center text-primary font-medium text-sm group-hover:translate-x-1 transition-transform duration-300'>
                                        <span>Learn More</span>
                                        <ArrowRightIcon className='ml-2 h-4 w-4' />
                                    </div>
                                </div>

                                {/* Floating Animation Trigger */}
                                <div className='absolute top-4 right-4'>
                                    <div
                                        className='w-2 h-2 bg-primary rounded-full animate-float'
                                        style={{
                                            animationDelay: `${index * 0.5}s`,
                                        }}
                                    />
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SoftwareServicesSection;
