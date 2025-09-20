import Footer from "@/components/Footer";
import Header from "@/components/Header";
import IndustryCardSection from "@/components/IndustryCardSection";

export default function TelecomIndustryPage() {
  const sections = [
    {
      title: "Quoting & Contract Management",
      img: "https://teckzilla.net/wp-content/uploads/2023/09/iStock-157317251-900x586-1.jpg",
      alt: "Quoting & Contract Management",
      desc: "Our Odoo based ERP solutions allow you to acquire the most efficient contract and quoting management.",
    },
    {
      title: "Customer Sales",
      img: "https://teckzilla.net/wp-content/uploads/2023/09/Disruptive-Selling-4.10.19.jpg",
      alt: "Customer Sales",
      desc: "With the help of our Odoo CRM tools, you will get the opportunity to attain extensive customer sales.",
    },
    {
      title: "Customized Quotes",
      img: "https://teckzilla.net/wp-content/uploads/2023/09/1600w-haCq1eHbO8w.webp",
      alt: "Customized Quotes",
      desc: "Our Odoo solutions enable you to create customized quotes based on network, software, or device as per the requirement to close the deal quickly.",
    },
  ];
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-8 text-center">
            Benchmark ERP Solutions For Telecom Industry
          </h1>
          <p className="text-lg mb-10 text-muted-foreground">
            At Teckzilla, we serve our telecom clients with a complete suite of
            Odoo solutions. Our extensive set of solutions ensures that our
            clients get prompt resolutions for any type of network disruption
            they face. With the ability to integrate Odoo into telecom inventory
            systems, telecom CRM, and telecom analytics, we cater an exceptional
            set of services for all our clients. As Odoo can cater to incredible
            integrations, we use such capabilities to enable our clients to
            acquire extensive ease in maintaining customer satisfaction while
            using data for better service.
          </p>
          <IndustryCardSection sections={sections} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
