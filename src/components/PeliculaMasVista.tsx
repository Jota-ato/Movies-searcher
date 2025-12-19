import { useMovesStore } from "../store"
import { getBackdropUrl } from "../helpers"

export default function PeliculaMasVista() {
    const { trendingMovies } = useMovesStore()

    // Verificar que haya películas antes de renderizar
    if (trendingMovies.length === 0) {
        return <div className="text-center p-8">Cargando...</div>
    }

    const movie = trendingMovies[0]
    const { title, overview, vote_average, release_date, backdrop_path } = movie

    return (
        <div className="flex flex-col md:flex-row">
            <div className="flex justify-center items-center" style={{ flexBasis: '40%' }}>
                <img src={getBackdropUrl(backdrop_path)} alt="Imagen de la película" />
            </div>
            <div className="p-8" style={{ flexBasis: '60%' }}>
                <h2 className="text-4xl font-bold mb-8 text-text-muted">La película más vista en este momento</h2>
                <h3 className="text-6xl font-bold mb-8">{title}</h3>
                <p className="text-justify">{overview}</p>
                <h3 className="my-8 text-4xl font-bold">Estadísticas</h3>
                <ul className="space-y-4">
                    <li className="font-bold">Calificación: <span className="font-black">{vote_average}</span></li>
                    <li className="font-bold">Fecha de estreno: <span className="font-black">{release_date}</span></li>
                </ul>
                <button className="bg-primary hover:bg-primary-hover cursor-pointer text-white font-bold py-2 px-4 rounded mt-8">Ver más información</button>
            </div>
        </div>
    )
}
