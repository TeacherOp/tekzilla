import IndustryCardSection from '@/components/IndustryCardSection';
import { siteConfig } from '@/site.config';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Odoo ERP Solutions for Service Industry | Teckzilla Service Sector',
    description:
        'Empower your service industry business with Odoo ERP solutions from Teckzilla. Achieve better integration, growth, and customer value through analytics-driven digital transformation tailored for service sector needs.',
    keywords: [
        'Odoo service industry',
        'service sector ERP',
        'integration service business',
        'customer analytics service industry',
        'Teckzilla service solutions',
        'business growth ERP',
        'service management',
        'digitization service sector',
        'Odoo implementation service industry',
        'scalable ERP solutions',
    ],
    alternates: {
        canonical: `${siteConfig.site_domain}/service-industry`,
    },
    metadataBase: new URL(`${siteConfig.site_domain}/service-industry`),
    robots: {
        index: true,
        follow: true,
    },
};

export default function ServiceIndustryPage() {
    const sections = [
        {
            title: 'Exceptional Integration',
            img: '/Clarizen-integrated-project-management-1024x883-1.webp',
            alt: 'Exceptional Integration',
            desc: 'Odoo allows you to ideally integrate different processes for better coordination.',
        },
        {
            title: 'Facilitates Overall Growth',
            img: '/Green-And-White-Isometric-Business-Growth-Poster-e1660200614239.webp',
            alt: 'Facilitates Overall Growth',
            desc: 'Odoo solutions at Teckzilla allow you to have exclusive scalability, reliability, and connectivity.',
        },
        {
            title: 'Value for End-Customers',
            img: '/Shutterstock_19689850273-e1694085131780.webp',
            alt: 'Value for End-Customers',
            desc: 'Using analytics to track customer satisfaction, our Odoo solutions cater better',
        },
    ];
    return (
        <div className='min-h-screen bg-background'>
            <main className='py-16'>
                <div className='container mx-auto px-4 max-w-4xl'>
                    <h1 className='text-3xl md:text-5xl font-bold mb-8 text-center'>
                        Our Exclusive Solutions For The Service Industry
                    </h1>
                    <p className='text-lg mb-10 text-muted-foreground'>
                        The service industry is one of the sectors with
                        extensive cut-throat competition. Meeting the
                        expectations of a highly demanding consumer market is
                        beyond a challenge. It doesn’t matter if you are just
                        beginning or have established grounds, consumers will
                        change their preference in less than a matter of time.
                        So, Teckzilla caters to extensive solutions that allow
                        you to enhance your digitisation journey and achieve
                        exceptional customer delight using Odoo’s incredible
                        data analytics and management. Recent statistics show
                        that over 2 million people have been using Odoo for its
                        amazing flexibility and high level of cost-saving. So,
                        if you are willing to embrace digitization in your
                        service industry business, then our Odoo implementation
                        and integration solutions are right there to enhance
                        your operations.
                    </p>
                    <IndustryCardSection sections={sections} />
                </div>
            </main>
        </div>
    );
}
