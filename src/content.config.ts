import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 博客文章集合：src/content/blog/ 下的每个 .md 文件就是一篇文章
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    description: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { blog };
