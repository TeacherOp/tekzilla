import Footer from "@/components/Footer";
import Header from "@/components/Header";
import IndustryCardSection from "@/components/IndustryCardSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Odoo ERP Solutions for Healthcare Industry | Teckzilla Health IT",
  description:
    "Transform your healthcare organization with tailored Odoo ERP solutions from Teckzilla. Integrate medical records, enable analytics, and manage real-time information for improved care and administration.",
  keywords: [
    "Odoo healthcare",
    "Healthcare ERP solutions",
    "Electronic Medical Records",
    "Healthcare analytics",
    "Real-time healthcare information",
    "Health IT",
    "Teckzilla healthcare",
    "Odoo for hospitals",
    "medical software",
    "healthcare administration",
  ],
};

export default function HealthIndustryPage() {
  const sections = [
    {
      title: "A Combination of All the Medical Records",
      img: "/medical-records-1-810x424-1.webp",
      alt: "Medical Records",
      desc: "At Teckzilla, we combine the capabilities of strong Electronic Health Records, EMRs, HIEs and more to facilitate better coordination.",
    },
    {
      title: "Analytics in Healthcare",
      img: "/Health-Insurance.webp",
      alt: "Analytics in Healthcare",
      desc: "To provide a better caregiving experience, our Odoo healthcare solutions use analytics.",
    },
    {
      title: "Real-Time Information System",
      img: "/shutterstock_359651795.webp",
      alt: "Real-Time Information System",
      desc: "You need to monitor real-time information and we help you with that through Odoo.",
    },
  ];
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-8 text-center">
            Turnkey Healthcare Solutions with Teckzilla
          </h1>
          <p className="text-lg mb-10 text-muted-foreground">
            Every healthcare organization must have their specific custom
            software. It helps in creating a strong and well-built healthcare
            network. Our Odoo solutions in the healthcare system allow us to
            help our clients overcome the most alarming challenges. These
            include limited communication and coordination, developing a
            connection within disparate legacy health systems, overcoming health
            illiteracy, and taking care of funds for non-profit health care
            units.
          </p>
          <p className="text-lg mb-10 text-muted-foreground">
            Our Odoo-based healthcare system solutions facilitate a simplified
            flow of administration, identification of records, enhanced
            caregiving with timely updates, and assessment and establishment of
            KPIs for better working.
          </p>
          <IndustryCardSection sections={sections} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
