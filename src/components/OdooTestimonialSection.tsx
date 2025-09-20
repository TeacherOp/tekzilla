import React from "react";

const OdooTestimonialSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Check Out Our <span className="text-primary">Odoo Testimonial</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            See what our satisfied customers have to say about working with
            Teckzilla as their Odoo Gold Partner.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="relative rounded-xl overflow-hidden shadow-lg bg-card border">
            <iframe
              width="100%"
              height="280"
              src="https://www.youtube.com/embed/Ju07JnT07Ds"
              title="Odoo Customer Testimonial 1"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-64 md:h-72 rounded-xl"
            ></iframe>
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-lg bg-card border">
            <iframe
              width="100%"
              height="280"
              src="https://www.youtube.com/embed/2DnWNxBJcyc"
              title="Odoo Customer Testimonial 2"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-64 md:h-72 rounded-xl"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OdooTestimonialSection;
