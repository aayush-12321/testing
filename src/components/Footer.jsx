import { portfolioData } from "../data/portfolioData";

export const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-zinc-950 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-zinc-500 text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} {portfolioData.personalInfo.name}. All rights reserved.
        </p>
        <div className="flex space-x-6">
          <a
            href={portfolioData.personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="text-zinc-500 hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href={portfolioData.personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-zinc-500 hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${portfolioData.personalInfo.email}`}
            className="text-zinc-500 hover:text-white transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};
