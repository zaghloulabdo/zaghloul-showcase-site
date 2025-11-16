import { Card, CardContent } from "@/components/ui/card";
import { Code2, Palette, Rocket, Users, Database, Monitor } from "lucide-react";
import { cv } from "@/data/cv";

const About = () => {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              À propos de <span className="gradient-text">moi</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez mon parcours et mes compétences
            </p>
          </div>

          {/* Section Photo + Description */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Photo de profil */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-[var(--shadow-elegant)] border-4 border-primary/20 bg-card/50">
                  {cv.personal.profileImage ? (
                    <img 
                      src={cv.personal.profileImage} 
                      alt={`Photo de ${cv.personal.name}`}
                      className="w-full h-full object-cover object-center"
                      style={{ objectPosition: 'center 20%' }}
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling.style.display = 'flex';
                      }}
                    />
                  ) : null}
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center" style={{display: cv.personal.profileImage ? 'none' : 'flex'}}>
                    <div className="text-center text-muted-foreground">
                      <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-4xl font-bold text-primary">
                          {cv.personal.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <p className="text-sm">Photo de profil</p>
                    </div>
                  </div>
                </div>
                {/* Effet décoratif */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-accent/30 to-primary/30 rounded-full blur-xl"></div>
              </div>
            </div>

            {/* Description personnelle */}
            <div className="flex flex-col justify-center space-y-6">
              <div>
                <h3 className="text-3xl font-bold mb-4">
                  Bonjour, je suis <span className="gradient-text">{cv.personal.name}</span>
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {cv.personal.description}
                </p>
              </div>
              
              {/* Statistiques ou points forts */}
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 rounded-lg bg-card/50 border border-border/50">
                  <div className="text-2xl font-bold text-primary">5ème</div>
                  <div className="text-sm text-muted-foreground">Année MIAGE</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-card/50 border border-border/50">
                  <div className="text-2xl font-bold text-primary">EMSI</div>
                  <div className="text-sm text-muted-foreground">École d'Ingénieur</div>
                </div>
              </div>
            </div>
          </div>

          {/* Section Compétences */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold text-center mb-8">
              Mes <span className="gradient-text">compétences</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cv.skills.map((skill, index) => {
                const Icon =
                  skill.iconId === "code"
                    ? Code2
                    : skill.iconId === "design"
                    ? Palette
                    : skill.iconId === "performance"
                    ? Rocket
                    : skill.iconId === "team"
                    ? Users
                    : skill.iconId === "database"
                    ? Database
                    : skill.iconId === "environment"
                    ? Monitor
                    : Code2;
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
      </div>
    </section>
  );
};

export default About;
