import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Projet E-commerce",
    description: "Plateforme de vente en ligne moderne avec panier et paiement sécurisé",
    tags: ["React", "Node.js", "Stripe"],
    link: "#",
    github: "#",
  },
  {
    title: "Application Mobile",
    description: "Application de gestion de tâches avec synchronisation cloud",
    tags: ["React Native", "Firebase", "TypeScript"],
    link: "#",
    github: "#",
  },
  {
    title: "Dashboard Analytics",
    description: "Tableau de bord interactif pour visualisation de données en temps réel",
    tags: ["React", "D3.js", "TailwindCSS"],
    link: "#",
    github: "#",
  },
];

const Projects = () => {
  return (
    <section className="py-24">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Mes <span className="gradient-text">Projets</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez quelques-uns de mes projets récents qui démontrent mes compétences
              et ma passion pour le développement web.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="group hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:-translate-y-2 border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden"
              >
                <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors"></div>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1 gap-2">
                      <ExternalLink className="w-4 h-4" />
                      Voir
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1 gap-2">
                      <Github className="w-4 h-4" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
