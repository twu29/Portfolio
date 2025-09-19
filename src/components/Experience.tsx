const Experience = () => {
  const experiences = [
    {
      title: "AI Engineer Intern",
      company: "Captus.ai",
      location: "Seattle, WA",
      period: "June 2025 – Present",
      achievements: [
        "Launched 5 production RAG/swarm agents with API integrations (OpenAI, Google, Anthropic)",
        "Raised chatbot accuracy from 20% to 80% via evaluation framework + RAG/swarms optimization",
        "Embedded 1K+multi-modal docs in Supabase; improved search precision and latency",
        "Engineered Supabase integrations, optimizing a 30-table database with advanced SQL, and built a real-time dashboard in JavaScript/HTML/CSS to deliver accurate and live client data"
      ],
      current: true
    },
    {
      title: "Product Manager",
      company: "Women in Informatics (WINFO) Hackathon",
      location: "University of Washington",
      period: "Jan 2025",
      achievements: [
        "Led a 4-person team to design and ship a disaster-relief prototype (Figma) in 9 hours",
        "Built interactive features including recipient profiles, real-time donor-need matching, and transparent donation tracking",
        "Selected top finalist; Best Overall Project — 2nd Place"
      ],
      current: false
    },
    {
      title: "Vice President",
      company: "Husky Help Organization (UW RSO)",
      location: "University of Washington",
      period: "May 2024 – June 2025",
      achievements: [
        "Orchestrated 20+ community events for the UW students, securing $5K in sponsorships",
        "Collaborated with cross-functional teams to increase participation and engagement",
        "Led strategic planning and execution of student support initiatives"
      ],
      current: false
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-orbitron font-black text-primary text-glow mb-4">
            Experience
          </h2>
          <p className="text-xl text-muted-foreground font-space-grotesk max-w-3xl mx-auto">
            Professional journey and leadership roles
          </p>
        </div>

        {/* Mobile Horizontal Layout */}
        <div className="block md:hidden">
          <div className="relative">
            {/* Horizontal timeline line */}
            <div className="absolute top-8 left-8 right-8 h-1 bg-gradient-to-r from-primary via-primary/50 to-primary/20" />
            
            <div className="flex overflow-x-auto pb-4 space-x-8 px-4">
              {experiences.map((exp, index) => (
                <div 
                  key={index}
                  className="relative flex-shrink-0 w-80 animate-fade-in"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Timeline Node */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-10">
                    <div className={`w-16 h-16 rounded-full border-4 flex items-center justify-center ${
                      exp.current 
                        ? "bg-primary border-primary shadow-pink-glow animate-glow" 
                        : "bg-card border-primary/50"
                    }`}>
                      {exp.current ? (
                        <div className="w-6 h-6 bg-primary-foreground rounded-full" />
                      ) : (
                        <div className="w-4 h-4 bg-primary rounded-full" />
                      )}
                    </div>
                  </div>

                  {/* Content Box */}
                  <div className="mt-20">
                    <div className="bg-card border border-primary/30 rounded-xl p-4 shadow-pink-soft hover:shadow-pink-glow transition-smooth">
                      <div className="mb-3">
                        <h3 className="text-lg font-exo font-bold text-primary mb-1">
                          {exp.title}
                        </h3>
                        <h4 className="text-base font-space-grotesk font-semibold text-pink-soft mb-1">
                          {exp.company}
                        </h4>
                        <p className="text-muted-foreground font-jetbrains text-xs mb-2">
                          {exp.location}
                        </p>
                        <div className="flex flex-col gap-1">
                          <span className="font-chakra font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full border border-primary/30 text-xs text-center">
                            {exp.period}
                          </span>
                          {exp.current && (
                            <span className="text-xs font-exo font-bold bg-primary text-primary-foreground px-2 py-1 rounded-full animate-pulse text-center">
                              CURRENT
                            </span>
                          )}
                        </div>
                      </div>

                      <ul className="space-y-1 font-space-grotesk text-muted-foreground text-xs">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start gap-2">
                            <span className="text-primary mt-1 flex-shrink-0 text-xs">▸</span>
                            <span className="leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Vertical Roadmap */}
        <div className="hidden md:block max-w-4xl mx-auto">
          <div className="relative">
            {/* Central vertical line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary/50 to-primary/20" />

            <div className="space-y-16">
              {experiences.map((exp, index) => (
                <div 
                  key={index}
                  className={`relative flex items-center animate-fade-in ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                  style={{ animationDelay: `${index * 300}ms` }}
                >
                  {/* Content Box */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <div className="bg-card border border-primary/30 rounded-xl p-6 shadow-pink-soft hover:shadow-pink-glow transition-smooth relative">
                      {/* Arrow pointing to timeline */}
                      <div className={`absolute top-6 w-0 h-0 ${
                        index % 2 === 0 
                          ? 'right-0 translate-x-full border-l-[20px] border-l-primary/30 border-y-[10px] border-y-transparent' 
                          : 'left-0 -translate-x-full border-r-[20px] border-r-primary/30 border-y-[10px] border-y-transparent'
                      }`} />
                      
                      <div className="mb-4">
                        <h3 className="text-xl font-exo font-bold text-primary mb-2">
                          {exp.title}
                        </h3>
                        <h4 className="text-lg font-space-grotesk font-semibold text-pink-soft mb-1">
                          {exp.company}
                        </h4>
                        <p className="text-muted-foreground font-jetbrains text-sm mb-2">
                          {exp.location}
                        </p>
                        <div className="flex items-center gap-2">
                          <span className="font-chakra font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/30 text-sm">
                            {exp.period}
                          </span>
                          {exp.current && (
                            <span className="text-xs font-exo font-bold bg-primary text-primary-foreground px-2 py-1 rounded-full animate-pulse">
                              CURRENT
                            </span>
                          )}
                        </div>
                      </div>

                      <ul className="space-y-2 font-space-grotesk text-muted-foreground text-sm">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start gap-3">
                            <span className="text-primary mt-1 flex-shrink-0">▸</span>
                            <span className="leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                    <div className={`w-16 h-16 rounded-full border-4 flex items-center justify-center ${
                      exp.current 
                        ? "bg-primary border-primary shadow-pink-glow animate-glow" 
                        : "bg-card border-primary/50"
                    }`}>
                      {exp.current ? (
                        <div className="w-6 h-6 bg-primary-foreground rounded-full" />
                      ) : (
                        <div className="w-4 h-4 bg-primary rounded-full" />
                      )}
                    </div>
                  </div>

                  {/* Empty space for opposite side */}
                  <div className="w-5/12" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;