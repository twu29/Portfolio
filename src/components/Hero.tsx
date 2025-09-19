import { Button } from "./ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import profilePhoto from "../assets/profile-photo.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-tech" />
      <div className="absolute inset-0 bg-gradient-glow opacity-30" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-primary rounded-full animate-float opacity-60" />
      <div className="absolute top-40 right-20 w-6 h-6 bg-primary/40 rounded-full animate-float animation-delay-1000 opacity-60" />
      <div className="absolute bottom-32 left-20 w-3 h-3 bg-primary/60 rounded-full animate-float animation-delay-2000 opacity-60" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh]">
          {/* Content */}
          <div className="text-center lg:text-left animate-slide-up">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-orbitron font-black mb-2 leading-tight">
              Hello, I'm{" "}
              <span className="text-primary text-glow block sm:inline">Tong Wu</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-1 font-space-grotesk">
              But you can call me <span className="text-pink-soft font-semibold">Alley</span> 😊
            </p>
            <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-exo font-semibold text-pink-soft mb-6">
              AI Software Engineer
            </p>
            
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-8 font-space-grotesk leading-relaxed max-w-xl lg:max-w-none">
              Welcome to my digital world where I share my life, experiences, and adventures. 
              I'm passionate about building innovative AI software solutions and exploring new technologies.
            </p>
            
            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="hero" 
                size="xl"
                onClick={() => scrollToSection("projects")}
                className="group"
              >
                View My Work
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
              </Button>
              <Button 
                variant="tech" 
                size="xl"
                onClick={() => scrollToSection("contact")}
              >
                Get In Touch
              </Button>
            </div>
          </div>

          {/* Profile photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary shadow-pink-glow animate-glow">
                <img 
                  src={profilePhoto} 
                  alt="Tong Wu (Alley)" 
                  className="w-full h-full object-cover transition-smooth hover:scale-110 animate-float"
                />
              </div>
              {/* Decorative ring */}
              <div className="absolute -inset-4 border-2 border-primary/30 rounded-full animate-pulse" />
              {/* Extra motion ring */}
              <div className="absolute -inset-8 border border-primary/20 rounded-full animate-ping opacity-75" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;