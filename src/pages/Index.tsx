// src/pages/Index.tsx
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProblemStatement from "@/components/ProblemStatement";
import Features from "@/components/Features";
import TechStack from "@/components/TechStack";
import Demo from "@/components/Demo";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <ProblemStatement />
        <div id="features">
          <Features />
        </div>
        <div id="tech-stack">
          <TechStack />
        </div>
        <div id="demo">
          <Demo />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;