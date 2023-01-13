import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
function Concious() {
  const [swiperRef, setSwiperRef] = useState(0);
  const prevHandler = () => {
    swiperRef.slidePrev();
  };

  const nextHandler = () => {
    swiperRef.slideNext();
  };
  return (
    <>
      <div>
        <button onClick={prevHandler} className="border w-[200px] text-center">
          prev
        </button>
        <button onClick={nextHandler} className="border w-[200px] text-center">
          next
        </button>
      </div>
      <Swiper
        onSwiper={(swiper) => setSwiperRef(swiper)}
        pagination={{
          type: "progressbar",
        }}
       
        modules={[Pagination, Navigation]}
        navigation={true}
        style={{
          "--swiper-pagination-color": "green",
        }}
      >
        <SwiperSlide>
          <img src="/forest.jpg" h-96 alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/forest.jpg" h-96 alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/forest.jpg" h-96 alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/forest.jpg" h-96 alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
export default Concious;
