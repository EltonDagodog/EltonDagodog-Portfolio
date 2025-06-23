
import { ArrowDown, Code, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl floating-animation"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl floating-animation" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/3 rounded-full blur-3xl floating-animation" style={{animationDelay: '4s'}}></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Profile Avatar with Neon Effect */}
          <div className="mb-12 fade-in-up">
            <div className="relative w-40 h-40 mx-auto mb-8">
              <div className="absolute inset-0 rounded-full neon-glow bg-gradient-to-br from-primary/20 to-accent/20 animate-pulse"></div>
              <div className="relative w-full h-full rounded-full bg-card neon-border flex items-center justify-center text-7xl font-bold text-gradient">
                ED
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center pulse-neon">
                <Code className="w-4 h-4 text-background" />
              </div>
            </div>
          </div>
          
          {/* Main Heading */}
          <div className="space-y-6 mb-12">
            <div className="fade-in-up stagger-1">
              <h1 className="text-6xl md:text-8xl font-bold mb-4 text-gradient">
                Elton Dagodog
              </h1>
            </div>
            
            <div className="fade-in-up stagger-2">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Sparkles className="w-6 h-6 text-primary animate-pulse" />
                <h2 className="text-2xl md:text-4xl font-semibold text-foreground">
                  Full Stack Developer
                </h2>
                <Sparkles className="w-6 h-6 text-accent animate-pulse" />
              </div>
            </div>
            
            <div className="fade-in-up stagger-3">
              <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Crafting <span className="text-primary font-semibold">scalable applications</span> across web, mobile, and desktop platforms. 
                Passionate about <span className="text-accent font-semibold">innovation</span> and exploring the frontiers of 
                <span className="text-gradient font-semibold"> AI, Machine Learning, and Data Analytics</span>.
              </p>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 fade-in-up stagger-4">
            <Button 
              size="lg" 
              className="text-lg px-10 py-7 bg-primary hover:bg-primary/90 text-background font-semibold neon-glow hover:scale-105 transition-all duration-300"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Code className="w-5 h-5 mr-2" />
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-10 py-7 border-primary/50 text-primary hover:bg-primary/10 hover:scale-105 transition-all duration-300"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Get In Touch
            </Button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 fade-in-up stagger-5">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={scrollToAbout}
            className="rounded-full p-4 text-primary hover:bg-primary/10 animate-bounce"
          >
            <ArrowDown className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
