import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Get in Touch with Teckzilla | Odoo Gold Partner",
  description:
    "Contact Teckzilla for Odoo ERP solutions. Reach us at our Mumbai and Dubai offices. Call +91-8233083333 or email sales@teckzilla.net",
};

const Contact = () => {
  return (
    <>
      <div className="min-h-screen bg-background">
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Contact Us
              </h1>
              <p className="text-lg text-muted-foreground">
                Get in touch with our Odoo experts
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <MapPin className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold mb-2">India Office</h3>
                        <p className="text-muted-foreground">
                          225, Neo Corporate Plaza, Malad West Mumbai,
                          Maharashtra 400064
                        </p>
                        <div className="mt-4 rounded-md overflow-hidden shadow">
                          <iframe
                            loading="lazy"
                            src="https://maps.google.com/maps?q=225%20Neo%20Corporate%20Plaza%20Cabin%20A%2C%20Ramchandra%20Lane%20Extention%2C%20Malad%20West%20Mumbai%20400064&amp;t=m&amp;z=9&amp;output=embed&amp;iwloc=near"
                            title="225 Neo Corporate Plaza Cabin A, Ramchandra Lane Extention, Malad West Mumbai 400064"
                            aria-label="225 Neo Corporate Plaza Cabin A, Ramchandra Lane Extention, Malad West Mumbai 400064"
                            width="100%"
                            height="220"
                            style={{ border: 0 }}
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                          ></iframe>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <MapPin className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold mb-2">UAE Office</h3>
                        <p className="text-muted-foreground">
                          VSM Teckzilla L.L.C-FZ, Meydan Grandstand, 6th floor,
                          Meydan Road, Nad Al Sheba, Dubai, U.A.E.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardContent className="p-6 text-center">
                      <Phone className="h-8 w-8 text-primary mx-auto mb-3" />
                      <h3 className="font-semibold mb-2">Phone</h3>
                      <p className="text-muted-foreground text-sm">
                        +91-8233083333
                      </p>
                      <p className="text-muted-foreground text-sm">
                        +91-9137018743
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 text-center">
                      <Mail className="h-8 w-8 text-primary mx-auto mb-3" />
                      <h3 className="font-semibold mb-2">Email</h3>
                      <p className="text-muted-foreground text-sm">
                        sales@teckzilla.net
                      </p>
                      <p className="text-muted-foreground text-sm">
                        info@teckzilla.net
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <Input placeholder="Your Name" />
                      <Input type="email" placeholder="Your Email" />
                    </div>
                    <Input placeholder="Subject" />
                    <Textarea
                      placeholder="Your Message"
                      className="min-h-[120px]"
                    />
                    <Button className="w-full">Send Message</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
