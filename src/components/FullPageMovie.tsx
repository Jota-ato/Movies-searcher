import { useEffect } from "react";
import { useMoviesStore } from "../store";
import BarraSuperior from "./BarraSuperior";
import { useParams } from "react-router-dom";
import { getBackdropUrl } from "../helpers";
import ErrorLoading from "./ErrorLoading";
import Spinner from "./Spinner";

export default function FullPageMovie() {

    const { id } = useParams()
    const { getMovieById, errorAtCall, activeMovie } = useMoviesStore()


    useEffect(() => {
        getMovieById(id as string)
    }, [id, getMovieById])

    if (!id || errorAtCall) {
        return (
            <>
                <BarraSuperior />
                <ErrorLoading />
            </>
        )
    }
    if (!activeMovie) {
        return (<Spinner />)
    }
    const { title, overview, vote_average, release_date, poster_path, backdrop_path } = activeMovie!

    return (
        <>
            <div>
                <BarraSuperior />
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
                        {title}
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
                                alt={`${title} poster`}
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
                        </div>

                        {/* Statistics */}
                        <div className="bg-surface rounded-2xl p-8 shadow-lg">
                            <h2 className="text-3xl font-bold mb-6 text-primary">Movie Details</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-background rounded-xl p-6 border-l-4 border-primary transform transition-all duration-300 hover:scale-105 hover:shadow-md">
                                    <p className="text-text-muted text-sm uppercase tracking-wide mb-2">Release Date</p>
                                    <p className="text-2xl font-bold">{release_date}</p>
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
        </>
    )
}
