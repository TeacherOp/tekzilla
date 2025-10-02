import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { siteConfig } from '@/site.config';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Best Odoo Gold Partner in Mumbai, India | Odoo ERP Expert',
    description:
        '✅ Teckzilla is a Official Odoo Gold Partner in Mumbai, India. Odoo Expert ERP Consultant to streamline your business with tailored Odoo solutions. Call Today!',
    keywords: [
        'Odoo',
        'Odoo Gold Partner',
        'Odoo Mumbai',
        'Odoo India',
        'Odoo ERP',
        'ERP Consultant',
        'Teckzilla',
        'Odoo Expert',
        'Odoo Solutions',
        'Business Automation',
        'Odoo Implementation',
        'Odoo Support',
        'Odoo Developer',
        'Odoo Customization',
        'Odoo Migration',
        'Odoo Integration',
    ],
    alternates: {
        canonical: siteConfig.site_domain,
    },
    metadataBase: new URL(siteConfig.site_domain),
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <div className='min-h-screen bg-background'>
                    <Header />
                    {children}
                    <Footer />
                </div>
            </body>
        </html>
    );
}
