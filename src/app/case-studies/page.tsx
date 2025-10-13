import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { siteConfig } from "@/site.config";
import { ArrowRight, Building2, Calendar, Globe, Users } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

// Meta data for this Case Studies page
export const metadata: Metadata = {
  title: "Case Studies | Success Stories of Odoo ERP by Teckzilla",
  description:
    "Explore real business transformation stories with Odoo ERP implemented by Teckzilla. Discover how companies optimized operations and achieved growth.",
  keywords: [
    "case studies",
    "Odoo ERP success",
    "business transformation",
    "digital transformation",
    "ERP implementation",
    "Teckzilla results",
    "customer stories",
    "ERP benefits",
  ],
  alternates: {
    canonical: `${siteConfig.site_domain}/case-studies`,
  },
  metadataBase: new URL(`${siteConfig.site_domain}/case-studies`),
  robots: {
    index: true,
    follow: true,
  },
};

const caseStudies = [
  {
    id: "blink-digital-india-private-limited",
    title: "Blink Digital India Private Limited",
    category: "Retail",
    date: "10-09-2020",
    website: "www.blinkdigital.in",
    description:
      "Blink Digital India Private Limited is a top digital currency company in India, focused on transforming the financial industry with best technology solutions.",
    testimonial:
      "The smooth integration and real time insights have revolutionized our business processes, making it quick for high driven efficiency, growth and solution.",
    modules: ["Manufacturing", "Inventory", "Accounting", "Sales", "Purchase"],
    users: 4,
    timeline: "3 Months",
    benefits: [
      "Increased Efficiency",
      "Real-Time Data",
      "Cost Savings",
      "Scalability",
    ],
  },
];

const CaseStudies = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden bg-primary-foreground">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center ">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Success Stories
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Discover how we've transformed businesses across industries with
              powerful Odoo ERP solutions
            </p>
            <div className="flex items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5" />
                <span>50+ Companies Transformed</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>1000+ Users Empowered</span>
              </div>
            </div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button variant="default" className="rounded-full">
              All Industries
            </Button>
            <Button variant="outline" className="rounded-full">
              Retail
            </Button>
            <Button variant="outline" className="rounded-full">
              Manufacturing
            </Button>
            <Button variant="outline" className="rounded-full">
              Healthcare
            </Button>
            <Button variant="outline" className="rounded-full">
              Technology
            </Button>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <Card
                key={study.id}
                className="group hover:shadow-lg transition-all duration-200 overflow-hidden border border-muted bg-white rounded-xl p-0 font-inter"
              >
                <div className="relative overflow-hidden">
                  <div className="w-full h-44 bg-gradient-to-t from-primary/90 via-primary to-[#306fff] flex items-center justify-center relative">
                    <span
                      className="z-10 text-2xl md:text-3xl font-extrabold text-white text-center px-4 md:px-8 leading-tight tracking-tight"
                      style={{
                        fontFamily: "Inter, sans-serif",
                      }}
                    >
                      {study.title}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-t from-white/30 to-transparent pointer-events-none" />
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge
                      variant="secondary"
                      className="bg-primary text-primary-foreground text-xs md:text-sm px-3 py-1 rounded-full shadow"
                    >
                      {study.category}
                    </Badge>
                  </div>
                </div>
                <CardHeader className="pb-0 pt-5 px-6">
                  <CardTitle
                    className="text-lg md:text-xl font-semibold group-hover:text-primary transition-colors mb-1 leading-snug tracking-normal"
                    style={{
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    {study.title}
                  </CardTitle>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{study.date}</span>
                    <span className="flex items-center gap-1 ml-2">
                      <Globe className="w-4 h-4" />
                      {study.website}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <CardDescription
                    className="line-clamp-2 mb-2 text-sm text-gray-600 tracking-wide"
                    style={{
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    {study.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2 my-4">
                    {study.modules.slice(0, 2).map((module) => (
                      <Badge
                        key={module}
                        variant="outline"
                        className="text-xs px-3 py-0.5 rounded-md font-medium"
                      >
                        {module}
                      </Badge>
                    ))}
                    {study.modules.length > 2 && (
                      <Badge
                        variant="outline"
                        className="text-xs px-3 py-0.5 rounded-md font-medium"
                      >
                        +{study.modules.length - 2} more
                      </Badge>
                    )}
                  </div>

                  <Link href={`/case-studies/${study.id}`} className="mt-2">
                    <Button
                      size="sm"
                      className="w-full rounded-md text-sm px-0 font-semibold tracking-wide bg-primary text-white hover:bg-primary/90"
                      style={{
                        fontFamily: "Inter, sans-serif",
                      }}
                    >
                      Read Full Case Study
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join hundreds of companies that have transformed their operations
              with Odoo ERP. Let's discuss how we can help your business achieve
              similar results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8"
                asChild
              >
                <Link href="/contact-us">
                  Start Your Transformation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CaseStudies;
