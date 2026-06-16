import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const contentDirectory = path.join(process.cwd(), 'content');

export async function getMarkdownCollection(folder) {
  const dir = path.join(contentDirectory, folder);
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((file) => file.endsWith('.md'));

  return files.map((file) => {
    const slug = file.replace(/\.md$/, '');
    const fullPath = path.join(dir, file);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || slug,
      date: data.date || '',
      excerpt: data.excerpt || '',
      type: folder,
      content,
    };
  });
}

export async function getMarkdownItem(folder, slug) {
  const fullPath = path.join(contentDirectory, folder, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const processed = await remark().use(html).process(content);

  return {
    title: data.title || slug,
    date: data.date || '',
    contentHtml: processed.toString(),
  };
}

export async function getAllSearchItems() {
  const tutorials = await getMarkdownCollection('tutorials');
  const transcripts = await getMarkdownCollection('transcripts');
  return [...tutorials, ...transcripts];
}
