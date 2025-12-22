import { useEffect } from "react";
import { useMoviesStore } from "../store";
import UpperBar from "./UpperBar";
import { useParams, useLocation } from "react-router-dom";
import { getBackdropUrl, isMovie } from "../helpers";
import ErrorLoading from "./ErrorLoading";
import Spinner from "./Spinner";
import MediaSection from "./MediaSection";
import FavoritesSection from "./FavoritesSection";
import type { mediaType } from "../services/movieServices";

export default function FullPageMedia() {

    const { id } = useParams()
    const location = useLocation()
    const { getMediaById, errorAtCall, activeMedia, addToFavorites, trendingMovies, trendingSeries, setTrending, favoriteMedia } = useMoviesStore()

    // Determine media type from URL path
    const type: mediaType = location.pathname.startsWith('/tv') ? 'tv' : 'movie'
    const isMediaInFavorites = favoriteMedia.some(media => media.id === +id!)

    useEffect(() => {
        getMediaById(Number(id!), type)
        if (trendingMovies.length === 0 || trendingSeries.length === 0) {
            setTrending()
        }
    }, [id, type, getMediaById, trendingMovies.length, trendingSeries.length, setTrending])

    if (!id || errorAtCall) {
        return (
            <>
                <UpperBar />
                <ErrorLoading />
            </>
        )
    }
    if (!activeMedia) {
        return (<Spinner />)
    }

    const { overview, vote_average, poster_path, backdrop_path } = activeMedia
    const isMovieMedia = isMovie(activeMedia)

    return (
        <>
            <div>
                <UpperBar />
            </div>

            {/* Hero section with backdrop */}
            <div className="relative w-full h-96 mb-12 overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-sm scale-110"
                    style={{ backgroundImage: `url(${getBackdropUrl(backdrop_path!)})` }}
                />
                <div className="absolute inset-0 bg-linear-to-t from-background via-background/80 to-transparent" />
                <div className="relative z-10 h-full flex items-end justify-center pb-12">
                    <h1 className="text-5xl md:text-7xl font-black text-white text-center px-8 drop-shadow-2xl">
                        {isMovieMedia ? activeMedia.title : activeMedia.name}
                    </h1>
                </div>
            </div>

            {/* Main content */}
            <div className="container mx-auto px-8 pb-16">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Poster */}
                    <div className="lg:w-1/3">
                        <div className="sticky top-8">
                            <img
                                className="rounded-2xl shadow-2xl w-full transform transition-transform duration-300 hover:scale-105"
                                src={getBackdropUrl(poster_path!)}
                                alt={`${isMovieMedia ? activeMedia.title : activeMedia.name} poster`}
                            />
                            {/* Rating badge */}
                            <div className="mt-6 bg-linear-to-r from-primary to-primary-hover rounded-xl p-6 shadow-lg">
                                <div className="flex items-center justify-between">
                                    <span className="text-white text-lg font-semibold">Rating</span>
                                    <span className="text-white text-3xl font-black">{vote_average.toFixed(1)}</span>
                                </div>
                                <div className="mt-2 bg-white/20 rounded-full h-2 overflow-hidden">
                                    <div
                                        className="bg-white h-full rounded-full transition-all duration-500"
                                        style={{ width: `${(vote_average / 10) * 100}%` }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Details */}
                    <div className="lg:w-2/3 space-y-8">
                        {/* Overview */}
                        <div className="bg-surface rounded-2xl p-8 shadow-lg">
                            <h2 className="text-3xl font-bold mb-4 text-primary">Overview</h2>
                            <p className="text-xl leading-relaxed text-text-main">{overview}</p>
                            <button
                                onClick={() => addToFavorites(activeMedia!)}
                                className="bg-danger hover:bg-danger-hover text-white rounded-xl p-6 shadow-lg my-8 cursor-pointer">{isMediaInFavorites ? 'Remove from favorites' : 'Add to favorites'}</button>
                        </div>

                        {/* Statistics */}
                        <div className="bg-surface rounded-2xl p-8 shadow-lg">
                            <h2 className="text-3xl font-bold mb-6 text-primary">Movie Details</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-background rounded-xl p-6 border-l-4 border-primary transform transition-all duration-300 hover:scale-105 hover:shadow-md">
                                    <p className="text-text-muted text-sm uppercase tracking-wide mb-2">Release Date</p>
                                    <p className="text-2xl font-bold">{isMovieMedia ? activeMedia.release_date : activeMedia.first_air_date}</p>
                                </div>
                                <div className="bg-background rounded-xl p-6 border-l-4 border-primary transform transition-all duration-300 hover:scale-105 hover:shadow-md">
                                    <p className="text-text-muted text-sm uppercase tracking-wide mb-2">Average Rating</p>
                                    <p className="text-2xl font-bold">{vote_average} / 10</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                {!errorAtCall && <MediaSection mediaType="movie" />}
                {!errorAtCall && <MediaSection mediaType="tv" />}
                {!errorAtCall && <FavoritesSection />}
            </div>
        </>
    )
}
