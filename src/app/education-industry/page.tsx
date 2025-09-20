import Footer from "@/components/Footer";
import Header from "@/components/Header";
import IndustryCardSection from "@/components/IndustryCardSection";

export default function EducationIndustryPage() {
  const sections = [
    {
      title: "Make Efficient Plans",
      img: "https://teckzilla.net/wp-content/uploads/2023/09/Feature-image-for-energy-efficiency.jpg",
      alt: "Make Efficient Plans",
      desc: "Whether it's about projects or budgets, we create exclusive Odoo systems that enable ease in making and scheduling the plan.",
    },
    {
      title: "Learning Analytics",
      img: "https://teckzilla.net/wp-content/uploads/2023/09/learning_analytics-680x360-1.png",
      alt: "Learning Analytics",
      desc: "Our team creates the most effective applications that integrate learning analytics to measure student performance.",
    },
    {
      title: "Collaboration at Par",
      img: "https://teckzilla.net/wp-content/uploads/2023/09/collaboration-challenges-min-scaled.webp",
      alt: "Collaboration at Par",
      desc: "Using our Odoo solutions for the Education industry will allow you to attain better and optimized collaboration in the institute to attain absolute efficiency.",
    },
  ];
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-8 text-center">
            Achieve Better Collaboration With Odoo Implementation
          </h1>
          <p className="text-lg mb-10 text-muted-foreground">
            Teckzilla allows you to get the most effective Odoo services for
            your educational institutions. With the ability to customize Odoo
            implementation, we enable you to acquire tech-based personalization
            and data. Odoo helps us develop various types of systems that
            effectively integrate technology into learning. Our solutions like
            Learning Management systems, E-Learning applications, and more make
            you ahead in the international education world. ERP systems have
            proven results in the education system and backing them up with a
            strong set of tools as provided by Odoo would be the best choice for
            your business.
          </p>
          <IndustryCardSection sections={sections} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
