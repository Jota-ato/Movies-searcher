import z from 'zod'

export const movieSchema = z.object({
    id: z.number(),
    title: z.string(),
    backdrop_path: z.string(),
    poster_path: z.string(),
    overview: z.string(),
    release_date: z.string(),
    vote_average: z.number(),
    adult: z.boolean()
})

export type Movie = z.infer<typeof movieSchema>