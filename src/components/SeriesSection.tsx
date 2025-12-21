import { useMoviesStore } from "../store"
import { Link } from "react-router-dom"
import { getBackdropUrl } from "../helpers"
import Spinner from "./Spinner"

export default function SeriesSection() {
    const { trendingSeries, isLoading } = useMoviesStore()

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
                    {trendingSeries.map(serie => (
                        <Link to={`/series/${serie.id}`} key={serie.id}>
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
