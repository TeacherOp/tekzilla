"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import {
  FacebookIcon,
  LinkedinIcon,
  Menu,
  PhoneCallIcon,
  X,
  YoutubeIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "./ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navigationItems = [
    { name: "Home", href: "/" },
    {
      name: "Services",
      items: [
        {
          name: "Odoo Implementation and Consulting",
          href: "/services/odoo-implementation-consulting",
        },
        { name: "Odoo Migration", href: "/services/odoo-migration" },
        {
          name: "Odoo Support By Teckzilla",
          href: "/services/odoo-support-by-teckzilla",
        },
        {
          name: "Odoo Training By Teckzilla",
          href: "/services/odoo-training-by-teckzilla",
        },
      ],
    },
    {
      name: "Odoo",
      items: [
        { name: "Odoo Consulting", href: "/odoo-consulting" },
        { name: "Odoo Implementation", href: "/odoo-implementations" },
        {
          name: "Odoo Integration With Third-Party Tools",
          href: "/odoo-integration-with-third-party-tools",
        },
        {
          name: "Odoo Training",
          href: "/services/odoo-training-by-teckzilla",
        },
        { name: "After Sales", href: "/after-sales" },
      ],
    },
    {
      name: "Vertical",
      items: [
        { name: "Service Industry", href: "/service-industry" },
        { name: "Retail Industry", href: "/retail-industry" },
        { name: "Health Industry", href: "/health-industry" },
        {
          name: "Manufacturing Industry",
          href: "/manufacturing-industry",
        },
        { name: "Telecom Industry", href: "/telecom-industry" },
        { name: "Education Industry", href: "/education-industry" },
        { name: "Hospitality Industry", href: "/hospitality-industry" },
      ],
    },
    {
      name: "Case Studies",
      items: [{ name: "Case Studies", href: "/case-studies" }],
    },
    { name: "Contact Us", href: "/contact-us" },
  ];

  return (
    <header className="w-full bg-background shadow-sm border-b border-border">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4">
        <div className="container mx-auto flex flex-col sm:flex-row items-center text-sm">
          <div className="flex w-full sm:w-1/3 justify-start items-center gap-4 text-center mb-2 sm:mb-0">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              Mon - Fri 10:00 - 20:00 (IST)
            </span>
          </div>
          <div className="flex w-full sm:w-1/3 justify-center items-center mb-2 sm:mb-0">
            <span className="hidden sm:block text-center">
              Now Hiring: Python developer, Techno Functional Manager, ERP Sales
              Executive.
            </span>
          </div>
          <div className="flex w-full sm:w-1/3 justify-end items-center gap-4">
            <span>Social:</span>
            <div className="flex gap-2">
              <a
                href="https://www.facebook.com/teckzillatechnologies#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon className="w-5 h-5 transition-colors" />
              </a>
              <a
                href="https://in.linkedin.com/company/teckzilla-erp-experts"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinIcon className="w-5 h-5 transition-colors" />
              </a>
              <a
                href="https://www.youtube.com/@teckzilla"
                target="_blank"
                rel="noopener noreferrer"
              >
                <YoutubeIcon className="w-5 h-5 transition-colors" />
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=918233083333&text=Hello"
                target="_blank"
                rel="noopener noreferrer"
              >
                <PhoneCallIcon className="w-5 h-5 transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div>
            <Link href={"/"} className="flex items-center gap-3">
              <Image
                width={1000}
                height={1000}
                src={"/teckzilla-logo-original.png"}
                alt="Teckzilla"
                className="w-auto h-10"
              />
              {/* <span className="text-2xl font-bold text-primary">Teckzilla</span> */}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              {navigationItems.map((item) => {
                // Determine if top level menu should be active by exact or subpath match
                const isActiveRoot = item.href
                  ? pathname === item.href
                  : item.items?.some((sub) => pathname === sub.href);
                return (
                  <NavigationMenuItem key={item.name}>
                    {item.items ? (
                      <>
                        <NavigationMenuTrigger
                          className={cn(
                            "text-foreground hover:text-primary font-medium",
                            isActiveRoot && "text-primary",
                          )}
                        >
                          {item.name}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid w-[400px] gap-1 p-2 md:w-[500px] md:grid-cols-1 bg-popover">
                            {item.items.map((subItem) => (
                              <li key={subItem.name}>
                                <NavigationMenuLink asChild>
                                  <Link
                                    href={subItem.href}
                                    className={cn(
                                      "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                                      pathname === subItem.href &&
                                        "text-primary bg-accent",
                                    )}
                                  >
                                    <div className="text-sm font-medium leading-none">
                                      {subItem.name}
                                    </div>
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <NavigationMenuLink asChild>
                        <Link
                          href={item.href}
                          className={cn(
                            "text-foreground hover:text-primary transition-colors font-medium px-4 py-2",
                            pathname === item.href &&
                              "text-primary underline underline-offset-4 font-semibold",
                          )}
                        >
                          {item.name}
                        </Link>
                      </NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile Menu Button */}
          <Button
            size={"icon"}
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col gap-4 pt-4">
              {navigationItems.map((item) => {
                const isActiveRoot = item.href
                  ? pathname === item.href
                  : item.items?.some((sub) => pathname === sub.href);
                return (
                  <div key={item.name}>
                    {item.items ? (
                      <div className="space-y-2">
                        <div
                          className={cn(
                            "font-medium text-foreground",
                            isActiveRoot && "text-primary",
                          )}
                        >
                          {item.name}
                        </div>
                        <div className="pl-4 space-y-2">
                          {item.items.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className={cn(
                                "block text-sm text-muted-foreground hover:text-primary transition-colors",
                                pathname === subItem.href &&
                                  "text-primary underline underline-offset-4 font-semibold",
                              )}
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className={cn(
                          "block text-foreground hover:text-primary transition-colors font-medium",
                          pathname === item.href &&
                            "text-primary underline underline-offset-4 font-semibold",
                        )}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
