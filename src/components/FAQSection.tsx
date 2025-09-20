import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Why Choose An Odoo Gold Partner?",
      answer:
        "Odoo Gold Partners like Teckzilla bring certified expertise, proven methodology, and local support for a smoother ERP implementation.",
    },
    {
      question:
        "What Makes Teckzilla A Top Odoo Gold Partner In Mumbai, India?",
      answer:
        "With deep industry knowledge, local presence, and a strong track record across sectors, we deliver customized Odoo implementations that drive productivity.",
    },
    {
      question:
        "How Long Does It Take To Implement Odoo ERP With A Gold Partner?",
      answer:
        "Implementation time depends on the number of modules, level of customization, and your business size. With Teckzilla, most projects are completed within 6–12 weeks, ensuring a smooth and timely go-live.",
    },
    {
      question: "Can Odoo ERP Be Customized For My Industry-Specific Needs?",
      answer:
        "Yes! One of the biggest advantages of working with an Odoo Gold Partner like Teckzilla is that we provide industry-specific customization. Whether you're in manufacturing, healthcare, retail, or logistics, we tailor Odoo modules to fit your business processes perfectly.",
    },
    {
      question:
        "What Kind Of Support Do Odoo Gold Partners Provide After Implementation?",
      answer:
        "Teckzilla provides end-to-end post-implementation support, including troubleshooting, training, system upgrades, and continuous performance monitoring. We ensure your Odoo ERP runs seamlessly even as your business grows.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Frequently Ask Questions (FAQ)
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left hover:text-primary transition-colors">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
