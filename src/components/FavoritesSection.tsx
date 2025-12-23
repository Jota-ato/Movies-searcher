import { useMoviesStore } from "../store"
import Spinner from "./Spinner"
import MediaGrid from "./MediaGrid"

export default function MediaSection() {
    const { favoriteMedia, isLoading } = useMoviesStore()

    if (isLoading) {
        return (
            <>
                <div className='h-full w-full flex items-center justify-center'>
                    <Spinner />
                </div>
            </>
        )
    }

    return (
        <>
            <section id="favoritesSection" className="bg-surface p-8">
                <MediaGrid
                    mediaList={favoriteMedia}
                    title="Favorites"
                />
            </section>
        </>
    )
}
