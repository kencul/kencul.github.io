import { z } from 'zod';

export const ProjectSchema = z.object({
    title: z.string().default("Untitled Project"),
    subtitle: z.string().optional().default(""),
    date: z.string().transform((str) => new Date(str)).refine((d) => !isNaN(d.getTime()), {
      message: "Invalid date string",
    }),
    tags: z.array(z.string()).default([]),
    demo: z.string(),
    github: z.url().nullable().or(z.literal("")).optional(),
    description: z.string().max(1000, "Description is too long for the list view").default(""),
    tech: z.string().default(""),
    // Optional fields:
    ytID: z.string().optional(),
    pdf: z.string().optional(),
    externalLink: z.array(z.object({
      text: z.string(),
      url: z.url()
    })).optional(),
});

export const MusicTrackSchema = z.object({
  id: z.string(),
  title: z.string().min(1),
  artist: z.string().default("ken"),
  description: z.string(),
  type: z.enum(["audio", "youtube", "soundcloud"]),
  source: z.string().optional(),
  ytID: z.string().optional(),
  featured: z.boolean().default(false),
});

export const MusicSchema = z.array(MusicTrackSchema);
