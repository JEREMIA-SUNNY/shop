import React from "react";
import "react-multi-carousel/lib/styles.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

function LifeStyle() {
  const slides = [
    {
      text1: "Bringing agility and scale with the right strategy",

      image: "/carosel/strategy.jpg",
      id: "slide1",
    },
    {
      text1: "Nurturing and empowering a future-ready workforce",

      image: "/carosel/nurture.jpg",
      id: "slide2",
    },
    {
      text1: "Mobilizing the right talent for your business needs",

      image: "/carosel/mobilize.jpg",
      id: "slide3",
    },
    {
      text1: "A thought leader and trusted partner for over a decade",

      image: "/carosel/thought.jpg",
      id: "slide4",
    },
    {
      text1: "A thought leader and trusted partner for over a decade",

      image: "/carosel/thought.jpg",
      id: "slide4",
    },
    {
      text1: "A thought leader and trusted partner for over a decade",

      image: "/carosel/thought.jpg",
      id: "slide4",
    },
    {
      text1: "A thought leader and trusted partner for over a decade",

      image: "/carosel/thought.jpg",
      id: "slide4",
    },
  ];
  return (
    <>
      <section className="bg-blue-50">
        <div className="md:container md:mx-auto">
          <div className=" py-10 mb-5 container ">
            <div className="flex   justify-between">
              <p className="w-fit p-2  text-4xl">Life Style</p>
              <button className="h-[40px] mt-4 px-4 border rounded-md border-black bg-white">
                See all Products
              </button>{" "}
            </div>
            <div className=""></div>
          </div>
          <div className="pb-12">
            <Splide
              options={{
                perPage: 4,
                gap: "20px",
                padding: "20px",
              }}
              aria-label="My Favorite Images"
            >
              {slides.map((item, id) => {
                return (
                  <SplideSlide key={id} className="">
                    <div className="">
                      {" "}
                      <div className="flex flex-col transition duration-300 bg-white rounded shadow-sm hover:shadow">
                        <div className="relative w-full h-48 p-2">
                          <img
                            src="https://images.pexels.com/photos/3184305/pexels-photo-3184305.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                            className="object-cover w-full h-full rounded-2xl"
                            alt="Plan"
                          />
                        </div>
                        <div className="flex flex-col justify-between flex-grow p-8 ">
                          <div>
                            <div className="text-lg font-semibold">Basic</div>
                            <p className="text-sm text-gray-900">
                              Sed ut perspiciatis unde omnis iste natus error
                              sit voluptatem doloremque.
                            </p>
                            <div className="mt-1 mb-4 mr-1 text-xl font-bold ">
                              $12
                            </div>
                          </div>
                        </div>
                        <div className="flex mb-12 justify-center">
                          <button className="w-fit border text-white rounded-md bg-red-600 p-2">
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </SplideSlide>
                );
              })}
            </Splide>
          </div>
        </div>
      </section>
    </>
  );
}

export default LifeStyle;
