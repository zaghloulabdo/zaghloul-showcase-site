export type CvData = {
  personal: {
    name: string;
    title: string;
    headline: string;
    resumeUrl?: string;
    profileImage?: string;
    description?: string;
  };
  socials: {
    github?: string;
    linkedin?: string;
    email?: string;
    website?: string;
  };
  skills: Array<{
    title: string;
    description: string;
    iconId?: "code" | "design" | "performance" | "team" | string;
  }>;
  projects: Array<{
    title: string;
    description: string;
    tags: string[];
    link?: string;
    github?: string;
  }>;
  contact: {
    email?: string;
    phone?: string;
    location?: string;
  };
  certifications: Array<{
    title: string;
    issuer: string;
    date?: string;
    credentialId?: string;
    credentialUrl?: string;
    description?: string;
    image?: string;
  }>;
};

export const cv: CvData = {
  personal: {
    name: "Abdessamad Zaghloul",
    title: "Étudiant Ingénieur MIAGE - EMSI",
    headline: "Développeur passionné spécialisé dans les applications web modernes et l'intelligence artificielle",
    resumeUrl: "https://www.dropbox.com/scl/fi/hsgnzkeoiyl0sj0zjoi0t/CV_2025-10-19_Abdessamad_zaghloul-2.pdf?rlkey=h4yt9bxqb9pe6bhr0f3gews9y&dl=1",
    profileImage: "/profile-photo.jpg.jpeg", // Photo dans le dossier public
    description: "Étudiant en 5ème année d'ingénierie informatique MIAGE à l'École Marocaine des Sciences de l'Ingénieur (EMSI), je me passionne pour l'innovation technologique et la résolution de problèmes complexes. Spécialisé dans le développement d'applications web modernes et l'intelligence artificielle, je développe mes compétences en React, Python et Django pour créer des solutions digitales performantes. Mon approche méthodique et ma créativité me permettent de réaliser des projets de qualité qui démontrent mon potentiel en tant que futur ingénieur.",
  },
  socials: {
    github: "https://github.com/zaghloulabdo",
    linkedin: "https://ma.linkedin.com/in/abdessamad-zaghloul-a5b89823a",
    email: "contact@abdessamadzaghloul.site",
    website: "",
  },
  skills: [
    { title: "Programmation", description: "C, C++, Bash, Python, Java, JavaScript, Dart, HTML, CSS", iconId: "code" },
    { title: "Intelligence Artificielle", description: "Librairies Python (scikit-learn, pandas, numpy), modélisation, prédiction", iconId: "performance" },
    { title: "Frameworks & Outils", description: "Spring, .NET, Django, React", iconId: "design" },
    { title: "Outils & Méthodologies", description: "Git, CI/CD, Docker, REST API, Agile / Scrum", iconId: "team" },
    { title: "Base de données", description: "UML, SQL, SQL Server, PL/SQL", iconId: "database" },
    { title: "Environnements", description: "Windows, Unix", iconId: "environment" },
  ],
  projects: [
    {
      title: "Application de prédiction basée sur l'IA",
      description: "Développement d'indicateurs prédictifs basés sur l'IA pour anticiper les départs d'employés et optimiser la gestion des ressources humaines, avec analyse et visualisation des données RH.",
      tags: ["Python", "TensorFlow", "Scikit-learn", "Pandas", "Matplotlib"],
      link: "#",
      github: "#",
    },
    {
      title: "DomService - Plateforme de réservation",
      description: "Développement d'une plateforme web permettant la réservation en ligne de femmes de ménage et de nounous, avec gestion des profils, authentification sécurisée et planification des rendez-vous.",
      tags: ["React.js", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL"],
      link: "#",
      github: "https://github.com/zaghloulabdo/dom-services",
    },
    {
      title: "Application de gestion de voyage",
      description: "Conception et développement d'une application complète de gestion de voyage utilisant UML, Django, HTML et CSS avec l'architecture Modèle-Vue-Template pour une planification intuitive et efficace.",
      tags: ["Django", "UML", "HTML", "CSS", "MVT"],
      link: "#",
      github: "https://github.com/zaghloulabdo/agence_voyage",
    },
    {
      title: "Plateforme de gestion de projets industriels",
      description: "Système complet de gestion de matériaux avec recherche automatique multi-sources, comparaison intelligente des prix, conversion EUR/MAD, export PDF et envoi automatique d'e-mails aux fournisseurs. Intégration avec Supabase et APIs externes.",
      tags: ["React", "JavaScript", "Supabase", "PDF Export", "Email Automation"],
      link: "#",
      github: "https://github.com/zaghloulabdo/kgs-ndustrie_gestion_materiaux",
    },
  ],
  contact: {
    email: "contact@abdessamadzaghloul.site",
    phone: "+212 663023736",
    location: "Maroc",
  },
  certifications: [
    {
      title: "Introduction to Java and Object-Oriented Programming",
      issuer: "University of Pennsylvania via Coursera",
      date: "Janvier 2025",
      credentialId: "PE7GOZCP8L65",
      credentialUrl: "https://coursera.org/verify/PE7GOZCP8L65",
      description: "Maîtrise de la programmation orientée objet avec Java, autorisé par University of Pennsylvania",
      image: "/certifications/java-oop-certificate.jpg.png",
    },
    {
      title: "React Basics",
      issuer: "Meta via Coursera",
      date: "Janvier 2025",
      credentialId: "U4DSWGQFUWC7",
      credentialUrl: "https://coursera.org/verify/U4DSWGQFUWC7",
      description: "Fondamentaux du développement d'applications web avec React, autorisé par Meta",
      image: "/certifications/react-basics-certificate.jpg.png",
    },
    {
      title: "Introduction to Containers w/ Docker, Kubernetes & OpenShift",
      issuer: "IBM via Coursera",
      date: "Mai 2025",
      credentialId: "HNAOCU25VRFF",
      credentialUrl: "https://coursera.org/verify/HNAOCU25VRFF",
      description: "Maîtrise de la conteneurisation et de l'orchestration avec Docker, Kubernetes et OpenShift, autorisé par IBM",
      image: "/certifications/docker-kubernetes-certificate.jpg.png",
    },
    {
      title: "Virtual Networks in Azure",
      issuer: "Whizlabs via Coursera",
      date: "Mai 2025",
      credentialId: "GK2H1U5RNDZB",
      credentialUrl: "https://coursera.org/verify/GK2H1U5RNDZB",
      description: "Création et gestion de réseaux virtuels sur la plateforme Microsoft Azure, autorisé par Whizlabs",
      image: "/certifications/azure-networks-certificate.jpg.png",
    },
    {
      title: "The Unix Workbench",
      issuer: "Johns Hopkins University via Coursera",
      date: "Mai 2024",
      credentialId: "XZ69AWAGEYAQ",
      credentialUrl: "https://coursera.org/verify/XZ69AWAGEYAQ",
      description: "Maîtrise de l'environnement Unix et des outils de ligne de commande, autorisé par Johns Hopkins University",
      image: "/certifications/unix-workbench-certificate.jpg.png",
    },
    {
      title: "Oracle Cloud Infrastructure 2025 Certified DevOps Professional",
      issuer: "Oracle University",
      date: "Octobre 2025",
      credentialId: "Oracle Certified Professional",
      description: "Certification professionnelle Oracle Cloud Infrastructure DevOps, valide jusqu'en octobre 2027",
      image: "/certifications/oracle-devops-certificate.jpg.png.jpeg",
    },
  ],
};


