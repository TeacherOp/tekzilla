import CompanySection from "@/components/CompanySection";
import FAQSection from "@/components/FAQSection";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import OdooTestimonialSection from "@/components/OdooTestimonialSection";
import PartnersSection from "@/components/PartnersSection";
import PopularSearchesSection from "@/components/PopularSearchesSection";
import SoftwareServicesSection from "@/components/SoftwareServicesSection";
import TransformBusinessSection from "@/components/TransformBusinessSection";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";

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
        <div className="max-w-6xl mx-auto">
          <Card className="p-10 flex flex-col items-center justify-center shadow-2xl rounded-2xl mx-auto mt-10 ">
            <h4 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-3">
              Get Started with Odoo ERP Today
            </h4>
            <p className="text-lg text-center text-muted-foreground mb-7">
              Ready to scale your business with the best Odoo Gold Partner in
              Mumbai?
            </p>
            <div className="flex flex-col items-center mb-5">
              <span className="text-lg font-medium text-foreground flex items-center gap-2">
                Call us today or book a consultation with our certified Odoo
                experts.
              </span>
            </div>
            <Link href={"/contact-us"} className={cn(buttonVariants())}>
              Contact Us Now
            </Link>
          </Card>
        </div>

        <PopularSearchesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
