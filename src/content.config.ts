import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const guides = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/guides' }),
  schema: z.object({
    title: z.string(),
    publication: z.enum(['published', 'wip']).default('wip'),
    description: z.string(),
    category: z.enum(['Getting Started', 'Leveling', 'Classes & Builds', 'Quests & Unlocks']),
    icon: z.enum(['compass', 'sword', 'map', 'book']),
    order: z.number(),
    updated: z.coerce.date(),
    verified: z.coerce.date().nullable().default(null),
    status: z.enum(['source-reviewed', 'needs-review', 'in-game-verified']),
    statusNote: z.string(),
    readingMinutes: z.number().int().positive(),
    tags: z.array(z.string()),
    related: z.array(z.string()).default([]),
    sources: z.array(z.object({
      title: z.string(), url: z.url(), author: z.string(),
      note: z.string(), sourceUpdated: z.string().nullable().default(null),
    })),
  }).superRefine((guide, context) => {
    if (guide.publication === 'published' && guide.sources.length === 0) {
      context.addIssue({
        code: 'custom',
        path: ['sources'],
        message: 'Published guides must include at least one source.',
      });
    }
  }),
});

export const collections = { guides };
