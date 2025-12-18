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
        >
            {sliderPhotos.map((photo, idx) => (
                <SwiperSlide
                    key={idx}
                >
                    <img
                        src={photo}
                        alt={`photo ${idx}`}
                        className='w-full'
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default MySlider;