import { cn } from "@/lib/utils";
import { Layers, LucideIcon, Monitor, Package } from "lucide-react";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeaturesSection: React.FC = () => {
  const features: Feature[] = [
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
        "Maintain optimal stock levels and minimize waste of products or services by keep the best track records. Ideally for businesses looking to streamline their supply chain and enhance profitability and productivity.",
    },
  ];

  return (
    <div className="min-h-screen font-sans p-4 sm:p-8 bg-white">
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <p
              className="text-blue-600 font-semibold text-lg mb-4 fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              ODOO GOLD PARTNER IN MUMBAI, INDIA
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold text-gray-950 mb-8 fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Discover The Key Features Of Odoo ERP Software
            </h2>
            <p
              className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8 fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              Now it’s time to unlock and treasure your company’s full potential
              with Odoo ERP Software. At Teckzilla Technologies, we offer a
              complete system designed to simplify your processes and boost
              efficiency and effectiveness for business upgrades. Explore how
              Odoo ERP Software smooths the integration and automation, which
              overall helps business functions and profits, leading to growth.
            </p>
            <h3
              className="text-2xl font-bold text-gray-950 mb-8 fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              Key Features of Odoo ERP Latest Release 2025 include:
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-white shadow-lg flex flex-col items-center text-center transition-all duration-300 transform hover:scale-105 hover:shadow-xl border border-gray-200 fade-in-up"
                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-blue-300 rounded-full mx-auto mb-6 transition-colors group-hover:bg-blue-400">
                  <feature.icon className="w-8 h-8 text-blue-800" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-950">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div
            className="text-center max-w-4xl mx-auto fade-in-up"
            style={{ animationDelay: `${0.5 + features.length * 0.1}s` }}
          >
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              As an Odoo Gold Partner in Mumbai, India, Teckzilla values
              adaptable solutions. Odoo ERP Software is highly flexible,
              allowing you to customize it to fit your company's needs and
              requirement. This adaptability helps Odoo ERP grows with your
              business, providing scalability and ongoing support with complete
              training.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Ready to transform your business? Visit Teckzilla Odoo Gold
              Partner to discover how Odoo ERP's latest features can
              revolutionize your operations. Celebrate the future of business
              management with Odoo ERP today!
            </p>
            <Link href={"/contact-us"} className={cn(buttonVariants())}>
              Book Free Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesSection;
