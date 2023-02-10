import React from "react";
import Link from "next/link";
export default function personalInformation() {
  return (
    <>
      <section>
        <div className="md:container md:mx-auto mb-5">
          {" "}
          <p className="mt-4 font-notosans font-semibold">
            Enter Personal details
          </p>
        </div>

        <div className="flex md:container md:mx-auto">
          <div className="w-1/2 flex flex-col gap-4  p-5 rounded-lg">
            <div className="flex gap-2">
              <div className="w-1/2">
                <p className=" mt-2  text-subtext">First Name</p>
                <input
                  className="border rounded-lg border-gray-700  mt-2 mb-2 h-12 w-full"
                  type="text"
                />
              </div>
              <div className="w-1/2">
                <p className=" mt-2  text-subtext">Last Name</p>
                <input
                  className="border rounded-lg border-gray-700  mt-2 mb-2 h-12 w-full"
                  type="text"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <div className="w-1/2">
                <p className=" mt-2  text-subtext">Phone</p>
                <input
                  className="border rounded-lg border-gray-700  mt-2 mb-2 h-12 w-full"
                  type="text"
                />
              </div>
              <div className="w-1/2">
                <p className=" mt-2  text-subtext">Email</p>
                <input
                  className="border rounded-lg border-gray-700  mt-2 mb-2 h-12 w-full"
                  type="text"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <div className="w-1/2">
                <p className=" mt-2  text-subtext">
                  Add Otp To verify Your phone Number
                </p>
                <input
                  className="border rounded-lg border-gray-700  mt-2 mb-2 h-12 w-full"
                  type="text"
                />
              </div>
            </div>
            <div className="md:container md:mx-auto mb-5">
              {" "}
              <p className="mt-4 font-notosans font-semibold">
                Shipping Address
              </p>
              <div className="flex flex-col gap-2">
                <div className="">
                  <p className=" mt-2  text-subtext"> Address line 1</p>
                  <input
                    className="border rounded-lg border-gray-700  mt-2 mb-2 h-12 w-full"
                    type="text"
                  />
                </div>
                <div className="">
                  <p className=" mt-2  text-subtext">Address line 2</p>
                  <input
                    className="border rounded-lg border-gray-700  mt-2 mb-2 h-12 w-full"
                    type="text"
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <div className="w-1/2">
                  <p className=" mt-2  text-subtext">Pin Code</p>
                  <input
                    className="border rounded-lg border-gray-700  mt-2 mb-2 h-12 w-full"
                    type="text"
                  />
                </div>
                <div className="w-1/2">
                  <p className=" mt-2  text-subtext">City</p>
                  <input
                    className="border rounded-lg border-gray-700  mt-2 mb-2 h-12 w-full"
                    type="text"
                  />
                </div>
              </div>
              <div className="mt-4 mb-2">
                <button className="text-center w-full rounded-3xl py-2 bg-buttonRed text-white">
                  Place Order
                </button>
              </div>
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
                <Link href={"/profile"}>
                
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
