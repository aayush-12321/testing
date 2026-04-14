import { Link } from "react-router-dom";
import { portfolioData } from "../data/portfolioData";
// import { Linkedin, Mail } from "lucide-react";
import { Mail } from "lucide-react";

const LinkedinIcon = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const GithubIcon = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);

export const Footer = () => {
  return (
    <footer className="border-t border-black/5 dark:border-white/10 bg-slate-50 dark:bg-zinc-950 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-2xl font-bold tracking-tighter text-slate-900 dark:text-white transition-colors duration-300 inline-block mb-4">
              {portfolioData.personalInfo.name.split(" ")[0]}
              <span className="text-cyan-600 dark:text-cyan-400">.</span>
            </Link>
            <p className="text-slate-500 dark:text-zinc-400 max-w-sm">
              {portfolioData.personalInfo.summary.substring(0, 150)}...
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-slate-500 dark:text-zinc-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-slate-500 dark:text-zinc-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">About</Link></li>
              <li><Link to="/skills" className="text-slate-500 dark:text-zinc-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Skills</Link></li>
              <li><Link to="/projects" className="text-slate-500 dark:text-zinc-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Projects</Link></li>
              <li><Link to="/contact" className="text-slate-500 dark:text-zinc-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Connect</h3>
            <ul className="space-y-3">
              <li>
                <a href={portfolioData.personalInfo.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                  <GithubIcon size={18} /> GitHub
                </a>
              </li>
              <li>
                <a href={portfolioData.personalInfo.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                  <LinkedinIcon size={18} /> LinkedIn
                </a>
              </li>
              <li>
                <a href={`mailto:${portfolioData.personalInfo.email}`} className="flex items-center gap-2 text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                  <Mail size={18} /> Email
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-black/5 dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 dark:text-zinc-500 text-sm">
            © {new Date().getFullYear()} {portfolioData.personalInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
