import { Separator } from "@/components/ui/separator";
import {
  FacebookIcon,
  LinkedinIcon,
  Mail,
  PhoneCallIcon,
  YoutubeIcon
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-muted text-foreground border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Emails */}
          <div className="space-y-6">
            <Image
              width={1000}
              height={1000}
              src={"/teckzilla-logo-original.webp"}
              alt="Teckzilla"
              className="w-auto h-12"
              loading="lazy"
            />

            <div className="flex flex-col gap-4">
              <div className="space-y-2">
                <h5 className="font-semibold text-foreground/90 text-sm">Main Emails</h5>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                  <a href="mailto:sales@teckzilla.net" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    sales@teckzilla.net
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                  <a href="mailto:info@teckzilla.net" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    info@teckzilla.net
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "Odoo Consulting", href: "/odoo-consulting" },
                { label: "Odoo Implementation", href: "/odoo-implementations" },
                { label: "Odoo Migration", href: "/services/odoo-migration" },
                { label: "Odoo Support", href: "/services/odoo-support-by-teckzilla" },
                { label: "Odoo Training", href: "/services/odoo-training-by-teckzilla" },
                { label: "Case Studies", href: "/case-studies" },
                { label: "Contact Us", href: "/contact-us" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* India Office */}
          <div>
            <h4 className="font-bold text-lg mb-6">India Office</h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-semibold text-foreground/90 text-sm mb-2">Address:</h5>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  225, Neo Corporate Plaza,<br />
                  Malad West, Mumbai,<br />
                  Maharashtra 400064
                </p>
              </div>

              <div>
                <h5 className="font-semibold text-foreground/90 text-sm mb-2">Phone Call:</h5>
                <div className="space-y-2">
                  <a href="tel:+918233083333" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                    +91-8233083333
                  </a>
                  <a href="tel:+919137018743" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                    +91-9137018743
                  </a>
                  <a href="tel:+919833765812" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                    +91-9833765812
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* UAE Office */}
          <div>
            <h4 className="font-bold text-lg mb-6">UAE Office</h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-semibold text-foreground/90 text-sm mb-2">Address:</h5>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  VSM Teckzilla L.L.C-FZ<br />
                  Meydan Grandstand, 6th floor,<br />
                  Meydan Road, Nad Al Sheba,<br />
                  Dubai, U.A.E.
                </p>
              </div>

              <div>
                <h5 className="font-semibold text-foreground/90 text-sm mb-2">Phone Call:</h5>
                <div className="space-y-2">
                  <a href="tel:+971558861632" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                    +971 55 886 1632
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-10" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Teckzilla Technologies. All Rights Reserved.
          </p>

          <div className="flex items-center gap-4">
            <span className="text-foreground font-medium hidden md:block">Follow Us:</span>
            <div className="flex gap-3">
              {[
                { Icon: FacebookIcon, href: "https://www.facebook.com/teckzillatechnologies#" },
                { Icon: LinkedinIcon, href: "https://in.linkedin.com/company/teckzilla-erp-experts" },
                { Icon: YoutubeIcon, href: "https://www.youtube.com/@teckzilla" },
                { Icon: PhoneCallIcon, href: "https://api.whatsapp.com/send?phone=918233083333&text=Hello" },
              ].map(({ Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-muted border border-border rounded-full p-2.5 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 group"
                >
                  <Icon className="w-4 h-4 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
