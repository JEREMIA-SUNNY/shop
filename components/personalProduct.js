import React from "react";
import { storefront } from "../util";
import { Pagination, Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { useState } from "react";
import Link from "next/link";
export default function PersonalProduct({ products }) {
  const [swiperRef, setSwiperRef] = useState(0);
  const prevHandler = () => {
    swiperRef.slidePrev();
  };

  const nextHandler = () => {
    swiperRef.slideNext();
  };
  // console.log(products, "ON PERSOL");
  return (
    <>
      <section className=" h-[100px] md:h-[300px]">
        <div className="relative -top-96">
          <div className=" mb-5 flex justify-between container mx-auto">
            <div className="flex   justify-between">
              <p className="w-fit p-2 text-white text-4xl">Personal Care</p>
            </div>
            <div className="flex gap-1 mt-5 mr-6">
              <div>
                <button onClick={prevHandler}>
                  <img src="/icons/prev.png" alt="" />
                </button>
              </div>
              <div>
                <button onClick={nextHandler}>
                  <img src="/icons/nextblack.png" alt="" />
                </button>
              </div>
            </div>
          </div>
          <div className="md:container   md:mx-auto">
            <div className="  ">
              <Swiper
                onSwiper={(swiper) => setSwiperRef(swiper)}
                modules={[Pagination, Autoplay, Navigation]}
                slidesPerView={1}
                spaceBetween={10}
                slidesPerGroup={1}
                breakpoints={{
                  350: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,

                    speed: 800,

                    pagination: {},
                  },
                  769: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                    spaceBetween: 10,

                    speed: 800,

                    pagination: {},
                  },
                  1024: {
                    slidesPerView: 4,
                    slidesPerGroup: 3,
                    spaceBetween: 10,
                    speed: 800,
                    pagination: {},
                  },
                }}
                // pagination={{ clickable: true }}
                effect=""
              >
                {products.edges.map((items, id) => {
                  const product = items;
                  return (
                    <SwiperSlide key={id} className="">
                      <div className=" md:p-2 rounded-3xl md:mb-5 ">
                        {" "}
                        <div className="flex flex-col  border transition duration-300 h-80   md:h-[500px] bg-white rounded-3xl shadow-sm hover:shadow">
                          <div className="relative w-full h-fit p-2">
                            <div className="md:flex hidden absolute bg-white rounded-b-3xl px-8 py-1 ml-[20%] ">
                              <div className="flex gap-2 justify-center ">
                                <div>
                                  {" "}
                                  <img
                                    src="/rating/1.png"
                                    className="w-[30px] h-[30px]"
                                    alt=""
                                  />
                                </div>
                                <div>
                                  {" "}
                                  <img
                                    src="/rating/2.png"
                                    className="w-[30px] h-[30px]"
                                    alt=""
                                  />
                                </div>
                                <div>
                                  {" "}
                                  <img
                                    src="/rating/3.png"
                                    className="w-[30px] h-[30px]"
                                    alt=""
                                  />
                                </div>
                                <div>
                                  {" "}
                                  <img
                                    src="/rating/4.png"
                                    className="w-[30px] h-[30px]"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>
                            <img
                              src={
                                product.node.images.edges[0].node.transformedSrc
                              }
                              className="object-cover  w-full h-44 md:h-80 rounded-2xl"
                              alt="Plan"
                            />
                            <div className="flex justify-center">
                              <button className="w-[100px] shadow-2xl bg-white text-buttonRed font-notosans font-medium absolute top-[90%] rounded-3xl = p-2">
                                <Link href={`/products/${product.node.handle}`}>
                                  BUY
                                </Link>
                              </button>
                            </div>
                          </div>
                          <div className="flex flex-col justify-between  p-1 ">
                            <div>
                              <div className="text-xs text-center mt-4 font-semibold">
                                {" "}
                                {product.node.title}
                              </div>
                              <p className="text-sm text-center text-gray-900">
                                Extra long product name
                              </p>
                              <div className="mt-1 text-center font-notosans mb-4 mr-1 text-xl font-bold ">
                                Rs{" "}
                                {product.node.priceRange.minVariantPrice.amount}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      <div className="md:container  md:mx-auto">
        <div className="flex md:flex-row flex-col justify-between">
          <div>
            <p className="text-title text-center md:text-left text-2xl font-semibold">
              Know the Brand
            </p>
            <p className="text-[#23313B] text-center md:text-left mt-6 text-xl font-semibold">
              Sun Mud
            </p>
            <p className="text-subtext text-center md:text-left md:w-[700px] mt-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur,
              dolore. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Tenetur, dolore. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Tenetur, dolore.
            </p>
          </div>
          <div className="flex  justify-center">
            <img src="/forest.jpg" className="w-[700px] rounded-md" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
