import { portfolioData } from "../data/portfolioData";
import { PageTransition } from "../components/PageTransition";
import { ProjectsSection } from "../components/ProjectsSection";
import { SEO } from "../components/SEO";

export const Projects = () => {
  return (
    <PageTransition>
      <SEO title="Projects & Case Studies" description="Explore my portfolio of web development, AI, and machine learning projects." />
      <div className="flex flex-col max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProjectsSection />
      </div>
    </PageTransition>
  );
};
