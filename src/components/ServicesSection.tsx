import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Phone } from 'lucide-react';

const ServicesSection = () => {
    return (
        <section id='services' className='py-20 bg-background'>
            <div className='container mx-auto px-4'>
                {/* Header */}
                <div className='text-center mb-16'>
                    <p className='text-primary font-semibold text-lg mb-4'>
                        What do We do?
                    </p>
                    <h2 className='text-4xl md:text-5xl font-bold text-foreground mb-8'>
                        Exceeding Proficiency in Odoo Solutions
                    </h2>
                </div>

                <div className='grid md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
                    {/* Support Card */}
                    <Card className='card-corporate text-center'>
                        <div className='flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-6'>
                            <Phone className='w-8 h-8 text-primary' />
                        </div>
                        <h4 className='text-xl font-semibold mb-4'>
                            Call to ask any question
                        </h4>
                        <div className='text-2xl font-bold text-primary mb-6'>
                            +91-8233083333
                        </div>
                        <h3 className='text-xl font-bold mb-4'>
                            Our Impeccable Support
                        </h3>
                        <p className='text-muted-foreground mb-6 leading-relaxed'>
                            Teckzilla Technologies (Formerly Planet Odoo) brings
                            you the most efficient Odoo solutions from some of
                            the most experienced and qualified IT professionals.
                            Our unmatched support and timely completion of
                            deadlines keep us ahead of the competition.
                        </p>
                        <Button variant='outline' className='w-full'>
                            View Details
                        </Button>
                    </Card>

                    {/* Implementation Card */}
                    <Card className='card-corporate text-center'>
                        <div className='flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-6'>
                            <img
                                src={'/odoo-implementation-icon.png'}
                                alt='Implementation'
                                className='w-8 h-8'
                            />
                        </div>
                        <h3 className='text-xl font-bold mb-6'>
                            Odoo Implementation
                        </h3>
                        <p className='text-muted-foreground mb-6 leading-relaxed'>
                            We know that implementation of Odoo can be crafty,
                            hence, to not engage in any major mishap, our
                            experts allow you hands-on smart Odoo
                            implementation.
                        </p>
                        <Button variant='outline' className='w-full'>
                            View Details
                        </Button>
                    </Card>

                    {/* Migration Card */}
                    <Card className='card-corporate text-center'>
                        <div className='flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mx-auto mb-6'>
                            <img
                                src={'odoo-migration-icon.png'}
                                alt='Migration'
                                className='w-8 h-8'
                            />
                        </div>
                        <h3 className='text-xl font-bold mb-6'>
                            Odoo Migration
                        </h3>
                        <p className='text-muted-foreground mb-6 leading-relaxed'>
                            Are you looking for a company that helps you upgrade
                            your Odoo management software? Well, we are here to
                            save the day. Get the best Odoo migration with
                            Teckzilla.
                        </p>
                        <Button variant='outline' className='w-full'>
                            View Details
                        </Button>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
