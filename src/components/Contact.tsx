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

          <div className="max-w-2xl mx-auto">
            <div className="text-center p-8 bg-card/50 rounded-xl border border-primary/20 hover:border-primary/40 transition-smooth">
              <div className="space-y-6">
                <div className="flex items-center justify-center gap-4">
                  <Mail className="text-primary" size={20} />
                  <a 
                    href="mailto:alleytongwu@gmail.com" 
                    className="text-lg font-space-grotesk hover:text-primary transition-smooth"
                  >
                    alleytongwu@gmail.com
                  </a>
                </div>

                <div className="flex items-center justify-center gap-4">
                  <Phone className="text-primary" size={20} />
                  <a 
                    href="tel:503-443-8896" 
                    className="text-lg font-space-grotesk hover:text-primary transition-smooth"
                  >
                    503-443-8896
                  </a>
                </div>

                <div className="flex items-center justify-center gap-4">
                  <Linkedin className="text-primary" size={20} />
                  <a 
                    href="https://linkedin.com/in/alley-wu" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lg font-space-grotesk hover:text-primary transition-smooth"
                  >
                    LinkedIn
                  </a>
                </div>

                <div className="flex items-center justify-center gap-4">
                  <Github className="text-primary" size={20} />
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lg font-space-grotesk hover:text-primary transition-smooth"
                  >
                    GitHub
                  </a>
                </div>

                <div className="flex items-center justify-center gap-4">
                  <FileText className="text-primary" size={20} />
                  <a 
                    href="/Alley_Resume.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lg font-space-grotesk hover:text-primary transition-smooth"
                  >
                    Resume
                  </a>
                </div>
              </div>
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