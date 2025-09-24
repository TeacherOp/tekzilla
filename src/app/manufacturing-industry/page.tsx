import Footer from "@/components/Footer";
import Header from "@/components/Header";
import IndustryCardSection from "@/components/IndustryCardSection";

export default function ManufacturingIndustryPage() {
  const sections = [
    {
      title: "Optimization of Processes",
      img: "/The-Ultimate-Guide-to-Process-Optimization-1.webp",
      alt: "Optimization of Processes",
      desc: "Our manufacturing process enables us to deliver greater optimized solutions for all aspects of the production process.",
    },
    {
      title: "Better Cost Saving",
      img: "/Cost-Savings-vs-Cost-Avoidance.webp",
      alt: "Better Cost Saving",
      desc: "Odoo based implementation allows you to save a lot of costs as it's an open-source platform. In addition, our smart implementation will allow you to increase your margins and attain better profits.",
    },
    {
      title: "Compliance",
      img: "/download-5.webp",
      alt: "Compliance",
      desc: "Using Odoo manufacturing systems, you can make sure your products undergo better quality standards while ensuring compliance with international standards.",
    },
  ];
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-8 text-center">
            Make Manufacturing Easy With Streamlined Processing
          </h1>
          <p className="text-lg mb-10 text-muted-foreground">
            Using Odoo solutions will allow you to attain better control of
            production. As the manufacturing world demands precision and
            sustainability, using actionable data at the right time and in the
            right place will be extremely important. Teckzilla uses the Odoo
            tools to allow you better insights into market forces, consumer
            demands, and things about the competition to make your production
            process ideal to attain better profitability. Using our Odoo
            solutions, the manufacturers will also get the opportunity to
            integrate several systems into one platform offering exceptional
            ease at forecasting, planning, and optimization.
          </p>
          <IndustryCardSection sections={sections} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
