import { create } from 'zustand'
import { moviesServices, type mediaType } from './services/movieServices'
import { type Movie, type Series } from './types'
import { persist } from 'zustand/middleware'

type MovesState = {
    isSearching: boolean
    isLoadingMedia: boolean
    isLoadingTrending: boolean
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
    persist((set, get) => ({
        isSearching: false,
        isLoadingMedia: false,
        isLoadingTrending: false,
        errorAtCall: false,
        api_key: import.meta.env.VITE_API_KEY,
        sixTrendingMovies: [],
        trendingMovies: [],
        trendingSeries: [],
        favoriteMedia: [],
        searchMediaResult: [],
        activeMedia: null,
        setTrending: async () => {
            set({ errorAtCall: false, isLoadingTrending: true })
            try {
                const { movies, sixMovies, series } = await moviesServices.getTrending()
                set({ sixTrendingMovies: sixMovies })
                set({ trendingMovies: movies })
                set({ trendingSeries: series })
            } catch (err) {
                console.log(err)
                set({ errorAtCall: true })
            } finally {
                set({ isLoadingTrending: false })
            }
        },
        getMediaById: async (id: number, type: mediaType) => {
            set({ errorAtCall: false, activeMedia: null, isLoadingMedia: true })
            try {
                const media = await moviesServices.getById(id, type)
                set({ activeMedia: media })
            } catch (err) {
                console.log(err)
                set({ errorAtCall: true })
            } finally {
                set({ isLoadingMedia: false })
            }
        },
        searchMedia: async (query: string, type: mediaType) => {
            get().resetError()
            set({ isLoadingMedia: true })
            set({ isSearching: true })
            try {
                const media = await moviesServices.searchMedia(query, type)
                set({ searchMediaResult: media })
            } catch (err) {
                console.log(err)
                set({ errorAtCall: true })
            } finally {
                set({ isSearching: false })
                set({ isLoadingMedia: false })
            }
        },
        searchMulti: async (query: string) => {
            get().resetError()
            set({ isLoadingMedia: true })
            set({ isSearching: true })
            try {
                const media = await moviesServices.searchMulti(query)
                set({ searchMediaResult: media })
            } catch (err) {
                console.log(err)
                set({ errorAtCall: true })
            } finally {
                set({ isSearching: false })
                set({ isLoadingMedia: false })
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
            set({ errorAtCall: false })
            set({ isLoadingMedia: false })
        },
    }), {
        name: 'movie-storage',
        partialize: (state) => ({
            favoriteMedia: state.favoriteMedia,
        }),
    })
)