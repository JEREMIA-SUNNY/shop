import React from "react";
import { Grid, Pagination, Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Link from "next/link";
import { useState } from "react";
import { storefront } from "../util";
export default function Allproducts({ products }) {
  const [swiperRef, setSwiperRef] = useState(0);
  const prevHandler = () => {
    swiperRef.slidePrev();
  };

  const nextHandler = () => {
    swiperRef.slideNext();
  };


  const logos = [
    "/category/dry.jpg",
    "/category/dry4.jpg",
    "/category/dry1.jpg",
    "/category/dry2.jpg",
    "/category/dry3.jpg",
    "/category/dry4.jpg",
    "/category/dry1.jpg",
    "/category/dry2.jpg",
    "/category/dry.jpg",
    "/category/dry4.jpg",
    "/category/dry1.jpg",
    "/category/dry2.jpg",
  ];
  return (
    <>
      <section>
        <div className="md:container flex flex-col  md:mx-auto">
          <div className="">
            <p>All Products</p>
          </div>
          <div className="py-10 flex  justify-between">
            <div className="flex gap-2">
              <div>
                <label
                  htmlFor="countries"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                ></label>
                <select
                  id="countries"
                  className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600  dark:focus:ring-black dark:focus:border-black"
                >
                  <option selected>Brands</option>
                  <option value="US">1</option>
                  <option value="CA">2</option>
                  <option value="FR">3</option>
                  <option value="DE">4</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="countries"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                ></label>
                <select
                  id="countries"
                  className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600  dark:focus:ring-black dark:focus:border-black"
                >
                  <option selected>Brands</option>
                  <option value="US">1</option>
                  <option value="CA">2</option>
                  <option value="FR">3</option>
                  <option value="DE">4</option>
                </select>
              </div>{" "}
              <div>
                <label
                  htmlFor="countries"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                ></label>
                <select
                  id="countries"
                  className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600  dark:focus:ring-black dark:focus:border-black"
                >
                  <option selected>Brands</option>
                  <option value="US">1</option>
                  <option value="CA">2</option>
                  <option value="FR">3</option>
                  <option value="DE">4</option>
                </select>
              </div>{" "}
              <div>
                <label
                  htmlFor="countries"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                ></label>
                <select
                  id="countries"
                  className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600  dark:focus:ring-black dark:focus:border-black"
                >
                  <option selected>Brands</option>
                  <option value="US">1</option>
                  <option value="CA">2</option>
                  <option value="FR">3</option>
                  <option value="DE">4</option>
                </select>
              </div>{" "}
              <div>
                <label
                  htmlFor="countries"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                ></label>
                <select
                  id="countries"
                  className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600  dark:focus:ring-black dark:focus:border-black"
                >
                  <option selected>Brands</option>
                  <option value="US">1</option>
                  <option value="CA">2</option>
                  <option value="FR">3</option>
                  <option value="DE">4</option>
                </select>
              </div>
            </div>
            <div>
              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-gray-900 "
              ></label>
              <select
                id="countries"
                className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600  dark:focus:ring-black dark:focus:border-black"
              >
                <option selected>sort:popularity</option>
                <option value="US">1</option>
                <option value="CA">2</option>
                <option value="FR">3</option>
                <option value="DE">4</option>
              </select>
            </div>
          </div>
          <div className="flex w-500 items-center  justify-between mt-2">
            <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/2"></span>

           

            <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/2"></span>
          </div>
          <div>
            <p className="mt-2 text-subtext">Search Result:</p>
          </div>
          {/* <Swiper
          className="grid grid-cols-5"
            onSwiper={(swiper) => setSwiperRef(swiper)}
            modules={[Pagination, Autoplay, Navigation, Grid]}
            grid={{
              rows: 3,
            }}
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
                grid: {
                  rows: 3,
                },
                slidesPerView: 4,
                slidesPerGroup: 2,
                spaceBetween: 10,

                speed: 800,

                pagination: {},
              },
              1024: {
                grid: {
                  rows: 3,
                },
                slidesPerView: 4,

                speed: 800,
                grid: {
                  rows: 3,
                },
                pagination: {},
              },
            }}
            // pagination={{ clickable: true }}
            effect=""
          > */}
          <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4">
            {" "}
            {products.edges.map((items, id) => {
              const product = items;
              return (
                // <SwiperSlide key={id} className="">
                <div key={id} className=" md:p-2 rounded-3xl md:mb-5 ">
                  {" "}
                  <div className="flex flex-col  border transition duration-300 h-80   md:h-[500px] bg-white rounded-3xl shadow-sm hover:shadow">
                    <div className="relative w-full h-fit p-2">
                      <div className="md:flex hidden  absolute bg-white rounded-b-3xl px-8 pb-2 ml-[10%] ">
                        <div className="flex flex-col justify-center">
                          <div className=" flex justify-center">
                            <span className=" text-center font-semibold text-subtext">
                              8.1/10
                            </span>
                          </div>
                          <div className="w-[200px]  bg-gray-200 rounded-full h-2. dark:bg-gray-700">
                            <div
                              className="bg-green-600 h-1 rounded-full"
                              style={{ width: "60%" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                      <img
                        src={product.node.images.edges[0].node.transformedSrc}
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
                          Rs {product.node.priceRange.minVariantPrice.amount}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                // </SwiperSlide>
              );
            })}
          </div>
          {/* </Swiper> */}
        </div>
      </section>
      <div className="flex w-full items-center md:container md:mx-auto gap-8 justify-between mt-4">
            <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/3"></span>

            <div className="text-xl text-center text-black ">
            Similar categories
            </div>

            <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/3"></span>
          </div>
      <div className="flex justify-center md:container md:mx-auto  flex-wrap">
            <div className=" flex justify-center flex-wrap gap-5 w-[90%]">
              {logos.map((x, index) => (
                <div key={index}>
                  <div className=" mt-10  cursor-pointer">
                    <div className="flex justify-center">
                      <img
                        src={x}
                        className="w-[150px] rounded-full h-[150px]"
                        alt=""
                      />
                    </div>

                    <div className="text-center">grain</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
    </>
  );
}
export async function getStaticProps() {
  const { data } = await storefront(productQuery);
  return {
    props: {
      products: data.products,
    },
  };
}
const gql = String.raw;
const productQuery = gql`
  query products {
    products(first: 100) {
      edges {
        node {
          title
          handle
          tags
          priceRange {
            minVariantPrice {
              amount
            }
          }
          images(first: 1) {
            edges {
              node {
                transformedSrc
                altText
              }
            }
          }
        }
      }
    }
  }
`;
