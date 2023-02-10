import React from "react";
import Link from "next/link";
export default function yourCart() {
  return (
    <>
      <section>
        <div className="md:container md:mx-auto mb-5">
          {" "}
          <p>
            Your Cart: <span>2item added</span>
          </p>
        </div>

        <div className="flex md:container md:mx-auto">
          <div className="w-1/2 flex flex-col gap-4  p-5 rounded-lg">
            <div className="flex  border-2 rounded-2xl border-coustom1 gap-4">
              <div>
                <img
                  src="/sample.png"
                  className="w-[200px] rounded-lg h-[200px]"
                  alt=""
                />
              </div>

              <div>
                <p className="text-sm text-subtext">Brand Name</p>
                <p className="font-notosans font-semibold">
                  Extra Long Product name
                </p>
                <p className="text-sm text-subtext">A good Pick score</p>
                <div className="flex gap-5 my-4">
                  <div className="border bg-blue-800 text-white rounded-lg py-1 px-8">
                    100g
                  </div>
                  <div className="flex border p-1 rounded-lg px-4 gap-10 justify-between">
                    <p>-</p>
                    <p>1</p>
                    <p>+</p>
                  </div>
                </div>
                <p className="font-notosans font-semibold">rs 2145</p>
                <p className="text-sm text-subtext">delivery by</p>
              </div>
            </div>
            <div className="flex  border-2 rounded-2xl border-coustom1 gap-4">
              <div>
                <img
                  src="/sample.png"
                  className="w-[200px] rounded-lg h-[200px]"
                  alt=""
                />
              </div>

              <div>
                <p className="text-sm text-subtext">Brand Name</p>
                <p className="font-notosans font-semibold">
                  Extra Long Product name
                </p>
                <p className="text-sm text-subtext">A good Pick score</p>
                <div className="flex gap-5 my-4">
                  <div className="border bg-blue-800 text-white rounded-lg py-1 px-8">
                    100g
                  </div>
                  <div className="flex border p-1 rounded-lg px-4 gap-10 justify-between">
                    <p>-</p>
                    <p>1</p>
                    <p>+</p>
                  </div>
                </div>
                <p className="font-notosans font-semibold">rs 2145</p>
                <p className="text-sm text-subtext">delivery by</p>
              </div>
            </div>

            <div className="p-2  border-2 flex justify-between border-coustom1 rounded-xl">
              <p className="text-subtext">
                Save your cart or view see your existing bag
              </p>
              <p className="font-notosans font-semibold">sign up/Login</p>
            </div>
          </div>

          <div className="w-1/2 rounded-2xl">
            <div className="flex w-[80%] p-8 border-2 rounded-2xl border-coustom1  mt-4 flex-col">
              <p className="mb-5">Price Details</p>
              <div className="flex justify-between">
                <p className=" text-subtext my-1">Total Mrp</p>
                <p className="font-notosans my-1     font-semibold">3144</p>
              </div>
              <div className="flex justify-between">
                <p className=" text-subtext my-1">Coupon Discount</p>
                <p className="font-notosans my-1     font-semibold">3144</p>
              </div>
              <div className="flex justify-between">
                <p className=" text-subtext my-1">
                  Convenience fee/shipping costs
                </p>
                <p className="font-notosans my-1     font-semibold">3144</p>
              </div>

              <div className="flex w-[100%] items-center  justify-between mt-4">
                <span className="w-full border-b dark:border-gray-600 lg:w-1/2"></span>

                <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/2"></span>
              </div>
              <div className="flex justify-between">
                <p className=" text-xl font-bold font-notosans my-1">
                  Total amount
                </p>
                <p className=" text-xl font-bold font-notosans my-1">3144</p>
              </div>
              <div className="mt-4 mb-2">
                <Link href={"/personalInformation"}>
                <button className="text-center w-full rounded-3xl py-2 bg-buttonRed text-white">
                  Place Order
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
