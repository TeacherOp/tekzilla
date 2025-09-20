import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Layers, Monitor, Package } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Monitor,
      title: "User-Friendly Interface",
      description:
        "Simplifies complex processes, making it easy for your team to adapt and use for any department work flow.",
    },
    {
      icon: Layers,
      title: "Unified Platform",
      description:
        "Manage your entire business from one platform, saving time and money while reducing the need for multiple software and external support system. Try now with free Demo!",
    },
    {
      icon: Package,
      title: "Advanced Inventory Control",
      description:
        "Maintain optimal stock levels and minimize waste of products or services by keep the best track records.  Ideally for businesses looking to streamline their supply chain and enhance profitability and productivity.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-lg mb-4">
            ODOO GOLD PARTNER IN MUMBAI, INDIA
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Discover The Key Features Of Odoo ERP Software
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
            Now it’s time to unlock and treasure your company’s full potential
            with Odoo ERP Software. At Teckzilla Technologies, we offer a
            complete system designed to simplify your processes and boost
            efficiency and effectiveness for business upgrades. Explore how Odoo
            ERP Software smooths the integration and automation, which overall
            helps business functions and profits, leading to growth.
          </p>
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Key Features of Odoo ERP Latest Release 2025 include:
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="card-corporate text-center group hover:border-primary/20 transition-all duration-300"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="text-center max-w-4xl mx-auto">
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            As an Odoo Gold Partner in Mumbai, India, Teckzilla values adaptable
            solutions. Odoo ERP Software is highly flexible, allowing you to
            customize it to fit your company's needs and requirement. This
            adaptability helps Odoo ERP grows with your business, providing
            scalability and ongoing support with complete training.
          </p>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Ready to transform your business? Visit Teckzilla Odoo Gold Partner
            to discover how Odoo ERP's latest features can revolutionize your
            operations. Celebrate the future of business management with Odoo
            ERP today!
          </p>
          <Button className="btn-primary">Book Free Demo</Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
