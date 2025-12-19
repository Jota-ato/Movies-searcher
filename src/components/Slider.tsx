import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { sliderPhotos } from '../db/sliderPhotos';

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
                    <div
                        className={`h-full bg-[url(.\\${photo})] bg-cover`}
                    >
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default MySlider;