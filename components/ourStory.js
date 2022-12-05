import React from "react";
import Image from "next/image";

function ourStory() {
  return (
    <>
      <div className="h-[75vh] w-full relative flex justify-center items-center">
        <Image
          className="object-cover w-full h-full"
          layout="fill"
          src="/carosel/orange.jpg"
          alt=""
        />
        <div className="absolute right-0 opacity-40 top-0 bottom-0 bg-white text-black border w-[730px] rounded-l-full"></div>
        <div className="absolute right-0 top-0 bottom-0 bg-white text-black border w-[700px] rounded-l-full">
          <div className="flex justify-center flex-col items-center mt-52">
            <div>
              <p className="text-black text-left text-4xl font-semibold">
                Know Our story
                <br /> &mission
              </p>
            </div>
            {/* <div className="mt-5">
                    <p>
                      Pick stuff that is healthy for you and <br /> the planet
                    </p>
                  </div> */}
            {/* <div className="flex item  mt-5 ">
                    <button className="bg-gray-800 text-white p-3 rounded-md">
                      Explore Products
                    </button>
                  
                  </div> */}
          </div>
          <div className="flex ml-48  mt-5 ">
            <button className="bg-gray-800 text-white p-3 rounded-md">
              About Us
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ourStory;
