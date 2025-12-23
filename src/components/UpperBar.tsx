import { Link } from "react-router-dom"
import { useMoviesStore } from "../store"
import { useState, useEffect } from "react"
import { useDebounce } from "../hooks/useDebounce"

export default function UpperBar() {
    const { searchMulti } = useMoviesStore()
    const [searchQuery, setSearchQuery] = useState("")
    const debouncedSearchQuery = useDebounce(searchQuery, 500)

    useEffect(() => {
        searchMulti(debouncedSearchQuery)
    }, [debouncedSearchQuery, searchMulti])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setSearchQuery(value)
    }

    return (
        <header className="p-8 flex flex-col md:flex-row items-center justify-between gap-8 bg-surface">
            <Link to="/" className="flex items-center gap-5 group no-underline">
                <div className="relative flex items-center justify-center w-16 h-16 bg-linear-to-tr from-primary/20 to-primary/5 rounded-2xl border border-primary/20 shadow-lg shadow-primary/5 transition-all duration-300 group-hover:scale-105 group-hover:shadow-primary/20 group-hover:border-primary/40">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-9 h-9 text-primary transition-transform duration-500 ease-out group-hover:rotate-12"
                    >
                        <rect width="18" height="18" x="3" y="3" rx="2" />
                        <path d="M7 3v18" />
                        <path d="M3 7.5h4" />
                        <path d="M3 12h18" />
                        <path d="M3 16.5h4" />
                        <path d="M17 3v18" />
                        <path d="M17 7.5h4" />
                        <path d="M17 16.5h4" />
                    </svg>
                </div>
                <div className="flex flex-col">
                    <h1 className="text-4xl font-black tracking-tight leading-none text-white">
                        Movie<span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-400">Searcher</span>
                    </h1>
                    <span className="text-xs font-bold tracking-[0.3em] text-gray-400 uppercase mt-1.5 ml-0.5 group-hover:text-primary/80 transition-colors">
                        Cinema Collection
                    </span>
                </div>
            </Link>
            <nav className="flex flex-col md:flex-row items-center gap-8">
                <Link className="text-2xl font-medium cursor-pointer hover:text-primary transition-colors" to="/">Home</Link>
                <a className="text-2xl font-medium cursor-pointer hover:text-primary transition-colors" href="#moviesSection">Movies</a>
                <a className="text-2xl font-medium cursor-pointer hover:text-primary transition-colors" href="#seriesSection">Series</a>
                <a className="text-2xl font-medium cursor-pointer hover:text-primary transition-colors" href="#favoritesSection">Favorites</a>

                <input
                    id="search"
                    name="search"
                    type="text"
                    className="border-b border-text-main ml-8 outline-0"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={handleChange}
                />
            </nav>
        </header>
    )
}
