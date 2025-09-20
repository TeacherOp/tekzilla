import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
    BarChart3,
    CheckCircle,
    Settings,
    Shield,
    TrendingUp,
    Users,
} from 'lucide-react';

const TransformBusinessSection = () => {
    const features = [
        'Accounting & Finance',
        'Construction',
        'Manufacturing & Inventory',
        'HR & Payroll',
        'eCommerce & CRM',
        'Supply Chain & Logistics',
    ];

    const keyFeatures = [
        {
            icon: TrendingUp,
            title: 'Scalable solutions that grow with your business',
        },
        {
            icon: Shield,
            title: 'Secure data management & role-based access',
        },
        {
            icon: Settings,
            title: 'Seamless third-party integrations',
        },
        {
            icon: BarChart3,
            title: 'Data-driven insights for decision-making',
        },
        {
            icon: Users,
            title: 'Ongoing support & maintenance',
        },
    ];

    return (
        <section className='py-20'>
            <div className='container mx-auto px-4'>
                <div className='text-center mb-16'>
                    <p className='text-primary font-semibold text-lg mb-4'>
                        TRANSFORM YOUR BUSINESS WITH
                    </p>
                    <h2 className='text-4xl md:text-5xl font-bold text-foreground mb-8'>
                        Odoo ERP Software
                    </h2>
                    <h3 className='text-2xl md:text-3xl font-semibold text-foreground mb-8'>
                        Odoo Gold Partner In Mumbai, India – Trusted ERP Experts
                    </h3>
                </div>

                <div className='max-w-6xl mx-auto'>
                    <div className='grid lg:grid-cols-2 gap-12 items-center mb-16'>
                        <div>
                            <p className='text-lg text-muted-foreground mb-6 leading-relaxed'>
                                Looking for a reliable Odoo Gold Partner in
                                Mumbai to streamline your business operations?
                            </p>
                            <p className='text-lg text-muted-foreground mb-8 leading-relaxed'>
                                Teckzilla is a certified Odoo Gold Partner in
                                India, helping organizations implement,
                                customize, and support Odoo ERP solutions
                                tailored to their unique needs.
                            </p>
                            <Button className='btn-primary  transition-colors duration-300 hover:shadow-md hover:bg-primary/90'>
                                Get Started Today
                            </Button>
                        </div>

                        <Card className='card-corporate transition-all duration-300 hover:scale-[1.025] hover:shadow-2xl'>
                            <h4 className='text-xl font-bold mb-6 text-foreground'>
                                Why Choose An Odoo Gold Partner In Mumbai?
                            </h4>
                            <ul className='space-y-4'>
                                {[
                                    "Direct access to Odoo's latest features & updates",
                                    'Certified consultants with proven expertise',
                                    'Tailored ERP solutions for every industry',
                                    'Faster deployment & professional support',
                                    'Long-term cost savings & efficiency',
                                ].map((text, i) => (
                                    <li
                                        key={i}
                                        className='flex items-start gap-3 group transition-all duration-200 hover:pl-2'
                                    >
                                        <CheckCircle className='w-5 h-5 text-primary mt-0.5 flex-shrink-0 transition-colors duration-200 group-hover:text-primary/80' />
                                        <span className='text-muted-foreground'>
                                            {text}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    </div>

                    <div className='mb-16'>
                        <h4 className='text-2xl font-bold text-center mb-8 text-foreground'>
                            Why Odoo ERP Software Is The Right Choice
                        </h4>
                        <p className='text-lg text-muted-foreground text-center mb-8 max-w-4xl mx-auto'>
                            Odoo ERP is one of the most flexible and
                            cost-effective solutions available today. With fully
                            integrated modules for:
                        </p>

                        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto mb-8'>
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className='flex items-center gap-3 p-4 bg-card rounded-lg border transition-transform duration-200 hover:scale-[1.045] hover:shadow-md group'
                                >
                                    <CheckCircle className='w-5 h-5 text-primary flex-shrink-0 transition-colors duration-200 group-hover:text-primary/80' />
                                    <span className='font-medium text-foreground'>
                                        {feature}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <p className='text-lg text-muted-foreground text-center'>
                            …it provides end-to-end automation so your business
                            runs smoothly on one platform.
                        </p>
                    </div>

                    <div>
                        <h4 className='text-2xl font-bold text-center mb-8 text-foreground'>
                            Key Features Of Odoo ERP With Teckzilla
                        </h4>
                        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                            {keyFeatures.map((feature, index) => (
                                <div
                                    key={index}
                                    className='flex items-start gap-4 p-6 bg-card rounded-lg border hover:border-primary/40 transition-all duration-300 hover:scale-[1.03] hover:shadow-lg group'
                                >
                                    <div className='flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full flex-shrink-0 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-105'>
                                        <feature.icon className='w-6 h-6 text-primary transition-colors duration-200 group-hover:text-primary/90' />
                                    </div>
                                    <div>
                                        <p className='font-medium text-foreground leading-relaxed'>
                                            {feature.title}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TransformBusinessSection;
