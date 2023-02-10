import React from "react";

function Ygoodpick() {
  return (
    <>
      <section className="bg-lightgray">
        <div className="pt-96 md:container md:mx-auto bg-lightgray">
          <p
            style={{
              fontFamily: "Fuzzy Bubbles",
              fontSize: "60px",
            }}
            className="text-center p-8 text-4xl leading-[3rem] font-extrabold text-title "
          >
            Our intelligent bias free rating system <br /> helping you to make a good
            pick easily
          </p>

         
        </div>
        <div className="bg-lightgray">
          <p className="text-center text-4xl pt-12 mb-4 font-semibold text-[#23313B]">
            What Does Good Means
          </p>
          <div className="flex md:flex-row flex-col justify-center  gap-5 items-center md:container mx-auto mb-5">
            <div className="rounded mt-5  w-fit ">
              <div className="flex justify-center  items-center">
                {" "}
                <img src="/rating/health.png"  className="rounded-full" alt="" />
                <button className=" w-44 mt-5 text-xs  rounded-3xl p-2 text-title">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deleniti, mollitia.
                </button>
              </div>
            </div>

            <div className="rounded  mt-5  w-fit ">
              <div className="flex justify-center rounded-full  items-center">
                {" "}
                <img src="/rating/eco.png" className="rounded-full" alt="" />
                <button className=" w-44 mt-5 text-xs  rounded-3xl p-2 text-title">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deleniti, mollitia.
                </button>
              </div>
            </div>
            <div className="rounded  mt-5  w-fit ">
              <div className="flex justify-center  items-center">
                {" "}
                <img src="/rating/social.png" className="rounded-full" alt="" />
                <button className=" w-44 mt-5 text-xs  rounded-3xl p-2 text-title">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deleniti, mollitia.
                </button>
              </div>
            </div>
          </div>


          <div className="flex justify-center mb-5">
            <img src="/ratingscale.png" alt="" />
          </div>
          <div className="flex justify-center mb-5">
           <p className="font-fuzzyBubbles font-bold text-3xl">Less than 10</p>
          </div>
          <div className="flex pb-12 justify-center">
            <button className="w-fit text-sm bg-[#BD2B23] text-white px-8 py-2 rounded-3xl">
              FIND OUT HOW
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Ygoodpick;
