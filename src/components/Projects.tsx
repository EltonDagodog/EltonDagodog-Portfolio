
import { useState } from 'react';
import { projects } from '@/data/portfolioData';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Github, LinkIcon, Sparkles, Filter } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState<string>('all');
  const [showAll, setShowAll] = useState(false);

  const projectTypes = ['all', 'web', 'mobile', 'desktop', 'fullstack'];
  
  const filteredProjects = projects.filter(project => 
    filter === 'all' || project.type === filter
  );

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  const getTypeColor = (type: string) => {
    const colors = {
      web: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
      mobile: 'bg-green-500/20 text-green-300 border-green-500/30',
      desktop: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
      fullstack: 'bg-orange-500/20 text-orange-300 border-orange-500/30',
    };
    return colors[type as keyof typeof colors] || 'bg-gray-500/20 text-gray-300 border-gray-500/30';
  };

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-background to-card/20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 right-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl floating-animation"></div>
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl floating-animation" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20 slide-in-bottom">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of innovative solutions across web, mobile, and desktop platforms
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-6"></div>
          </div>
          
          {/* Filter Section */}
          <div className="mb-16 slide-in-bottom">
            <div className="bg-card/50 rounded-2xl p-6 neon-border backdrop-blur-sm">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Filter className="w-5 h-5 text-primary" />
                <span className="text-foreground font-medium">Filter Projects</span>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                {projectTypes.map((type) => (
                  <Button
                    key={type}
                    variant={filter === type ? "default" : "outline"}
                    onClick={() => setFilter(type)}
                    className={`capitalize transition-all duration-300 hover:scale-105 ${
                      filter === type 
                        ? 'bg-primary hover:bg-primary/90 text-background neon-glow' 
                        : 'border-primary/30 text-primary hover:bg-primary/10'
                    }`}
                  >
                    {type === 'all' ? 'All Projects' : type}
                  </Button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {displayedProjects.map((project, index) => (
              <Card key={project.id} className={`group hover:scale-105 transition-all duration-500 border-0 shadow-xl bg-card/50 neon-border backdrop-blur-sm hover:neon-glow fade-in-up stagger-${(index % 6) + 1}`}>
                <div className="relative overflow-hidden rounded-t-xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {project.featured && (
                    <Badge className="absolute top-4 left-4 bg-accent text-background neon-glow">
                      <Sparkles className="w-3 h-3 mr-1" />
                      Featured
                    </Badge>
                  )}
                  <Badge className={`absolute top-4 right-4 ${getTypeColor(project.type)}`}>
                    {project.type}
                  </Badge>
                </div>
                
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-semibold text-foreground group-hover:text-gradient transition-all duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs bg-secondary/50 text-muted-foreground hover:bg-primary/20 hover:text-primary transition-all duration-300">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="secondary" className="text-xs bg-secondary/50 text-muted-foreground">
                          +{project.technologies.length - 3} more
                        </Badge>
                      )}
                    </div>
                    
                    {/* <div className="flex gap-3">
                      {project.githubUrl && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 border-primary/30 text-primary hover:bg-primary/10 hover:scale-105 transition-all duration-300"
                          onClick={() => window.open(project.githubUrl, '_blank')}
                        >
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </Button>
                      )}
                      {project.liveUrl && (
                        <Button
                          size="sm"
                          className="flex-1 bg-primary hover:bg-primary/90 text-background neon-glow hover:scale-105 transition-all duration-300"
                          onClick={() => window.open(project.liveUrl, '_blank')}
                        >
                          <LinkIcon className="h-4 w-4 mr-2" />
                          Live Demo
                        </Button>
                      )}
                    </div> */}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Show More Button */}
          {filteredProjects.length > 6 && (
            <div className="text-center slide-in-bottom">
              <Button
                variant="outline"
                size="lg"
                onClick={() => setShowAll(!showAll)}
                className="border-primary/30 text-primary hover:bg-primary/10 hover:scale-105 transition-all duration-300 px-8 py-6 text-lg"
              >
                {showAll ? 'Show Less' : `Show All Projects (${filteredProjects.length})`}
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
