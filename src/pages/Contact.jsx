import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
// import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import { SiGithub } from '@icons-pack/react-simple-icons';
import { portfolioData } from "../data/portfolioData";
import { PageTransition } from "../components/PageTransition";


const LinkedinIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);


export const Contact = () => {
  return (
    <PageTransition>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Get In Touch</h2>
          <div className="h-1 w-20 bg-cyan-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-slate-500 dark:text-zinc-400 max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card p-8 rounded-3xl order-2 lg:order-1"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-500 dark:text-zinc-400 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-white dark:bg-zinc-950/50 border border-black/5 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all font-sans"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-500 dark:text-zinc-400 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-white dark:bg-zinc-950/50 border border-black/5 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all font-sans"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-500 dark:text-zinc-400 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full bg-white dark:bg-zinc-950/50 border border-black/5 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all font-sans resize-none"
                  placeholder="What's on your mind?"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-slate-900 text-white dark:bg-white dark:text-zinc-950 font-bold px-6 py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-slate-800 dark:hover:bg-zinc-200 transition-colors"
              >
                <Send size={18} />
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col justify-center space-y-8 order-1 lg:order-2"
          >
            <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-black/5 dark:bg-white/5 transition-colors border border-transparent hover:border-black/5 dark:border-white/10">
              <div className="p-4 bg-cyan-500/10 text-cyan-400 rounded-xl"><Mail size={24} /></div>
              <div>
                <h4 className="text-slate-900 dark:text-white font-semibold text-lg mb-1">Email</h4>
                <a href={`mailto:${portfolioData.personalInfo.email}`} className="text-slate-500 dark:text-zinc-400 hover:text-cyan-400 transition-colors">
                  {portfolioData.personalInfo.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-black/5 dark:bg-white/5 transition-colors border border-transparent hover:border-black/5 dark:border-white/10">
              <div className="p-4 bg-indigo-500/10 text-indigo-400 rounded-xl"><Phone size={24} /></div>
              <div>
                <h4 className="text-slate-900 dark:text-white font-semibold text-lg mb-1">Phone</h4>
                <p className="text-slate-500 dark:text-zinc-400">
                  {portfolioData.personalInfo.phone}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-black/5 dark:bg-white/5 transition-colors border border-transparent hover:border-black/5 dark:border-white/10">
              <div className="p-4 bg-purple-500/10 text-purple-400 rounded-xl"><MapPin size={24} /></div>
              <div>
                <h4 className="text-slate-900 dark:text-white font-semibold text-lg mb-1">Location</h4>
                <p className="text-slate-500 dark:text-zinc-400">
                  {portfolioData.personalInfo.location}
                </p>
              </div>
            </div>

            <div className="pt-8 border-t border-black/5 dark:border-white/10">
              <h4 className="text-slate-900 dark:text-white font-semibold mb-6">Connect across platforms</h4>
              <div className="flex gap-4">
                <a href={portfolioData.personalInfo.github} target="_blank" rel="noreferrer" className="p-4 glass-card rounded-xl text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:border-cyan-500/50 transition-all flex items-center justify-center">
                  <SiGithub size={24} />
                </a>
                <a href={portfolioData.personalInfo.linkedin} target="_blank" rel="noreferrer" className="p-4 glass-card rounded-xl text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:border-cyan-500/50 transition-all flex items-center justify-center">
                  {/* <Linkedin size={24} /> */}
                  <LinkedinIcon className="text-blue-600" />

                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};
