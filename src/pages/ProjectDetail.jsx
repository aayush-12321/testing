import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
// import { ArrowLeft, Github, ExternalLink, Code2 } from "lucide-react";
import { ArrowLeft, ExternalLink, Code2 } from "lucide-react";
import { SiGithub } from '@icons-pack/react-simple-icons';
import { portfolioData } from "../data/portfolioData";
import { PageTransition } from "../components/PageTransition";

export const ProjectDetail = () => {
  const { id } = useParams();
  const project = portfolioData.projects.find((p) => p.id === id);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-slate-500 dark:text-zinc-400 hover:text-cyan-400 transition-colors mb-12 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">{project.title}</h1>
          <p className="text-xl text-cyan-400 font-medium">{project.subtitle}</p>
        </motion.div>

        {/* Hero Visual Area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="w-full h-[400px] md:h-[500px] rounded-3xl mb-12 glass-card overflow-hidden relative flex justify-center items-center bg-slate-50 dark:bg-zinc-900 border-black/5 dark:border-white/10"
        >
          {/* Abstract hero placeholder since we don't have images */}
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-900/40 to-indigo-900/40 mix-blend-overlay"></div>

          <div className="relative z-10 flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 flex items-center justify-center mb-6 shadow-2xl backdrop-blur-md">
              <Code2 size={48} className="text-cyan-400 opacity-80" />
            </div>
            <h2 className="text-4xl font-black text-slate-900 dark:text-white/30 tracking-tight uppercase">
              {project.title}
            </h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="md:col-span-2 space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">About the Project</h3>
              <p className="text-slate-500 dark:text-zinc-400 text-lg leading-relaxed whitespace-pre-line">
                {project.description}
              </p>
            </div>

            {/* If we had specific feature list we could map it here */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-8"
          >
            <div className="glass-card p-6 rounded-2xl bg-white dark:bg-zinc-950/50">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, idx) => (
                  <span key={idx} className="px-3 py-1.5 bg-black/5 text-slate-600 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-lg text-sm font-medium dark:text-zinc-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl bg-white dark:bg-zinc-950/50">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Project Links</h3>
              <div className="space-y-4">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    // className="flex items-center gap-3 text-slate-600 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-slate-900 dark:text-white transition-colors bg-black/5 dark:bg-white/5 p-3 rounded-xl border border-white/5 hover:border-white/20 hover:bg-black/5 dark:bg-white/10"
                    className="flex items-center gap-3 text-slate-600 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-white dark:text-white transition-colors bg-black/5 dark:bg-white/5 p-3 rounded-xl border border-white/5 hover:border-white/20 hover:bg-black/5 dark:bg-white/10"
                  >
                    <SiGithub size={20} />
                    <span className="font-medium">View Source Code</span>
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 text-slate-600 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-slate-900 dark:text-white transition-colors bg-cyan-900/20 p-3 rounded-xl border border-cyan-500/20 hover:border-cyan-500/50 hover:bg-cyan-900/40 text-cyan-400"
                  >
                    <ExternalLink size={20} />
                    <span className="font-medium">Live Preview</span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};
