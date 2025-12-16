import imgAbstract1 from "@assets/generated_images/abstract_organic_curves_in_burgundy_and_orange.png";
import imgAbstract2 from "@assets/generated_images/minimalist_typographic_texture_burgundy.png";
import imgAbstract3 from "@assets/generated_images/fluid_abstract_shapes_orange_and_cream.png";

// Fallback to existing images if generation hasn't happened yet in this specific run, 
// but we expect the tool to run in parallel. 
// For safety in the prompt context, I will assume the paths above will be valid after generation.

export const CONFIG = {
  name: "Chaymae Harrach",
  role: "HR Specialist & I/O Psychology",
  intro: "Applying psychological insights to enhance organizational dynamics and employee well-being.",

  // Re-purposing "projects" as key focus areas or highlighted achievements for an HR portfolio
  projects: [
    {
      id: 1,
      title: "Talent Acquisition",
      description: "Strategic sourcing and recruitment for global tech leaders.",
      image: imgAbstract1, 
      video: "",
      category: "Recruitment"
    },
    {
      id: 2,
      title: "Employee Relations",
      description: "Fostering a positive work culture through psychological insights.",
      image: imgAbstract3,
      video: "",
      category: "Culture"
    },
    {
      id: 3,
      title: "Performance Mgmt",
      description: "Data-driven approaches to employee development and evaluation.",
      image: imgAbstract2,
      video: "",
      category: "Strategy"
    }
  ],

  experience: [
    {
      company: "Oracle",
      role: "HR Intern",
      period: "Mar 2025 – Present",
      description: "Contributing to HR operations and strategic initiatives in a global tech environment. Casablanca-Settat, Morocco."
    },
    {
      company: "Al Akhawayn University",
      role: "Human Resources Intern",
      period: "Jun 2024 – Jul 2024",
      description: "Participated in HR development projects and staff performance evaluations. Gained practical experience in HR field operations."
    },
    {
      company: "CO BUSINESS COB",
      role: "Digital Marketing Intern",
      period: "May 2023",
      description: "Gained insights into digital strategies and corporate communication."
    },
    {
      company: "La Puerta Azul",
      role: "Hotel Receptionist",
      period: "May 2022",
      description: "Managed front-desk operations and guest relations in Chefchaouen."
    }
  ],

  education: [
    {
      institution: "Mohammed V University in Rabat",
      degree: "Master's degree, Strategic Human Resources Management",
      period: "Oct 2023 – Oct 2025"
    },
    {
      institution: "Université Hassan II de Casablanca",
      degree: "Bachelor's degree, Entrepreneurship",
      period: "Sep 2022 – Jun 2023"
    },
    {
      institution: "BTS Chefchaouen",
      degree: "Brevet de technicien supérieure, Tourism management",
      period: "Oct 2020 – Jul 2022"
    }
  ],

  skills: [
    "Staffing Services",
    "Human Resources (HR)",
    "Talent Sourcing",
    "I/O Psychology",
    "Employee Relations",
    "Performance Management"
  ],

  contact: {
    email: "harrach.chaymae@example.com", // Placeholder as email wasn't explicitly in PDF header besides linkedin
    linkedin: "https://www.linkedin.com/in/harrach-chaymae",
    location: "Casablanca, Morocco"
  },
  
  // Editorial Slider Content - Philosophy/Approach
  editorial: [
    {
      id: 1,
      title: "Human Capital",
      description: "Strategic management of the organization's most valuable asset.",
      image: imgAbstract1
    },
    {
      id: 2,
      title: "Psychology at Work",
      description: "Using I/O psychology to improve workplace dynamics.",
      image: imgAbstract3
    },
    {
      id: 3,
      title: "Organizational Culture",
      description: "Building resilient and inclusive corporate environments.",
      image: imgAbstract2
    }
  ]
}
