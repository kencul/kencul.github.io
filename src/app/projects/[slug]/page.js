import { getProjectBySlug, getAllProjects} from "@/lib/mdx";
import { mdxComponents } from "@/components/mdx-components";
import { MDXRemote } from "next-mdx-remote/rsc";
import { GithubIcon, LinkIcon} from "@/components/ui/icons";
import { FileText } from 'lucide-react';
import Link from "next/link";
// import Card from "@/components/ui/card";
import LiteVideo from "@/components/ui/LiteVideo"
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  
  try {
    const { meta } = await getProjectBySlug(slug);

    return {
      title: `${meta.title}`,
      description: meta.description,
      alternates: {
        canonical: `https://www.kenmusic.net/projects/${slug}`,
      },
      other: {
        rel: "preconnect",
        url: "https://i.ytimg.com",
      },
    };
  } catch (error) {
    return {
      title: "Project Not Found",
    };
  }
}

export async function generateStaticParams() {
  const projects = await getAllProjects();
  
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export const dynamicParams = false;

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug).catch(() => null);
  if (!project) notFound();

  const { meta, content } = project;

  const formattedDate = new Date(meta.date).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <article className="py-6 max-w-4xl mx-auto px-4 min-w-0 w-full">
      <header className="mb-8 border-b-2 border-highlight pb-6">

        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2">{meta.title}</h1>
        <h2 className="text-xl text-highlight italic font-light mb-2">{meta.subtitle}</h2>
        <time className="block text-sm text-gray-400 tracking-wider mb-2">
          {formattedDate}
        </time>
        
        <div className="flex flex-wrap gap-4 mt-4">
          {meta.github && (
          <Link 
              href={meta.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-800 border border-gray-700 hover:bg-highlight rounded text-sm transition-all flex items-center gap-2 group"
          >
              <GithubIcon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              <span>Source Code</span>
          </Link>
          )}
          {meta.pdf && (
          <Link 
              href={meta.pdf}
              download 
              className="px-4 py-2 bg-gray-800 border border-gray-700 hover:bg-highlight rounded text-sm transition-all flex items-center gap-2 group"
          >
              <FileText size={20} className="text-gray-400 group-hover:text-white transition-colors" />
              <span>Thesis Paper</span>
          </Link>
          )}
          {meta.externalLink?.map((link, index) => (
            <Link 
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-800 border border-gray-700 hover:bg-highlight rounded text-sm transition-all flex items-center gap-2 group"
            >
              <LinkIcon className="w-5 h-5 fill-none stroke-current text-gray-400 group-hover:text-white transition-colors" />
              <span>{link.text}</span>
            </Link>
          ))}
        </div>
      </header>
      
      {meta.ytID &&(
      <LiteVideo className="max-w-4xl mb-12" id={meta.ytID} title={meta.title}/>
      )}

      <MDXRemote 
        source={content} 
        components={mdxComponents} 
        options={{
          parseFrontmatter: true,
          blockJS: false,
          blockDangerousJS: true
        }}
      />
      
    </article>
  );
}
