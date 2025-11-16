import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar, ExternalLink, Building2, ZoomIn } from "lucide-react";
import { cv } from "@/data/cv";
import { useState } from "react";

const Certifications = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <section id="certifications" className="py-24 bg-secondary/30">
        <div className="container px-4 mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Mes <span className="gradient-text">Certifications</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Certifications et formations qui attestent de mes compétences et de mon engagement continu dans l'apprentissage
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cv.certifications.map((certification, index) => (
                <Card 
                  key={index}
                  className="group hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:-translate-y-2 border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Image du certificat */}
                  {certification.image ? (
                    <div className="relative h-48 bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden cursor-pointer"
                         onClick={() => setSelectedImage(certification.image || null)}>
                      <img 
                        src={certification.image} 
                        alt={`Certificat ${certification.title}`}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                        <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  ) : (
                    <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
                      <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors flex items-center justify-center">
                        <Award className="w-16 h-16 text-primary/30" />
                      </div>
                    </div>
                  )}

                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Award className="w-6 h-6" />
                      </div>
                      {certification.credentialUrl ? (
                        <a 
                          href={certification.credentialUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg hover:bg-secondary transition-colors"
                          aria-label="Voir la certification"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink className="w-4 h-4 text-muted-foreground hover:text-primary" />
                        </a>
                      ) : null}
                    </div>
                    <CardTitle className="text-xl mb-2">
                      {certification.title}
                    </CardTitle>
                    <CardDescription className="flex items-center gap-2 text-base">
                      <Building2 className="w-4 h-4" />
                      {certification.issuer}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {certification.description ? (
                      <p className="text-muted-foreground mb-4 text-sm">
                        {certification.description}
                      </p>
                    ) : null}
                    <div className="flex flex-wrap items-center gap-3">
                      {certification.date ? (
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>{certification.date}</span>
                        </div>
                      ) : null}
                      {certification.credentialId ? (
                        <Badge variant="secondary" className="text-xs">
                          ID: {certification.credentialId}
                        </Badge>
                      ) : null}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modal pour afficher l'image en grand */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-primary transition-colors"
              aria-label="Fermer"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img 
              src={selectedImage} 
              alt="Certificat"
              className="w-full h-auto rounded-lg shadow-2xl border-2 border-primary/20"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Certifications;

