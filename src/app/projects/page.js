import Card from "@/components/ui/card";
import FilteredProjects from "@/components/projects/FilteredProjects";
import { getAllProjects, getPortfolioMetadata } from "@/lib/mdx";


export async function generateMetadata() {
  return {
    title: `Projects`,
    description: "Showcase of programming projects by Ken Kobayashi"
  };
}

export default async function ProgrammingPage() {

  const summaryProjects = await getAllProjects();
  const { skills } = await getPortfolioMetadata();

  return (
    <div className="py-8">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-6 border-b-2 border-highlight pb-4">
        Software Portfolio
      </h1>

      <FilteredProjects projects={summaryProjects} />

      <Card className="mt-20">
        <h2 className="text-2xl font-bold mb-6 border-b border-highlight/30 pb-2 text-white">
          Technical Skillset
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map(skills => (
            <div key={skills.category} className="flex flex-col">
              <span className="text-highlight font-bold uppercase text-[12px] tracking-widest mb-1">
                {skills.category}
              </span>
              <span className="text-gray-300 text-sm leading-relaxed">
                {skills.items}
              </span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
