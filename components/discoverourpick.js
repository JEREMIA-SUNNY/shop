import React from "react";

function Discoverourpick() {
  return (
    <>
      <section className="md:mx-auto md:container">
        <p className="text-4xl  text-center mt-10 pt-5 mb-6">
          Discover Our Picks
        </p>
        <div className="grid mt-12 pb-20 grid-cols-4">
          <div className="flex gap-5 flex-col items-center justify-center">
            <img className="w-[90px] h-[90px]" src="/icons/dry.gif" alt="" />
            <p className="font-medium mt-8">Dry Groceries</p>
          </div>
          <div className="flex flex-col  gap-5  items-center  justify-center">
            <img className="w-[90px] h-[90px]" src="/icons/home.gif" alt="" />
            <p className="font-medium mt-8">Personal Care</p>
          </div>
          <div className="flex flex-col gap-5  items-center  justify-center">
            <img className="w-[90px] h-[90px]" src="/icons/life.gif" alt="" />
            <p className="font-medium mt-8">Life Style</p>
          </div>
          <div className="flex flex-col gap-5  items-center  justify-center">
            <img
              className="w-[90px] h-[90px]"
              src="/icons/personal.gif"
              alt=""
            />
            <p className="font-medium mt-8">Home</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Discoverourpick;
