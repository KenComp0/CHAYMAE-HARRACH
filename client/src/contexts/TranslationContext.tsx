import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "en" | "fr";

interface TranslationContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

// Translation data
const translations = {
  en: {
    // Navbar
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.education": "Education",
    "nav.work": "Work",
    "nav.contact": "Contact",
    
    // Hero
    "hero.title1": "STRATEGIC",
    "hero.title2": "HUMAN",
    "hero.title3": "RESOURCES",
    "hero.scroll": "Scroll",
    
    // About
    "about.title": "About Me",
    "about.description": "I am a Master's student in Strategic Human Resources Management, passionate about",
    "about.description2": "I/O Psychology",
    "about.description3": "My goal is to apply psychological insights to enhance organizational dynamics and employee well-being.",
    
    // Experience
    "experience.title": "Experience",
    "experience.oracle.description": "Contributing to HR operations and strategic initiatives in a global tech environment. Casablanca-Settat, Morocco.",
    "experience.oracle.role": "HR Intern",
    "experience.akhawayn.description": "Participated in HR development projects and staff performance evaluations. Gained practical experience in HR field operations.",
    "experience.akhawayn.role": "Human Resources Intern",
    "experience.cobusiness.description": "Gained insights into digital strategies and corporate communication.",
    "experience.cobusiness.role": "Digital Marketing Intern",
    "experience.puerta.description": "Managed front-desk operations and guest relations in Chefchaouen.",
    "experience.puerta.role": "Hotel Receptionist",
    
    // Education
    "education.title": "Education",
    
    // Contact
    "contact.title": "Let's Connect",
    
    // Footer
    "footer.copyright": "Strategic HR Portfolio",
    
    // Skills (from config - will be handled separately)
    "skills.staffing": "Staffing Services",
    "skills.hr": "Human Resources (HR)",
    "skills.talent": "Talent Sourcing",
    "skills.psychology": "I/O Psychology",
    "skills.relations": "Employee Relations",
    "skills.performance": "Performance Management",
    
    // Projects
    "projects.talent.title": "Talent Acquisition",
    "projects.talent.description": "Strategic sourcing and recruitment for global tech leaders.",
    "projects.relations.title": "Employee Relations",
    "projects.relations.description": "Fostering a positive work culture through psychological insights.",
    "projects.performance.title": "Performance Mgmt",
    "projects.performance.description": "Data-driven approaches to employee development and evaluation.",
    
    // Editorial
    "editorial.capital.title": "Human Capital",
    "editorial.capital.description": "Strategic management of the organization's most valuable asset.",
    "editorial.psychology.title": "Psychology at Work",
    "editorial.psychology.description": "Using I/O psychology to improve workplace dynamics.",
    "editorial.culture.title": "Organizational Culture",
    "editorial.culture.description": "Building resilient and inclusive corporate environments.",
    
    // Projects
    "projects.title": "Key Focus Areas",
    
    // Methodology
    "methodology.title": "Methodology",
  },
  fr: {
    // Navbar
    "nav.about": "À propos",
    "nav.experience": "Expérience",
    "nav.education": "Formation",
    "nav.work": "Travail",
    "nav.contact": "Contact",
    
    // Hero
    "hero.title1": "RESSOURCES",
    "hero.title2": "HUMAINES",
    "hero.title3": "STRATÉGIQUES",
    "hero.scroll": "Défiler",
    
    // About
    "about.title": "À propos de moi",
    "about.description": "Je suis étudiante en Master en Gestion Stratégique des Ressources Humaines, passionnée par",
    "about.description2": "la Psychologie I/O",
    "about.description3": "Mon objectif est d'appliquer les connaissances psychologiques pour améliorer la dynamique organisationnelle et le bien-être des employés.",
    
    // Experience
    "experience.title": "Expérience",
    "experience.oracle.description": "Contribution aux opérations RH et aux initiatives stratégiques dans un environnement technologique mondial. Casablanca-Settat, Maroc.",
    "experience.oracle.role": "Stagiaire RH",
    "experience.akhawayn.description": "Participation à des projets de développement RH et d'évaluation de la performance du personnel. Acquisition d'une expérience pratique dans les opérations sur le terrain des RH.",
    "experience.akhawayn.role": "Stagiaire en Ressources Humaines",
    "experience.cobusiness.description": "Acquisition de connaissances sur les stratégies numériques et la communication d'entreprise.",
    "experience.cobusiness.role": "Stagiaire en Marketing Digital",
    "experience.puerta.description": "Gestion des opérations de réception et des relations avec les clients à Chefchaouen.",
    "experience.puerta.role": "Réceptionniste d'Hôtel",
    
    // Education
    "education.title": "Formation",
    
    // Contact
    "contact.title": "Restons en contact",
    
    // Footer
    "footer.copyright": "Portfolio RH Stratégique",
    
    // Skills
    "skills.staffing": "Services de Recrutement",
    "skills.hr": "Ressources Humaines (RH)",
    "skills.talent": "Sourcing de Talents",
    "skills.psychology": "Psychologie I/O",
    "skills.relations": "Relations Employés",
    "skills.performance": "Gestion de la Performance",
    
    // Projects
    "projects.talent.title": "Acquisition de Talents",
    "projects.talent.description": "Sourcing stratégique et recrutement pour les leaders technologiques mondiaux.",
    "projects.relations.title": "Relations Employés",
    "projects.relations.description": "Favoriser une culture de travail positive grâce aux connaissances psychologiques.",
    "projects.performance.title": "Gestion de la Performance",
    "projects.performance.description": "Approches basées sur les données pour le développement et l'évaluation des employés.",
    
    // Editorial
    "editorial.capital.title": "Capital Humain",
    "editorial.capital.description": "Gestion stratégique de l'actif le plus précieux de l'organisation.",
    "editorial.psychology.title": "Psychologie au Travail",
    "editorial.psychology.description": "Utiliser la psychologie I/O pour améliorer la dynamique du lieu de travail.",
    "editorial.culture.title": "Culture Organisationnelle",
    "editorial.culture.description": "Construire des environnements d'entreprise résilients et inclusifs.",
    
    // Projects
    "projects.title": "Domaines Clés",
    
    // Methodology
    "methodology.title": "Méthodologie",
  }
};

export function TranslationProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    // Get language from localStorage or default to English
    const saved = localStorage.getItem("language") as Language;
    return saved === "fr" ? "fr" : "en";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <TranslationContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error("useTranslation must be used within a TranslationProvider");
  }
  return context;
}

