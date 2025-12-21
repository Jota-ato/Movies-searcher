import z from 'zod'

export const movieSchema = z.object({
    id: z.number(),
    title: z.string(),
    backdrop_path: z.string().nullable(),
    poster_path: z.string().nullable(),
    overview: z.string(),
    release_date: z.string(),
    vote_average: z.number(),
    adult: z.boolean()
})

export const searchMovieResultSchema = z.object({
    page: z.number(),
    results: z.array(movieSchema),
    total_pages: z.number(),
    total_results: z.number()
})

export const seriesSchema = z.object({
    id: z.number(),
    name: z.string(),
    backdrop_path: z.string().nullable(),
    poster_path: z.string().nullable(),
    overview: z.string(),
    first_air_date: z.string(),
    vote_average: z.number(),
    adult: z.boolean()
})

export const searchSeriesResultSchema = z.object({
    page: z.number(),
    results: z.array(seriesSchema),
    total_pages: z.number(),
    total_results: z.number()
})

export type Movie = z.infer<typeof movieSchema>
export type SearchMovieResult = z.infer<typeof searchMovieResultSchema>
export type Series = z.infer<typeof seriesSchema>
export type SearchSeriesResult = z.infer<typeof searchSeriesResultSchema>