import { create } from 'zustand'
import axios from 'axios'
import z from 'zod'
import { movieSchema, searchMovieResultSchema, type Movie, type SearchMovieResult, searchSeriesResultSchema, type Series } from './types'

type MovesState = {
    isSearching: boolean
    isLoading: boolean
    errorAtCall: boolean
    api_key: string
    sixTrendingMovies: Movie[]
    trendingMovies: Movie[]
    trendingSeries: Series[]
    searchMoviesResults: SearchMovieResult
    activeMovie: Movie | null
    activeSeries: Series | null
    getTrendingMovies: () => Promise<void>
    getMovieById: (id: string) => Promise<void>
    searchMovies: (query: string) => Promise<void>
    getTrendingSeries: () => Promise<void>
    getSeriesById: (id: string) => Promise<void>
    resetError: () => void
}

export const useMoviesStore = create<MovesState>()(
    (set, get) => ({
        isSearching: false,
        isLoading: false,
        errorAtCall: false,
        api_key: import.meta.env.VITE_API_KEY,
        sixTrendingMovies: [],
        trendingMovies: [],
        trendingSeries: [],
        searchMoviesResults: { results: [], total_pages: 0, total_results: 0, page: 0 },
        activeMovie: null,
        activeSeries: null,
        getTrendingMovies: async () => {
            get().resetError()
            set({ isLoading: true })
            try {
                const { data } = await axios(`https://api.themoviedb.org/3/trending/movie/week?api_key=${get().api_key}`)

                const TrendingMovies = z.array(movieSchema).parse(data.results)
                const sixMovies = TrendingMovies.slice(0, 6)
                set({ sixTrendingMovies: sixMovies })
                set({ trendingMovies: TrendingMovies })
            } catch (err) {
                console.log(err)
                set({ errorAtCall: true })
            } finally {
                set({ isLoading: false })
            }
        },
        getMovieById: async (id: string) => {
            get().resetError()
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
        getSeriesById: async (id: string) => {
            get().resetError()
            set({ isLoading: true })
            try {
                const findUrl = `https://api.themoviedb.org/3/tv/${id}?api_key=${get().api_key}`
                const { data } = await axios(findUrl)
                set({ activeSeries: data })
            } catch (err) {
                console.log(err)
                set({ errorAtCall: true })
            } finally {
                set({ isLoading: false })
            }
        },
        searchMovies: async (query: string) => {
            get().resetError()
            set({ isLoading: true })
            set({ isSearching: true })
            try {
                const searchUrl = `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&api_key=${get().api_key}&query=${query}`;
                console.log(query)

                const { data } = await axios(searchUrl)
                const result = searchMovieResultSchema.parse(data)
                console.log(result)
                set({ searchMoviesResults: result })
            } catch (err) {
                console.log(err)
                set({ errorAtCall: true })
            } finally {
                set({ isSearching: false })
                set({ isLoading: false })
            }
        },
        getTrendingSeries: async () => {
            get().resetError()
            set({ isLoading: true })
            try {
                const tvUrl = `https://api.themoviedb.org/3/discover/tv?api_key=${get().api_key}`
                const { data } = await axios(tvUrl)
                console.log(data)

                const result = searchSeriesResultSchema.parse(data)
                console.log(result)
                set({ trendingSeries: result.results })
                console.log(get().trendingSeries)
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