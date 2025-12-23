import MediaCard from "./MediaCard"
import type { Movie, Series } from "../types"

type MediaGridProps = {
    mediaList: Movie[] | Series[] | (Movie | Series)[]
    title: string
}

export default function MediaGrid({ mediaList, title }: MediaGridProps) {
    return (
        <section id="seriesSection" className="bg-surface p-8">
            <h2 className="text-4xl font-bold mb-8 text-text-muted">{title}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {mediaList.map(media => (
                    <MediaCard
                        media={media}
                        key={media.id}
                    />
                ))
                }
            </div>
        </section>
    )
}
