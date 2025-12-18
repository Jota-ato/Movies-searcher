
export default function BarraSuperior() {
    return (
        <div className="p-8 flex items-center justify-between gap-8 bg-surface">
            <h1 className="text-[2.6rem] font-black">Movies Searcher</h1>
            <nav className="flex items-center gap-8">
                <a className="text-2xl font-medium cursor-pointer " href="#">Inicio</a>
                <a className="text-2xl font-medium cursor-pointer " href="#">Películas</a>
                <a className="text-2xl font-medium cursor-pointer " href="#">Series</a>
                <a className="text-2xl font-medium cursor-pointer " href="#">Favoritos</a>

                <input
                    type="text"
                    className="border-b border-text-main ml-8 outline-0"
                    placeholder="Buscar..."
                />
            </nav>
        </div>
    )
}
