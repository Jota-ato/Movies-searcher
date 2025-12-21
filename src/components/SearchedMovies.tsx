import { useMoviesStore } from "../store"
import { Link } from "react-router-dom"
import { getBackdropUrl, isMovie } from "../helpers"
import Spinner from "./Spinner"

export default function SearchedMedia() {
    const { searchMediaResult, isLoading } = useMoviesStore()

    if (isLoading) {
        return (
            <>
                <div className='h-full w-full flex items-center justify-center'>
                    <Spinner />
                </div>
            </>
        )
    }
    return (
        <>
            <div id="moviesSection" className="bg-surface p-8">
                <h2 className="text-4xl font-bold mb-8 text-text-muted">Results</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {searchMediaResult.map(media => (
                        isMovie(media) ?
                            <Link to={`/movie/${media.id}`} key={media.id}>
                                <div>
                                    <img src={getBackdropUrl(media.poster_path)} alt={media.title} className="h-full w-full object-cover" />
                                </div>
                            </Link> :
                            <Link to={`/tv/${media.id}`} key={media.id}>
                                <div>
                                    <img src={getBackdropUrl(media.poster_path)} alt={media.name} className="h-full w-full object-cover" />
                                </div>
                            </Link>
                    ))}
                </div>
            </div>
        </>
    )
}
