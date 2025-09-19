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

        <div className="max-w-5xl mx-auto">
          {/* Terminal Window */}
          <div className="bg-black/90 border border-primary/30 rounded-lg overflow-hidden shadow-pink-glow">
            {/* Terminal Header */}
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 px-4 py-3 border-b border-primary/20">
              <div className="flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex-1 text-center">
                  <span className="text-sm text-gray-300 font-mono">alley@portfolio:~$</span>
                </div>
              </div>
            </div>

            {/* Terminal Content */}
            <div className="p-6 font-mono text-sm space-y-4">
              {/* Command 1 */}
              <div className="text-green-400">
                <span className="text-primary">alley@uw:~$</span> whoami
              </div>
              <div className="text-gray-300 ml-4 space-y-2">
                <p>→ Senior at University of Washington</p>
                <p>→ Majoring in Informatics</p>
                <p>→ Focus: Data Science, Software Development, Human-Centered Interaction 👩‍💻</p>
              </div>

              {/* Command 2 */}
              <div className="text-green-400 mt-6">
                <span className="text-primary">alley@uw:~$</span> cat passion.txt
              </div>
              <div className="text-gray-300 ml-4 space-y-2">
                <p>Building impactful AI technologies that solve real-world problems.</p>
                <p>I thrive on learning, experimenting, and collaborating to transform</p>
                <p>ideas into meaningful solutions 💪</p>
              </div>

              {/* Command 3 */}
              <div className="text-green-400 mt-6">
                <span className="text-primary">alley@uw:~$</span> ls skills/
              </div>
              <div className="ml-4 mt-2">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                  <Badge className="bg-primary/20 text-green-400 border border-primary/30 px-2 py-1 text-xs font-mono">
                    LLMs/
                  </Badge>
                  <Badge className="bg-primary/20 text-green-400 border border-primary/30 px-2 py-1 text-xs font-mono">
                    machine_learning/
                  </Badge>
                  <Badge className="bg-primary/20 text-green-400 border border-primary/30 px-2 py-1 text-xs font-mono">
                    data_pipelines/
                  </Badge>
                  <Badge className="bg-primary/20 text-green-400 border border-primary/30 px-2 py-1 text-xs font-mono">
                    sql_databases/
                  </Badge>
                  <Badge className="bg-primary/20 text-green-400 border border-primary/30 px-2 py-1 text-xs font-mono">
                    python_java_js/
                  </Badge>
                  <Badge className="bg-primary/20 text-green-400 border border-primary/30 px-2 py-1 text-xs font-mono">
                    react/
                  </Badge>
                  <Badge className="bg-primary/20 text-green-400 border border-primary/30 px-2 py-1 text-xs font-mono">
                    data_viz/
                  </Badge>
                  <Badge className="bg-primary/20 text-green-400 border border-primary/30 px-2 py-1 text-xs font-mono">
                    cloud_render/
                  </Badge>
                  <Badge className="bg-primary/20 text-green-400 border border-primary/30 px-2 py-1 text-xs font-mono">
                    hci/
                  </Badge>
                </div>
              </div>

              {/* Command 4 */}
              <div className="text-green-400 mt-6">
                <span className="text-primary">alley@uw:~$</span> echo $STATUS
              </div>
              <div className="text-primary ml-4 font-bold">
                Ready to build the future with AI ✨
              </div>

              {/* Cursor */}
              <div className="text-green-400 mt-4">
                <span className="text-primary">alley@uw:~$</span> <span className="animate-pulse">_</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;