import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const PartnersSection = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-20 right-20 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full font-semibold text-sm mb-6 backdrop-blur-sm border border-primary/20">
            <Star className="w-4 h-4 mr-2" />
            WHO ARE OUR PARTNERS?
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6  bg-clip-text ">
            We Pride Ourselves In Our Clients
          </h2>
          <div className="w-24 h-1  mx-auto rounded-full" />
        </div>

        {/* Client Logos Marquee */}
        <div className="mb-24 overflow-hidden">
          <div className="flex animate-marquee hover:pause-marquee">
            {/* First set of logos */}
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
              <Card
                key={item}
                className="group bg-card/50 backdrop-blur-sm border-0 shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2 flex-shrink-0 mx-4 min-w-[200px]"
              >
                <CardContent className="p-6 flex items-center justify-center h-20">
                  <div className="w-full h-10 bg-gradient-to-r from-muted to-muted/50 rounded-lg flex items-center justify-center group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-300">
                    <span className="text-xs text-muted-foreground font-semibold group-hover:text-primary transition-colors">
                      Client {item}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
            {/* Duplicate set for seamless loop */}
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
              <Card
                key={`duplicate-${item}`}
                className="group bg-card/50 backdrop-blur-sm border-0 shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2 flex-shrink-0 mx-4 min-w-[200px]"
              >
                <CardContent className="p-6 flex items-center justify-center h-20">
                  <div className="w-full h-10 bg-gradient-to-r from-muted to-muted/50 rounded-lg flex items-center justify-center group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-300">
                    <span className="text-xs text-muted-foreground font-semibold group-hover:text-primary transition-colors">
                      Client {item}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
