import { create } from 'zustand'
import axios from 'axios'
import z from 'zod'

const movieSchema = z.object({
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

type MovesState = {
    errorAtCall: boolean
    api_key: string
    trendingMovies: Movie[]
    getTrendingMovies: () => Promise<void>
}

export const useMovesStore = create<MovesState>()(
    (set, get) => ({
        errorAtCall: false,
        api_key: import.meta.env.VITE_API_KEY,
        trendingMovies: [],
        getTrendingMovies: async () => {
            try {
                const { data } = await axios(`https://api.themoviedb.org/3/trending/movie/week?api_key=${get().api_key}`)

                const fiveMovies = z.array(movieSchema).parse(data.results.slice(0, 6))
                console.log(fiveMovies)
                set({ trendingMovies: fiveMovies })
            } catch (err) {
                console.log(err)
                set({ errorAtCall: true })
            }
        },
    })
)