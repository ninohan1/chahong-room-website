import { defineCollection, z } from 'astro:content';

const treatments = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.enum(['haircut', 'coloring', 'scalp-care', 'perm', 'foreigner', 'seo']),
    featuredImage: z.string().optional(),
    description: z.string(),
    seoTitle: z.string().optional(),
    metaDescription: z.string().optional(),
    pubDate: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { treatments };
