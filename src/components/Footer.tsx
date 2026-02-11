import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  FacebookIcon,
  LinkedinIcon,
  Mail,
  MessageCircle,
  Phone,
  PhoneCallIcon,
  YoutubeIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info & Locations */}
          <div className="md:col-span-1">
            <Image
              width={1000}
              height={1000}
              src={"/teckzilla-logo-original.webp"}
              alt="Teckzilla"
              className="w-auto h-10"
              loading="lazy"
            />

            <div className="mb-8 mt-6">
              <h4 className="font-semibold text-foreground mb-3 text-sm">
                INDIA LOCATION
              </h4>
              <div className="space-y-1 text-sm text-muted-foreground">
                <p>225, Neo Corporate Plaza, Malad West</p>
                <p>Mumbai, Maharashtra 400064</p>
              </div>
            </div>

            <div className="mb-8">
              <h5 className="font-semibold text-foreground mb-3 text-sm">
                UAE LOCATION
              </h5>
              <div className="space-y-1 text-sm text-muted-foreground">
                <p>VSM Teckzilla L.L.C-FZ</p>
                <p>Meydan Grandstand, 6th floor</p>
                <p>Meydan Road, Nad Al Sheba, Dubai, U.A.E.</p>
              </div>
            </div>

            <div className="space-y-3">
              <h5 className="font-semibold text-foreground text-sm">
                CONTACT
              </h5>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                  <a
                    href="tel:+918233083333"
                    className="text-sm text-muted-foreground"
                  >
                    +91-8233083333
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                  <a
                    href="tel:+919137018743"
                    className="text-sm text-muted-foreground"
                  >
                    +91-9137018743
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                  <a
                    href="tel:+919833765812"
                    className="text-sm text-muted-foreground"
                  >
                    +91-9833765812
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  <a
                    href="tel:+971558861632"
                    className="text-sm text-muted-foreground"
                  >
                    +971 55 886 1632
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-6 text-sm">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/odoo-consulting"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Odoo Consulting
                </Link>
              </li>
              <li>
                <Link
                  href="/odoo-implementations"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Odoo Implementation
                </Link>
              </li>
              <li>
                <Link
                  href="/services/odoo-migration"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Odoo Migration
                </Link>
              </li>
              <li>
                <Link
                  href="/services/odoo-support-by-teckzilla"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Odoo Support
                </Link>
              </li>
              <li>
                <Link
                  href="/services/odoo-training-by-teckzilla"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Odoo Training
                </Link>
              </li>
              <li>
                <Link
                  href="/case-studies"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Map */}
          <div>
            <h4 className="font-semibold text-foreground mb-6 text-sm">
              Get In Touch
            </h4>

            <div className="space-y-2 mb-8">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a
                  href="mailto:sales@teckzilla.net"
                  className="text-sm text-muted-foreground"
                >
                  sales@teckzilla.net
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a
                  href="mailto:info@teckzilla.net"
                  className="text-sm text-muted-foreground"
                >
                  info@teckzilla.net
                </a>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden">
              <iframe
                loading="lazy"
                src="https://maps.google.com/maps?q=225%20Neo%20Corporate%20Plaza%20Cabin%20A%2C%20Ramchandra%20Lane%20Extention%2C%20Malad%20West%20Mumbai%20400064&amp;t=m&amp;z=9&amp;output=embed&amp;iwloc=near"
                title="225 Neo Corporate Plaza Cabin A, Ramchandra Lane Extention, Malad West Mumbai 400064"
                aria-label="225 Neo Corporate Plaza Cabin A, Ramchandra Lane Extention, Malad West Mumbai 400064"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-muted-foreground text-sm">
          <div className="mb-4 md:mb-0 flex items-center gap-4">
            <span className="text-foreground font-medium">Follow Us:</span>
            <div className="flex gap-2">
              <a
                href="https://www.facebook.com/teckzillatechnologies#"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-primary/10 border border-primary/50 rounded-full p-2 hover:bg-primary hover:text-white transition-colors"
              >
                <FacebookIcon className="w-4 h-4 text-primary group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://in.linkedin.com/company/teckzilla-erp-experts"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-primary/10 border border-primary/50 rounded-full p-2 hover:bg-primary hover:text-white transition-colors"
              >
                <LinkedinIcon className="w-4 h-4 text-primary group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://www.youtube.com/@teckzilla"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-primary/10 border border-primary/50 rounded-full p-2 hover:bg-primary hover:text-white transition-colors"
              >
                <YoutubeIcon className="w-4 h-4 text-primary group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=918233083333&text=Hello"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-primary/10 border border-primary/50 rounded-full p-2 hover:bg-primary hover:text-white transition-colors"
              >
                <PhoneCallIcon className="w-4 h-4 text-primary group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>
          <p className="text-center">
            &copy; {new Date().getFullYear()} Teckzilla Technologies. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
