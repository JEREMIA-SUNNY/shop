import React from "react";
import "react-multi-carousel/lib/styles.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

function Homeslider({ products }) {
  console.log("this is inside", products);
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
      <section className="relative">
        <div>
          {/* <img className="w-screen" src="/blue1.png" alt="" /> */}
          <svg
            width="100%"
            height="100%"
            id="svg"
            viewBox="0 0 1440 400"
            xmlns="http://www.w3.org/2000/svg"
            className="transition duration-300 ease-in-out delay-150"
          >
            <path
              d="M 0,400 C 0,400 0,200 0,200 C 37.81960929445664,220.24966295699068 75.63921858891328,240.49932591398132 121,238 C 166.36078141108672,235.50067408601868 219.26273493880353,210.2523593010653 278,204 C 336.73726506119647,197.7476406989347 401.3098416558725,210.4912368817574 442,223 C 482.6901583441275,235.5087631182426 499.49789843770645,247.78269317190518 551,252 C 602.5021015622935,256.2173068280948 688.6985645933014,252.377990430622 736,241 C 783.3014354066986,229.622009569378 791.7078431890877,210.70534510560682 838,202 C 884.2921568109123,193.29465489439318 968.4700626503477,194.80062914695074 1031,181 C 1093.5299373496523,167.19937085304926 1134.4119062095217,138.09213830659016 1170,133 C 1205.5880937904783,127.90786169340984 1235.8823125115653,146.83081762668854 1280,162 C 1324.1176874884347,177.16918237331146 1382.0588437442175,188.58459118665573 1440,200 C 1440,200 1440,400 1440,400 Z"
              stroke="none"
              strokeWidth="0"
              fill="#5000ca"
              fillOpacity="1"
              className="transition-all duration-300 ease-in-out delay-150 path-0"
            ></path>
          </svg>
        </div>
        <div className="bg-[#5000ca]">
          <div className="md:container  md:mx-auto">
            <div className=" py-10 mb-5 container ">
              <div className="flex   justify-between">
                <p className="w-fit p-2 text-white  text-4xl">Dry Groceries</p>
              </div>
              <div className=""></div>
            </div>
            <div className="pb-12  ">
              <Splide
                options={{
                  perPage: 4,
                  gap: "40px",
                  padding: "20px",
                }}
                aria-label="My Favorite Images"
              >
                {products.edges.map((items, id) => {
                  const product = items;
                  return (
                    <SplideSlide key={id} className="">
                      <div className="">
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
                              <div className="mt-1 mb-4 mr-1 text-xl font-bold ">
                                {product.node.priceRange.minVariantPrice.amount}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SplideSlide>
                  );
                })}
              </Splide>
            </div>
            <div className="flex justify-center bg-[#5000ca]">
              <button className="h-[40px] mt-4  mb-10 px-4 border rounded-md border-black bg-white">
                See all Products
              </button>{" "}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Homeslider;
