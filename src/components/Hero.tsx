import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";
import { cv } from "@/data/cv";

const Hero = () => {
  const name = cv.personal.name;
  const parts = name.split(" ");
  const first = parts.slice(0, -1).join(" ") || name;
  const last = parts.length > 1 ? parts[parts.length - 1] : "";
  const github = cv.socials.github || "https://github.com";
  const linkedin = cv.socials.linkedin || "https://linkedin.com";
  const email = cv.socials.email || "mailto:example@example.com";
  const resumeUrl = cv.personal.resumeUrl;

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* 3D Spline Background - Déplacé vers la gauche, plus visible */}
      <div className="absolute inset-0 z-0">
        <div className="absolute left-0 top-0 bottom-0 w-full md:w-2/3 transform -translate-x-5 md:translate-x-0">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full opacity-90"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-background/30 via-background/50 to-background/60"></div>
      </div>

      {/* Spotlight Effect */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="hsl(var(--primary))"
      />

      {/* Content Container */}
      <div className="container relative z-10 px-4 py-32 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8 animate-fade-in text-center lg:text-left">
            <div className="inline-block px-4 py-2 mb-4 rounded-full bg-secondary/80 backdrop-blur-sm">
              <p className="text-sm font-medium text-muted-foreground">
                👋 {cv.personal.title}
              </p>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              {first}{last ? " " : ""}
              {last ? <span className="gradient-text">{last}</span> : null}
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              {cv.personal.headline}
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start items-center pt-8">
              <Button 
                size="lg" 
                className="gap-2 shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-glow)] transition-all"
                onClick={() => scrollToSection("projects")}
              >
                Voir mes projets
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="gap-2"
                onClick={() => scrollToSection("contact")}
              >
                Me contacter
              </Button>
              {resumeUrl ? (
                <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="secondary" size="lg" className="gap-2">
                    Télécharger CV
                  </Button>
                </a>
              ) : null}
            </div>

            <div className="flex gap-6 justify-center lg:justify-start pt-8">
              <a 
                href={github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href={linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href={`mailto:${email}`}
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Side - Profile Image - Animations innovantes */}
          <div className="relative flex justify-center lg:justify-end items-center animate-fade-in">
            <div className="relative w-full max-w-xs lg:max-w-sm group">
              {/* Cercle animé autour de l'image */}
              <div className="absolute inset-0 rounded-2xl border-4 border-primary/30 animate-spin-slow opacity-50"></div>
              
              {/* Glow effect animé */}
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-primary/40 via-accent/40 to-primary/40 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 animate-pulse-slow"></div>
              
              {/* Container principal avec animations */}
              <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-elegant)] border-4 border-primary/20 bg-card/50 backdrop-blur-sm animate-float group-hover:scale-105 transition-all duration-500">
                {cv.personal.profileImage ? (
                  <div className="relative overflow-hidden">
                    {/* Overlay gradient animé au survol */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                    
                    {/* Particules animées */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-ping" style={{ animationDelay: '0s' }}></div>
                      <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-accent rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                      <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-primary rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
                    </div>
                    
                    <img 
                      src={cv.personal.profileImage} 
                      alt={`Photo de ${cv.personal.name}`}
                      className="w-full h-auto object-cover object-center transition-transform duration-700 group-hover:scale-110"
                      style={{ objectPosition: 'center 20%' }}
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        if (e.currentTarget.nextElementSibling) {
                          (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex';
                        }
                      }}
                    />
                    
                    {/* Shine effect */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"></div>
                  </div>
                ) : null}
                <div 
                  className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center min-h-[350px]"
                  style={{display: cv.personal.profileImage ? 'none' : 'flex'}}
                >
                  <div className="text-center text-muted-foreground">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center animate-pulse">
                      <span className="text-4xl font-bold text-primary">
                        {cv.personal.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <p className="text-sm">Photo de profil</p>
                  </div>
                </div>
              </div>
              
              {/* Effets décoratifs animés */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-xl -z-10 animate-pulse-slow"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-accent/30 to-primary/30 rounded-full blur-xl -z-10 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
              
              {/* Lignes décoratives animées */}
              <div className="absolute -top-8 -right-8 w-32 h-32 border-2 border-primary/20 rounded-full animate-spin-slow" style={{ animation: 'rotate 15s linear infinite' }}></div>
              <div className="absolute -bottom-8 -left-8 w-24 h-24 border-2 border-accent/20 rounded-full animate-spin-slow" style={{ animation: 'rotate 10s linear infinite reverse' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  );
};

export default Hero;
