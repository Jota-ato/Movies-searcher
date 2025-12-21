import { create } from 'zustand'
import { moviesServices, type mediaType } from './services/movieServices'
import { type Movie, type Series } from './types'

type MovesState = {
    isSearching: boolean
    isLoading: boolean
    errorAtCall: boolean
    api_key: string
    sixTrendingMovies: Movie[]
    trendingMovies: Movie[]
    trendingSeries: Series[]
    favoriteMedia: (Movie | Series)[]
    searchMediaResult: (Movie | Series)[]
    activeMedia: Movie | Series | null
    setTrending: () => Promise<void>
    getMediaById: (id: number, type: mediaType) => Promise<void>
    searchMedia: (query: string, type: mediaType) => Promise<void>
    searchMulti: (query: string) => Promise<void>
    addToFavorites: (media: Movie | Series) => void
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
        favoriteMedia: [],
        searchMediaResult: [],
        activeMedia: null,
        setTrending: async () => {
            get().resetError()
            set({ isLoading: true })
            try {
                const { movies, sixMovies, series } = await moviesServices.getTrending()
                set({ sixTrendingMovies: sixMovies })
                set({ trendingMovies: movies })
                set({ trendingSeries: series })
            } catch (err) {
                console.log(err)
                set({ errorAtCall: true })
            } finally {
                set({ isLoading: false })
            }
        },
        getMediaById: async (id: number, type: mediaType) => {
            get().resetError()
            set({ isLoading: true })
            try {
                const media = await moviesServices.getById(id, type)
                set({ activeMedia: media })
            } catch (err) {
                console.log(err)
                set({ errorAtCall: true })
            } finally {
                set({ isLoading: false })
            }
        },
        searchMedia: async (query: string, type: mediaType) => {
            get().resetError()
            set({ isLoading: true })
            set({ isSearching: true })
            try {
                const media = await moviesServices.searchMedia(query, type)
                set({ searchMediaResult: media })
            } catch (err) {
                console.log(err)
                set({ errorAtCall: true })
            } finally {
                set({ isSearching: false })
                set({ isLoading: false })
            }
        },
        searchMulti: async (query: string) => {
            get().resetError()
            set({ isLoading: true })
            set({ isSearching: true })
            try {
                const media = await moviesServices.searchMulti(query)
                set({ searchMediaResult: media })
            } catch (err) {
                console.log(err)
                set({ errorAtCall: true })
            } finally {
                set({ isSearching: false })
                set({ isLoading: false })
            }
        },
        addToFavorites: (media: Movie | Series) => {
            const { favoriteMedia } = get()
            if (favoriteMedia.some(m => m.id === media.id)) {
                set({ favoriteMedia: favoriteMedia.filter(m => m.id !== media.id) })
            } else {
                set({ favoriteMedia: [...favoriteMedia, media] })
            }
        },
        resetError: () => {
            set({ activeMedia: null })
            set({ errorAtCall: false })
            set({ isLoading: false })
        },
    })
)