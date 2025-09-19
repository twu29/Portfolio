import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

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

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-card border border-primary/30 rounded-xl p-8 shadow-pink-soft hover:shadow-pink-glow transition-smooth">
              <h3 className="text-2xl font-exo font-bold text-primary mb-6">Contact Information</h3>
              
              <div className="space-y-6">
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

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center border border-primary/30">
                    <MapPin className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-space-grotesk font-semibold">Location</p>
                    <p className="text-muted-foreground">Seattle, Washington</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-card border border-primary/30 rounded-xl p-8 shadow-pink-soft hover:shadow-pink-glow transition-smooth">
              <h3 className="text-2xl font-exo font-bold text-primary mb-6">Connect With Me</h3>
              
              <div className="flex gap-4">
                <Button 
                  variant="glow" 
                  size="lg"
                  asChild
                  className="flex-1"
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
                  className="flex-1"
                >
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <Github size={20} />
                    GitHub
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card border border-primary/30 rounded-xl p-8 shadow-pink-soft hover:shadow-pink-glow transition-smooth">
            <h3 className="text-2xl font-exo font-bold text-primary mb-6">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-space-grotesk font-semibold text-pink-soft mb-2 block">
                    Name
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="bg-input border-primary/30 focus:border-primary transition-smooth"
                  />
                </div>
                <div>
                  <label className="text-sm font-space-grotesk font-semibold text-pink-soft mb-2 block">
                    Email
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="bg-input border-primary/30 focus:border-primary transition-smooth"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-space-grotesk font-semibold text-pink-soft mb-2 block">
                  Subject
                </label>
                <Input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  className="bg-input border-primary/30 focus:border-primary transition-smooth"
                />
              </div>

              <div>
                <label className="text-sm font-space-grotesk font-semibold text-pink-soft mb-2 block">
                  Message
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, opportunity, or just say hello!"
                  rows={6}
                  className="bg-input border-primary/30 focus:border-primary transition-smooth resize-none"
                />
              </div>

              <Button 
                type="submit" 
                variant="hero" 
                size="lg" 
                className="w-full"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;