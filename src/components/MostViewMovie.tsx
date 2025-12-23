import { useMoviesStore } from "../store"
import { getBackdropUrl } from "../helpers"
import { Link } from "react-router-dom"

export default function MostViewMovie() {
    const { sixTrendingMovies: trendingMovies } = useMoviesStore()

    // Verificar que haya películas antes de renderizar
    if (trendingMovies.length === 0) {
        return <div className="text-center p-8">Loading...</div>
    }

    const movie = trendingMovies[0]
    const { title, overview, vote_average, release_date, backdrop_path } = movie

    return (
        <div className="flex flex-col md:flex-row my-20">
            <div className="flex justify-center items-center" style={{ flexBasis: '40%' }}>
                <img src={getBackdropUrl(backdrop_path)} alt="Movie poster" />
            </div>
            <div className="p-8" style={{ flexBasis: '60%' }}>
                <h2 className="text-4xl font-bold mb-8 text-text-muted">Most popular movie</h2>
                <h3 className="text-6xl font-bold mb-8">{title}</h3>
                <p className="text-justify">{overview}</p>
                <h3 className="my-8 text-4xl font-bold">Statistics</h3>
                <ul className="space-y-4 mb-8">
                    <li className="font-bold">Rating: <span className="font-black">{vote_average}</span></li>
                    <li className="font-bold">Release date: <span className="font-black">{release_date}</span></li>
                </ul>
                <Link className="bg-primary hover:bg-primary-hover cursor-pointer text-white font-bold py-2 px-4 rounded" to={`/movie/${movie.id}`}>More information</Link>
            </div>
        </div>
    )
}
