
import { Mail, Github, Instagram, Linkedin, Send, Sparkles, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'eltondevs79@gmail.com',
      href: 'mailto:eltondevs79@gmail.com',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: '@EltonDagodog',
      href: 'https://github.com/eltondagodog',
      color: 'from-gray-500 to-gray-700'
    },
    {
      icon: Facebook,
      label: 'Facebook',
      value: 'Elton Romares Dagodog',
      href: 'https://facebook.com/in/Elton Romares Dagodog',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Elton Dagodog',
      href: 'https://www.linkedin.com/in/elton-devs-250807370/',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: '@eltonromaresdagodog',
      href: 'https://instagram.com/eltondagodog',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-card/20 to-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl floating-animation"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl floating-animation" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl floating-animation" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Section Header */}
          <div className="mb-20 slide-in-bottom">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
              Let's Connect
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I'm always open to discussing new opportunities, collaborations, or just having 
              a conversation about <span className="text-primary font-semibold">technology and innovation</span>.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-6"></div>
          </div>
          
          {/* Contact Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((contact, index) => {
              const IconComponent = contact.icon;
              
              return (
                <Card key={index} className={`group hover:scale-105 transition-all duration-500 cursor-pointer border-0 shadow-xl bg-card/50 neon-border backdrop-blur-sm hover:neon-glow fade-in-up stagger-${index + 1}`}>
                  <CardContent className="p-8 text-center">
                    <div 
                      onClick={() => window.open(contact.href, '_blank')}
                      className="space-y-4"
                    >
                      <div className="relative">
                        <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center group-hover:neon-glow transition-all duration-300 mb-4">
                          <IconComponent className="h-8 w-8 text-primary group-hover:text-accent transition-colors duration-300" />
                        </div>
                        <div className="absolute -top-1 -right-1 w-6 h-6 bg-accent rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <Sparkles className="w-3 h-3 text-background" />
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold text-lg text-foreground mb-2 group-hover:text-gradient transition-all duration-300">
                          {contact.label}
                        </h3>
                        <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors duration-300">
                          {contact.value}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          {/* Main CTA Section */}
          <div className="bg-card/50 rounded-3xl p-12 neon-border backdrop-blur-sm slide-in-bottom">
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-semibold mb-4 text-foreground">
                  Ready to Start a <span className="text-gradient">Project?</span>
                </h3>
                
                <p className="text-muted-foreground mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
                  Whether you need a <span className="text-primary font-semibold">web application</span>, 
                  <span className="text-accent font-semibold"> mobile app</span>, or 
                  <span className="text-primary font-semibold"> desktop solution</span>, 
                  I'm here to help bring your ideas to life with modern technologies and best practices.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  size="lg" 
                  className="text-lg px-10 py-7 bg-primary hover:bg-primary/90 text-background font-semibold neon-glow hover:scale-105 transition-all duration-300"
                  onClick={() => window.open('mailto:eltondevs79@gmail.com?subject=Project Inquiry', '_blank')}
                >
                  <Send className="h-5 w-5 mr-2" />
                  Start a Project
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-lg px-10 py-7 border-accent/50 text-accent hover:bg-accent/10 hover:scale-105 transition-all duration-300"
                  onClick={() => window.open('mailto:eltondevs79@gmail.com?subject=Let\'s Chat', '_blank')}
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Just Say Hi
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
