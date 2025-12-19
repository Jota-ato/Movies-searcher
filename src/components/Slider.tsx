import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import DarkBackground from './DarkBackground';

// Importar los estilos de Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useMovesStore } from '../store';
import { getBackdropUrl } from '../helpers';

const MySlider = () => {

    const { trendingMovies, errorAtCall } = useMovesStore()

    if (errorAtCall || !trendingMovies.length) {
        return <p>Error al cargar películas...</p>
    }

    return (
        <Swiper
            loop={true}
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            className='h-full'
        >
            {trendingMovies.map((movie, idx) => (
                <SwiperSlide
                    key={idx}
                >
                    <DarkBackground>
                        <div
                            className="h-full w-full bg-cover bg-center bg-no-repeat"
                            style={{
                                backgroundImage: `url(${getBackdropUrl(movie.backdrop_path)})`
                            }}
                        />
                    </DarkBackground>
                    <div className="absolute inset-0 z-100 text-white p-24 w-full md:w-[70%] h-full flex flex-col justify-center">
                        <h2 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
                            {movie.title}
                        </h2>
                        <p className="text-2xl md:text-3xl mt-4 text-justify max-w-2xl">
                            {movie.overview}
                        </p>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default MySlider;