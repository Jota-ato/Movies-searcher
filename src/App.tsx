import BarraSuperior from "./components/BarraSuperior"
import PeliculaMasVista from "./components/PeliculaMasVista"
import MySlider from "./components/Slider"
import { useMoviesStore } from "./store"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import Spinner from "./components/Spinner"
import ErrorLoading from "./components/ErrorLoading"

function App() {

    const { getTrendingMovies, errorAtCall, resetError, isLoading } = useMoviesStore()
    const location = useLocation()

    useEffect(() => {
        resetError()
        getTrendingMovies()
    }, [location.pathname, getTrendingMovies, resetError])

    return (
        <>
            <div>
                <BarraSuperior />
                <div className="h-screen max-h-320">
                    <MySlider />
                </div>
            </div>
            {isLoading && <Spinner />}
            {errorAtCall && <ErrorLoading />}
            {!errorAtCall && <PeliculaMasVista />}
        </>
    )
}

export default App
