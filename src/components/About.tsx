import { Badge } from "./ui/badge";

const About = () => {
  const skills = [
    "JavaScript", "Python", "Java", "React", "SQL", "HTML", "CSS",
    "Firebase", "Supabase", "PostgreSQL", "GitLab", "GitHub", "Figma", "n8n"
  ];

  const strengths = [
    "Communication", "Collaboration", "Problem Solving", "Adaptability", "Creativity"
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-orbitron font-black text-primary text-glow mb-4">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground font-space-grotesk max-w-3xl mx-auto">
            Currently pursuing a Bachelor of Science in Informatics at the University of Washington
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* About content */}
          <div className="space-y-6">
            <div className="bg-card border border-primary/30 rounded-xl p-8 shadow-pink-soft hover:shadow-pink-glow transition-smooth">
              <h3 className="text-2xl font-exo font-bold text-primary mb-4">Education</h3>
              <div className="space-y-2">
                <p className="font-space-grotesk font-semibold text-lg">
                  Bachelor of Science in Informatics
                </p>
                <p className="text-muted-foreground">University of Washington | June 2026</p>
                <p className="text-sm text-muted-foreground">
                  Focus: Data Science, Software Engineering, Human-Centered Interaction
                </p>
                <p className="text-primary font-semibold">GPA: 3.85 / 4.00 (Dean's List)</p>
              </div>
            </div>

            <div className="bg-card border border-primary/30 rounded-xl p-8 shadow-pink-soft hover:shadow-pink-glow transition-smooth">
              <h3 className="text-2xl font-exo font-bold text-primary mb-4">Contact</h3>
              <div className="space-y-2 font-space-grotesk">
                <p>📍 Seattle, Washington</p>
                <p>📧 alleytongwu@gmail.com</p>
                <p>📱 503-443-8896</p>
                <p>🔗 linkedin.com/in/alley-wu</p>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-8">
            <div className="bg-card border border-primary/30 rounded-xl p-8 shadow-pink-soft hover:shadow-pink-glow transition-smooth">
              <h3 className="text-2xl font-exo font-bold text-primary mb-6">Technical Skills</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-chakra font-semibold mb-3 text-pink-soft">Languages & Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary" 
                        className="bg-primary/10 text-primary border border-primary/30 hover:bg-primary hover:text-primary-foreground transition-smooth"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card border border-primary/30 rounded-xl p-8 shadow-pink-soft hover:shadow-pink-glow transition-smooth">
              <h3 className="text-2xl font-exo font-bold text-primary mb-6">Core Strengths</h3>
              <div className="flex flex-wrap gap-2">
                {strengths.map((strength) => (
                  <Badge 
                    key={strength} 
                    variant="outline" 
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
                  >
                    {strength}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="bg-card border border-primary/30 rounded-xl p-8 shadow-pink-soft hover:shadow-pink-glow transition-smooth">
              <h3 className="text-2xl font-exo font-bold text-primary mb-4">Coursework</h3>
              <ul className="space-y-2 text-sm text-muted-foreground font-space-grotesk">
                <li>• Data Structure and Algorithm</li>
                <li>• Recommendation and Search System</li>
                <li>• Software Designs</li>
                <li>• Databases and Data Modeling</li>
                <li>• Programming Languages and Implementation</li>
                <li>• Data Policy and Ethics</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;