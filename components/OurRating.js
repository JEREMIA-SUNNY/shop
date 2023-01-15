import React from "react";

function Ygoodpick() {
  return (
    <>
      <div className="bg-">
        <p className="text-center font-[BubbleRainbow] text-4xl  font-semibold text-black">
          Our Rating System
        </p>
        <div className="flex justify-center flex-col md:flex-row  gap-5 items-center md:container mx-auto mb-5">
          <div className="rounded mt-5  w-fit ">
            <div className="flex justify-center flex-col items-center">
              {" "}
              <img src="/rating/1.png" className="w-[50px] h-[50px]" alt="" />
              <button className=" w-[100px] mt-5 text-xs bg-slate-500 rounded-3xl p-2 text-white">
                Very Good
              </button>
            </div>
          </div>

          <div className="rounded  mt-5  w-fit ">
            <div className="flex justify-center flex-col items-center">
              {" "}
              <img src="/rating/2.png" className="w-[50px] h-[50px]" alt="" />
              <button className="w-[100px] mt-5 text-xs bg-slate-500 rounded-3xl p-2 text-white">
                Good
              </button>
            </div>
          </div>
          <div className="rounded  mt-5  w-fit ">
            <div className="flex justify-center flex-col items-center">
              {" "}
              <img src="/rating/3.png" className="w-[50px] h-[50px]" alt="" />
              <button className="w-[100px] mt-5 text-xs bg-slate-500 rounded-3xl p-2 text-white">
                Avoidable
              </button>
            </div>
          </div>
          <div className="rounded  mt-5  w-fit ">
            <div className="flex justify-center flex-col items-center">
              {" "}
              <img src="/rating/4.png" className="w-[50px] h-[50px]" alt="" />
              <button className="w-[100px] mt-5 text-xs bg-slate-500 rounded-3xl p-2 text-white">
                Bad
              </button>
            </div>
          </div>
          <div className="rounded  mt-5  w-fit ">
            <div className="flex justify-center flex-col items-center">
              {" "}
              <img src="/rating/5.png" className="w-[50px] h-[50px]" alt="" />
              <button className="w-[100px] mt-5 text-xs bg-slate-500 rounded-3xl p-2 text-white">
                Very Bad
              </button>
            </div>
          </div>
        </div>
        <p className="text-center mb-10">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          cumque adipisci voluptatum.
        </p>
      </div>
      <div className="bg-">
        <p className="text-center text-4xl pt-12 mb-4 font-semibold text-black">
          What Does Good Means
        </p>
        <div className="flex md:flex-row flex-col justify-center  gap-5 items-center md:container mx-auto mb-5">
          <div className="rounded mt-5  w-fit ">
            <div className="flex justify-center  items-center">
              {" "}
              <img src="/rating/health.png" className="" alt="" />
              <button className=" w-44 mt-5 text-xs  rounded-3xl p-2 text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti, mollitia.
              </button>
            </div>
          </div>

          <div className="rounded  mt-5  w-fit ">
            <div className="flex justify-center  items-center">
              {" "}
              <img src="/rating/eco.png" className="" alt="" />
              <button className=" w-44 mt-5 text-xs  rounded-3xl p-2 text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti, mollitia.
              </button>
            </div>
          </div>
          <div className="rounded  mt-5  w-fit ">
            <div className="flex justify-center  items-center">
              {" "}
              <img src="/rating/social.png" className="" alt="" />
              <button className=" w-44 mt-5 text-xs  rounded-3xl p-2 text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti, mollitia.
              </button>
            </div>
          </div>
        </div>
        <div className="flex mb-14 justify-center">
          <button className="w-fit bg-[#BD2B23] text-white px-5 py-2 rounded-3xl">
            Find Out Now
          </button>
        </div>
      </div>
    </>
  );
}

export default Ygoodpick;
