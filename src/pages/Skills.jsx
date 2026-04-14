import { SkillsSection } from "../components/SkillsSection";
import { PageTransition } from "../components/PageTransition";
import { SEO } from "../components/SEO";

export const Skills = () => {
  return (
    <PageTransition>
      <SEO title="Skills & Expertise" />
      <div className="max-w-7xl mx-auto w-full flex flex-col justify-center min-h-[50vh]">
        <SkillsSection />
      </div>
    </PageTransition>
  );
};
