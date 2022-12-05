import React from "react";

function OurBrands() {
  return (
    <>
      <div className="">
        <p className="text-center text-4xl pt-12 mb-4 font-semibold text-black">
         Our Brand
        </p>
        <div className="flex pb-20 justify-center md:container mx-auto">
          <button className="p-8  rounded  w-64 ">
            <div className="flex justify-center items-center text-black">
              {" "}
              <img
                src="/brand/organic.jpg"
                className="w-[100px] h-[100px]"
                alt=""
              />
            </div>
            
          </button>

          <button className="p-8  rounded  w-64 ">
            <div className="flex justify-center items-center text-black">
              {" "}
              <img
                src="/brand/cotton.jpg"
                className="w-[100px] h-[100px]"
                alt=""
              />
            </div>
            
          </button>
          <button className="p-8  rounded  w-64 ">
            <div className="flex justify-center items-center text-black">
              {" "}
              <img
                src="/brand/richer.png"
                className="w-[100px] h-[100px]"
                alt=""
              />
            </div>
            
          </button>
          <button className="p-8  rounded  w-64 ">
            <div className="flex justify-center items-center text-black">
              {" "}
              <img
                src="/brand/nature.png"
                className="w-[200px] h-[100px]"
                alt=""
              />
            </div>
            
          </button>
          <button className="p-8  rounded  w-64 ">
            <div className="flex justify-center items-center text-black">
              {" "}
              <img
                src="/brand/organic.jpg"
                className="w-[100px] h-[100px]"
                alt=""
              />
            </div>
            
          </button>
        </div>
      </div>
    </>
  );
}

export default OurBrands;
