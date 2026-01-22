import projectsData from "@/data/projects.json";
import Card from "@/components/ui/card";
import FilteredProjects from "@/components/projects/FilteredProjects";

export async function generateMetadata() {
  return {
    title: `Projects`,
    description: "Showcase of programming projects by Ken Kobayashi"
  };
}

export default function ProgrammingPage() {
  // Create a lightweight version of the data for the list view to avoid passing data used for case studies
  const summaryProjects = projectsData.projects.map((p) => ({
    slug: p.slug,
    title: p.title,
    subtitle: p.subtitle,
    link: p.link,
    github: p.github,
    description: p.description,
    tech: p.tech,
    tags: p.tags,
    demo: p.demo,
    date: p.date,
  }));

  return (
    <div className="py-8">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-6 border-b-2 border-highlight pb-4">
        Software Portfolio
      </h1>

      {/* This part handles the interactivity */}
      <FilteredProjects projects={summaryProjects} />

      {/* Technical Skillset - Remains static HTML */}
      <Card className="mt-20">
        <h2 className="text-2xl font-bold mb-6 border-b border-highlight/30 pb-2 text-white">
          Technical Skillset
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projectsData.skills.map(skill => (
            <div key={skill.category} className="flex flex-col">
              <span className="text-highlight font-bold uppercase text-[12px] tracking-widest mb-1">
                {skill.category}
              </span>
              <span className="text-gray-300 text-sm leading-relaxed">
                {skill.items}
              </span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}