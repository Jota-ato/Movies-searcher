import UpperBar from "./components/UpperBar"
import PeliculaMasVista from "./components/PeliculaMasVista"
import MySlider from "./components/Slider"
import { useMoviesStore } from "./store"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import Spinner from "./components/Spinner"
import ErrorLoading from "./components/ErrorLoading"
import MoviesSection from "./components/MoviesSection"
import SearchedMedia from "./components/SearchedMovies"
import SeriesSection from "./components/SeriesSection"

function App() {

    const { setTrending, errorAtCall, resetError, isLoading, searchMediaResult } = useMoviesStore()
    const location = useLocation()

    useEffect(() => {
        resetError()
        setTrending()
    }, [location.pathname, setTrending, resetError])

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
            {searchMediaResult.length && <SearchedMedia />}
            {!errorAtCall && !searchMediaResult.length && <PeliculaMasVista />}
            {!errorAtCall && !searchMediaResult.length && <MoviesSection />}
            {!errorAtCall && !searchMediaResult.length && <SeriesSection />}
        </>
    )
}

export default App
