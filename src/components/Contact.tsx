import { Button } from "./ui/button";
import { Mail, Phone, Linkedin, Github, FileText } from "lucide-react";

const Contact = () => {

  return (
    <>
      <section id="contact" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-orbitron font-black text-primary text-glow mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-muted-foreground font-space-grotesk max-w-3xl mx-auto">
              Let's connect and discuss opportunities, collaborations, or just have a chat!
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Direct Contact */}
              <div className="text-center p-8 bg-card/50 rounded-xl border border-primary/20 hover:border-primary/40 transition-smooth">
                <h3 className="text-xl font-exo font-bold text-primary mb-6">Direct Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-center gap-3">
                    <Mail className="text-primary" size={18} />
                    <a 
                      href="mailto:alleytongwu@gmail.com" 
                      className="font-space-grotesk hover:text-primary transition-smooth"
                    >
                      alleytongwu@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <Phone className="text-primary" size={18} />
                    <a 
                      href="tel:503-443-8896" 
                      className="font-space-grotesk hover:text-primary transition-smooth"
                    >
                      503-443-8896
                    </a>
                  </div>
                </div>
              </div>

              {/* Professional Links */}
              <div className="text-center p-8 bg-card/50 rounded-xl border border-primary/20 hover:border-primary/40 transition-smooth">
                <h3 className="text-xl font-exo font-bold text-primary mb-6">Professional Links</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-center gap-3">
                    <Linkedin className="text-primary" size={18} />
                    <a 
                      href="https://linkedin.com/in/alley-wu" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="font-space-grotesk hover:text-primary transition-smooth"
                    >
                      LinkedIn Profile
                    </a>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <Github className="text-primary" size={18} />
                    <a 
                      href="https://github.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="font-space-grotesk hover:text-primary transition-smooth"
                    >
                      GitHub Portfolio
                    </a>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <FileText className="text-primary" size={18} />
                    <a 
                      href="/Alley_Resume.pdf" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="font-space-grotesk hover:text-primary transition-smooth"
                    >
                      Download Resume
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                variant="hero" 
                size="lg"
                asChild
              >
                <a href="mailto:alleytongwu@gmail.com">
                  <Mail size={20} />
                  Send Email
                </a>
              </Button>
              <Button 
                variant="glow" 
                size="lg"
                asChild
              >
                <a href="https://linkedin.com/in/alley-wu" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={20} />
                  Connect on LinkedIn
                </a>
              </Button>
              <Button 
                variant="tech" 
                size="lg"
                asChild
              >
                <a href="/Alley_Resume.pdf" target="_blank" rel="noopener noreferrer">
                  <FileText size={20} />
                  View Resume
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Copyright Footer */}
      <footer className="py-8 border-t border-primary/20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm text-muted-foreground font-space-grotesk">
              © {new Date().getFullYear()} Alley Wu. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Contact;