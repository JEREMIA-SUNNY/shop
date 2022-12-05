import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
function Ourbrand() {
  return (
    <>
      {/* <Swiper
        slidesPerView={1}
        spaceBetween={50}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="w-[100%] flex justify-center items-center h-[100%]"
      >
        <SwiperSlide className="flex justify-center"><div className=" flex justify-center">
                <div className="flex flex-col transition duration-300 bg-white rounded shadow-sm hover:shadow">
                  <div className="relative w-full h-48">
                    <img
                      src="https://images.pexels.com/photos/3184305/pexels-photo-3184305.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                      className="object-cover w-full h-full rounded-t"
                      alt="Plan"
                    />
                  </div>
                  <div className="flex flex-col justify-between flex-grow p-8 border border-t-0 rounded-b">
                    <div>
                      <div className="text-lg font-semibold">Basic</div>
                      <p className="text-sm text-gray-900">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem doloremque.
                      </p>
                      <div className="mt-1 mb-4 mr-1 text-4xl font-bold sm:text-5xl">
                        $12
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col transition duration-300 bg-white rounded shadow-sm hover:shadow">
                  <div className="relative w-full h-48">
                    <img
                      src="https://images.pexels.com/photos/3184305/pexels-photo-3184305.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                      className="object-cover w-full h-full rounded-t"
                      alt="Plan"
                    />
                  </div>
                  <div className="flex flex-col justify-between flex-grow p-8 border border-t-0 rounded-b">
                    <div>
                      <div className="text-lg font-semibold">Basic</div>
                      <p className="text-sm text-gray-900">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem doloremque.
                      </p>
                      <div className="mt-1 mb-4 mr-1 text-4xl font-bold sm:text-5xl">
                        $12
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col transition duration-300 bg-white rounded shadow-sm hover:shadow">
                  <div className="relative w-full h-48">
                    <img
                      src="https://images.pexels.com/photos/3184305/pexels-photo-3184305.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                      className="object-cover w-full h-full rounded-t"
                      alt="Plan"
                    />
                  </div>
                  <div className="flex flex-col justify-between flex-grow p-8 border border-t-0 rounded-b">
                    <div>
                      <div className="text-lg font-semibold">Basic</div>
                      <p className="text-sm text-gray-900">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem doloremque.
                      </p>
                      <div className="mt-1 mb-4 mr-1 text-4xl font-bold sm:text-5xl">
                        $12
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col transition duration-300 bg-white rounded shadow-sm hover:shadow">
                  <div className="relative w-full h-48">
                    <img
                      src="https://images.pexels.com/photos/3184305/pexels-photo-3184305.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                      className="object-cover w-full h-full rounded-t"
                      alt="Plan"
                    />
                  </div>
                  <div className="flex flex-col justify-between flex-grow p-8 border border-t-0 rounded-b">
                    <div>
                      <div className="text-lg font-semibold">Basic</div>
                      <p className="text-sm text-gray-900">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem doloremque.
                      </p>
                      <div className="mt-1 mb-4 mr-1 text-4xl font-bold sm:text-5xl">
                        $12
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col transition duration-300 bg-white rounded shadow-sm hover:shadow">
                  <div className="relative w-full h-48">
                    <img
                      src="https://images.pexels.com/photos/3183181/pexels-photo-3183181.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                      className="object-cover w-full h-full rounded-t"
                      alt="Plan"
                    />
                  </div>
                  <div className="flex flex-col justify-between flex-grow p-8 border border-t-0 rounded-b">
                    <div>
                      <div className="text-lg font-semibold">Advanced</div>
                      <p className="text-sm text-gray-900">
                        A flower in my garden, a mystery in my panties. Heart
                        attack never was so close.
                      </p>
                      <div className="mt-1 mb-4 mr-1 text-4xl font-bold sm:text-5xl">
                        $38
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col transition duration-300 bg-white rounded shadow-sm hover:shadow">
                  <div className="relative w-full h-48">
                    <img
                      src="https://images.pexels.com/photos/3182743/pexels-photo-3182743.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                      className="object-cover w-full h-full rounded-t"
                      alt="Plan"
                    />
                  </div>
                  <div className="flex flex-col justify-between flex-grow p-8 border border-t-0 rounded-b">
                    <div>
                      <div className="text-lg font-semibold">Pro</div>
                      <p className="text-sm text-gray-900">
                        We never had the chance to. Maybe it was the eleven
                        months he spent in the womb.
                      </p>
                      <div className="mt-1 mb-4 mr-1 text-4xl font-bold sm:text-5xl">
                        $78
                      </div>
                    </div>
                  </div>
                </div>
                <div>sfdsf</div>
              </div></SwiperSlide>
        <SwiperSlide className="flex justify-center">Slide 2</SwiperSlide>
        <SwiperSlide className="flex justify-center">Slide 3</SwiperSlide>
        <SwiperSlide className="flex justify-center">Slide 4</SwiperSlide>
        <SwiperSlide className="flex justify-center">Slide 5</SwiperSlide>
        <SwiperSlide className="flex justify-center">Slide 6</SwiperSlide>
        <SwiperSlide className="flex justify-center">Slide 7</SwiperSlide>
        <SwiperSlide className="flex justify-center">Slide 8</SwiperSlide>
        <SwiperSlide className="flex justify-center">Slide 9</SwiperSlide>
      </Swiper> */}



      <section className="splide" aria-label="Custom Arrows Example">
        <div className="splide__arrows">
          <button className="splide__arrow splide__arrow--prev border">Prev</button>
          <button className="splide__arrow splide__arrow--next">Next</button>
        </div>

        <div className="splide__track">
          <ul className="splide__list">
            <li className="splide__slide"></li>
            <li className="splide__slide">Slide 02</li>
            <li className="splide__slide">Slide 03</li>
          </ul>
        </div>
      </section>
    </>
  );
}
export default Ourbrand;
