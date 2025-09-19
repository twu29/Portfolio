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
            ABOUT ME
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground font-space-grotesk leading-relaxed">
              I'm a senior at the University of Washington majoring in Informatics with a focus on 
              Data Science, Software Development, and Human-Centered Interaction 👩‍💻
            </p>
            
            <p className="text-lg text-muted-foreground font-space-grotesk leading-relaxed">
              My passion lies in building impactful AI technologies that solve real-world problems. I 
              thrive on learning, experimenting, and collaborating to transform ideas into 
              meaningful solutions 💪
            </p>
          </div>

          <div className="space-y-8 pt-8">
            <h3 className="text-3xl font-orbitron font-black text-foreground">
              SKILLS & TECHNOLOGIES
            </h3>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold rounded-full uppercase tracking-wider">
                Large Language Models
              </Badge>
              <Badge className="bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold rounded-full uppercase tracking-wider">
                Machine Learning
              </Badge>
              <Badge className="bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold rounded-full uppercase tracking-wider">
                Data Pipelines/APIs
              </Badge>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold rounded-full uppercase tracking-wider">
                SQL/PostgreSQL/Supabase
              </Badge>
              <Badge className="bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold rounded-full uppercase tracking-wider">
                Python/Java/JavaScript/React
              </Badge>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold rounded-full uppercase tracking-wider">
                Data Analysis/Visualization
              </Badge>
              <Badge className="bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold rounded-full uppercase tracking-wider">
                Cloud (Render)
              </Badge>
            </div>
            
            <div className="flex justify-center">
              <Badge className="bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold rounded-full uppercase tracking-wider">
                Human-Centered Interaction
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;