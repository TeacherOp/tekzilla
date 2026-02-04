import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/site.config";
import {
  CheckCircle,
  Headphones,
  Phone,
  Settings,
  Shield,
  Users,
  Zap,
} from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Odoo Support By Teckzilla | 24/7 Expert ERP Support Services",
  description:
    "Comprehensive Odoo ERP support services by Teckzilla Technologies. Get technical support, customization, and maintenance from certified Odoo experts.",
  keywords: [
    "Odoo support",
    "ERP support",
    "technical support",
    "Odoo maintenance",
    "Odoo Gold Partner support",
  ],
  alternates: {
    canonical: `${siteConfig.site_domain}/odoo-support-by-teckzilla`,
  },
};

const OdooSupport = () => {
  return (
    <>
      <div className="min-h-screen bg-background">
        <main>
          {/* Hero Section */}
          <section className="section-gradient py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Odoo Support by Teckzilla
                </h1>
                <p className="text-xl mb-8 opacity-90">
                  Comprehensive support services from your trusted Odoo Gold
                  Partner for seamless business operations
                </p>
              </div>
            </div>
          </section>

          <div className="w-full flex justify-center bg-white py-8">
            <Image
              width={1000}
              height={1000}
              src="/services/support.webp"
              alt="Odoo Implementation"
              className="max-w-4xl w-full rounded-2xl shadow-lg object-cover"
              loading="lazy"
            />
          </div>

          {/* Introduction */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-6">
                    Expert Odoo ERP Support Services
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Well known nationally and internationally, Teckzilla, a{" "}
                    <strong>Gold Partner of Odoo ERP,</strong> offers overall
                    support services and various technical solutions for
                    businesses using Odoo. Our ultimate goal is to upgrade and
                    help companies get the most out of their Odoo systems,
                    ensuring smooth operations, minimizing confusion, and
                    enhancing users' productivity. With our expert team, we
                    provide 100% support options to meet the unique needs of
                    each business in India and globally across various sectors
                    and industries.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Why Support is Important */}
          <section className="bg-muted py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">
                  Why Odoo ERP Support is Important for you?
                </h2>
                <div className="bg-white rounded-lg p-8 shadow-sm">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    <strong>Odoo ERP</strong> is 100 times super-fast than any
                    other software for business management. It helps to manage
                    various functions for sales, inventory, accounting, customer
                    relationship management, marketing, and relations on social
                    media, and many more. Even though the use is complex,{" "}
                    <strong>Odoo ERP's</strong> simple steps to learn while you
                    build your platform are easier. Later, training and
                    development also help for clear understanding. This is where
                    Teckzilla's Odoo support services come in anytime of the
                    hour as your need arises. Our support helps problems quickly
                    to be resolved, and the system remains effective for
                    business advancement in 2024.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Types of Support Services */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">
                  Types of Support Services
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <Card>
                    <CardContent className="p-6">
                      <Shield className="w-12 h-12 text-primary mb-4" />
                      <h3 className="text-xl font-semibold mb-3">
                        Technical Support
                      </h3>
                      <p className="text-muted-foreground">
                        <strong>Teckzilla</strong> offers great technical
                        support to solve any technical problems that might arise
                        with the <strong>Odoo system</strong>. This includes
                        fixing bugs, resolving system errors, and fully handling
                        all technical aspects to ensure the Odoo platform works
                        correctly.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <Users className="w-12 h-12 text-primary mb-4" />
                      <h3 className="text-xl font-semibold mb-3">
                        Functional Support
                      </h3>
                      <p className="text-muted-foreground">
                        We have a team who 100% support and focus on
                        functionality to help users understand the various
                        features of <strong>Odoo Latest Release 2024</strong>.
                        This includes training sessions, user guides, and
                        answering any questions about how to use specific Odoo
                        ERP Modules.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <Settings className="w-12 h-12 text-primary mb-4" />
                      <h3 className="text-xl font-semibold mb-3">
                        Complete Customized Solutions
                      </h3>
                      <p className="text-muted-foreground">
                        Every business has unique needs, and sometimes the
                        standard Odoo setup may not meet all of them. We offer
                        customization support to modify the Odoo system
                        according to your specific requirements.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <Zap className="w-12 h-12 text-primary mb-4" />
                      <h3 className="text-xl font-semibold mb-3">
                        Integration Support
                      </h3>
                      <p className="text-muted-foreground">
                        <strong>Teckzilla Technologies</strong> provides
                        integration support, making sure Odoo integrates with
                        other systems you use without any complications.
                        Overall, keeping the flow of information smooth for
                        different platforms.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <Headphones className="w-12 h-12 text-primary mb-4" />
                      <h3 className="text-xl font-semibold mb-3">
                        24/7 Support
                      </h3>
                      <p className="text-muted-foreground">
                        Our experts and backend team are always ready to help
                        with any technical issues to keep your business running
                        smoothly without worry. Get round-the-clock assistance
                        whenever you need it.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <Phone className="w-12 h-12 text-primary mb-4" />
                      <h3 className="text-xl font-semibold mb-3">
                        Quick Response
                      </h3>
                      <p className="text-muted-foreground">
                        Teckzilla's quick support service solves issues,
                        minimizing errors to your operations. Our pure goal is
                        to keep your Odoo system running smoothly at all times.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits of Teckzilla's Support */}
          <section className="bg-muted py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">
                  Benefits of Teckzilla's Odoo Support
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-4">
                        Expert Team
                      </h3>
                      <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          Our team of experts has extensive experience with Odoo
                          ERP
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          We are well-equipped to handle any technical issues
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          Provide solutions that best meet your needs for
                          business
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-4">
                        Business Growth
                      </h3>
                      <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          Comfort and growth with visualizing the profits
                          reaching the target level
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          With Teckzilla's support, you can be confident that
                          you are getting the best possible assistance
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          Enhances the overall growth because of its efficiency
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Additional Benefits */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">
                  Additional Support Benefits
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">
                          Reducing Omissions Caused by Employees
                        </h4>
                        <p className="text-muted-foreground">
                          For a human, there is always a scope of mistakes, but
                          not for software. ERP system ensures that your barcode
                          or product price is consistent across all your
                          systems.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">
                          Builds Customer Satisfaction Through Discount
                        </h4>
                        <p className="text-muted-foreground">
                          All the data collected in one software calculates the
                          discount that can be given to a customer and enables
                          calculation of retail store capacity.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">
                          Offering to Pay with More Options
                        </h4>
                        <p className="text-muted-foreground">
                          POS service provides your customers multiple options
                          to pay and make their purchase more promising.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">
                          Removal of Losses
                        </h4>
                        <p className="text-muted-foreground">
                          As your data are stored effectively in one place,
                          there is less risk of casualties, loss, or embezzled
                          inventory.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">
                          Improving Check-out Process
                        </h4>
                        <p className="text-muted-foreground">
                          POS system ensures that all data is centralized,
                          giving accurate information about pricing and finding
                          the best products.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">
                          Track Employee Working
                        </h4>
                        <p className="text-muted-foreground">
                          Using the POS database, you can quickly know how many
                          hours an employee did the shift and keep track of
                          their performance.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="bg-primary text-white py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">Need Odoo Support?</h2>
                <p className="text-xl mb-8 opacity-90">
                  Don't wait anymore as we have got just what you need. Let us
                  help you upgrade your business operations!
                </p>

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
        </main>
      </div>
    </>
  );
};

export default OdooSupport;
