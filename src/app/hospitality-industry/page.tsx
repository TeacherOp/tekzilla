import IndustryCardSection from '@/components/IndustryCardSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Odoo ERP Solutions for Hospitality Industry | Teckzilla Hospitality',
    description:
        'Elevate your hospitality business with Odoo ERP solutions from Teckzilla. Streamline front desk, kitchen, and staff management for hotels, restaurants, and hospitality operations. Boost guest satisfaction and operational efficiency.',
    keywords: [
        'Odoo hospitality',
        'Hospitality ERP solutions',
        'hotel management software',
        'restaurant POS',
        'front desk management',
        'kitchen management',
        'staff management',
        'Teckzilla hospitality',
        'real-time updates hospitality',
        'OTA integration',
    ],
};

export default function HospitalityIndustryPage() {
    const sections = [
        {
            title: 'Front Desk Management',
            img: '/1601.m10.i310.n005.P.c20.321294572_Customer_at_reception._Vector_concept_in_flat_sty-scaled.webp',
            alt: 'Front Desk Management',
            desc: 'At Teckzilla, we allow you to attain effective front desk management starting from easy bookings to the management of information.',
        },
        {
            title: 'Kitchen Management',
            img: '/Kitchen_Manager.webp',
            alt: 'Kitchen Management',
            desc: "Odoo's exclusive inventory management tools in addition to some other applications will allow you to get the best kitchen management.",
        },
        {
            title: 'Staff Management',
            img: '/Employee-Management-Meaning-Importance-Tips-Tools-More.webp',
            alt: 'Staff Management',
            desc: "Odoo simply handles it all and when we say that, we mean everything that technology is allowed to intervene in. Our Odoo solutions can easily take care of your staff's management with other hospitality operations.",
        },
    ];
    return (
        <div className='min-h-screen bg-background'>
            <main className='py-16'>
                <div className='container mx-auto px-4 max-w-4xl'>
                    <h1 className='text-3xl md:text-5xl font-bold mb-8 text-center'>
                        Make Your Guests Happy With Technological Ease
                    </h1>
                    <p className='text-lg mb-10 text-muted-foreground'>
                        In the present world, the hospitality industry is one of
                        the most buzzing sectors of any economy. With increasing
                        importance, the industry is also undergoing a major
                        spike in management requirements. With the increasing
                        importance of restaurant POS software and other
                        inventory management tools, Odoo has found the right
                        place to be. Odoo’s intuitive platform and responsive
                        platform will allow you to get best in class solutions.
                        Though there are several benefits of using Odoo in the
                        hospitality business, the best one remains real-time
                        updates, saving costs on hotel activities and better
                        integration of OTAs.
                    </p>
                    <IndustryCardSection sections={sections} />
                </div>
            </main>
        </div>
    );
}
