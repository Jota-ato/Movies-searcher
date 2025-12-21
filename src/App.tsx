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
import SeriesSection from "./components/SeriesSection"

function App() {

    const { setTrending: getTrendingMovies, getTrendingSeries, errorAtCall, resetError, isLoading, searchMediaResult: searchMoviesResults } = useMoviesStore()
    const location = useLocation()

    useEffect(() => {
        resetError()
        getTrendingMovies()
        getTrendingSeries()
    }, [location.pathname, getTrendingMovies, resetError, getTrendingSeries])

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
            {!errorAtCall && !searchMoviesResults.results.length && <SeriesSection />}
        </>
    )
}

export default App
