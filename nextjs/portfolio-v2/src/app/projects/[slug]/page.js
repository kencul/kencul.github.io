import { getProjectBySlug } from "@/lib/mdx";
import { mdxComponents } from "@/components/mdx-components";
import { MDXRemote } from "next-mdx-remote/rsc";
import { GithubIcon } from "@/components/ui/icons";
import { FileText } from 'lucide-react';
import Link from "next/link";
import Card from "@/components/ui/card";

export async function generateMetadata({ params }) {
    const { slug } = await params;
    
    try {
      const { meta } = await getProjectBySlug(slug);
  
      return {
        title: `${meta.title}`,
        description: meta.description,
      };
    } catch (error) {
      return {
        title: "Project Not Found",
      };
    }
  }

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const { meta, content } = await getProjectBySlug(slug);

  const formattedDate = new Date(meta.date).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <article className="py-6">
      <header className="mb-8 border-b-2 border-highlight pb-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2">{meta.title}</h1>
        <p className="text-xl text-highlight italic font-light mb-2">{meta.subtitle}</p>
        <time className="block text-sm text-gray-400 tracking-wider mb-2">
          {formattedDate}
        </time>
        
        <div className="flex flex-wrap gap-4 mt-6">
            <Link 
                href={meta.github}
                target="_blank"
                className="px-4 py-2 bg-gray-800 border border-gray-700 hover:bg-highlight rounded text-sm transition-all flex items-center gap-2 group"
            >
                <GithubIcon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                <span>Source Code</span>
            </Link>
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
        </div>
      </header>

      <Card className="w-full max-w-4xl mx-auto p-0 rounded-xl overflow-hidden mb-12 aspect-video">
        <iframe className="w-full h-full" src={meta.videoEmbed} allowFullScreen />
      </Card>

      {/* Injecting the MDX Content */}
      <MDXRemote source={content} components={mdxComponents} />
    </article>
  );
}