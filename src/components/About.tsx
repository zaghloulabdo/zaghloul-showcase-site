import { Card, CardContent } from "@/components/ui/card";
import { Code2, Palette, Rocket, Users } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Développement Web",
    description: "React, TypeScript, Node.js et technologies modernes",
  },
  {
    icon: Palette,
    title: "Design UI/UX",
    description: "Interfaces élégantes et expériences utilisateur optimales",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Applications rapides et optimisées pour tous les appareils",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Travail d'équipe agile et communication efficace",
  },
];

const About = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              À propos de <span className="gradient-text">moi</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionné par la création d'expériences numériques exceptionnelles,
              je combine créativité et expertise technique pour donner vie à vos projets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <Card 
                  key={index} 
                  className="group hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:-translate-y-2 border-border/50 bg-card/50 backdrop-blur-sm"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 inline-flex p-4 rounded-2xl bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                    <p className="text-muted-foreground">{skill.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
