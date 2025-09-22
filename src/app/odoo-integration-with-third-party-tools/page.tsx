import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  CheckCircle,
  Globe,
  Link,
  Shield,
  Zap,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "Odoo Integration With Third-Party Tools | Seamless Connectivity | Teckzilla",
  description:
    "Expert Odoo third-party integration services. Connect your Odoo system with external tools and applications for seamless business operations.",
  keywords: [
    "Odoo integration",
    "third-party integration",
    "API integration",
    "system connectivity",
    "business automation",
  ],
};

const OdooIntegration = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-primary/10 to-primary-foreground/10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Odoo Integration With Third-Party Tools
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Are you looking for integration services with third-party tools?
                Odoo offers one of the best third-party integration services,
                connecting your business with the boundary-less external world.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Start Integration
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="relative">
              <Image
                width={1000}
                height={1000}
                src="https://teckzilla.net/wp-content/uploads/2023/09/marketo1.png"
                alt="Odoo Third-Party Integration"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What is Third-Party Integration */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Is Third-Party Integration?
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              We provide automation of operational processes while integrating
              third-party tool mechanisms in your system. No more suffering from
              long processes and inefficient working passages. Connect with Odoo
              to get one of the best web service application programming
              interfaces.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Link className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Seamless Connectivity
                </h3>
                <p className="text-muted-foreground">
                  Connect your Odoo system with external applications and
                  services for unified operations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Process Automation
                </h3>
                <p className="text-muted-foreground">
                  Automate workflows and eliminate manual data entry between
                  different systems.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Extended Reach</h3>
                <p className="text-muted-foreground">
                  Expand your business capabilities by connecting with
                  industry-specific tools and platforms.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Integration Benefits */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Choose Our Integration Services?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We extend our services to various industries, from big to small.
                Our customer support goes beyond the boundaries of different
                software platforms with skillful services and latest
                technological applications.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Industry Expertise
                    </h3>
                    <p className="text-muted-foreground">
                      Experience across various industries with deep
                      understanding of business processes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      API Excellence
                    </h3>
                    <p className="text-muted-foreground">
                      Best-in-class web service APIs for reliable and secure
                      data exchange.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Custom Solutions
                    </h3>
                    <p className="text-muted-foreground">
                      Tailored integration solutions that meet your specific
                      business requirements.
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
                      Comprehensive support beyond implementation with
                      maintenance and updates.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Card className="p-8 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6 text-center">
                  Popular Integrations
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Shield className="h-5 w-5 text-primary" />
                      <span className="font-medium">Payment Gateways</span>
                    </div>
                    <span className="text-primary text-sm">
                      Stripe, PayPal, Razorpay
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Globe className="h-5 w-5 text-primary" />
                      <span className="font-medium">E-commerce</span>
                    </div>
                    <span className="text-primary text-sm">
                      Shopify, WooCommerce
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Link className="h-5 w-5 text-primary" />
                      <span className="font-medium">CRM Systems</span>
                    </div>
                    <span className="text-primary text-sm">
                      Salesforce, HubSpot
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Zap className="h-5 w-5 text-primary" />
                      <span className="font-medium">Marketing Tools</span>
                    </div>
                    <span className="text-primary text-sm">
                      MailChimp, Zapier
                    </span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Process */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Integration Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We follow a systematic approach to ensure successful integration
              with minimal business disruption.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Assessment</h3>
                <p className="text-muted-foreground">
                  Analyze current systems and identify integration requirements
                  and opportunities.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Planning</h3>
                <p className="text-muted-foreground">
                  Design integration architecture and develop detailed
                  implementation roadmap.
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
                  Build custom connectors and APIs for seamless data exchange
                  between systems.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">4</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Testing</h3>
                <p className="text-muted-foreground">
                  Comprehensive testing and validation to ensure reliable and
                  secure integration.
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
            Connect Your Business Today
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Unlock the full potential of your Odoo system with seamless
            third-party integrations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-background text-primary hover:bg-background/90"
            >
              Get Integration Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-black">
              View Integration Examples
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OdooIntegration;
