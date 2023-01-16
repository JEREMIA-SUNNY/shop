import React from "react";

export default function ourBrands() {
  return (
    <>
      <div className="flex justify-center">
        <div>
          <div className="flex justify-center">
            <img src="/brandlogo.png" className="h-[250px] w-[250px]" alt="" />
          </div>

          <p
            style={{
              fontFamily: "Gloria Hallelujah",
            }}
            className="text-5xl text-center font-bold"
          >
            Become A Vendor
          </p>
          <p className="mt-5 text-[#647887]">
            Your Product Have Beautiful Story And It Deserve To Be Told
          </p>
          <div className="mt-5 flex justify-center ">
            <button className="bg-[#BD2B23] text-white px-12 py-2 rounded-3xl">
              List Now
            </button>
          </div>
        </div>
      </div>
      
    </>
  );
}
