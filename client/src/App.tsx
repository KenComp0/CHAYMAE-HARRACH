import Layout from "@/components/layout/Layout";
import Hero from "@/components/sections/Hero";
import EditorialSlider from "@/components/sections/EditorialSlider";
import ProjectsSlider from "@/components/sections/ProjectsSlider";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <Layout>
      <Hero />
      <EditorialSlider />
      <About />
      <ProjectsSlider />
      <Experience />
      <Contact />
      <Toaster />
    </Layout>
  );
}

export default App;
