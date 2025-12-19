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

    const { trendingMovies } = useMovesStore()

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

                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default MySlider;