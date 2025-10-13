// c:\Users\patil\OneDrive\Desktop\tekzilla\src\app\careers\page.tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata = {
  title: "Careers at Teckzilla",
  description:
    "Join Teckzilla to build impactful ERP and Odoo solutions. Explore roles across engineering, product, and delivery.",
};

export default function CareersPage() {
  const roles = [
    {
      title: "Senior Python Developers",
      location: "Malad West, Mumbai",
      type: "Full Time",
      summary:
        "Design and implement functional requirements, build efficient back-end features in Python, and coach junior team members.",
      descriptions: [
        "Help design and implement functional requirements",
        "Build efficient back-end features in Python",
        "Integrate front-end components into applications",
        "Manage testing and bug fixes",
        "Prepare technical documentation",
        "Collaborate with UX/UI designers to implement design into the code",
        "Coach junior team members",
        "Implement software enhancements and suggest improvements",
      ],
      qualifications: [
        "Help design and implement functional requirements",
        "Build efficient back-end features in Python",
        "Integrate front-end components into applications",
        "Manage testing and bug fixes",
        "Prepare technical documentation",
        "Collaborate with UX/UI designers to implement design into the code",
        "Coach junior team members",
        "Implement software enhancements and suggest improvements",
      ],
    },
    {
      title: "Odoo Senior Software Developers",
      location: "New Zeland",
      type: "Full Time",
      summary:
        "Senior Odoo developer with strong Python, Odoo framework, and problem-solving skills. Lead module development and client delivery.",
      descriptions: [
        "Good knowledge of object oriented programming, object modeling, relational databases, Unix/Linux platform",
        "Experience of JavaScript is must.",
        "Development of new functional business modules",
        "High-level user support (technical)",
        "Involvement in the Odoo project.",
        "Strong in logical and problem solving skills.",
        "Good knowledge of Python and ODOO framework.",
        "Development and extension of the Open Object framework and its existing modules.",
        "Review existing code & adapt it to the new algorithm.",
        "Experience in integration process of Odoo with third party application.",
        "Should have designed, developed and released at least 5 product/application of acceptable scale end-to-end.",
        "Be strong in development processes and methods (version control, code review, release management).",
        "Requirement gathering, documentation and system design for Odoo implementations.",
        "Ensure correct delivery and training during handover of the implementations.",
        "Creation of end-user manuals and training videos.",
        "Testing of the application to verify functionality; onsite training and implementation.",
      ],
      qualifications: [
        "MCA, MCS, MSC, B.Tech, BE",
        "2+ years experience in ODOO development",
        "2-4 Years in Odoo",
      ],
      clientManagement: [
        "Manages day-to-day client interaction – Sets and manages client expectations",
        "Develops lasting relationships with client personnel that foster client ties",
        "Communicates effectively with clients to identify needs and evaluate alternative business solutions",
        "Continually seeks opportunities to increase customer satisfaction and deepen client relationships",
        "Builds a knowledge base of each client’s business, organization and objectives",
        "Facilitates team and client meetings effectively; holds regular status meetings",
        "Effectively communicates relevant project information to superiors",
        "Delivers engaging, informative, well-organized presentations",
        "Resolves and/or escalates issues in a timely fashion; communicates difficult/sensitive information tactfully",
        "Proven prior experience performing all Project Manager responsibilities and functions",
        "General understanding in the areas of programming, database highly desirable",
        "Understands Internet, Intranet, Extranet and client/server architectures",
        "Maintain awareness of new and emerging technologies and their application on client engagements",
        "Excellent ability to work in a team environment; genuine interest in mentoring junior staff",
      ],
      education: ["Web Designing Courses", "Post Graduate in IT Solutions"],
    },
    {
      title: "ERP Functional Consultants",
      location: "New Zeland",
      type: "Full Time",
      summary:
        "Own the complete ERP implementation lifecycle across modules with strong testing, documentation, and training capabilities.",
      descriptions: [
        "Manage complete lifecycle of ERP implementation: process understanding to project management",
        "Propose architectural software decisions and guide leadership on execution",
        "Assist in business requirements analysis and transform organization processes",
        "Decision-making at the technological level; support for resolution of doubts",
        "Prepare test cases for testing: Unit, SIT, Performance, UAT, Regression, and client-specific",
        "Promote adherence to architectural principles; influence organizational activities",
        "Train organization (on-site or online) and prepare proper documentation",
        "Provide consultancy across departments and verticals (Trading, Manufacturing, Service, etc.)",
      ],
      qualifications: [
        "MCA, MCS, MSC, B.Tech, BE",
        "2+ years experience in ODOO development; 2-4 years in Odoo",
        "University degree; Any Graduate",
        "Key Skills: ERP functional, ERP implementation, Functional Consultancy",
        "3+ years of directly related experience",
        "Proven experience managing ERP projects through the entire lifecycle",
        "Resourceful, confident under pressure; strong crisis and expectation management",
        "Experience with typical ERP modules: Finance, AR, AP, Sales, Purchase, Materials & Inventory, HR & Payroll",
        "Passionate about continuous learning; effective change agent",
      ],
      education: ["Web Designing Courses", "Post Graduate in IT Solutions"],
    },
    {
      title: "ERP Sales Consultants",
      location: "Malad West, Mumbai",
      type: "Full Time",
      summary:
        "Lead generation, demos, proposal coordination, and end-to-end engagement to close ERP deals.",
      descriptions: [
        "Lead Generation for Business Prospects in Domestic Market",
        "Cold Calling, Follow Ups",
        "Onsite Client Meetings, Presentations and Demos to domestic clients",
        "Prepare and submit proposals for ERP products",
        "Coordinate with ERP partner to submit the proposals",
        "Negotiation & Closure",
        "Post Order Client Engagement",
        "Payment’s collections",
      ],
      qualifications: [
        "Good English Communication skills – verbal and written",
        "Good presentation skills",
        "Good Knowledge of MS Excel",
        "Tally/ERP Functional Knowledge",
      ],
    },
    {
      title: "Senior ODOO Developer",
      location: "Malad West, Mumbai",
      type: "Full Time",
      descriptions: [
        "Good knowledge of object oriented programming, object modeling, relational databases, Unix/Linux platform",
        "Experience of JavaScript is must.",
        "Development of new functional business modules",
        "High-level user support (technical)",
        "Involvement in the Odoo project.",
        "Strong in logical and problem solving skills.",
        "Good knowledge of Python and ODOO framework.",
        "Development and extension of the Open Object framework and its existing modules.",
        "Review existing code & adapt it to the new algorithm.",
        "Experience in integration process of Odoo with third party application.",
        "Designed, developed and released at least 5 end-to-end products/applications.",
        "Strong development processes (version control, code review, release management).",
        "Requirement gathering, documentation, and system design of implementations.",
        "Ensure correct delivery and training during handover.",
        "Create end-user manuals and training videos.",
        "Testing to verify functionality; onsite training and implementation.",
      ],
      qualifications: [
        "MCA, MCS, MSC, B.Tech, BE.",
        "2+ years experience in ODOO development",
        "2-4 Years in Odoo",
      ],
      clientManagement: [
        "Manages day-to-day client interaction and expectations",
        "Develops lasting relationships with client personnel",
        "Communicates effectively to identify needs and evaluate solutions",
        "Seeks opportunities to increase satisfaction and deepen relationships",
        "Builds a knowledge base of each client’s business and objectives",
        "Facilitates team and client meetings; regular status updates",
        "Communicates relevant project information to leadership",
        "Delivers engaging, informative, well-organized presentations",
        "Resolves/escalates issues in a timely fashion; communicates tactfully",
        "Prior experience with Project Manager responsibilities",
        "General understanding of programming and databases",
        "Understands Internet/Intranet/Extranet and client/server architectures",
        "Stays aware of emerging technologies and their application",
        "Excellent team environment skills; mentors junior staff",
      ],
    },
    {
      title: "ERP Functional JD",
      location: "Malad West, Mumbai",
      type: "Full Time",
      descriptions: [
        "Manage full ERP implementation lifecycle from process understanding to project management",
        "Propose architectural decisions and guide leadership on execution strategy",
        "Assist in requirements analysis, define ERP objectives, transform processes",
        "Decision-making at technological level; support in resolving doubts",
        "Prepare test cases: Unit, SIT, Performance, UAT, Regression, client-specific",
        "Promote adherence to architectural principles; influence organizational activities",
        "Deliver training (on-site/online) with proper documentation",
        "Provide consultancy across departments and verticals (Trading, Manufacturing, Service, etc.)",
      ],
      qualifications: [
        "MCA, MCS, MSC, B.Tech, BE",
        "2+ years Odoo development; 2–4 years in Odoo",
        "University degree; Any Graduate",
        "Key Skills: ERP functional, ERP implementation, Functional Consultancy",
        "3+ years directly related experience",
        "Proven experience across entire ERP project lifecycle",
        "Resourceful under pressure; strong crisis/expectation management",
        "Experience with ERP modules: Finance, AR, AP, Sales, Purchase, Materials & Inventory, HR & Payroll",
        "Passionate about continuous learning; effective change agent",
      ],
    },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-semibold text-balance text-center md:text-left">
            Careers
          </h1>
          <p className="mt-3 max-w-2xl leading-relaxed mx-auto md:mx-0 text-center md:text-left">
            Join our team to build world-class Odoo and ERP solutions. Explore
            open roles and apply today.
          </p>
        </div>
      </section>

      {/* Roles */}
      <section className="container mx-auto px-4 py-10">
        <h2 className="text-2xl font-semibold mb-4 text-center md:text-left">
          Open Roles
        </h2>

        <Accordion
          type="single"
          collapsible
          className="space-y-6"
          defaultValue="Odoo Senior Software Developers"
        >
          {roles.map((r) => (
            <AccordionItem
              key={r.title}
              value={r.title}
              className="border-none"
            >
              <div className="rounded-md border border-border bg-muted">
                <div className="flex flex-col md:flex-row items-center md:justify-between gap-3 px-4 py-3">
                  {/* Left: trigger area with +/- square and title */}
                  <AccordionTrigger className="group flex flex-1 items-center gap-3 py-0 hover:no-underline">
                    <span
                      aria-hidden
                      className="grid size-8 place-items-center rounded bg-primary text-primary-foreground text-lg font-semibold"
                    >
                      <span className="block group-data-[state=open]:hidden">
                        +
                      </span>
                      <span className="hidden group-data-[state=open]:block">
                        –
                      </span>
                    </span>
                    <span className="text-lg font-semibold">{r.title}</span>
                  </AccordionTrigger>

                  {/* Right: Apply Now button */}
                  <a
                    href={`${process.env.WORDPRESS_URL}/submit-your-resume/`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
                  >
                    Apply Now
                  </a>
                </div>

                <AccordionContent>
                  <div className="border-t border-border rounded-b-md bg-muted p-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <h3 className="text-xl font-semibold mb-2">
                          Job Descriptions :
                        </h3>
                        <ul className="space-y-2 leading-relaxed">
                          {r.descriptions?.map((d) => (
                            <li key={d} className="list-disc pl-5">
                              {d}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {r.qualifications && (
                        <div>
                          <h3 className="text-xl font-semibold mb-2">
                            Qualifications :
                          </h3>
                          <ul className="space-y-2 leading-relaxed">
                            {r.qualifications.map((q) => (
                              <li key={q} className="list-disc pl-5">
                                {q}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    <div className="mt-6 grid gap-2 md:grid-cols-2">
                      <p className="text-center md:text-left">
                        <span className="font-medium">Job Location :</span>{" "}
                        <span className="text-muted-foreground">
                          {r.location}
                        </span>
                      </p>
                      <p className="text-center md:text-left">
                        <span className="font-medium">Job Type :</span>{" "}
                        <span className="text-muted-foreground">{r.type}</span>
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </div>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section className="bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 py-10 space-y-6 ">
          <p className="">
            We at Teckzilla consider our employees to be our most valuable
            resource. We are considering the possibility of recruiting you if
            you are a new technology startup that is dedicated, purposeful, and
            anxious to establish a reputation in the industry. Whether you’re an
            old hand or just starting, Teckzilla is the place for you.
          </p>
          <h2 className="text-2xl font-semibold text-center md:text-left">
            Why choose Teckzilla?
          </h2>
          <p className="">
            Creativity and innovation are our strong suits with which we respect
            and implement everyone’s ideas and constantly push ourselves to
            think laterally. Your professional development is our top priority.
            Your potential is boundless when you have access to a wide range of
            projects and work in an atmosphere that values individual
            development. Integrate into a select cohort of individuals who,
            despite leading radically dissimilar lives, are united by an
            unwavering pursuit of excellence and innovation.
          </p>
          <p className="">
            Are you ready to move up in your job? Check out our open jobs to see
            how you can help shape the future of technology at Teckzilla. Attend
            an organization where your abilities are not only appreciated but
            also commended. Go to our Careers page right now to send in your
            application!
          </p>
          <p className="">It is our pleasure to have you join our team.</p>
        </div>
      </section>
    </main>
  );
}
