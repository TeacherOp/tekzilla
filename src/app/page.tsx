import CompanySection from "@/components/CompanySection";
import FeaturesSection from "@/components/FeaturesSection";
import HeroSection from "@/components/HeroSection";
import OdooTestimonialSection from "@/components/OdooTestimonialSection";
import PartnersSection from "@/components/PartnersSection";
import SoftwareServicesSection from "@/components/SoftwareServicesSection";
import TransformBusinessSection from "@/components/TransformBusinessSection";
import GetStartedPopup from "@/components/GetStartedPopup";

const Index = () => {
  return (
    <main>
      <GetStartedPopup />
      <HeroSection />
      <CompanySection />
      <SoftwareServicesSection />
      <TransformBusinessSection />
      <OdooTestimonialSection />
      <FeaturesSection />
      <PartnersSection />
    </main>
  );
};

export default Index;
