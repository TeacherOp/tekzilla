import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/site.config";
import {
  ArrowRight,
  CheckCircle,
  Cog,
  Database,
  Settings,
  Zap,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Odoo Implementation Services | Professional ERP Setup | Teckzilla",
  description:
    "Expert Odoo implementation services by Teckzilla. We provide end-to-end ERP implementation, configuration, and deployment solutions for businesses.",
  keywords: [
    "Odoo implementation",
    "ERP implementation",
    "Odoo setup",
    "business automation",
    "ERP deployment",
  ],
  alternates: {
    canonical: `${siteConfig.site_domain}/odoo-implementation`,
  },
  metadataBase: new URL(`${siteConfig.site_domain}/odoo-implementation`),
  robots: {
    index: true,
    follow: true,
  },
};

const OdooImplementation = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-primary/10 to-primary-foreground/10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Odoo Implementation Services
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Transform your business operations with our comprehensive Odoo
                implementation services. From planning to deployment, we ensure
                a smooth transition to your new ERP system.
              </p>

              <Link
                href={"/contact-us"}
                className={cn(
                  buttonVariants(),
                  "bg-primary text-primary-foreground hover:bg-primary/90",
                )}
              >
                Start Implementation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-primary-foreground/20 p-8 rounded-2xl">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-background p-6 rounded-xl shadow-lg">
                    <Database className="h-8 w-8 text-primary mb-3" />
                    <h3 className="font-semibold text-sm">Data Migration</h3>
                  </div>
                  <div className="bg-background p-6 rounded-xl shadow-lg">
                    <Settings className="h-8 w-8 text-primary mb-3" />
                    <h3 className="font-semibold text-sm">Configuration</h3>
                  </div>
                  <div className="bg-background p-6 rounded-xl shadow-lg">
                    <Cog className="h-8 w-8 text-primary mb-3" />
                    <h3 className="font-semibold text-sm">Customization</h3>
                  </div>
                  <div className="bg-background p-6 rounded-xl shadow-lg">
                    <Zap className="h-8 w-8 text-primary mb-3" />
                    <h3 className="font-semibold text-sm">Go-Live</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Implementation Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We follow a proven methodology to ensure successful Odoo
              implementation with minimal disruption to your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Analysis</h3>
                <p className="text-muted-foreground">
                  Comprehensive business analysis and requirement gathering to
                  understand your needs.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Design</h3>
                <p className="text-muted-foreground">
                  System design and architecture planning tailored to your
                  business processes.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Development</h3>
                <p className="text-muted-foreground">
                  Configuration, customization, and development of your Odoo
                  system.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">4</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Deployment</h3>
                <p className="text-muted-foreground">
                  Testing, training, data migration, and go-live support for
                  seamless transition.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Our Implementation Services?
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
                    <p className="text-muted-foreground">
                      Certified Odoo professionals with extensive implementation
                      experience across industries.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Proven Methodology
                    </h3>
                    <p className="text-muted-foreground">
                      Time-tested implementation approach ensuring project
                      success and minimal risk.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Customization Excellence
                    </h3>
                    <p className="text-muted-foreground">
                      Tailored solutions that fit your unique business processes
                      and requirements.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Ongoing Support
                    </h3>
                    <p className="text-muted-foreground">
                      Comprehensive post-implementation support and maintenance
                      services.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Card className="p-8 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6 text-center">
                  Implementation Timeline
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                    <span className="font-medium">Requirements Analysis</span>
                    <span className="text-primary font-semibold">Week 1-2</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                    <span className="font-medium">System Configuration</span>
                    <span className="text-primary font-semibold">Week 3-6</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                    <span className="font-medium">
                      Data Migration & Testing
                    </span>
                    <span className="text-primary font-semibold">Week 7-8</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                    <span className="font-medium">Training & Go-Live</span>
                    <span className="text-primary font-semibold">
                      Week 9-10
                    </span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Implement Odoo?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let our experts guide you through a successful Odoo implementation
            tailored to your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={"/contact-us"}
              className={cn(
                buttonVariants(),
                "bg-white text-primary hover:bg-gray-100",
              )}
            >
              Contact Us Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OdooImplementation;
