import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/site.config";
import {
  ArrowLeft,
  Award,
  Building2,
  Calendar,
  CheckCircle,
  Clock,
  ExternalLink,
  Globe,
  Lightbulb,
  Quote,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Blink Digital India Private Limited Case Study | Odoo ERP by Teckzilla",
  description:
    "Discover how Blink Digital India revolutionized digital currency operations with Odoo ERP, implemented by Teckzilla. Real-time data, integrated processes, and cost savings for growth and efficiency.",
  keywords: [
    "Blink Digital India Private Limited",
    "Odoo ERP case study",
    "digital currency ERP",
    "Teckzilla success story",
    "business transformation",
    "ERP implementation",
    "India fintech",
    "real-time data",
    "cost savings",
    "scalability",
  ],
  alternates: {
    canonical: `${siteConfig.site_domain}/blink-digital-india-private-limited`,
  },
  metadataBase: new URL(
    `${siteConfig.site_domain}/blink-digital-india-private-limited`,
  ),
  robots: {
    index: true,
    follow: true,
  },
};

const caseStudy = {
  id: "blink-digital-india",
  title: "Blink Digital India Private Limited",
  subtitle: "Digital Currency Revolution with Odoo ERP",
  category: "Retail",
  date: "10-09-2020",
  website: "www.blinkdigital.in",
  industry: "Digital Currency",
  location: "India",
  description:
    "Blink Digital India Private Limited is a top digital currency company in India, focused on transforming the financial industry with best technology solutions.",
  // Company Overview
  overview:
    "Blink Digital India Private Limited is a leading digital currency company in India, focused on transforming the financial industry with cutting-edge technology solutions. Founded to make financial transactions easier and more effective, Blink Digital provides a variety of services for both individuals and businesses in India, Netherlands, and United Arab Emirates.",

  // Challenge
  challenge:
    "Blink Digital struggled as they grew because their operations were disconnected, leading to inefficiencies and higher costs. They needed an Odoo ERP system to streamline processes and provide real-time data for smoother workflow.",

  // Solution
  solution:
    "Blink Digital teamed up with Teckzilla Technologies – Odoo Gold Partner to implement Odoo ERP. Guided by Odoo Account Manager Dooj Ramchandani, they used the Odoo.sh cloud platform for reliability, authenticity and scalability.",

  // Implementation Details
  implementationDetails: {
    partner: "Teckzilla Technologies",
    accountManager: "Dooj Ramchandani",
    users: 4,
    timeline: "3 Months",
    hosting: "Odoo.sh cloud platform",
    licenseNumber: "M21081029378809",
  },

  // Modules Implemented
  modules: [
    {
      name: "Manufacturing Process",
      description: "To improve efficient manufacturing production processes",
      icon: "🏭",
    },
    {
      name: "Inventory Process",
      description: "For efficient real-time inventory management",
      icon: "📦",
    },
    {
      name: "Accounting Process",
      description: "To automate & improve financial operations",
      icon: "💰",
    },
    {
      name: "Sales Process",
      description: "To enhance the sales process & customer management",
      icon: "📈",
    },
    {
      name: "Purchase Process",
      description: "For better procurement and vendor management",
      icon: "🛒",
    },
  ],

  // Benefits
  benefits: [
    {
      title: "Increased Efficiency and Effectiveness",
      description:
        "Integrated operations reduced manual work and improved workflows.",
      impact: "40% improvement",
    },
    {
      title: "Real-Time Data",
      description:
        "Access to real-time information helped with better decision-making.",
      impact: "Instant insights",
    },
    {
      title: "Cost Savings",
      description: "Streamlined processes led to significant cost reductions.",
      impact: "25% cost reduction",
    },
    {
      title: "Scalability and Reliability",
      description: "The Odoo.sh cloud platform supported their growth.",
      impact: "Future-ready",
    },
  ],

  // Testimonial
  testimonial: {
    text: "Blink Digital proudly accredits its operational success to a digital transformation with Odoo Gold Partner- Teckzilla Technologies. The smooth integration and real time insights have revolutionized our business processes, making it quick for high driven efficiency, growth and solution.",
    author: "Blink Digital Team",
    position: "Management Team",
  },
};

const CaseStudyDetail = () => {
  return (
    <main className="">
      {/* Header Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-6">
          <Button variant="ghost" className="mb-6" asChild>
            <Link href="/case-studies">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Case Studies
            </Link>
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div>
                <Badge
                  variant="secondary"
                  className="mb-4 bg-primary text-primary-foreground"
                >
                  {caseStudy.category}
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  {caseStudy.title}
                </h1>
                <p className="text-xl text-muted-foreground">
                  {caseStudy.subtitle}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{caseStudy.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4" />
                  <span>{caseStudy.industry}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  <span>{caseStudy.location}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="relative overflow-hidden">
                <div className="w-full rounded-md h-44 bg-gradient-to-t from-primary/90 via-primary to-[#306fff] flex items-center justify-center relative">
                  <span className="z-10 text-2xl font-bold text-white text-center px-8">
                    {caseStudy.title}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-t from-white/30 to-transparent pointer-events-none" />
                </div>

                <div className="absolute top-3 left-3">
                  <Badge
                    variant="secondary"
                    className="bg-primary text-primary-foreground text-xs px-2 py-1"
                  >
                    {caseStudy.category}
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <Users className="w-8 h-8 mx-auto mb-2 text-primary" />
                <div className="text-2xl font-bold text-foreground">
                  {caseStudy.implementationDetails.users}
                </div>
                <div className="text-sm text-muted-foreground">Users</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Clock className="w-8 h-8 mx-auto mb-2 text-primary" />
                <div className="text-2xl font-bold text-foreground">
                  {caseStudy.implementationDetails.timeline}
                </div>
                <div className="text-sm text-muted-foreground">Timeline</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <CheckCircle className="w-8 h-8 mx-auto mb-2 text-primary" />
                <div className="text-2xl font-bold text-foreground">
                  {caseStudy.modules.length}
                </div>
                <div className="text-sm text-muted-foreground">Modules</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Award className="w-8 h-8 mx-auto mb-2 text-primary" />
                <div className="text-2xl font-bold text-foreground">Gold</div>
                <div className="text-sm text-muted-foreground">Partner</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Building2 className="w-6 h-6 text-primary" />
                  <h2 className="text-3xl font-bold text-foreground">
                    Company Overview
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {caseStudy.overview}
                </p>
              </div>

              <Separator />

              {/* Challenge */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Target className="w-6 h-6 text-destructive" />
                  <h2 className="text-3xl font-bold text-foreground">
                    The Challenge
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {caseStudy.challenge}
                </p>
              </div>

              <Separator />

              {/* Solution */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Lightbulb className="w-6 h-6 text-primary" />
                  <h2 className="text-3xl font-bold text-foreground">
                    The Solution
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {caseStudy.solution}
                </p>

                {/* Modules Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {caseStudy.modules.map((module) => (
                    <Card
                      key={module.name}
                      className="border-l-4 border-l-primary"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-2xl">{module.icon}</span>
                          <h3 className="font-semibold text-foreground">
                            {module.name}
                          </h3>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {module.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <Separator />

              {/* Results */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                  <h2 className="text-3xl font-bold text-foreground">
                    Results & Benefits
                  </h2>
                </div>
                <div className="space-y-6">
                  {caseStudy.benefits.map((benefit) => (
                    <Card
                      key={benefit.title.toLowerCase().replace(/\s+/g, "-")}
                      className="border-l-4 border-l-green-500"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="font-semibold text-foreground">
                            {benefit.title}
                          </h3>
                          <Badge
                            variant="secondary"
                            className="bg-green-100 text-green-800"
                          >
                            {benefit.impact}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground">
                          {benefit.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-muted/30 p-8 rounded-lg border-l-4 border-l-primary">
                <div className="flex items-start gap-4">
                  <Quote className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-lg italic text-foreground mb-4 leading-relaxed">
                      "{caseStudy.testimonial.text}"
                    </p>
                    <div>
                      <div className="font-semibold text-foreground">
                        {caseStudy.testimonial.author}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {caseStudy.testimonial.position}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Project Details */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Building2 className="w-5 h-5" />
                      Project Details
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="font-medium text-foreground mb-1">
                        Client Website
                      </div>
                      <a
                        href={`https://${caseStudy.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        {caseStudy.website}
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                    <Separator />
                    <div>
                      <div className="font-medium text-foreground mb-1">
                        Implementation Partner
                      </div>
                      <div className="text-muted-foreground">
                        {caseStudy.implementationDetails.partner}
                      </div>
                    </div>
                    <div>
                      <div className="font-medium text-foreground mb-1">
                        Account Manager
                      </div>
                      <div className="text-muted-foreground">
                        {caseStudy.implementationDetails.accountManager}
                      </div>
                    </div>
                    <div>
                      <div className="font-medium text-foreground mb-1">
                        Hosting Platform
                      </div>
                      <div className="text-muted-foreground">
                        {caseStudy.implementationDetails.hosting}
                      </div>
                    </div>
                    <div>
                      <div className="font-medium text-foreground mb-1">
                        License Number
                      </div>
                      <div className="text-muted-foreground font-mono text-sm">
                        {caseStudy.implementationDetails.licenseNumber}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* CTA */}
                <Card className="bg-primary text-primary-foreground">
                  <CardContent className="p-6 text-center">
                    <h3 className="font-bold text-lg mb-2">
                      Start Your Success Story
                    </h3>
                    <p className="mb-4 opacity-90">
                      Ready to transform your business like {caseStudy.title}?
                    </p>
                    <Button variant="secondary" className="w-full" asChild>
                      <Link href="/contact-us">Get Started Today</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            More Success Stories
          </h2>
          <div className="text-center">
            <Button size="lg" asChild>
              <Link href="/case-studies">
                View All Case Studies
                <ArrowLeft className="w-5 h-5 ml-2 rotate-180" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CaseStudyDetail;
