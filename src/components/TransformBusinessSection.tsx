import { Card } from "@/components/ui/card";
import { cn } from '@/lib/utils';
import {
  CheckCircle,
  HandshakeIcon,
  LineChartIcon,
  ShieldIcon,
} from "lucide-react";
import Link from 'next/link';
import { buttonVariants } from './ui/button';

const TransformBusinessSection = () => {
  const features = [
    "Accounting & Finance",
    "Construction",
    "Manufacturing & Inventory",
    "HR & Payroll",
    "eCommerce & CRM",
    "Supply Chain & Logistics",
  ];

  return (
    <section className="py-24 bg-gray-100 text-gray-900 font-sans">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <p className="text-primary font-semibold text-xl tracking-wide mb-2 uppercase">
            TRANSFORM YOUR BUSINESS WITH
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-4 leading-tight">
            Odoo ERP Software
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-6">
            Odoo Gold Partner In Mumbai, India – Trusted ERP Experts
          </h3>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-14 items-center mb-20">
            <div>
              <p className="text-lg md:text-xl text-muted-foreground mb-5 leading-relaxed">
                Looking for a reliable Odoo Gold Partner in Mumbai to streamline
                your business operations?
              </p>
              <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
                Teckzilla is a certified Odoo Gold Partner in India, helping
                organizations implement, customize, and support Odoo ERP
                solutions tailored to their unique needs.
              </p>
              <Link href={"/contact-us"} className={cn(buttonVariants(), "btn-primary px-8 py-3 rounded-full text-lg font-semibold transition-colors duration-300 hover:shadow-lg hover:bg-primary/90")}>
                Get Started Today
              </Link>
            </div>

            <Card className="bg-white/90 card-corporate rounded-2xl px-8 py-10 border border-primary/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
              <h4 className="text-2xl font-bold mb-6 text-foreground">
                Why Choose an Odoo Gold Partner in Mumbai for Your Business?
              </h4>
              <ul className="space-y-4">
                {[
                  "Direct access to Odoo's latest features & updates",
                  "Certified consultants with proven expertise",
                  "Tailored ERP solutions for every industry",
                  "Faster deployment & professional support",
                  "Long-term cost savings & efficiency",
                ].map((text, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 group transition-all duration-200 hover:pl-2"
                  >
                    <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0 transition-colors duration-200 group-hover:text-primary/80" />
                    <span className="text-md text-muted-foreground">
                      {text}
                    </span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          <div className="mb-20">
            <h4 className="text-3xl font-bold text-center mb-7 text-foreground">
              Why Odoo ERP Software Is The Right Choice
            </h4>
            <p className="text-xl text-muted-foreground text-center mb-8 mx-auto max-w-2xl">
              Odoo ERP is one of the most flexible and cost-effective solutions
              available today. With fully integrated modules for:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto mb-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-6 bg-card rounded-2xl border hover:shadow-lg transition-transform duration-200 hover:scale-[1.045] group"
                >
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 group-hover:text-primary/80" />
                  <span className="font-medium text-lg text-foreground">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-lg text-muted-foreground text-center">
              It provides end-to-end automation so your business runs smoothly
              on one platform.
            </p>
          </div>

          <div className="min-h-screen bg-zinc-50 text-zinc-900 p-4 sm:p-8 flex items-center justify-center font-sans">
            <div className="w-full max-w-7xl mx-auto py-12">
              <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-4 leading-tight">
                Key Features of Odoo ERP
              </h1>
              <p className="text-center text-lg sm:text-xl text-zinc-600 mb-12 max-w-2xl mx-auto">
                Unlocking Business Potential with Teckzilla Solutions.
              </p>

              {/* The Bento Grid Container */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(150px, auto)]">
                <div
                  className="lg:col-span-2 p-6 rounded-3xl bg-gradient-to-br from-indigo-100 to-purple-100 shadow-2xl flex items-center justify-center fade-in-up"
                  style={{ animationDelay: "0.1s" }}
                >
                  <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-2 text-indigo-800">
                      Teckzilla's Odoo ERP
                    </h2>
                    <p className="text-lg text-indigo-600">
                      A seamless integration of power and flexibility.
                    </p>
                  </div>
                </div>

                <div
                  className="p-6 rounded-3xl bg-white shadow-xl flex flex-col justify-between fade-in-up  transform hover:scale-105 transition-transform duration-300"
                  style={{ animationDelay: "0.2s" }}
                >
                  <div>
                    <div className="text-4xl text-indigo-600 mb-2">
                      <div className="text-4xl text-blue-600 mb-2">
                        <LineChartIcon size={40} />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2">
                      Scalable Solutions
                    </h3>
                    <p className="text-zinc-600 text-sm">
                      Solutions that grow with your business, adapting to your
                      evolving needs and expanding operations.
                    </p>
                  </div>
                </div>

                <div
                  className="p-6 rounded-3xl bg-white shadow-xl flex flex-col justify-between fade-in-up  transform hover:scale-105 transition-transform duration-300"
                  style={{ animationDelay: "0.3s" }}
                >
                  <div>
                    <div className="text-4xl text-indigo-600 mb-2">
                      <ShieldIcon size={40} />
                    </div>
                    <h3 className="text-xl font-bold mb-2">
                      Secure Data Management
                    </h3>
                    <p className="text-zinc-600 text-sm">
                      Robust security and role-based access control to protect
                      your sensitive business information.
                    </p>
                  </div>
                </div>

                <div
                  className="lg:col-span-2 p-6 rounded-3xl bg-white shadow-xl flex flex-col justify-between fade-in-up  transform hover:scale-105 transition-transform duration-300"
                  style={{ animationDelay: "0.4s" }}
                >
                  <div>
                    <div className="text-4xl text-indigo-600 mb-2">
                      <ShieldIcon size={40} />
                    </div>
                    <h3 className="text-xl font-bold mb-2">
                      Seamless Integrations
                    </h3>
                    <p className="text-zinc-600 text-sm">
                      Connect effortlessly with your favorite third-party
                      applications for a unified ecosystem.
                    </p>
                  </div>
                </div>

                <div
                  className="p-6 rounded-3xl bg-white shadow-xl flex flex-col justify-between fade-in-up  transform hover:scale-105 transition-transform duration-300"
                  style={{ animationDelay: "0.5s" }}
                >
                  <div>
                    <div className="text-4xl text-indigo-600 mb-2">
                      <ShieldIcon size={40} />
                    </div>
                    <h3 className="text-xl font-bold mb-2">
                      Data-driven Insights
                    </h3>
                    <p className="text-zinc-600 text-sm">
                      Leverage powerful analytics and reporting to make
                      informed, strategic business decisions.
                    </p>
                  </div>
                </div>

                <div
                  className="p-6 rounded-3xl bg-white shadow-xl flex flex-col justify-between fade-in-up  transform hover:scale-105 transition-transform duration-300"
                  style={{ animationDelay: "0.6s" }}
                >
                  <div>
                    <div className="text-4xl text-indigo-600 mb-2">
                      <HandshakeIcon size={40} />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Ongoing Support</h3>
                    <p className="text-zinc-600 text-sm">
                      Dedicated support and maintenance services to ensure your
                      system runs smoothly at all times.
                    </p>
                  </div>
                </div>

                <div
                  className="p-6 rounded-3xl bg-white shadow-xl flex flex-col justify-between fade-in-up  transform hover:scale-105 transition-transform duration-300"
                  style={{ animationDelay: "0.8s" }}
                >
                  <div>
                    <div className="text-4xl text-indigo-600 mb-2">
                      <HandshakeIcon size={40} />
                    </div>
                    <h3 className="text-xl font-bold mb-2">
                      Intuitive Interface
                    </h3>
                    <p className="text-zinc-600 text-sm">
                      Enjoy a user-friendly and intuitive interface designed for
                      a great user experience and minimal training.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Card className="relative overflow-hidden p-10 bg-gradient-to-br from-primary/10 via-white to-background border-l-8 border-primary shadow-xl rounded-2xl mx-auto mt-10">
            <h4 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose the Latest{" "}
              <span className="text-primary">Odoo ERP Software?</span>
            </h4>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Odoo ERP Software is a comprehensive suite of business tools made
              to meet the customized needs of modern companies. If you need to
              manage finances, human resources, sales, inventory, or other
              areas, Odoo ERP offers a simplified and dynamic interface that
              simplifies complex tasks. By automating processes, reducing
              operating costs, and providing insightful performance analysis,
              Odoo ERP helps your business run more efficiently with making
              hassle while working on inputs and information to be stored on the
              Odoo ERP Platform.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TransformBusinessSection;
