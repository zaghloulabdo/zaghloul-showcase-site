import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Spline Background */}
      <div className="absolute inset-0 z-0">
        <SplineScene 
          scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
          className="w-full h-full opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/60 to-background"></div>
      </div>

      {/* Spotlight Effect */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="hsl(var(--primary))"
      />

      {/* Content */}
      <div className="container relative z-10 px-4 py-32 mx-auto text-center animate-fade-in">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="inline-block px-4 py-2 mb-4 rounded-full bg-secondary/80 backdrop-blur-sm">
            <p className="text-sm font-medium text-muted-foreground">
              👋 Bienvenue sur mon portfolio
            </p>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Abdessamad{" "}
            <span className="gradient-text">Zaghloul</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Développeur passionné créant des expériences web modernes et performantes
          </p>

          <div className="flex flex-wrap gap-4 justify-center items-center pt-8">
            <Button size="lg" className="gap-2 shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-glow)] transition-all">
              Voir mes projets
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="lg" className="gap-2">
              Me contacter
            </Button>
          </div>

          <div className="flex gap-6 justify-center pt-8">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:contact@abdessamadzaghloul.site"
              className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  );
};

export default Hero;
