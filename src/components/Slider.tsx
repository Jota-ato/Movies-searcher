import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import DarkBackground from './DarkBackground';
import { Link } from 'react-router-dom';

// Importar los estilos de Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useMoviesStore } from '../store';
import { getBackdropUrl } from '../helpers';
import ErrorLoading from './ErrorLoading';
import Spinner from './Spinner';

const MySlider = () => {

    const { sixTrendingMovies: trendingMovies, errorAtCall, isLoading } = useMoviesStore()

    if (errorAtCall) {
        return (
            <>
                <div className='h-full w-full'>
                    <ErrorLoading />
                </div>
            </>
        )
    }

    if (isLoading && trendingMovies.length === 0) {
        return (
            <>
                <div className='h-full w-full flex items-center justify-center'>
                    <Spinner />
                </div>
            </>
        )
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
            {trendingMovies.map((movie) => (
                <SwiperSlide
                    key={movie.id}
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
                        <Link to={`/movie/${movie.id}`} className="text-primary font-bold mt-4">More information</Link>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default MySlider;