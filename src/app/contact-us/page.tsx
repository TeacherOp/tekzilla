import { ContactForm } from "@/components/contact-form";
import { siteConfig } from "@/site.config";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Get in Touch with Teckzilla | Odoo Gold Partner",
  description:
    "Contact Teckzilla for Odoo ERP solutions. Reach us at our Mumbai and Dubai offices. Call +91-8233083333 or email sales@teckzilla.net",
  alternates: {
    canonical: `${siteConfig.site_domain}/contact-us`,
  },
  metadataBase: new URL(`${siteConfig.site_domain}/contact-us`),
  robots: {
    index: true,
    follow: true,
  },
};

const Contact = () => {
  return <ContactForm />;
};

export default Contact;
