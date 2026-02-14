import { Metadata } from 'next';
import FAQSection from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'FAQ - Teckzilla | Odoo Gold Partner Frequently Asked Questions',
  description:
    'Find answers to frequently asked questions about Odoo ERP implementation, Teckzilla services, customization, support, and more. Get insights from an Odoo Gold Partner.',
  keywords: 'Odoo FAQ, ERP questions, Teckzilla FAQ, Odoo support, Odoo implementation timeline, Odoo customization',
};

const FAQPage = () => {
  return (
    <main>
      <div className="pt-8">
        <FAQSection />
      </div>
    </main>
  );
};

export default FAQPage;
