import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const books = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/data/books" }),
    schema: z.object({
        title: z.string(),
        author: z.string(),
        description: z.string(),
        img: z.string(),
        buy: z.string().url()
    })
})

export const collections = { books }