import type { Movie, Series } from "../types"

export const getBackdropUrl = (backdrop_path: string | null) => {
    if (!backdrop_path) {
        return 'https://via.placeholder.com/500x750/1a1a1a/666666?text=No+Image'
    }
    return `https://image.tmdb.org/t/p/original${backdrop_path}`
}

export const isMovie = (media: Movie | Series) => 'title' in media