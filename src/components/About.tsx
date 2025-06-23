
import { learningGoals } from '@/data/portfolioData';
import { Progress } from '@/components/ui/progress';
import { Brain, Code2, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background to-card/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-40 right-20 w-64 h-64 bg-accent/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-primary/5 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20 slide-in-bottom">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          </div>
          
          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Profile Image Section */}
            <div className="slide-in-left">
              <div className="relative">
                <div className="w-full h-[500px] rounded-3xl bg-gradient-to-br from-card to-secondary neon-border flex items-center justify-center relative overflow-hidden">
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>
                  
                  {/* Profile representation */}
                  <div className="relative z-10 text-center">
                    <div className="text-9xl font-bold text-primary/30 mb-4">ED</div>
                    <div className="flex justify-center space-x-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center floating-animation">
                        <Code2 className="w-6 h-6 text-primary" />
                      </div>
                      <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center floating-animation" style={{animationDelay: '1s'}}>
                        <Brain className="w-6 h-6 text-accent" />
                      </div>
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center floating-animation" style={{animationDelay: '2s'}}>
                        <Zap className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Text Content */}
            <div className="slide-in-right space-y-8">
              <div>
                <h3 className="text-3xl font-semibold mb-6 text-foreground">
                  Full Stack Developer & <span className="text-gradient">Tech Enthusiast</span>
                </h3>
                
                <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
                  <p className="border-l-4 border-primary/30 pl-6 hover:border-primary/60 transition-colors duration-300">
                    I'm a versatile full stack developer with extensive experience in web, mobile, 
                    and desktop development. My journey in technology has been driven by a passion 
                    for creating <span className="text-primary font-semibold">scalable, user-friendly applications</span> that solve real-world problems during my studies.
                  </p>
                  
                  <p className="border-l-4 border-accent/30 pl-6 hover:border-accent/60 transition-colors duration-300">
                    I specialize in using modern frameworks and databases to build robust solutions 
                    across multiple platforms. From React web applications to .NET MAUI mobile apps, 
                    I enjoy the challenge of adapting to different technologies and finding the <span className="text-accent font-semibold">best 
                    tools for each project</span>.
                  </p>
                  
                  <p className="border-l-4 border-primary/30 pl-6 hover:border-primary/60 transition-colors duration-300">
                    Currently, I'm expanding my expertise into the exciting fields of <span className="text-gradient font-semibold">Artificial 
                    Intelligence, Machine Learning, and Data Analytics</span>. I believe these technologies 
                    will shape the future of software development, and I'm committed to staying at 
                    the forefront of innovation.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Learning Goals Section */}
          <div className="bg-card/50 rounded-3xl p-10 neon-border backdrop-blur-sm slide-in-bottom">
            <h3 className="text-3xl font-semibold mb-12 text-center text-foreground">
              Current <span className="text-gradient">Learning Goals</span>
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              {learningGoals.map((goal, index) => (
                <div key={index} className={`text-center group hover:scale-105 transition-all duration-300 fade-in-up stagger-${index + 1}`}>
                  <div className="mb-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center group-hover:neon-glow transition-all duration-300">
                      <Brain className="w-8 h-8 text-primary group-hover:text-accent transition-colors duration-300" />
                    </div>
                    <h4 className="font-semibold text-xl mb-3 text-foreground group-hover:text-gradient transition-all duration-300">
                      {goal.title}
                    </h4>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {goal.description}
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-semibold text-primary">{goal.progress}%</span>
                    </div>
                    <div className="relative">
                      <Progress value={goal.progress} className="h-3 bg-secondary" />
                      <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full opacity-20"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
