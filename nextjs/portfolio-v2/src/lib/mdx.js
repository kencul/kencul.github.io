import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const root = path.join(process.cwd(), 'content/projects');

export async function getProjectBySlug(slug) {
  const filePath = path.join(root, `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContent);

  return { meta: data, content };
}

// export async function getAllProjectsMeta() {
//   const files = fs.readdirSync(root);
//   return files.map((file) => {
//     const fileContent = fs.readFileSync(path.join(root, file), 'utf8');
//     const { data } = matter(fileContent);
//     return { ...data, slug: file.replace('.mdx', '') };
//   });
// }

export async function getAllProjects() {
  const files = fs.readdirSync(root);

  const projects = files
    .filter((path) => /\.mdx?$/.test(path))
    .map((fileName) => {
      const source = fs.readFileSync(path.join(root, fileName), 'utf8');
      const { data } = matter(source); // Only extract frontmatter
      
      return {
        ...data,
        slug: fileName.replace(/\.mdx?$/, ''),
      };
    })
    // Sort by date descending
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  return projects;
}