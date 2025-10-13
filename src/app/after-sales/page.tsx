import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/site.config";
import {
  ArrowRight,
  CheckCircle,
  Clock,
  HeadphonesIcon,
  Settings,
  Users,
} from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Teckzilla Support After Sales | Comprehensive ERP Support Services",
  description:
    "Get comprehensive after-sales support from Teckzilla. We provide 360-degree support services including feedback collection, training, and product maintenance.",
  keywords: [
    "after sales support",
    "ERP support",
    "Odoo maintenance",
    "customer support",
    "technical assistance",
  ],
  alternates: {
    canonical: `${siteConfig.site_domain}/after-sales`,
  },
  metadataBase: new URL(`${siteConfig.site_domain}/after-sales`),
  robots: {
    index: true,
    follow: true,
  },
};

const AfterSales = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-primary/10 to-primary-foreground/10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Teckzilla Support After Sales
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We understand that the interaction with your customer doesn't
                end with just a sale. The customer still needs to be taken care
                of with the product. We offer one of the best-in-industry
                after-sales support services.
              </p>

              <Link
                href={"/contact-us"}
                className={cn(
                  buttonVariants(),
                  "bg-primary text-primary-foreground hover:bg-primary/90",
                )}
              >
                Get Support Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="relative">
              <Image
                width={1000}
                height={1000}
                src="/after-sales-service.webp"
                alt="After Sales Service"
                className="rounded-2xl shadow-2xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why After Sales Matters */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why After Sales Support Matters
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              While incorporating your operation processes with our systems, you
              might encounter some complications. That's why we provide
              comprehensive 360-degree after-sales management support to ensure
              your success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HeadphonesIcon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">24/7 Support</h3>
                <p className="text-muted-foreground">
                  Round-the-clock assistance to resolve any issues and ensure
                  smooth operations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">User Training</h3>
                <p className="text-muted-foreground">
                  Comprehensive training programs to ensure your team maximizes
                  system potential.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  System Maintenance
                </h3>
                <p className="text-muted-foreground">
                  Regular maintenance and updates to keep your system running
                  optimally.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Quick Response</h3>
                <p className="text-muted-foreground">
                  Fast response times with expert solutions to minimize business
                  disruption.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Understanding After Sales */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Understanding After Sales
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <CheckCircle className="h-6 w-6 text-primary mr-2" />
                From A Business Point Of View
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                After-sales support is crucial for maintaining customer
                satisfaction and building long-term relationships. It ensures
                that your investment in our solutions continues to deliver value
                throughout its lifecycle.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold">Customer Retention</h4>
                    <p className="text-muted-foreground text-sm">
                      Build trust and loyalty through reliable support services.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold">ROI Maximization</h4>
                    <p className="text-muted-foreground text-sm">
                      Ensure optimal system performance and return on
                      investment.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold">Continuous Improvement</h4>
                    <p className="text-muted-foreground text-sm">
                      Gather feedback for product enhancement and service
                      optimization.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                width={1000}
                height={1000}
                src="/business-people-holding-jigsaw-puzzle-620x330-1.webp"
                alt="Business Collaboration"
                className="rounded-2xl shadow-xl"
                loading="lazy"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <CheckCircle className="h-6 w-6 text-primary mr-2" />
                Our Support Excellence
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                For years we have been working with different top-tier companies
                and helping them manage their systems with maximum efficiency.
                Our years of experience deliver the most advanced after-sales
                support services.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold">
                      Feedback Collection & Analysis
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Systematic feedback collection for continuous improvement.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold">Online Support Portal</h4>
                    <p className="text-muted-foreground text-sm">
                      24/7 access to support resources and ticket management.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold">User Training Programs</h4>
                    <p className="text-muted-foreground text-sm">
                      Ongoing training to maximize user adoption and efficiency.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:order-1">
              <Card className="p-8 shadow-2xl">
                <h4 className="text-xl font-bold mb-6 text-center">
                  Support Services
                </h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <HeadphonesIcon className="h-5 w-5 text-primary" />
                      <span className="font-medium">Technical Support</span>
                    </div>
                    <span className="text-primary text-sm">24/7</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Users className="h-5 w-5 text-primary" />
                      <span className="font-medium">User Training</span>
                    </div>
                    <span className="text-primary text-sm">On-demand</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Settings className="h-5 w-5 text-primary" />
                      <span className="font-medium">System Updates</span>
                    </div>
                    <span className="text-primary text-sm">Regular</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-primary" />
                      <span className="font-medium">Response Time</span>
                    </div>
                    <span className="text-primary text-sm">&lt; 2 hours</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Support Process */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Support Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We follow a structured approach to ensure you get the best
              after-sales support experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Issue Reporting</h3>
                <p className="text-muted-foreground">
                  Easy reporting through multiple channels including phone,
                  email, and online portal.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Quick Assessment</h3>
                <p className="text-muted-foreground">
                  Rapid issue assessment and prioritization based on business
                  impact and urgency.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Expert Resolution
                </h3>
                <p className="text-muted-foreground">
                  Dedicated experts work on resolution with clear communication
                  throughout the process.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">4</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Follow-up</h3>
                <p className="text-muted-foreground">
                  Post-resolution follow-up to ensure satisfaction and prevent
                  future occurrences.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Connect With Reliability and Efficiency
          </h2>
          <p className="text-xl mb-8 opacity-90">
            When you connect with us, you connect with reliability and
            efficiency. We make sure our clients feel at ease while using our
            products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-background text-primary hover:bg-background/90"
            >
              Contact Support Team
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Access Support Portal
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AfterSales;
