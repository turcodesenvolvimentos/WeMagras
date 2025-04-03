import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const images = [
  "/assets/images/IMG_1407.PNG",
  "/assets/images/IMG_1408.PNG",
  "/assets/images/IMG_1409.PNG",
  "/assets/images/IMG_1410.PNG",
  "/assets/images/IMG_1411.PNG",
  "/assets/images/IMG_1412.PNG",
  "/assets/images/IMG_1413.PNG",
  "/assets/images/IMG_1414.PNG",
  "/assets/images/IMG_1415.PNG",
  "/assets/images/IMG_1416.PNG",
  "/assets/images/IMG_1417.PNG",
  "/assets/images/IMG_1418.PNG",
  "/assets/images/IMG_1419.PNG",
  "/assets/images/IMG_1420.PNG",
  "/assets/images/IMG_1421.PNG",
  "/assets/images/IMG_1422.PNG",
  "/assets/images/IMG_1423.PNG",
  "/assets/images/IMG_1424.PNG",
  "/assets/images/IMG_1425.PNG",
  "/assets/images/IMG_1426.PNG"
];

const ImageCarousel = () => {
  return (
    <div className="w-full max-w-4xl mx-auto insert_white_background_with_padding">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-[360px] h-[510px] object-cover rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageCarousel;