import { useMoviesStore } from "../store"
import Spinner from "./Spinner"
import MediaGrid from "./MediaGrid"

type MediaSectionProps = {
    mediaType: 'movie' | 'tv'
}

export default function MediaSection({ mediaType }: MediaSectionProps) {
    const { trendingSeries, isLoading, trendingMovies } = useMoviesStore()

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
            <MediaGrid
                mediaList={mediaType === 'movie' ? trendingMovies : trendingSeries}
                title={mediaType === 'movie' ? 'More movies' : 'More series'}
            />
        </>
    )
}
