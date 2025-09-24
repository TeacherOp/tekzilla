import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, Zap } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="min-h-screen w-full bg-[#f8fafc] relative flex items-center justify-center overflow-hidden">
      {/* Top Fade Grid Background */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #e2e8f0 1px, transparent 1px),
            linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
          `,
          backgroundSize: "20px 30px",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          {/* Trust Badge */}
          <div className="mb-8 flex justify-center w-full animate-fade-up">
            <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-primary text-white text-xs font-medium font-display gap-2 relative">
              <span className="relative flex h-2 w-2 mr-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              Certified Odoo Gold Partner
            </span>
          </div>

          {/* Main Headline */}
          <div
            className="text-center space-y-7 animate-fade-up"
            style={{ animationDelay: "0.14s" }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight font-display">
              Expert Odoo ERP Services,
              <br />
              <span className="inline-block ">Delivered Right</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed font-medium">
              Streamline operations, boost productivity, and accelerate your
              growth with Mumbai’s leading Odoo Gold Partner.
            </p>
          </div>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-12 animate-fade-up"
            style={{ animationDelay: "0.26s" }}
          >
            <Button
              size="lg"
              className="text-base md:text-lg px-8 py-4 rounded-full bg-primary text-white font-semibold shadow hover:bg-primary/90 group"
              asChild
            >
              <Link href="/contact-us">
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 w-full animate-fade-up"
            style={{ animationDelay: "0.37s" }}
          >
            <div className="rounded-2xl bg-white/80 border border-muted text-center p-8 shadow-sm">
              <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                <Users className="w-7 h-7 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-1 font-display">
                500+
              </div>
              <div className="text-base text-muted-foreground font-medium">
                Businesses Transformed
              </div>
            </div>

            <div className="rounded-2xl bg-white/80 border border-muted text-center p-8 shadow-sm">
              <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                <Star className="w-7 h-7 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-1 font-display">
                98%
              </div>
              <div className="text-base text-muted-foreground font-medium">
                Client Satisfaction
              </div>
            </div>

            <div className="rounded-2xl bg-white/80 border border-muted text-center p-8 shadow-sm">
              <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                <Zap className="w-7 h-7 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-1 font-display">
                40%
              </div>
              <div className="text-base text-muted-foreground font-medium">
                Avg. Efficiency Gain
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center mt-16 animate-bounce">
            <div className="w-6 h-10 border-2 border-muted-foreground/40 rounded-full flex justify-center items-start">
              <div className="w-1 h-3 bg-muted-foreground/60 rounded-full mt-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
