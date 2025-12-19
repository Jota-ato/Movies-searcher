
export default function BarraSuperior() {
    return (
        <div className="p-8 flex flex-col md:flex-row items-center justify-between gap-8 bg-surface">
            <h1 className="text-[2.6rem] font-black">Movies Searcher</h1>
            <nav className="flex flex-col md:flex-row items-center gap-8">
                <a className="text-2xl font-medium cursor-pointer " href="#">Home</a>
                <a className="text-2xl font-medium cursor-pointer " href="#">Movies</a>
                <a className="text-2xl font-medium cursor-pointer " href="#">Series</a>
                <a className="text-2xl font-medium cursor-pointer " href="#">Favorites</a>

                <input
                    type="text"
                    className="border-b border-text-main ml-8 outline-0"
                    placeholder="Search..."
                />
            </nav>
        </div>
    )
}
