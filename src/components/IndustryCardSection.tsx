export interface IndustryCard {
  title: string;
  img: string;
  alt: string;
  desc: string;
}

export default function IndustryCardSection({
  sections,
}: {
  sections: IndustryCard[];
}) {
  return (
    <div className="space-y-8">
      {sections.map((section, idx) => (
        <div
          key={section.title}
          className={`group flex flex-col md:flex-row items-center gap-6 bg-gradient-to-br from-primary/5 via-card to-background rounded-2xl border-2 border-primary/20 shadow-lg p-4 md:p-7 transition-all duration-300 hover:scale-[1.025] hover:shadow-2xl ${
            idx % 2 === 1 ? "md:flex-row-reverse" : ""
          }`}
        >
          <div className="relative flex-shrink-0 flex flex-col items-center justify-center">
            <img
              src={section.img}
              alt={section.alt}
              className="w-full md:w-56 h-44 object-cover rounded-xl border shadow"
            />
          </div>
          <div className="flex-1 relative">
            <div className="absolute -left-2 top-0 h-8 w-1 bg-primary/70 rounded-full md:block hidden" />
            <h2 className="text-xl md:text-2xl font-bold mb-2 flex items-center gap-2">
              {section.title}
            </h2>
            <p className="text-base text-muted-foreground">{section.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
