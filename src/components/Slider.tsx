import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { sliderPhotos } from '../db/sliderPhotos';
import DarkBackground from './DarkBackground';

// Importar los estilos de Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const MySlider = () => {



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
            {sliderPhotos.map((photo, idx) => (
                <SwiperSlide
                    key={idx}
                >
                    <DarkBackground>
                        <div
                            className="h-full bg-cover w-full bg-center bg-no-repeat"
                            style={{ backgroundImage: `url(./${photo})` }}
                        />
                    </DarkBackground>

                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default MySlider;