import { z, defineCollection } from 'astro:content'

const proyectosCollection = defineCollection({

    type: 'data',
    schema: z.object({
        name: z.string(),
        description: z.string(),
        img: z.string(),
        link: z.string(),
        tags: z.array(z.string()),
        buttons: z.array(z.string()),
    }),
})

export const collections = {
    'proyectos': proyectosCollection,
}