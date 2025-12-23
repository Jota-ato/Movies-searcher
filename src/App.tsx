import UpperBar from "./components/UpperBar"
import MostViewMovie from "./components/PeliculaMasVista"
import MySlider from "./components/Slider"
import { useMoviesStore } from "./store"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import Spinner from "./components/Spinner"
import ErrorLoading from "./components/ErrorLoading"
import SearchedMedia from "./components/SearchedMovies"
import MediaSection from "./components/MediaSection"
import FavoritesSection from "./components/FavoritesSection"

function App() {

    const { setTrending, errorAtCall, resetError, isLoading, searchMediaResult } = useMoviesStore()
    const location = useLocation()

    useEffect(() => {
        resetError()
        setTrending()
    }, [location.pathname, setTrending, resetError])

    return (
        <>
            <div id="top">
                <UpperBar />
                <div className="h-screen max-h-320">
                    <MySlider />
                </div>
            </div>
            {isLoading && <Spinner />}
            {errorAtCall && <ErrorLoading />}
            {searchMediaResult.length && <SearchedMedia />}
            {!errorAtCall && !searchMediaResult.length && <MostViewMovie />}
            {!errorAtCall && <MediaSection mediaType="movie" />}
            {!errorAtCall && <MediaSection mediaType="tv" />}
            {!errorAtCall && <FavoritesSection />}
        </>
    )
}

export default App
