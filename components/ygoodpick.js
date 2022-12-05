import React from "react";

function Ygoodpick() {
  return (
    <>
      <div className="bg-black">
        <p className="text-center text-4xl pt-12 mb-4 font-semibold text-white">
          Why A Good Pick
        </p>
        <div className="flex pb-20 justify-center md:container mx-auto">
          <button className="p-8  rounded  w-64 ">
            <div className="flex justify-center items-center text-white">
              {" "}
              <img
                src="/icons/circle.png"
                className="w-[100px] h-[100px]"
                alt=""
              />
            </div>
            <div className="text-center mt-4">
              <h1 className="font-bold text-white text">Title</h1>
              <p className="text-white text-sm  mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
                sed?
              </p>
            </div>
          </button>

          <button className="p-8  rounded  w-64 ">
            <div className="flex justify-center items-center text-white">
              {" "}
              <img
                src="/icons/earths.png"
                className="w-[100px] h-[100px]"
                alt=""
              />
            </div>
            <div className="text-center mt-4">
              <h1 className="font-bold text-white text">Title</h1>
              <p className="text-white text-sm  mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
                sed?
              </p>
            </div>
          </button>
          <button className="p-8  rounded  w-64 ">
            <div className="flex justify-center items-center text-white">
              {" "}
              <img
                src="/icons/happy.png"
                className="w-[100px] h-[100px]"
                alt=""
              />
            </div>
            <div className="text-center mt-4">
              <h1 className="font-bold text-white text">Title</h1>
              <p className="text-white text-sm  mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
                sed?
              </p>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}

export default Ygoodpick;
