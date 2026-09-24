import { z, defineCollection } from "astro:content";

const blogSchema = z.object({
  title: z.string(),
  title_tr: z.string().optional(),
  description: z.string(),
  description_tr: z.string().optional(),
  pubDate: z.coerce.date(),
  updatedDate: z.string().optional(),
  heroImage: z.string().optional(),
  badge: z.string().optional(),
  badge_tr: z.string().optional(),
  author: z.string().optional().default("Kuzey Çağan Gebrecioğlu"),
  readTime: z.string().optional().default("5 min read"),
  readTime_tr: z.string().optional().default("5 dk okuma"),
  tags: z.array(z.string()).refine(items => new Set(items).size === items.length, {
    message: 'tags must be unique',
  }).optional(),
});

export type BlogSchema = z.infer<typeof blogSchema>;

const blogCollection = defineCollection({ schema: blogSchema });

export const collections = {
  'blog': blogCollection,
};