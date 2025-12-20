import { useMoviesStore } from "../store"
import { getBackdropUrl } from "../helpers"
import { Link } from "react-router-dom"

export default function MoviesSection() {

    const { trendingMovies } = useMoviesStore()

    return (
        <div id="moviesSection" className="bg-surface p-8">
            <h2 className="text-4xl font-bold mb-8 text-text-muted">More movies</h2>
            <div className="grid grid-cols-4 gap-4">
                {trendingMovies.map(movie => (
                    <Link to={`/movie/${movie.id}`} key={movie.id}>
                        <div>
                            <img src={getBackdropUrl(movie.poster_path)} alt={movie.title} />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}
