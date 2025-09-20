import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Award,
  CheckCircle,
  Database,
  Phone,
  Shield,
  TestTube,
  Users,
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Odoo Migration Services | Seamless ERP System Upgrade by Teckzilla",
  description:
    "Professional Odoo migration services by Teckzilla Technologies. Seamlessly upgrade your ERP system with data security and zero downtime.",
  keywords: [
    "Odoo migration",
    "ERP migration",
    "system upgrade",
    "data migration",
    "Odoo Gold Partner migration",
  ],
};

const OdooMigration = () => {
  return (
    <>
      <div className="min-h-screen bg-background">
        <Header />

        <main>
          {/* Hero Section */}
          <section className="section-gradient py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Odoo Migration Services
                </h1>
                <p className="text-xl mb-8 opacity-90">
                  Seamlessly upgrade your system with expert Odoo migration
                  solutions from Teckzilla Technologies
                </p>
                <Button size="lg" variant="secondary" className="text-primary">
                  Start Migration Process
                </Button>
              </div>
            </div>
          </section>

          {/* Introduction */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-6">
                    Professional Odoo Migration Solutions
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    <strong>Teckzilla</strong>, a respected and well-reputed
                    among the top leading industries with super easy features
                    and advancement Gold Partner of <strong>Odoo ERP,</strong>{" "}
                    provides high-end <strong>Odoo migration solutions</strong>{" "}
                    and services to help businesses upgrade their systems for
                    better flow and functionality with excellent performance.
                    Transitioning from old <strong>ERP systems</strong> or
                    previous Odoo versions to the latest and more powerful{" "}
                    <strong>Odoo ERP</strong> can be complex, but Teckzilla
                    makes it super cool and super easy to use.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Migration Process */}
          <section className="bg-muted py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">
                  Understanding the Migration Process
                </h2>
                <p className="text-center text-lg text-muted-foreground mb-12">
                  We understand the best process towards the progress of
                  completing your detailed learning for new advancements with{" "}
                  <strong>Odoo ERP</strong> for your business. The steps we
                  follow to create an outstanding view of your business are just
                  awesome and help each business identify success in{" "}
                  <strong>transferring or migrating files</strong> for an easy
                  workflow of the business.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <Card>
                    <CardContent className="p-6 text-center">
                      <Database className="w-12 h-12 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-3">
                        Data Analysis
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Comprehensive analysis of your existing data and system
                        requirements
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 text-center">
                      <ArrowRight className="w-12 h-12 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-3">
                        ETL Process
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Expert data extraction, transformation, and loading for
                        seamless migration
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 text-center">
                      <TestTube className="w-12 h-12 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-3">
                        Testing & Validation
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Thorough testing to ensure system functionality and data
                        integrity
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 text-center">
                      <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-3">
                        Training & Support
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Comprehensive training and ongoing support for your team
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Key Features */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">
                  Our Migration Services Include
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <Card>
                    <CardContent className="p-6">
                      <Database className="w-12 h-12 text-primary mb-4" />
                      <h3 className="text-xl font-semibold mb-3">
                        Data Extraction, Transformation, and Loading (ETL)
                      </h3>
                      <p className="text-muted-foreground">
                        Experts handle data extraction beautifully for the best
                        transformation and loading, commonly known as{" "}
                        <strong>
                          ETL (Data Extraction, Transformation, and Loading)
                        </strong>
                        . The workflow beautifully secures and all data is
                        accurately and securely transferred to the new system.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <Shield className="w-12 h-12 text-primary mb-4" />
                      <h3 className="text-xl font-semibold mb-3">
                        Odoo ERP Customization Services
                      </h3>
                      <p className="text-muted-foreground">
                        One of the outstanding features of{" "}
                        <strong>Teckzilla's Migration Services</strong> comes
                        with extensive customization. We make it more friendly
                        with <strong>Odoo ERP platform</strong> to meet the
                        specific needs of each business.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <TestTube className="w-12 h-12 text-primary mb-4" />
                      <h3 className="text-xl font-semibold mb-3">
                        Testing and Validation Period
                      </h3>
                      <p className="text-muted-foreground">
                        After the migration, <strong>Teckzilla</strong> offers
                        robust testing and complete validation services with
                        solutions that are essential to keep the new system
                        fully functional and free of errors.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <Users className="w-12 h-12 text-primary mb-4" />
                      <h3 className="text-xl font-semibold mb-3">
                        Training and Support Online and Onsite
                      </h3>
                      <p className="text-muted-foreground">
                        Teckzilla understands that adopting a new system can be
                        challenging. To ease this transition overall, we provide
                        excellent, simple, and effective training for the
                        client's team.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <Award className="w-12 h-12 text-primary mb-4" />
                      <h3 className="text-xl font-semibold mb-3">
                        Proven Excellence and Success
                      </h3>
                      <p className="text-muted-foreground">
                        Teckzilla has a proven track record of successful Odoo
                        implementations across various industries, from
                        manufacturing units to service providers. Our clients
                        have seen significant improvements in productivity and
                        efficiency.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <Database className="w-12 h-12 text-primary mb-4" />
                      <h3 className="text-xl font-semibold mb-3">
                        Data Security & Integrity
                      </h3>
                      <p className="text-muted-foreground">
                        Important historical data, such as customer records,
                        financial information, and inventory details, are
                        preserved and smoothly integrated into the new Odoo
                        system without any loss or failure.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Migration Benefits */}
          <section className="bg-muted py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">
                  Migration Benefits
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
                        <p className="text-muted-foregroung">
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

          {/* Why Choose Teckzilla */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">
                  Why Choose Teckzilla for Migration?
                </h2>

                <div className="bg-primary/5 rounded-lg p-8">
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-bold text-primary mb-2">
                        100+
                      </div>
                      <p className="text-muted-foreground">
                        Successful Migrations
                      </p>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary mb-2">
                        24/7
                      </div>
                      <p className="text-muted-foreground">Support Available</p>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary mb-2">
                        0%
                      </div>
                      <p className="text-muted-foreground">
                        Data Loss Guarantee
                      </p>
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
                <h2 className="text-3xl font-bold mb-6">
                  Ready to Migrate to Latest Odoo?
                </h2>
                <p className="text-xl mb-8 opacity-90">
                  Don't wait anymore as we have got just what you need. Let us
                  help you upgrade your business operations!
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                  <div className="flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    <span>+91-8233083333</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    <span>+91-9137018743</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    <span>+91-9833765812</span>
                  </div>
                </div>

                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-primary hover:bg-gray-100"
                >
                  Start Migration Now
                </Button>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default OdooMigration;
