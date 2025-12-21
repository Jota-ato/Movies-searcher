import { useMoviesStore } from "../store"
import { Link } from "react-router-dom"
import { getBackdropUrl } from "../helpers"
import Spinner from "./Spinner"

type MediaSectionProps = {
    mediaType: 'movie' | 'tv'
}

export default function MediaSection({ mediaType }: MediaSectionProps) {
    const { trendingSeries, isLoading, trendingMovies } = useMoviesStore()

    if (isLoading) {
        return (
            <>
                <div className='h-full w-full flex items-center justify-center'>
                    <Spinner />
                </div>
            </>
        )
    }
    if (mediaType === 'tv') {
        return (
            <>
                <div id="seriesSection" className="bg-surface p-8">
                    <h2 className="text-4xl font-bold mb-8 text-text-muted">More series</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {trendingSeries.map(serie => (
                            <Link to={`/tv/${serie.id}`} key={serie.id}>
                                <div>
                                    <img src={getBackdropUrl(serie.poster_path)} alt={serie.name} className="h-full w-full object-cover" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </>
        )
    }
    return (
        <>
            <div id="moviesSection" className="bg-surface p-8">
                <h2 className="text-4xl font-bold mb-8 text-text-muted">More movies</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {trendingMovies.map(movie => (
                        <Link to={`/movie/${movie.id}`} key={movie.id}>
                            <div>
                                <img src={getBackdropUrl(movie.poster_path)} alt={movie.title} className="h-full w-full object-cover" />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}
