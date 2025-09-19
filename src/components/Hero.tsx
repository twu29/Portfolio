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
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh]">
          {/* Content - Mobile Order 1, Desktop Order 1 */}
          <div className="text-center lg:text-left animate-slide-up order-1 lg:order-1">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-orbitron font-black mb-6 leading-tight">
              Hello, I'm{" "}
              <span className="text-primary text-glow block sm:inline">Alley Wu</span>
            </h1>
            
            {/* Mobile: Show title here, Desktop: Show after picture */}
            <p className="lg:hidden text-base sm:text-lg font-exo font-semibold text-pink-soft mb-6">
              AI Software Engineer
            </p>
            
            {/* Desktop content continuation */}
            <div className="hidden lg:block">
              <p className="text-lg sm:text-xl lg:text-xl xl:text-2xl font-exo font-semibold text-pink-soft mb-6">
                AI Software Engineer
              </p>
              
              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-16 font-space-grotesk leading-relaxed max-w-xl lg:max-w-none">
                Welcome to my digital world where I share my life, experiences, and adventures. 
                I'm passionate about building innovative AI software solutions and exploring new technologies.
              </p>
              
              {/* Social Links */}
              <div className="flex justify-center lg:justify-start gap-4 mb-16">
                <a
                  href="mailto:your.email@example.com"
                  className="w-12 h-12 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-smooth hover:scale-110"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
                <a
                  href="/Alley_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-primary hover:text-primary-foreground transition-smooth hover:scale-110"
                  aria-label="Resume"
                >
                  <Download size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/your-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-smooth hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Profile photo - Mobile Order 2, Desktop Order 2 */}
          <div className="flex justify-center lg:justify-end order-2 lg:order-2">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary shadow-pink-glow animate-glow">
                <img 
                  src={profilePhoto} 
                  alt="Alley Wu" 
                  className="w-full h-full object-cover transition-smooth hover:scale-110 animate-float"
                />
              </div>
              {/* Decorative ring */}
              <div className="absolute -inset-4 border-2 border-primary/30 rounded-full animate-pulse" />
              {/* Extra motion ring */}
              <div className="absolute -inset-8 border border-primary/20 rounded-full animate-ping opacity-75" />
            </div>
          </div>

          {/* Mobile description and scroll indicator - Order 3 */}
          <div className="lg:hidden text-center order-3 max-w-lg mx-auto">
            <p className="text-sm sm:text-base text-muted-foreground mb-12 font-space-grotesk leading-relaxed px-4">
              Welcome to my digital world where I share my life, experiences, and adventures. 
              I'm passionate about building innovative AI software solutions and exploring new technologies.
            </p>
            
            {/* Scroll indicator to About */}
            <div className="flex justify-center">
              <button
                onClick={() => scrollToSection("about")}
                className="group flex flex-col items-center text-primary hover:text-primary/80 transition-smooth"
              >
                <span className="text-sm font-space-grotesk mb-2">Learn More</span>
                <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
                  <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce"></div>
                </div>
              </button>
            </div>
          </div>
        </div>
        
        {/* Desktop Learn More Button - Positioned at bottom center of homepage */}
        <div className="hidden lg:flex absolute bottom-2 left-1/2 transform -translate-x-1/2 z-20">
          <button
            onClick={() => scrollToSection("about")}
            className="group flex flex-col items-center text-primary hover:text-primary/80 transition-smooth"
          >
            <span className="text-sm font-space-grotesk mb-2">Learn More</span>
            <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
              <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce"></div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;