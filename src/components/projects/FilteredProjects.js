"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import Card from "@/components/ui/card";
import { GithubIcon } from "@/components/ui/icons";

export default function FilteredProjects({ projects }) {
  const [filter, setFilter] = useState("All");

  const sortedProjects = useMemo(() => {
    return [...projects].sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [projects]);

  const allTags = ["All", ...new Set(sortedProjects.flatMap(p => p.tags))];

  const filteredProjects = filter === "All" 
    ? sortedProjects 
    : sortedProjects.filter(p => p.tags.includes(filter));

  return (
    <>
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

      {/* Project Rows */}
      <div className="flex flex-col gap-8">
        {filteredProjects.map((project) => (
          <Card 
          key={project.title} 
          className="group relative p-0 hover:border-highlight/30 overflow-hidden flex flex-col md:flex-row min-h-64 transition-all ease-out"
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
          <div className="p-6 flex flex-col justify-between grow">
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

              <p className="text-sm  line-clamp-3 md:line-clamp-4 leading-relaxed font-light">
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
              
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 hover:bg-highlight rounded-lg border border-gray-700 transition-all flex items-center gap-2 group/gh"
              >
                <span className="text-xs font-medium text-gray-400 group-hover/gh:text-white">GitHub</span>
                <GithubIcon className="w-4 h-4 text-gray-500 group-hover/gh:text-white" />
              </a>
            </div>
          </div>

          {/* Invisible link overlay for the whole card */}
          <Link href={project.link} className="absolute inset-0 z-20" aria-label="Read Case Study" />
        </Card>
        ))}
      </div>
    </>
  );
}