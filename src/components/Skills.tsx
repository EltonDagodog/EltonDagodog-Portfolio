
import { skills } from '@/data/portfolioData';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Code, Database, Palette, Wrench, Layers } from 'lucide-react';

const Skills = () => {
  const skillCategories = {
    languages: { title: 'Programming Languages', icon: Code },
    frameworks: { title: 'Frameworks & Libraries', icon: Layers },
    styling: { title: 'Styling & Design', icon: Palette },
    databases: { title: 'Databases', icon: Database },
    tools: { title: 'Tools & Technologies', icon: Wrench }
  };

  const getSkillsByCategory = (category: string) => {
    return skills.filter(skill => skill.category === category);
  };

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-card/20 to-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/3 rounded-full blur-3xl floating-animation"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/3 rounded-full blur-3xl floating-animation" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20 slide-in-bottom">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
              Skills & Technologies
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive toolkit for building modern, scalable applications across all platforms
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-6"></div>
          </div>
          
          {/* Skills Grid */}
          <div className="grid gap-10">
            {Object.entries(skillCategories).map(([category, config], categoryIndex) => {
              const categorySkills = getSkillsByCategory(category);
              const IconComponent = config.icon;
              
              return (
                <div key={category} className={`bg-card/50 rounded-3xl p-8 neon-border backdrop-blur-sm hover:bg-card/70 transition-all duration-500 group fade-in-up stagger-${categoryIndex + 1}`}>
                  <div className="flex items-center mb-8">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center mr-4 group-hover:neon-glow transition-all duration-300">
                      <IconComponent className="w-7 h-7 text-primary group-hover:text-accent transition-colors duration-300" />
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground group-hover:text-gradient transition-all duration-300">
                      {config.title}
                    </h3>
                  </div>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categorySkills.map((skill, index) => (
                      <div key={skill.name} className={`space-y-4 group/skill hover:scale-105 transition-all duration-300 fade-in-up`} style={{animationDelay: `${index * 0.1}s`}}>
                        <div className="flex justify-between items-center">
                          <h4 className="font-medium text-foreground group-hover/skill:text-primary transition-colors duration-300">
                            {skill.name}
                          </h4>
                          <Badge variant="secondary" className="text-xs bg-secondary/50 text-muted-foreground group-hover/skill:bg-primary/20 group-hover/skill:text-primary transition-all duration-300">
                            {skill.level}%
                          </Badge>
                        </div>
                        
                        <div className="relative">
                          <Progress value={skill.level} className="h-3 bg-secondary/50" />
                          <div 
                            className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 opacity-80 group-hover/skill:opacity-100"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Future Learning Section */}
          <div className="mt-16 text-center slide-in-bottom">
            <div className="bg-card/30 rounded-3xl p-10 neon-border backdrop-blur-sm">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">
                Always Learning & <span className="text-gradient">Evolving</span>
              </h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Staying ahead of the curve with emerging technologies and industry trends
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                {['AI/ML', 'Data Science', 'Cloud Computing', 'DevOps', 'Blockchain'].map((tech, index) => (
                  <Badge 
                    key={tech} 
                    variant="outline" 
                    className={`text-sm py-3 px-6 border-primary/30 text-primary hover:bg-primary/10 hover:scale-110 transition-all duration-300 cursor-default fade-in-up stagger-${index + 1}`}
                  >
                    Learning: {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
