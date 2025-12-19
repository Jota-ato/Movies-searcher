import BarraSuperior from "./components/BarraSuperior"
import PeliculaMasVista from "./components/PeliculaMasVista"
import MySlider from "./components/Slider"
import { useMovesStore } from "./store"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"

function App() {

    const { getTrendingMovies, errorAtCall, resetError } = useMovesStore()
    const location = useLocation()

    useEffect(() => {
        resetError()
        getTrendingMovies()
    }, [location.pathname, getTrendingMovies, resetError])

    return (
        <>
            <div className="mb-20">
                <BarraSuperior />
                <div className="h-screen max-h-320">
                    <MySlider />
                </div>
            </div>
            {errorAtCall && <p className="text-center text-red-500">Error while loading the movies</p>}
            {!errorAtCall && <PeliculaMasVista />}

        </>
    )
}

export default App
