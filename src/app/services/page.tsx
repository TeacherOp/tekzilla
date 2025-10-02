import { Container, Prose } from '@/components/craft';
import { siteConfig } from '@/site.config';
import Link from 'next/link';

export const metadata = {
    title: 'Our Services | Teckzilla ERP Solutions',
    description:
        'Explore the full range of Odoo implementation, migration, support, and training services offered by Teckzilla for comprehensive business transformation.',
    keywords: [
        'Odoo services',
        'ERP solutions',
        'Teckzilla',
        'Odoo implementation',
        'Odoo migration',
        'Odoo support',
        'Odoo training',
        'business transformation',
        'ERP consulting',
        'Odoo experts',
    ],
    openGraph: {
        title: 'Our Services | Teckzilla ERP Solutions',
        description:
            'Explore the full range of Odoo implementation, migration, support, and training services offered by Teckzilla for comprehensive business transformation.',
        url: siteConfig.site_domain + '/services',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Our Services | Teckzilla ERP Solutions',
        description:
            'Discover Odoo implementation, migration, and support by Teckzilla. Empower your business with expert ERP solutions.',
    },
    alternates: {
        canonical: siteConfig.site_domain + '/services',
    },
    metadataBase: new URL(`${siteConfig.site_domain}/services`),
    robots: {
        index: true,
        follow: true,
    },
};

const SERVICES = [
    {
        title: 'Odoo Implementation & Consulting',
        slug: 'odoo-implementation-consulting',
        description:
            'Comprehensive Odoo implementation with end-to-end business process consulting.',
        icon: '🛠️',
        href: '/services/odoo-implementation-consulting',
    },
    {
        title: 'Odoo Migration',
        slug: 'odoo-migration',
        description:
            'Migrate your legacy systems or Odoo versions with zero downtime.',
        icon: '🔄',
        href: '/services/odoo-migration',
    },
    {
        title: 'Odoo Support by Teckzilla',
        slug: 'odoo-support-by-teckzilla',
        description:
            'Ongoing Odoo technical and functional support, including upgrades and bug fixes.',
        icon: '💡',
        href: '/services/odoo-support-by-teckzilla',
    },
    {
        title: 'Odoo Training by Teckzilla',
        slug: 'odoo-training-by-teckzilla',
        description:
            'Expert-led Odoo training sessions for your end users or team.',
        icon: '🎓',
        href: '/services/odoo-training-by-teckzilla',
    },
    // ...add more services as needed
];

export default function ServicePage() {
    return (
        <div className='min-h-screen bg-gray-50 pb-16'>
            <div className='bg-[#12336d] py-14 mb-10'>
                <Container>
                    <Prose>
                        <h1 className='text-white mb-0'>Our Services</h1>
                        <p className='text-lg text-blue-100 mb-0'>
                            Explore all the ERP services we offer for seamless
                            business transformation.
                        </p>
                    </Prose>
                </Container>
            </div>
            <Container>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {SERVICES.map(service => (
                        <Link
                            key={service.slug}
                            href={service.href}
                            className='bg-white rounded-xl border shadow group p-7 flex flex-col transition-all hover:border-primary hover:shadow-primary/10'
                        >
                            <span className='text-2xl mb-3'>
                                {service.icon}
                            </span>
                            <h2 className='font-bold text-lg text-[#12336d] group-hover:text-primary transition mb-2'>
                                {service.title}
                            </h2>
                            <p className='text-gray-600 text-sm flex-1'>
                                {service.description}
                            </p>
                            <span className='mt-4 text-primary font-medium text-sm group-hover:underline'>
                                Learn more &rarr;
                            </span>
                        </Link>
                    ))}
                </div>
            </Container>
        </div>
    );
}
