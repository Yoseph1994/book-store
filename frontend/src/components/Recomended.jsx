import Card from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useGetAllBooksQuery } from "../redux/features/services/BookApi";
function Recomended() {
  const { data } = useGetAllBooksQuery();
  const books = data?.books;

  return (
    <div className="py-10">
      <h2 className="text-3xl font-semibold mb-6">Recommended</h2>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1180: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {books?.length > 0 &&
          books?.map((book, index) => (
            <SwiperSlide key={index}>
              <Card book={book} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}

export default Recomended;
