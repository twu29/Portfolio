import { Button } from "./ui/button";
import { Mail, Phone, Linkedin, Github, FileText } from "lucide-react";

const Contact = () => {

  return (
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
          <div className="bg-card border border-primary/30 rounded-xl p-8 shadow-pink-soft hover:shadow-pink-glow transition-smooth">
            <h3 className="text-2xl font-exo font-bold text-primary mb-8 text-center">Contact Information</h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center border border-primary/30">
                  <Mail className="text-primary" size={20} />
                </div>
                <div>
                  <p className="font-space-grotesk font-semibold">Email</p>
                  <a 
                    href="mailto:alleytongwu@gmail.com" 
                    className="text-muted-foreground hover:text-primary transition-smooth"
                  >
                    alleytongwu@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center border border-primary/30">
                  <Phone className="text-primary" size={20} />
                </div>
                <div>
                  <p className="font-space-grotesk font-semibold">Phone</p>
                  <a 
                    href="tel:503-443-8896" 
                    className="text-muted-foreground hover:text-primary transition-smooth"
                  >
                    503-443-8896
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="grid sm:grid-cols-3 gap-4">
              <Button 
                variant="glow" 
                size="lg"
                asChild
                className="w-full"
              >
                <a href="https://linkedin.com/in/alley-wu" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={20} />
                  LinkedIn
                </a>
              </Button>
              <Button 
                variant="tech" 
                size="lg"
                asChild
                className="w-full"
              >
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github size={20} />
                  GitHub
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                asChild
                className="w-full"
              >
                <a href="/Alley_Resume.pdf" target="_blank" rel="noopener noreferrer">
                  <FileText size={20} />
                  Resume
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;