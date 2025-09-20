import Footer from "@/components/Footer";
import Header from "@/components/Header";
import IndustryCardSection from "@/components/IndustryCardSection";

export default function HospitalityIndustryPage() {
  const sections = [
    {
      title: "Front Desk Management",
      img: "https://teckzilla.net/wp-content/uploads/2023/09/1601.m10.i310.n005.P.c20.321294572_Customer_at_reception._Vector_concept_in_flat_sty-scaled.webp",
      alt: "Front Desk Management",
      desc: "At Teckzilla, we allow you to attain effective front desk management starting from easy bookings to the management of information.",
    },
    {
      title: "Kitchen Management",
      img: "https://teckzilla.net/wp-content/uploads/2023/09/Kitchen_Manager.jpg",
      alt: "Kitchen Management",
      desc: "Odoo's exclusive inventory management tools in addition to some other applications will allow you to get the best kitchen management.",
    },
    {
      title: "Staff Management",
      img: "https://teckzilla.net/wp-content/uploads/2023/09/Employee-Management-Meaning-Importance-Tips-Tools-More.png",
      alt: "Staff Management",
      desc: "Odoo simply handles it all and when we say that, we mean everything that technology is allowed to intervene in. Our Odoo solutions can easily take care of your staff's management with other hospitality operations.",
    },
  ];
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-8 text-center">
            Make Your Guests Happy With Technological Ease
          </h1>
          <p className="text-lg mb-10 text-muted-foreground">
            In the present world, the hospitality industry is one of the most
            buzzing sectors of any economy. With increasing importance, the
            industry is also undergoing a major spike in management
            requirements. With the increasing importance of restaurant POS
            software and other inventory management tools, Odoo has found the
            right place to be. Odoo’s intuitive platform and responsive platform
            will allow you to get best in class solutions. Though there are
            several benefits of using Odoo in the hospitality business, the best
            one remains real-time updates, saving costs on hotel activities and
            better integration of OTAs.
          </p>
          <IndustryCardSection sections={sections} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
