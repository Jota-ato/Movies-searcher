import BarraSuperior from "./components/BarraSuperior"
import PeliculaMasVista from "./components/PeliculaMasVista"
import MySlider from "./components/Slider"
import { useMovesStore } from "./store"
import { useEffect } from "react"

function App() {

    const { getTrendingMovies, errorAtCall } = useMovesStore()

    useEffect(() => {
        getTrendingMovies()
    }, [])

    return (
        <>
            <div className="mb-20">
                <BarraSuperior />
                <div className="h-screen max-h-320">
                    <MySlider />
                </div>
            </div>
            {errorAtCall && <p className="text-center text-red-500">Error al cargar películas</p>}
            {!errorAtCall && <PeliculaMasVista />}

        </>
    )
}

export default App
