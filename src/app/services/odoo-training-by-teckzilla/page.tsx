import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, BookOpen, CheckCircle, Phone, Users, Zap } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Odoo Training By Teckzilla | Professional ERP Training Services",
  description:
    "Comprehensive Odoo ERP training services by Teckzilla Technologies. Learn from certified experts with basic to advanced training programs.",
  keywords: [
    "Odoo training",
    "ERP training",
    "Odoo certification",
    "business software training",
    "Odoo Gold Partner training",
  ],
};

const OdooTraining = () => {
  return (
    <>
      <div className="min-h-screen bg-background">
        <Header />

        <main>
          {/* Hero Section */}
          <section className="section-gradient py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center ">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Odoo Training by Teckzilla
                </h1>
                <p className="text-xl mb-8 opacity-90">
                  Master Odoo ERP with comprehensive training from certified
                  experts at Teckzilla Technologies
                </p>
                <Button size="lg" variant="secondary" className="text-primary">
                  Start Learning Today
                </Button>
              </div>
            </div>
          </section>

          <div className="w-full flex justify-center bg-white py-8">
            <Image
              width={1000}
              height={1000}
              src="/Odoo-Training.webp"
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
                    Professional Odoo ERP Training
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    <strong>Odoo ERP training</strong> with Odoo Gold Partner,
                    Teckzilla, a vibrant and top partner of Odoo Systems Online,
                    offers excellent Odoo training services. Our goal is to help
                    businesses learn how to use Odoo effectively. We provide
                    clear, easy-to-follow training that helps users understand
                    all the features of Odoo. This way, businesses can make the
                    most of this powerful software for the company to run
                    smoothly and without any hassle.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Why Training is Important */}
          <section className="bg-muted py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">
                  Why Odoo Training is Important
                </h2>
                <div className="bg-white rounded-lg p-8 shadow-sm">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    At <strong>Teckzilla Technologies</strong>,{" "}
                    <strong>Odoo ERP</strong> is a strong tool that helps manage
                    many parts of a business successfully. It easily handles
                    sales, inventory, accounting, and more. However, to use it
                    well, people need to know how it works without customizing
                    or with a complete new set of customized plans for business
                    requirements. That's why training is so important to a large
                    extent of people as with business growth along the side.
                    With the right training, users can use Odoo to improve their
                    work and make their business run better each day with sales,
                    marketing, accounting, and productivity.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Training Types */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">
                  Types of Training Services We Provide at Different Levels
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <BookOpen className="w-8 h-8 text-primary" />
                        <h3 className="text-xl font-semibold">
                          Basic Training
                        </h3>
                      </div>
                      <p className="text-muted-foreground mb-4">
                        We provide Odoo ERP training right from the basics for
                        new users. It covers the main features of Odoo ERP
                        systems and solutions. Users learn how to navigate and
                        work in the system and use its basic functions. This
                        training is very simple and easy to understand. It helps
                        users get comfortable with Odoo quickly in minutes'
                        time.
                      </p>
                      <Button variant="outline" size="sm">
                        <a
                          href="https://wa.me/919833765812"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Get Started
                        </a>
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="h-full">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <Zap className="w-8 h-8 text-primary" />
                        <h3 className="text-xl font-semibold">
                          Advanced Training
                        </h3>
                      </div>
                      <p className="text-muted-foreground mb-4">
                        Advanced training for Odoo ERP is for users who already
                        know the basics. It covers more complex features and
                        functions on the platform where users get to go deeper
                        in knowing about its features. The ones who have adopted
                        Odoo ERP, the users and owners, get to learn how to
                        customize Odoo to fit their business needs.
                      </p>
                      <Button variant="outline" size="sm">
                        <a
                          href="https://wa.me/919833765812"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Learn More
                        </a>
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="h-full">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <Award className="w-8 h-8 text-primary" />
                        <h3 className="text-xl font-semibold">
                          Module-Specific Training
                        </h3>
                      </div>
                      <p className="text-muted-foreground mb-4">
                        Module-specific training focuses on one part of Odoo ERP
                        at a time. For example, it might cover all the sales
                        module or the inventory module. This type of training is
                        helpful for users who need to learn about a specific
                        area of Odoo ERP complete functional system in detail.
                      </p>
                      <Button variant="outline" size="sm">
                        <a
                          href="https://wa.me/919833765812"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Check Details
                        </a>
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="h-full">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <Users className="w-8 h-8 text-primary" />
                        <h3 className="text-xl font-semibold">
                          Custom Training
                        </h3>
                      </div>
                      <p className="text-muted-foreground mb-4">
                        Custom training is according to your specific needs of
                        business growth. Teckzilla works with the business to
                        create a training plan that fits your unique needs and
                        requirements. This type of training supports the
                        business owners and team players in various departments,
                        from HODs to sales or account key holders.
                      </p>
                      <Button variant="outline" size="sm">
                        <a
                          href="https://wa.me/919833765812"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Customize Plan
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Access Training */}
          <section className="bg-muted py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">
                  Get Access to Teckzilla's Odoo ERP Training
                </h2>
                <div className="bg-white rounded-lg p-8 shadow-sm">
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Teckzilla makes it easy to access our training services; we
                    have made it easy for you. You can choose from different
                    training plans to fit your needs for comfort. Right from
                    what you need, from basic, advanced, or custom training, we
                    have a plan for you. Each feature that you learn is going to
                    upgrade your performance in the business role. Growth and
                    success are all yours with the latest Odoo ERP release.
                  </p>

                  <div className="bg-primary/5 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">
                      Contact Information
                    </h3>
                    <div className="space-y-2 text-muted-foreground">
                      <p>
                        <strong>Website:</strong>{" "}
                        <a
                          href="https://www.teckzilla.net"
                          className="text-primary hover:underline"
                        >
                          www.teckzilla.net
                        </a>
                      </p>
                      <p>
                        <strong>Email:</strong>{" "}
                        <a
                          href="mailto:sales@teckzilla.net"
                          className="text-primary hover:underline"
                        >
                          sales@teckzilla.net
                        </a>
                      </p>
                      <p>
                        <strong>Phone:</strong>{" "}
                        <a
                          href="tel:+919833765812"
                          className="text-primary hover:underline"
                        >
                          +91 9833765812
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">
                  Training Benefits
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
                <h2 className="text-3xl font-bold mb-6">
                  Ready to Master Odoo ERP?
                </h2>
                <p className="text-xl mb-8 opacity-90">
                  Join thousands of professionals who have enhanced their skills
                  with our comprehensive Odoo training programs!
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
                  Enroll Now
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

export default OdooTraining;
