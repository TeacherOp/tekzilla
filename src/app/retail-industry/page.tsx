import Footer from "@/components/Footer";
import Header from "@/components/Header";
import IndustryCardSection from "@/components/IndustryCardSection";

export default function RetailIndustryPage() {
  const sections = [
    {
      title: "All-Inclusive Retail Solutions",
      img: "https://teckzilla.net/wp-content/uploads/2023/09/Shopify_Retail_BlogHeader_Inclusive_Shopping_experience_FA_2x_fc77411a-8974-4513-987a-748e0f11f4d5-scaled.webp",
      alt: "All-Inclusive Retail Solutions",
      desc: "We enable smart product information management, billing, supply chain management and many more with Odoo tools.",
    },
    {
      title: "Know What Your Customers Want",
      img: "https://teckzilla.net/wp-content/uploads/2023/09/35Dec11_Davenport_know-what-your-customers-want1-383x215-1.jpg",
      alt: "Know What Your Customers Want",
      desc: "At Teckzilla, we allow you to keep a check on your customers to build loyalty and better relationships.",
    },
    {
      title: "Real-Time Updates",
      img: "https://teckzilla.net/wp-content/uploads/2023/09/Real-Time-Updates.webp",
      alt: "Real-Time Updates",
      desc: "The retail industry requires real-time updates, especially with inventory, hence, our team ensures your Odoo inventory management software caters to all your needs.",
    },
  ];
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-8 text-center">
            Attain Better Customer Relations with Teckzilla
          </h1>
          <p className="text-lg mb-10 text-muted-foreground">
            Use different sales channels to reach out to your clients with Odoo.
            No matter if it’s a PoS, a CRM, or a B2B network, Odoo facilitates
            perfection in all your retail business activities. The most
            remarkable aspect of using Odoo in retail is that you will have the
            ability to integrate it with manufacturing, inventory and purchase
            among other Odoo applications. At Teckzilla, we allow you to get
            perfect retail management for your retail as well as wholesale
            business. Our expert team combines the best of Odoo’s solutions and
            delivers you a smart software tool.
          </p>
          <IndustryCardSection sections={sections} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
