import React from "react";
import { Pagination, Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Link from "next/link";
import { useState } from "react";
function HomeCare({ products }) {
  console.log("this is inside", products);
  const [swiperRef, setSwiperRef] = useState(0);
  const prevHandler = () => {
    swiperRef.slidePrev();
  };

  const nextHandler = () => {
    swiperRef.slideNext();
  };
  return (
    <>
      <section className="relative ">
        <div className="bg-[#F3F6F9]">
          <div className="md:container  md:mx-auto">
            <div className="flex justify-between py-10 mb-5 container ">
              <div className="flex   justify-between">
                <p className="w-fit p-2 text-black  text-4xl">Home Care</p>
              </div>
              <div className="flex gap-1 mt-5 mr-6">
                <div>
                  <button onClick={prevHandler}>
                    <img src="/icons/prevblack.png" alt="" />
                  </button>
                </div>
                <div>
                  <button onClick={nextHandler}>
                    <img src="/icons/next.png" alt="" />
                  </button>
                </div>
              </div>
            </div>
            <div className="pb-12">
              <Swiper
                onSwiper={(swiper) => setSwiperRef(swiper)}
                modules={[Pagination, Autoplay, Navigation]}
                slidesPerView={1}
                spaceBetween={20}
                slidesPerGroup={1}
                breakpoints={{
                  769: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    spaceBetween: 20,

                    speed: 800,

                    pagination: {},
                  },
                  1024: {
                    slidesPerView: 4,
                    slidesPerGroup: 3,
                    spaceBetween: 20,
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
                      <div className="shadow-lg rounded-3xl mb-5 ">
                        {" "}
                        <div className="flex flex-col  transition duration-300 h-[500px] bg-white rounded-3xl shadow-sm hover:shadow">
                          <div className="relative w-full h-fit p-2">
                            <img
                              src={
                                product.node.images.edges[0].node.transformedSrc
                              }
                              className="object-cover  w-full h-80 rounded-2xl"
                              alt="Plan"
                            />
                            <div className="flex justify-center">
                              <button className="w-[100px] shadow-2xl bg-white text-black absolute top-[90%] rounded-3xl = p-2">
                                <Link href={`/products/${product.node.handle}`}>
                                  Buy
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
                              <div className="mt-1 text-center mb-4 mr-1 text-xl font-bold ">
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
            <div className="flex justify-center bg-[#13456aa]">
              <button className="h-[40px] mt-4  px-4 border rounded-3xl border-black bg-white">
                See all Products
              </button>{" "}
            </div>
          </div>
        </div>
        <div>
          <svg
            preserveAspectRatio="none"
            width="100%"
            height="150px"
            id="svg"
            viewBox="0 0 1440 400"
            xmlns="http://www.w3.org/2000/svg"
            className="transition duration-300 ease-in-out delay-150"
          >
            <path
              d="M 0,400 C 0,400 0,200 0,200 C 41.823051669991315,189.02013863348628 83.64610333998263,178.04027726697254 112,168 C 140.35389666001737,157.95972273302746 155.23863831006082,148.85902956559607 189,156 C 222.76136168993918,163.14097043440393 275.3993434197741,186.5236044706431 315,186 C 354.6006565802259,185.4763955293569 381.1639880108429,161.04655255183152 413,156 C 444.8360119891571,150.95344744816848 481.9447045368544,165.2901853220308 514,171 C 546.0552954631456,176.7098146779692 573.0571938417396,173.79270616004536 608,179 C 642.9428061582604,184.20729383995464 685.8265200961869,197.53899003778767 717,210 C 748.1734799038131,222.46100996221233 767.6367257735128,234.05133368880385 805,241 C 842.3632742264872,247.94866631119615 897.6265768097618,250.25567520699704 935,242 C 972.3734231902382,233.74432479300296 991.8569669874394,214.925965483208 1023,204 C 1054.1430330125606,193.074034516792 1096.9455552404802,190.04046286017106 1136,208 C 1175.0544447595198,225.95953713982894 1210.3608120506399,264.91218307610774 1242,270 C 1273.6391879493601,275.08781692389226 1301.6111965569598,246.3108048353978 1334,229 C 1366.3888034430402,211.6891951646022 1403.19440172152,205.8445975823011 1440,200 C 1440,200 1440,400 1440,400 Z"
              stroke="none"
              strokeWidth="0"
              fill="#F3F6F9"
              fillOpacity="1"
              className="transition-all duration-300 ease-in-out delay-150 path-0"
              transform="rotate(-180 720 200)"
            ></path>
          </svg>
        </div>
      </section>
    </>
  );
}

export default HomeCare;
