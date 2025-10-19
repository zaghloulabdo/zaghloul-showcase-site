import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message envoyé avec succès! Je vous répondrai bientôt.");
  };

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Restons en <span className="gradient-text">contact</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Un projet en tête ? N'hésitez pas à me contacter. 
              Je serais ravi de discuter de vos idées.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Nom complet
                      </label>
                      <Input 
                        id="name"
                        placeholder="Votre nom" 
                        required 
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <Input 
                        id="email"
                        type="email" 
                        placeholder="votre@email.com" 
                        required 
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message
                      </label>
                      <Textarea 
                        id="message"
                        placeholder="Votre message..." 
                        rows={5}
                        required 
                      />
                    </div>
                    <Button type="submit" className="w-full shadow-[var(--shadow-elegant)]">
                      Envoyer le message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="group hover:shadow-[var(--shadow-elegant)] transition-all border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <a 
                      href="mailto:contact@abdessamadzaghloul.site"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      contact@abdessamadzaghloul.site
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-[var(--shadow-elegant)] transition-all border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Téléphone</h3>
                    <p className="text-muted-foreground">
                      +212 XXX XXX XXX
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-[var(--shadow-elegant)] transition-all border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Localisation</h3>
                    <p className="text-muted-foreground">
                      Maroc
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
