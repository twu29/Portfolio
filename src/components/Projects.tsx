import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github, FileText } from "lucide-react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  period: string;
  links: {
    github?: string;
    demo?: string;
    report?: string;
  };
  icon: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: "Coding Platform for ADHD Children",
      description: "Built coding lessons with real-time feedback and gamified features to boost engagement. Engineered accessibility tools (screen reader, dark/light mode, progress tracking), improving usability for neurodiverse students. Developed Firebase for profiles and dashboards, enabling 100% persistent progress tracking.",
      technologies: ["React", "Firebase", "JavaScript", "CSS", "Accessibility"],
      period: "March 2025 – June 2025",
      links: {},
      icon: "🎯"
    },
    {
      title: "Gesture-Powered Keyboard",
      description: "Developed a swipe-to-text keyboard, reduced typing time by 25% and improved accessibility. Implemented customizable gesture-to-word mapping, enabling faster, personalized text input. Built a responsive UI with real-time feedback, boosting accuracy by 40% in 15+ user tests.",
      technologies: ["React", "JavaScript", "CSS", "HTML"],
      period: "March 2025 – June 2025",
      links: {
        github: "https://github.com/KyleDuCS/Info463Group6",
        demo: "https://youtu.be/5vxJQBSBZf4"
      },
      icon: "⌨️"
    },
    {
      title: "Maze Generation and Pathfinding",
      description: "Built a Java maze visualizer with Dijkstra's, achieving 100% accuracy and 40% faster computation. Implemented Kruskal-based generator producing 100% solvable mazes at 3× complexity. Resolved 15+ algorithmic bugs, improving stability and reliability across all test cases.",
      technologies: ["Java", "Algorithms", "Data Structures"],
      period: "December 2024 – March 2025",
      links: {
        github: "https://gitlab.cs.washington.edu/cse373-25wi-students/twu29"
      },
      icon: "🧩"
    },
    {
      title: "MyBuddy — Mobile Mental Health App",
      description: "Designed a high-fidelity prototype with mood check-ins, personalized tips, and campus activities. Ran 10+ user interviews and a survey to surface needs and support gaps. Conducted cognitive walkthroughs + heuristic evaluations; fixed UX issues and streamlined flows.",
      technologies: ["Figma", "UX Design", "User Research", "Prototyping"],
      period: "December 2024 – March 2025",
      links: {},
      icon: "💙"
    },
    {
      title: "Search and Recommendation System for Recipes",
      description: "Integrated BM25, TF-IDF, and LLM retrieval to rank recipes, improving query relevance. Applied multiple AI/ML libraries to clean/structure datasets for analysis. Designed a responsive search UI (JavaScript, CSS, HTML) for faster discovery.",
      technologies: ["Python", "PHP", "JavaScript", "HTML", "CSS", "AI/ML"],
      period: "September 2024 - December 2024",
      links: {},
      icon: "🔍"
    },
    {
      title: "Personalized Meal Planner",
      description: "Built a React UI with 20+ interactive components; improved cross-device usability by 35%. Implemented Firebase auth and database for secure access and efficient data retrieval/storage. Set up a CI/CD pipeline with auto-deployments, streamlining reviews, and accelerating delivery.",
      technologies: ["React", "JavaScript", "CSS", "HTML", "Firebase"],
      period: "June 2024 - August 2024",
      links: {
        github: "https://github.com/info340-su24/project-qiaoyc2",
        demo: "https://info340-plate-pal.web.app/"
      },
      icon: "🍽️"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-orbitron font-black text-primary text-glow mb-4">
            My Projects
          </h2>
          <p className="text-xl text-muted-foreground font-space-grotesk max-w-3xl mx-auto">
            Innovative solutions built with modern technologies and AI
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-card border border-primary/30 rounded-xl p-8 shadow-pink-soft hover:shadow-pink-glow transition-smooth animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Horizontal Layout */}
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                {/* Project Icon & Basic Info */}
                <div className="flex-shrink-0 lg:w-1/4">
                  <div className="text-6xl mb-4">{project.icon}</div>
                  <h3 className="text-2xl font-exo font-bold text-primary mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-jetbrains">
                    {project.period}
                  </p>
                </div>

                {/* Project Details */}
                <div className="flex-grow lg:w-1/2">
                  <p className="text-muted-foreground font-space-grotesk leading-relaxed mb-6">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="font-chakra font-semibold text-pink-soft mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="secondary" 
                          className="bg-primary/10 text-primary border border-primary/30 hover:bg-primary hover:text-primary-foreground transition-smooth"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex-shrink-0 lg:w-1/4 flex flex-row lg:flex-col gap-3">
                  {project.links.github && (
                    <Button 
                      variant="glow" 
                      size="sm"
                      asChild
                      className="w-full"
                    >
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                        <Github size={16} />
                        GitHub
                      </a>
                    </Button>
                  )}
                  {project.links.demo && (
                    <Button 
                      variant="tech" 
                      size="sm"
                      asChild
                      className="w-full"
                    >
                      <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  {project.links.report && (
                    <Button 
                      variant="outline" 
                      size="sm"
                      asChild
                      className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      <a href={project.links.report} target="_blank" rel="noopener noreferrer">
                        <FileText size={16} />
                        Report
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;