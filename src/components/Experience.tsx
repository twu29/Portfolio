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

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="relative flex items-start gap-8 animate-slide-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Timeline marker */}
                <div className={`relative z-10 w-16 h-16 rounded-full border-4 flex items-center justify-center ${
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

                {/* Content */}
                <div className="flex-grow bg-card border border-primary/30 rounded-xl p-8 shadow-pink-soft hover:shadow-pink-glow transition-smooth">
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-exo font-bold text-primary mb-2">
                        {exp.title}
                      </h3>
                      <h4 className="text-xl font-space-grotesk font-semibold text-pink-soft mb-1">
                        {exp.company}
                      </h4>
                      <p className="text-muted-foreground font-jetbrains text-sm">
                        {exp.location}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 mt-2 lg:mt-0">
                      <span className="font-chakra font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/30">
                        {exp.period}
                      </span>
                      {exp.current && (
                        <span className="text-xs font-exo font-bold bg-primary text-primary-foreground px-2 py-1 rounded-full animate-pulse">
                          CURRENT
                        </span>
                      )}
                    </div>
                  </div>

                  <ul className="space-y-3 font-space-grotesk text-muted-foreground">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start gap-3">
                        <span className="text-primary mt-1 flex-shrink-0">▸</span>
                        <span className="leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;