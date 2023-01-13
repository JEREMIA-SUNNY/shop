import React from "react";
import { storefront } from "../util";
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
export default function personalProduct({ products }) {
  // console.log(products, "ON PERSOL");
  return (
    <>
      <section className="h-[300px]">
        <div className="relative -top-96">
          <div className=" mb-5 container mx-auto">
            <div className="flex   justify-between">
              <p className="w-fit p-2 text-white text-4xl">Personal Care</p>
            </div>
            <div className=""></div>
          </div>
          <div className="md:container   md:mx-auto">
            <div className="  ">
              <Swiper
                modules={[Pagination, Autoplay]}
                slidesPerView={1}
                spaceBetween={20}
                slidesPerGroup={1}
                breakpoints={{
                  769: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    spaceBetween: 20,
                    Autoplay: true,
                    loop: true,
                    speed: 800,

                    pagination: {},
                  },
                  1024: {
                    slidesPerView: 4,
                    slidesPerGroup: 3,
                    spaceBetween: 20,
                    Autoplay: true,
                    loop: true,
                    speed: 800,

                    pagination: {},
                  },
                }}
                autoplay={true}
                // pagination={{ clickable: true }}
                loop={true}
                speed={1600}
                effect=""
              >
                {products.edges.map((items, id) => {
                  const product = items;
                  return (
                    <SwiperSlide key={id} className="">
                      <div className="shadow-lg mb-5 ">
                        {" "}
                        <div className="flex flex-col  transition duration-300 h-[500px] bg-white rounded-lg shadow-sm hover:shadow">
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
                                Buy
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
      </section>
      <div className="md:container border  md:mx-auto">
        <div className="flex justify-between">
          <div>
            <p>Know the Brand</p>
            <p>Sun Mud</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur,
              dolore.
            </p>
          </div>
          <div className="flex justify-center">
            <img src="/forest.jpg" className="w-[700px]" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
