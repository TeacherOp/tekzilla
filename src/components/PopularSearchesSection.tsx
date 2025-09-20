import { Badge } from "@/components/ui/badge";

const PopularSearchesSection = () => {
  const searches = [
    "Odoo Gold Partner in India",
    "Odoo Gold Partner in Mumbai",
    "Best Odoo ERP Implementation Partner",
    "Odoo ERP Gold Partner Near Me",
    "Odoo ERP for Manufacturing",
    "Odoo ERP for Construction",
    "Odoo ERP for Retail Businesses",
    "Odoo ERP for Healthcare ERP",
    "Top Odoo Gold Partner with Customization Services",
    "Odoo ERP Gold Partner Pricing",
    "Odoo Official Gold Partner Support",
  ];

  return (
    <section className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Most Popular Searches For Odoo Gold Partner
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            When businesses explore Odoo ERP solutions, they often search for
            trusted partners who can deliver proven results. Depending on their
            location, industry, and needs, these are the most common search
            terms:
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {searches.map((search, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="px-4 py-2 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
              >
                {search}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularSearchesSection;
