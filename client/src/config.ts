import imgForest from "@assets/generated_images/cinematic_dark_misty_forest_landscape.png";
import imgFerrofluid from "@assets/generated_images/abstract_liquid_black_ferrofluid_macro.png";
import imgConcrete from "@assets/generated_images/minimalist_concrete_architecture_shadows.png";
import imgOcean from "@assets/generated_images/dark_ocean_waves_long_exposure.png";

export const CONFIG = {
  name: "Alex Morgan",
  role: "Creative Developer",
  intro: "Building digital experiences that bridge the gap between editorial design and fluid interaction.",

  projects: [
    {
      id: 1,
      title: "Neon Horizon",
      description: "Immersive WebGL experience for a futuristic fashion brand.",
      image: imgFerrofluid,
      video: "", 
      category: "WebGL / Experience"
    },
    {
      id: 2,
      title: "Mono Object",
      description: "E-commerce platform focused on minimalist object design.",
      image: imgConcrete,
      video: "",
      category: "E-commerce"
    },
    {
      id: 3,
      title: "Aether Lens",
      description: "Photography portfolio with custom shader transitions.",
      image: imgForest,
      video: "",
      category: "Portfolio"
    }
  ],

  experience: [
    {
      company: "Studio Void",
      role: "Senior Frontend Engineer",
      period: "2022 – Present",
      description: "Leading the creative development team, focusing on WebGL and micro-interactions for luxury clients."
    },
    {
      company: "Analog Digital",
      role: "Creative Technologist",
      period: "2019 – 2022",
      description: "Developed award-winning campaign sites using React and Three.js."
    }
  ],

  contact: {
    email: "hello@alexmorgan.dev",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    twitter: "https://twitter.com"
  },
  
  // Editorial Slider Content
  editorial: [
    {
      id: 1,
      title: "Fluid Motion",
      description: "Exploring the physics of digital interfaces.",
      image: imgOcean
    },
    {
      id: 2,
      title: "Silent Space",
      description: "The importance of whitespace in modern layout.",
      image: imgConcrete
    },
    {
      id: 3,
      title: "Dark Matter",
      description: "Designing for dark mode first.",
      image: imgFerrofluid
    }
  ]
}
