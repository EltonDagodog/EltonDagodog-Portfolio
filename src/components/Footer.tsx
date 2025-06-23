
import { Github, Facebook,Instagram, Linkedin, Mail, Heart, Code } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/EltonDagodog', label: 'GitHub', color: 'hover:text-gray-400' },
    { icon: Facebook, href: 'https://facebook.com/in/Elton Romares Dagodog', label: 'Facebook', color: 'hover:text-blue-400' },
    { icon: Instagram, href: 'https://instagram.com/Elton Romares Dagodog', label: 'Instagram', color: 'hover:text-pink-400' },
    { icon: Mail, href: 'mailto:eltondevs79@gmail.com', label: 'Email', color: 'hover:text-primary' },
  ];

  return (
    <footer className="bg-card/50 border-t border-border/50 backdrop-blur-sm relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-20 w-64 h-64 bg-primary/3 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-20 w-80 h-80 bg-accent/3 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Footer Content */}
          <div className="text-center mb-12 slide-in-bottom">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center neon-glow">
                <Code className="w-6 h-6 text-background" />
              </div>
              <h3 className="text-3xl font-bold text-gradient">
                Elton Dagodog
              </h3>
            </div>
            
            <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto leading-relaxed">
              Full Stack Developer passionate about creating innovative solutions and pushing the boundaries of technology
            </p>
            
            {/* Social Links */}
            <div className="flex justify-center space-x-6 mb-8">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group w-14 h-14 bg-secondary/50 rounded-2xl flex items-center justify-center hover:bg-primary/20 transition-all duration-300 hover:scale-110 hover:neon-glow fade-in-up stagger-${index + 1}`}
                    aria-label={social.label}
                  >
                    <IconComponent className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                  </a>
                );
              })}
            </div>
          </div>
          
          {/* Divider */}
          <div className="border-t border-border/30 pt-8 slide-in-bottom">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-muted-foreground text-center md:text-left">
                © {currentYear} Elton Dagodog. All rights reserved.
              </p>
              
              <div className="flex items-center space-x-2 text-muted-foreground">
                <span>Built with</span>
                
                <span>using React, TypeScript, and Tailwind CSS</span>
              </div>
            </div>
            
            {/* <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground/70">
                Designed for innovation • Crafted for excellence • Powered by passion
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
