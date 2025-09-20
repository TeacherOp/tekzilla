import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  BarChart3,
  CheckCircle,
  Settings,
  Shield,
  TrendingUp,
  Users,
} from "lucide-react";

const TransformBusinessSection = () => {
  const features = [
    "Accounting & Finance",
    "Construction",
    "Manufacturing & Inventory",
    "HR & Payroll",
    "eCommerce & CRM",
    "Supply Chain & Logistics",
  ];

  const keyFeatures = [
    {
      icon: TrendingUp,
      title: "Scalable solutions that grow with your business",
    },
    {
      icon: Shield,
      title: "Secure data management & role-based access",
    },
    {
      icon: Settings,
      title: "Seamless third-party integrations",
    },
    {
      icon: BarChart3,
      title: "Data-driven insights for decision-making",
    },
    {
      icon: Users,
      title: "Ongoing support & maintenance",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-lg mb-4">
            TRANSFORM YOUR BUSINESS WITH
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Odoo ERP Software
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-8">
            Odoo Gold Partner In Mumbai, India – Trusted ERP Experts
          </h3>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Looking for a reliable Odoo Gold Partner in Mumbai to streamline
                your business operations?
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Teckzilla is a certified Odoo Gold Partner in India, helping
                organizations implement, customize, and support Odoo ERP
                solutions tailored to their unique needs.
              </p>
              <Button className="btn-primary  transition-colors duration-300 hover:shadow-md hover:bg-primary/90">
                Get Started Today
              </Button>
            </div>

            <Card className="card-corporate transition-all duration-300 hover:scale-[1.025] hover:shadow-2xl">
              <h4 className="text-xl font-bold mb-6 text-foreground">
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
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0 transition-colors duration-200 group-hover:text-primary/80" />
                    <span className="text-muted-foreground">{text}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
          <Card className="m-20 mx-auto px-6 py-10 shadow-xl border-primary/15 border-2 bg-primary/5">
            <h4 className="text-xl md:text-2xl font-bold text-primary mb-2 text-center">
              Partnering With Teckzilla: Your Local Odoo Gold Partner
            </h4>
            <div className="w-20 h-[3px] bg-primary/60 rounded mx-auto mb-6"></div>
            <div>
              <p className="text-base md:text-lg text-foreground mb-6 leading-relaxed">
                By partnering with Teckzilla, you don’t just get ERP
                software—you gain a trusted technology partner invested in your
                business growth.
              </p>
              <p className="text-base md:text-lg text-foreground mb-6 leading-relaxed">
                When you’re investing in ERP software, choosing the right
                partner is just as important as choosing the right solution. An
                Odoo Gold Partner in Mumbai brings you the highest level of
                expertise, certified by Odoo itself. Gold Partners are
                recognized for their proven track record in delivering
                successful ERP implementations across different industries.
              </p>
              <p className="text-base md:text-lg text-foreground mb-6 leading-relaxed">
                Working with a Gold Partner means you’re not just hiring a
                consultant—you’re partnering with a team that deeply understands
                Odoo’s capabilities, best practices, and customization options.
                This ensures your business gets a solution tailored to your
                processes, rather than a one-size-fits-all approach.
              </p>
              <p className="text-base md:text-lg text-foreground mb-6 leading-relaxed">
                For companies in Mumbai and across India, having a local Gold
                Partner means faster support, better communication, and access
                to experts who understand the regional market challenges. With
                their guidance, you can streamline operations, improve
                efficiency, and achieve a faster return on investment with Odoo
                ERP.
              </p>
              <p className="text-base md:text-lg text-foreground leading-relaxed">
                Are you ready to take your company to the next level? At
                Teckzilla, we specialize in Odoo ERP software, a powerful tool
                designed to enhance productivity and streamline business
                processes. Our expertise ensures the smooth integration of your
                company’s operations, giving you a competitive edge in today’s
                fastest growing market.
              </p>
            </div>
          </Card>

          <div className="mb-16">
            <h4 className="text-2xl font-bold text-center mb-8 text-foreground">
              Why Odoo ERP Software Is The Right Choice
            </h4>
            <p className="text-lg text-muted-foreground text-center mb-8  mx-auto">
              Odoo ERP is one of the most flexible and cost-effective solutions
              available today. With fully integrated modules for:
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4  mx-auto mb-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-card rounded-lg border transition-transform duration-200 hover:scale-[1.045] hover:shadow-md group"
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 transition-colors duration-200 group-hover:text-primary/80" />
                  <span className="font-medium text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <p className="text-lg text-muted-foreground text-center">
              …it provides end-to-end automation so your business runs smoothly
              on one platform.
            </p>
          </div>

          <Card className="card-corporate p-8 mb-8">
            <h4 className="text-xl font-bold mb-6 text-foreground">
              Teckzilla – Your Trusted Odoo Gold Partner in India
            </h4>
            <ul className="list-disc list-inside mb-4 text-muted-foreground">
              <li>Odoo Implementation & Migration</li>
              <li>Odoo Customization & Development</li>
              <li>Odoo Integration with third-party tools</li>
              <li>Odoo Support & Training</li>
            </ul>
            <p className="text-muted-foreground mb-2">
              We understand that every business is unique, which is why our
              Odoo-certified consultants create tailored ERP roadmaps aligned
              with your goals.
            </p>
            <p className="text-muted-foreground">
              As an official Odoo Gold Partner in Mumbai, Teckzilla has
              successfully delivered ERP solutions across industries like
              retail, manufacturing, healthcare, logistics, and services.
            </p>
          </Card>

          <div>
            <h4 className="text-2xl font-bold text-center mb-8 text-foreground">
              Key Features Of Odoo ERP With Teckzilla
            </h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {keyFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 bg-card rounded-lg border hover:border-primary/40 transition-all duration-300 hover:scale-[1.03] hover:shadow-lg group"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full flex-shrink-0 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-105">
                    <feature.icon className="w-6 h-6 text-primary transition-colors duration-200 group-hover:text-primary/90" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground leading-relaxed">
                      {feature.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Card className="relative overflow-hidden p-8 bg-gradient-to-br from-primary/5 via-background to-background border-l-8 border-primary shadow-lg rounded-xl  mx-auto mt-8">
            <h4 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Why Choose the Latest{" "}
              <span className="text-primary">Odoo ERP Software?</span>
            </h4>
            <p className="text-lg text-muted-foreground leading-relaxed mb-0">
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

          <Card className="p-8 shadow-xl rounded-xl  mx-auto  mt-8">
            <h4 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              Odoo Gold Partners in Mumbai, India
            </h4>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              As a leading Odoo Gold Partners in Mumbai, India, Teckzilla
              Technologies takes pride in delivering customized solutions that
              align with your business goals. Our skilled team ensures smooth
              deployment and ongoing support to maximize the benefits of your
              Odoo ERP system for your business.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Stay ahead with the upcoming Odoo ERP Latest Release. This new
              version introduces exciting features and improvements designed to
              further simplify your business operations. Teckzilla Odoo Gold
              Partner is committed to keeping you updated with the latest ERP
              technology and ensuring a smooth transition to Odoo ERP Software,
              consolidating your business functions on a single platform from
              sales to accounting and from marketing to promotion and
              advertisement.
            </p>
            <p className="text-lg text-foreground flex items-center gap-2 mb-1">
              Experience the difference with Teckzilla. Visit us today to
              discover how our top Odoo ERP solutions can empower and upgrade
              your business. Hurry! Log in for a free demo!
            </p>
            <p className="text-lg font-semibold text-primary flex items-center gap-2 mb-2">
              Smile !!{" "}
              <span role="img" aria-label="smile" className="text-2xl">
                😊
              </span>
            </p>
          </Card>

          <Card className="p-10 flex flex-col items-center justify-center bg-primary/5 shadow-xl rounded-xl mx-auto  mt-8">
            <h4 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-2">
              Get Started with Odoo ERP Today
            </h4>
            <p className="text-lg text-center text-muted-foreground mb-6">
              Ready to scale your business with the best Odoo Gold Partner in
              Mumbai?
            </p>
            <div className="flex flex-col items-center mb-4">
              <span className="text-lg font-medium text-foreground flex items-center gap-2">
                Call us today or book a consultation with our certified Odoo
                experts.
              </span>
            </div>
            <Button className="btn-primary px-8 py-3 text-lg rounded-full shadow-lg hover:bg-primary/90 transition-colors duration-200 mb-2">
              Contact Us Now
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TransformBusinessSection;
