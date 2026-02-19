import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { ProjectSchema } from './schemas';
import projectsData from "@/data/projects.json";

const root = path.join(process.cwd(), 'content/projects');

export async function getProjectBySlug(slug) {
  const filePath = path.join(root, `${slug}.mdx`);
  const fileContent = await fs.readFile(filePath, 'utf8');
  const { data, content } = matter(fileContent);

  const validatedData = ProjectSchema.parse(data);

  return { 
    meta: {
      ...validatedData,
      date: validatedData.date.toISOString(),
    }, 
    content 
  };
}

export async function getAllProjects() {
  const files = await fs.readdir(root);

  const projects = await Promise.all(
    files
      .filter((path) => /\.mdx?$/.test(path))
      .map(async (fileName) => {
        const source = await fs.readFile(path.join(root, fileName), 'utf8');
        const { data } = matter(source);
        const slug = fileName.replace(/\.mdx?$/, '');
        
        const validatedData = ProjectSchema.parse(data);

        return {
          ...validatedData,
          slug,
          link: `/projects/${slug}`,
          date: validatedData.date.toISOString(), 
        };
      })
  );

  return projects.sort((a, b) => new Date(b.date) - new Date(a.date));
}

// Non project realated data
export async function getPortfolioMetadata() {
  return {
    skills: projectsData.skills
  };
}
