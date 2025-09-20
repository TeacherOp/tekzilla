import CompanySection from "@/components/CompanySection";
import FAQSection from "@/components/FAQSection";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PartnersSection from "@/components/PartnersSection";
import PopularSearchesSection from "@/components/PopularSearchesSection";
import SoftwareServicesSection from "@/components/SoftwareServicesSection";
import TransformBusinessSection from "@/components/TransformBusinessSection";
import OdooTestimonialSection from "@/components/OdooTestimonialSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <CompanySection />
        <SoftwareServicesSection />
        <TransformBusinessSection />
        <OdooTestimonialSection />
        <FeaturesSection />
        <PartnersSection />
        <FAQSection />
        <PopularSearchesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
