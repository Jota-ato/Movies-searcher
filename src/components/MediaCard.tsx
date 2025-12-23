import { Link } from "react-router-dom"
import type { Movie, Series } from "../types"
import { getBackdropUrl, isMovie } from "../helpers"

type MediaCardProps = {
    media: Movie | Series
}

export default function MediaCard({ media }: MediaCardProps) {

    if (!isMovie(media)) {
        return (
            <Link to={`/tv/${media.id}`} key={media.id}>
                <div>
                    <img src={getBackdropUrl(media.poster_path)} alt={media.name} className="h-full w-full object-cover" />
                </div>
            </Link>
        )
    }

    return (
        <Link to={`/movie/${media.id}`} key={media.id}>
            <div>
                <img src={getBackdropUrl(media.poster_path)} alt={media.title} className="h-full w-full object-cover" />
            </div>
        </Link>
    )
}
