import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// import { ExternalLink, Github } from "lucide-react";
import { SiGithub } from '@icons-pack/react-simple-icons';
import { portfolioData } from "../data/portfolioData";
import { PageTransition } from "../components/PageTransition";

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardItem = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
};

export const Projects = () => {
  return (
    <PageTransition>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="h-1 w-20 bg-cyan-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-zinc-400 max-w-2xl mx-auto">
            A collection of my recent work in web development, machine learning, and full-stack architecture.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {portfolioData.projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardItem}
              whileHover={{ y: -10 }}
              className="group glass-card rounded-2xl overflow-hidden flex flex-col h-full bg-zinc-900 border-white/5 shadow-2xl relative"
            >
              {/* Image Placeholder or Background Visual */}
              <div className="h-48 bg-gradient-to-br from-zinc-800 to-zinc-950 relative overflow-hidden flex items-center justify-center p-6 border-b border-white/5">
                {/* Abstract shape representing the project image */}
                <div className="absolute inset-0 bg-grid-pattern opacity-20 transition-transform duration-700 group-hover:scale-110"></div>

                <h3 className="text-3xl font-black text-white/50 group-hover:text-cyan-400 group-hover:scale-110 transition-all duration-300 z-10">
                  {project.title.substring(0, 2).toUpperCase()}
                </h3>

                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent"></div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-cyan-500 font-medium">{project.subtitle}</p>
                </div>

                <p className="text-zinc-400 text-sm mb-6 flex-grow line-clamp-3">
                  {project.description}
                </p>

                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.slice(0, 3).map((t, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-white/5 rounded-md text-zinc-300">
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="text-xs px-2 py-1 bg-white/5 rounded-md text-zinc-300">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <Link
                      to={`/projects/${project.id}`}
                      className="text-sm font-semibold text-white hover:text-cyan-400 transition-colors"
                    >
                      View Details &rarr;
                    </Link>

                    <div className="flex gap-3">
                      {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white transition-colors">
                          {/* <Github size={20} /> */}
                          <SiGithub size={20} />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white transition-colors">
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </PageTransition>
  );
};
