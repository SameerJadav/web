import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string().max(60),
    description: z.string().max(155),
    // Transform string to Date object
    date: z.coerce.date(),
  }),
});

export const collections = { blog };
