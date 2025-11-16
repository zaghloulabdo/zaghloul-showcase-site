import { Github, Linkedin, Mail } from "lucide-react";
import { cv } from "@/data/cv";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-border/50 bg-secondary/20">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold mb-2">{cv.personal.name}</h3>
              <p className="text-muted-foreground">
                {cv.personal.title}
              </p>
            </div>

            <div className="flex gap-4">
              <a 
                href={cv.socials.github || "https://github.com"} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href={cv.socials.linkedin || "https://linkedin.com"} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href={`mailto:${cv.contact.email || cv.socials.email || ""}`}
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border/50 text-center text-muted-foreground text-sm">
            <p>&copy; {new Date().getFullYear()} {cv.personal.name}. Tous droits réservés.</p>
            <p className="mt-2">
              Développé avec <span className="text-primary">❤️</span> en utilisant React, TypeScript et Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
