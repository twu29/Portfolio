import { Badge } from "./ui/badge";

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-orbitron font-black text-primary text-glow mb-4">
            ABOUT ME
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Content */}
            <div className="space-y-6">
              <div className="bg-card/50 border border-primary/20 rounded-xl p-6 backdrop-blur-sm">
                <p className="text-muted-foreground font-space-grotesk leading-relaxed mb-4">
                  I'm a senior at the University of Washington majoring in Informatics with a focus on 
                  Data Science, Software Development, and Human-Centered Interaction 👩‍💻
                </p>
                
                <p className="text-muted-foreground font-space-grotesk leading-relaxed">
                  My passion lies in building impactful AI technologies that solve real-world problems. I 
                  thrive on learning, experimenting, and collaborating to transform ideas into 
                  meaningful solutions 💪
                </p>
              </div>
            </div>

            {/* Skills */}
            <div className="space-y-6">
              <div className="bg-card/50 border border-primary/20 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="text-xl font-exo font-bold text-primary mb-4">SKILLS & TECHNOLOGIES</h3>
                
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-primary/10 text-primary border border-primary/30 px-3 py-1 text-xs font-medium hover:bg-primary hover:text-primary-foreground transition-smooth">
                      Large Language Models
                    </Badge>
                    <Badge className="bg-primary/10 text-primary border border-primary/30 px-3 py-1 text-xs font-medium hover:bg-primary hover:text-primary-foreground transition-smooth">
                      Machine Learning
                    </Badge>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-primary/10 text-primary border border-primary/30 px-3 py-1 text-xs font-medium hover:bg-primary hover:text-primary-foreground transition-smooth">
                      Data Pipelines/APIs
                    </Badge>
                    <Badge className="bg-primary/10 text-primary border border-primary/30 px-3 py-1 text-xs font-medium hover:bg-primary hover:text-primary-foreground transition-smooth">
                      SQL/PostgreSQL/Supabase
                    </Badge>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-primary/10 text-primary border border-primary/30 px-3 py-1 text-xs font-medium hover:bg-primary hover:text-primary-foreground transition-smooth">
                      Python/Java/JavaScript/React
                    </Badge>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-primary/10 text-primary border border-primary/30 px-3 py-1 text-xs font-medium hover:bg-primary hover:text-primary-foreground transition-smooth">
                      Data Analysis/Visualization
                    </Badge>
                    <Badge className="bg-primary/10 text-primary border border-primary/30 px-3 py-1 text-xs font-medium hover:bg-primary hover:text-primary-foreground transition-smooth">
                      Cloud (Render)
                    </Badge>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-primary/10 text-primary border border-primary/30 px-3 py-1 text-xs font-medium hover:bg-primary hover:text-primary-foreground transition-smooth">
                      Human-Centered Interaction
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;