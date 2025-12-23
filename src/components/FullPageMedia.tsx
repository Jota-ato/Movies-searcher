import { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { useMoviesStore } from "../store";
import { getBackdropUrl, isMovie } from "../helpers";
import UpperBar from "./UpperBar";
import ErrorLoading from "./ErrorLoading";
import Spinner from "./Spinner";
import MediaSection from "./MediaSection";
import FavoritesSection from "./FavoritesSection";
import type { mediaType } from "../services/movieServices";

export default function FullPageMedia() {
    const { id } = useParams();
    const location = useLocation();

    // Selectores Atómicos (Best Practice para evitar re-renders innecesarios)
    const activeMedia = useMoviesStore(state => state.activeMedia);
    const isLoadingMedia = useMoviesStore(state => state.isLoadingMedia);
    const errorAtCall = useMoviesStore(state => state.errorAtCall);
    const getMediaById = useMoviesStore(state => state.getMediaById);
    const setTrending = useMoviesStore(state => state.setTrending);
    const hasTrendingData = useMoviesStore(state => state.trendingMovies.length > 0);
    const addToFavorites = useMoviesStore(state => state.addToFavorites);
    const favoriteMedia = useMoviesStore(state => state.favoriteMedia);

    // Derivación de estado
    const type: mediaType = location.pathname.startsWith('/tv') ? 'tv' : 'movie';
    const isFavorite = favoriteMedia.some(m => m.id === Number(id));

    // EFECTO 1: Carga de la película/serie específica
    useEffect(() => {
        if (id) {
            getMediaById(Number(id), type);
        }
        // Solo dependemos de id y type. 
        // getMediaById es estable si viene del store de Zustand.
    }, [id, type, getMediaById]);

    // EFECTO 2: Hidratación de datos globales (Trending) si no existen
    useEffect(() => {
        if (!hasTrendingData) {
            setTrending();
        }
    }, [hasTrendingData, setTrending]);

    // Manejo de Error Crítico
    if (errorAtCall) {
        return (
            <main className="min-h-screen bg-background">
                <UpperBar />
                <ErrorLoading />
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-background text-white">
            <UpperBar />

            {/* CONTENEDOR PRINCIPAL: Aquí controlamos la carga sin desmontar el componente */}
            <div className="relative min-h-[60vh]">
                {isLoadingMedia || !activeMedia ? (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Spinner />
                    </div>
                ) : (
                    <div className="animate-in fade-in duration-700">
                        {/* Hero Section con Backdrop */}
                        <div className="relative h-[50vh] md:h-[70vh] w-full">
                            <img
                                src={getBackdropUrl(activeMedia.backdrop_path || activeMedia.poster_path)}
                                alt={isMovie(activeMedia) ? activeMedia.title : activeMedia.name}
                                className="h-full w-full object-cover opacity-40"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-background via-background/20 to-transparent" />

                            <div className="absolute bottom-0 left-0 p-8 md:p-16 w-full">
                                <h1 className="text-5xl md:text-7xl font-black mb-4">
                                    {isMovie(activeMedia) ? activeMedia.title : activeMedia.name}
                                </h1>
                                <p className="text-lg md:text-xl text-text-muted max-w-3xl line-clamp-3 mb-8">
                                    {activeMedia.overview}
                                </p>

                                <button
                                    onClick={() => addToFavorites(activeMedia)}
                                    className={`px-8 py-4 rounded-xl font-bold transition-all transform hover:scale-105 ${isFavorite
                                        ? "bg-red-500/20 text-red-500 border border-red-500/50"
                                        : "bg-primary text-white shadow-lg shadow-primary/20"
                                        }`}
                                >
                                    {isFavorite ? "♥ Remove from Favorites" : "♡ Add to Favorites"}
                                </button>
                            </div>
                        </div>

                        {/* Detalles Técnicos */}
                        <div className="container mx-auto px-8 py-12">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="bg-surface p-6 rounded-2xl border border-white/5">
                                    <h3 className="text-text-muted uppercase tracking-widest text-sm mb-2">Release Date</h3>
                                    <p className="text-2xl font-bold">
                                        {isMovie(activeMedia) ? activeMedia.release_date : activeMedia.first_air_date}
                                    </p>
                                </div>
                                <div className="bg-surface p-6 rounded-2xl border border-white/5">
                                    <h3 className="text-text-muted uppercase tracking-widest text-sm mb-2">Rating</h3>
                                    <p className="text-2xl font-bold text-yellow-500">
                                        ★ {activeMedia.vote_average.toFixed(1)} / 10
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Footer con Secciones Relacionadas */}
            <section className="mt-12 bg-surface/30 backdrop-blur-sm border-t border-white/5">
                <MediaSection mediaType="movie" />
                <MediaSection mediaType="tv" />
                <FavoritesSection />
            </section>
            <footer className="mt-12">
                <UpperBar />
            </footer>
        </main>
    );
}