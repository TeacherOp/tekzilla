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
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <Image
              width={1000}
              height={1000}
              src={"/teckzilla-logo-original.png"}
              alt="Teckzilla"
              className="w-auto h-10"
            />
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Teckzilla Technologies (Formerly Planet Odoo) brings you the most
              efficient Odoo solutions from some of the most experienced and
              qualified IT professionals.
            </p>

            <div className="mb-8">
              <h5 className="font-semibold text-foreground mb-4">
                INDIA LOCATION
              </h5>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>225, Neo Corporate Plaza, Malad West</p>
                <p>Mumbai, Maharashtra 400064</p>
              </div>
            </div>

            <div className="mb-8">
              <h5 className="font-semibold text-foreground mb-4">
                UAE LOCATION
              </h5>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>VSM Teckzilla L.L.C-FZ</p>
                <p>Meydan Grandstand, 6th floor</p>
                <p>Meydan Road, Nad Al Sheba, Dubai, U.A.E.</p>
              </div>
            </div>

            <div className="space-y-3">
              <h5 className="font-semibold text-foreground">
                CONTACT/WHATSAPP
              </h5>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">
                  +91-8233083333
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">
                  +91-9137018743
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">
                  +91-9833765812
                </span>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">
                  +971 55 886 1632 (Whatsapp)
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services/odoo-implementation-consulting"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Odoo Implementation And Consulting
                </Link>
              </li>
              <li>
                <Link
                  href="/services/odoo-migration"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Odoo Migration
                </Link>
              </li>
              <li>
                <Link
                  href="/services/odoo-support-by-teckzilla"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Odoo Support By Teckzilla
                </Link>
              </li>
              <li>
                <Link
                  href="/services/odoo-training-by-teckzilla"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Odoo Training By Teckzilla
                </Link>
              </li>
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-6">IT Services</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services/odoo-implementation-consulting"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Service
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <a
                  href="https://www.google.com/maps/place/Planet-odoo/"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See On Map
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter & Contact and Map */}
          <div>
            <h4 className="font-semibold text-foreground mb-6">
              Subscribe to Updates
            </h4>
            <p className="text-muted-foreground mb-4 text-sm">
              Enter email to subscribe our latest Services, news and articles.
            </p>
            <div className="space-y-3 mb-6">
              <Input placeholder="Enter email" className="w-full" />
              <Button className="btn-primary w-full">Subscribe</Button>
            </div>

            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">
                  sales@teckzilla.net
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">
                  info@teckzilla.net
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">
                  girish.joshi@teckzilla.net
                </span>
              </div>
            </div>

            <div className="mb-3">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.124242548764!2d72.83795841437852!3d19.18977505337423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b6e5f1300001%3A0x5c074e7e62b39ca9!2sPlanet-odoo!5e0!3m2!1sen!2sin!4v1656051245411!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Teckzilla Location Map"
              ></iframe>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-muted-foreground">
          <div className="mb-4 md:mb-0 flex items-center gap-4">
            <span>Follow Us:</span>
            <div className="flex gap-2">
              <a
                href="https://www.facebook.com/teckzillatechnologies#"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-primary/10 border border-primary/50 rounded-full p-2 hover:bg-primary hover:text-white transition-colors"
              >
                <FacebookIcon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://in.linkedin.com/company/teckzilla-erp-experts"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-primary/10 border border-primary/50 rounded-full p-2 hover:bg-primary hover:text-white transition-colors"
              >
                <LinkedinIcon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://www.youtube.com/@teckzilla"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-primary/10 border border-primary/50 rounded-full p-2 hover:bg-primary hover:text-white transition-colors"
              >
                <YoutubeIcon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=918233083333&text=Hello"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-primary/10 border border-primary/50 rounded-full p-2 hover:bg-primary hover:text-white transition-colors"
              >
                <PhoneCallIcon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>
          <p>
            &copy; {new Date().getFullYear()} Teckzilla Technologies (Formerly
            Planet Odoo) All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
