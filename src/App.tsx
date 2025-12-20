import UpperBar from "./components/UpperBar"
import PeliculaMasVista from "./components/PeliculaMasVista"
import MySlider from "./components/Slider"
import { useMoviesStore } from "./store"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import Spinner from "./components/Spinner"
import ErrorLoading from "./components/ErrorLoading"
import MoviesSection from "./components/MoviesSection"
import SearchedMovies from "./components/SearchedMovies"

function App() {

    const { getTrendingMovies, errorAtCall, resetError, isLoading, searchMoviesResults } = useMoviesStore()
    const location = useLocation()

    useEffect(() => {
        resetError()
        getTrendingMovies()
    }, [location.pathname, getTrendingMovies, resetError])

    return (
        <>
            <div>
                <UpperBar />
                <div className="h-screen max-h-320">
                    <MySlider />
                </div>
            </div>
            {isLoading && <Spinner />}
            {errorAtCall && <ErrorLoading />}
            {searchMoviesResults.results.length && <SearchedMovies />}
            {!errorAtCall && !searchMoviesResults.results.length && <PeliculaMasVista />}
            {!errorAtCall && !searchMoviesResults.results.length && <MoviesSection />}
        </>
    )
}

export default App
