import { create } from 'zustand'
import axios from 'axios'
import z from 'zod'
import { movieSchema, type Movie } from './types'

type MovesState = {
    isLoading: boolean
    errorAtCall: boolean
    api_key: string
    trendingMovies: Movie[]
    activeMovie: Movie | null
    getTrendingMovies: () => Promise<void>
    getMovieById: (id: string) => Promise<void>
    resetError: () => void
}

export const useMoviesStore = create<MovesState>()(
    (set, get) => ({
        isLoading: false,
        errorAtCall: false,
        api_key: import.meta.env.VITE_API_KEY,
        trendingMovies: [],
        activeMovie: null,
        getTrendingMovies: async () => {
            set({ isLoading: true })
            try {
                const { data } = await axios(`https://api.themoviedb.org/3/trending/movie/week?api_key=${get().api_key}`)

                const sixMovies = z.array(movieSchema).parse(data.results.slice(0, 6))
                set({ trendingMovies: sixMovies })
            } catch (err) {
                console.log(err)
                set({ errorAtCall: true })
            } finally {
                set({ isLoading: false })
            }
        },
        getMovieById: async (id: string) => {
            set({ isLoading: true })
            try {
                const findUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${get().api_key}`
                const { data } = await axios(findUrl)
                set({ activeMovie: data })
            } catch (err) {
                console.log(err)
                set({ errorAtCall: true })
            } finally {
                set({ isLoading: false })
            }
        },
        resetError: () => {
            set({ activeMovie: null })
            set({ errorAtCall: false })
            set({ isLoading: false })
        },
    })
)