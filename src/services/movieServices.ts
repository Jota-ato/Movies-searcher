
import tmdbApi from "../api/tmdb";
import { movieSchema, seriesSchema } from "../types";
import z from "zod";

export type mediaType = "movie" | "tv";

const schemas = {
    movie: movieSchema,
    tv: seriesSchema
}

export const moviesServices = {
    getTrending: async () => {
        const [moviesRes, seriesRes] = await Promise.all([
            tmdbApi.get("/trending/movie/week"),
            tmdbApi.get("/trending/tv/week")
        ]);
        const movies = z.array(schemas.movie).parse(moviesRes.data.results)
        const series = z.array(schemas.tv).parse(seriesRes.data.results)
        return { movies, sixMovies: movies.slice(0, 6), series }
    },
    getById: async (id: number, type: mediaType) => {
        const { data } = await tmdbApi.get(`/${type}/${id}`)
        return schemas[type].parse(data)
    },
    searchMedia: async (query: string, type: mediaType) => {
        const { data } = await tmdbApi.get(`/search/${type}`, {
            params: { query }
        })
        const media = z.array(schemas[type]).parse(data.results)
        return media
    },
    searchMulti: async (query: string) => {
        const [moviesRes, seriesRes] = await Promise.all([
            tmdbApi.get(`/search/movie`, { params: { query } }),
            tmdbApi.get(`/search/tv`, { params: { query } })
        ]);
        const movies = z.array(schemas.movie).parse(moviesRes.data.results)
        const series = z.array(schemas.tv).parse(seriesRes.data.results)
        return [...movies, ...series]
    }
}