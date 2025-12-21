import { useMoviesStore } from "../store"
import { Link } from "react-router-dom"
import { getBackdropUrl } from "../helpers"
import Spinner from "./Spinner"
import { isMovie } from "../helpers"

export default function MediaSection() {
    const { favoriteMedia, isLoading } = useMoviesStore()

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
            <div id="favoritesSection" className="bg-surface p-8">
                <h2 className="text-4xl font-bold mb-8 text-text-muted">Favorites</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {favoriteMedia.map(media => (
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
