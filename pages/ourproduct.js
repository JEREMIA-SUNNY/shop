import Image from "next/image";
import Link from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function ourproduct() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 500, min: 0 },
      items: 1,
    },
  };
  const slides = [
    {
      text1: "Bringing agility and scale with the right strategy",

      image: "/carosel/1.jpg",
      id: "slide1",
    },
    {
      text1: "Nurturing and empowering a future-ready workforce",

      image: "/carosel/2.jpg",
      id: "slide2",
    },
    {
      text1: "Mobilizing the right talent for your business needs",

      image: "/carosel/3.jpg",
      id: "slide3",
    },
    {
      text1: "A thought leader and trusted partner for over a decade",

      image: "/carosel/4.jpg",
      id: "slide4",
    },
  ];
  return (
    <>
      <Carousel responsive={responsive}>
        {slides.map(({ text1, image, id }) => (
          <div key={id}>
            <div className="h-[65vh] w-full relative flex justify-center items-center">
              <Image
                className="object-cover w-full h-full"
                layout="fill"
                src={image}
                alt=""
              />
              <div className="absolute inset-0 bg-white opacity-50  text-black border w-[760px] rounded-r-full"></div>
              <div className="absolute inset-0 bg-white text-black border w-[700px] rounded-r-full">
                <div className="flex justify-center flex-col items-center mt-40">
                  <img src="/icons/earths.png" alt="" />
                  <div>
                    <p className="text-black text-left text-4xl font-semibold">
                      A New Way To <br /> Consume
                    </p>
                  </div>
                  <div className="mt-5">
                    <p>
                      Pick stuff that is healthy for you and <br /> the planet
                    </p>
                  </div>
                  <div className="flex gap-5 mt-5 ml-14">
                    <button className="bg-gray-800 text-white p-3 rounded-md">
                      Explore Products
                    </button>
                    <button className="border border-gray-800  text-black p-3 rounded-md">
                      Take Action/Sign Up Now
                    </button>
                  </div>
                </div>
              </div>

              <div className="px-4 flex justify-start text-center w-[200px]  z-50">
                <h1 className="text-4xl md:text-5xl  text-white drop-shadow-md py-4"></h1>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
      ;
    </>
  );
}
export default ourproduct;
