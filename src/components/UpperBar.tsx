import { Link } from "react-router-dom"
import { useMoviesStore } from "../store"
import { useState } from "react"

export default function UpperBar() {
    const { searchMovies } = useMoviesStore()
    const [searchQuery, setSearchQuery] = useState("")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        console.log(value)
        setSearchQuery(value)
        searchMovies(value)
    }

    return (
        <div className="p-8 flex flex-col md:flex-row items-center justify-between gap-8 bg-surface">
            <Link to="/" className="text-[2.6rem] font-black">Movies Searcher</Link>
            <nav className="flex flex-col md:flex-row items-center gap-8">
                <Link className="text-2xl font-medium cursor-pointer " to="/">Home</Link>
                <Link className="text-2xl font-medium cursor-pointer " to="/movies">Movies</Link>
                <Link className="text-2xl font-medium cursor-pointer " to="/series">Series</Link>
                <Link className="text-2xl font-medium cursor-pointer " to="/favorites">Favorites</Link>

                <input
                    type="text"
                    className="border-b border-text-main ml-8 outline-0"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={handleChange}
                />
            </nav>
        </div>
    )
}
