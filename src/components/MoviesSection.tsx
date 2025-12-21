import { useMoviesStore } from "../store"
import { getBackdropUrl } from "../helpers"
import { Link } from "react-router-dom"
import Spinner from "./Spinner"

export default function MoviesSection() {

    const { trendingMovies, isLoading } = useMoviesStore()

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
        <div id="moviesSection" className="bg-surface p-8">
            <h2 className="text-4xl font-bold mb-8 text-text-muted">More movies</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {trendingMovies.slice(0, 8).map(movie => (
                    <Link to={`/movie/${movie.id}`} key={movie.id}>
                        <div>
                            <img src={getBackdropUrl(movie.poster_path)} alt={movie.title} className="h-full w-full object-cover" />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}
