"use client";

import { useState, useMemo } from "react";
import projectsData from "@/data/projects.json";
import Image from "next/image";
import Link from "next/link";

export default function ProgrammingPage() {
  const [filter, setFilter] = useState("All");

  const sortedProjects = useMemo(() => {
    return [...projectsData.projects].sort((a, b) => new Date(b.date) - new Date(a.date));
  }, []);

  const allTags = ["All", ...new Set(sortedProjects.flatMap(p => p.tags))];

  const filteredProjects = filter === "All" 
    ? sortedProjects 
    : sortedProjects.filter(p => p.tags.includes(filter));

  return (
    <div className="py-8">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-6 border-b-2 border-highlight pb-4">
        Software Portfolio
      </h1>

      {/* Filter Bar */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {allTags.map(tag => (
          <button
            key={tag}
            onClick={() => setFilter(tag)}
            className={`px-6 py-1 rounded-full border transition-all font-medium ${
              filter === tag 
                ? "bg-highlight text-white border-highlight" 
                : "border-highlight-bold text-shadow-highlight-light hover:border-highlight"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Project Rows (Single Column) */}
      <div className="flex flex-col gap-8">
        {filteredProjects.map((project) => (
          <div 
            key={project.title} 
            className="group relative bg-gray-900/40 border border-gray-800 hover:border-highlight/30 rounded-xl overflow-hidden flex flex-col md:flex-row min-h-64 transition-all ease-out"
          >
            {/* Left Side: Demo Image (fixed width on desktop) */}
            <div className="w-full md:w-72 h-48 md:h-auto bg-transparent shrink-0 flex items-center justify-center p-4 relative">
              <div className="relative w-full h-full">
                <Image 
                  src={project.demo} 
                  alt={project.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 300px"
                />
              </div>
            </div>

            {/* Right Side: Content */}
            <div className="p-6 flex flex-col justify-between flex-grow">
              <div>
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-bold text-white group-hover:text-highlight transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-[10px] text-gray-500 font-mono mt-1 uppercase tracking-widest">
                    {new Date(project.date).toLocaleDateString('en-US', {year: 'numeric', month: 'short'})}
                  </span>
                </div>
                <p className="text-highlight-light italic text-sm mb-3 font-light">
                  {project.subtitle}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(t => (
                    <span key={t} className="text-[10px] uppercase tracking-tighter border border-purple-900/30 bg-purple-900/10 text-purple-300/70 px-2 py-0.5 rounded">
                      {t}
                    </span>
                  ))}
                </div>

                <p className="text-sm text-gray-400/90 line-clamp-3 md:line-clamp-4 leading-relaxed font-light">
                  {project.description}
                </p>
              </div>

              {/* Bottom Actions */}
              <div className="mt-6 flex flex-row justify-between items-center relative z-30">
                <div className="flex flex-col">
                  <span className="text-white/90 text-xs font-semibold underline decoration-purple-900/50 underline-offset-4 group-hover:text-highlight transition-colors">
                    Read Case Study &rarr;
                  </span>
                  <p className="text-xs text-gray-500 uppercase tracking-tighter mt-1 font-mono">
                    Stack: {project.tech}
                  </p>
                </div>
                
                <Link 
                  href={project.github} 
                  target="_blank" 
                  className="p-2 bg-gray-800 hover:bg-highlight rounded-lg border border-gray-700 transition-all flex items-center gap-2 group/gh"
                >
                  <span className="text-xs font-medium text-gray-400 group-hover/gh:text-white">GitHub</span>
                  <svg className="w-4 h-4 fill-current text-gray-500 group-hover/gh:text-white" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Invisible link overlay for the whole card */}
            <Link href={project.link} className="absolute inset-0 z-20" aria-label="Read Case Study" />
          </div>
        ))}
      </div>

      {/* Technical Skillset */}
      <div className="mt-20 p-8 rounded-xl bg-gray-900/40 border border-purple-900/50">
        <h2 className="text-2xl font-bold mb-6 border-b border-highlight/30 pb-2 text-white">Technical Skillset</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projectsData.skills.map(skill => (
            <div key={skill.category} className="flex flex-col">
              <span className="text-highlight font-bold uppercase text-[12px] tracking-widest mb-1">{skill.category}</span>
              <span className="text-gray-300 text-sm leading-relaxed">{skill.items}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}