
import React from "react";
import { motion } from "framer-motion";
import { config } from "../../data/config";
import { 
  Code2, 
  Server, 
  Database, 
  Cloud, 
  Brain, 
  Smartphone, 
  Boxes, 
  Wrench 
} from "lucide-react";

const categoryIcons = {
  "Frontend": Code2,
  "Backend": Server,
  "Database": Database,
  "DevOps & Cloud": Cloud,
  "AI": Brain,
  "Mobile": Smartphone,
  "Architecture": Boxes,
  "Tools & Others": Wrench
};

const categoryColors = {
  "Frontend": "from-blue-500 to-cyan-500",
  "Backend": "from-green-500 to-emerald-500",
  "Database": "from-purple-500 to-pink-500",
  "DevOps & Cloud": "from-orange-500 to-red-500",
  "AI": "from-violet-500 to-purple-500",
  "Mobile": "from-teal-500 to-green-500",
  "Architecture": "from-indigo-500 to-blue-500",
  "Tools & Others": "from-amber-500 to-orange-500"
};

const SkillCard = ({ category, items, index }) => {
  const Icon = categoryIcons[category] || Code2;
  const gradient = categoryColors[category] || "from-slate-500 to-slate-600";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
      className="group relative"
    >
      <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl -z-10"
           style={{ background: `linear-gradient(135deg, var(--tw-gradient-stops))` }} />
      
      <div className="h-full p-6 bg-white rounded-2xl shadow-sm border border-slate-200 hover:shadow-2xl hover:border-transparent transition-all duration-500 relative overflow-hidden">
        {/* Gradient overlay on hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
        
        {/* Icon header */}
        <div className="flex items-center gap-3 mb-5">
          <div className={`p-3 rounded-xl bg-gradient-to-br ${gradient} shadow-lg group-hover:scale-110 transition-transform duration-500`}>
            <Icon className="text-white" size={24} />
          </div>
          <h3 className="text-xl font-bold text-slate-900 group-hover:text-gray-400 group-hover:bg-gradient-to-r group-hover:bg-clip-text transition-all duration-500"
              style={{ backgroundImage: `linear-gradient(135deg, var(--tw-gradient-stops))` }}>
            {category}
          </h3>
        </div>

        {/* Skills grid */}
        <div className="flex flex-wrap gap-2">
          {items.map((skill, idx) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 + idx * 0.05 }}
              whileHover={{ scale: 1.1, y: -2 }}
              className="px-3 py-1.5 bg-gradient-to-r from-slate-50 to-slate-100 text-slate-700 text-sm font-medium rounded-lg border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all duration-300 cursor-default"
            >
              {skill}
            </motion.span>
          ))}
        </div>

        {/* Skill count badge */}
        <div className="absolute top-4 right-4 px-2.5 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-full border border-slate-200">
          {items.length} skills
        </div>
      </div>
    </motion.div>
  );
};

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="py-16">
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 id="skills-title" className="text-4xl font-bold mb-3 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Full-stack expertise across modern web technologies, cloud platforms, and AI integrations
          </p>
        </motion.div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(config.skills).map(([category, items], index) => (
          <SkillCard 
            key={category} 
            category={category} 
            items={items} 
            index={index} 
          />
        ))}
      </div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-12 p-6 bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl shadow-xl"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-white mb-1">
              {Object.values(config.skills).flat().length}+
            </div>
            <div className="text-slate-300 text-sm">Technologies</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-1">9+</div>
            <div className="text-slate-300 text-sm">Years Experience</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-1">30+</div>
            <div className="text-slate-300 text-sm">Projects Delivered</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-1">15+</div>
            <div className="text-slate-300 text-sm">Team Size Led</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

