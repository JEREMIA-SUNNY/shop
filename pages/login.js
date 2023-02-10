import React from "react";

export default function login() {
  return (
    <>
      <div className="">
        <svg
          width="100%"
          height="300px"
          preserveAspectRatio="none"
          id="svg"
          viewBox="0 0 1440 490"
          xmlns="http://www.w3.org/2000/svg"
          className="transition duration-300 ease-in-out delay-150"
        >
          <path
            d="M 0,500 C 0,500 0,250 0,250 C 40.08238961735506,244.06653114184377 80.16477923471012,238.1330622836875 119,222 C 157.83522076528988,205.8669377163125 195.42327267851454,179.53428200709374 231,184 C 266.57672732148546,188.46571799290626 300.1421300512317,223.72980968793766 339,220 C 377.8578699487683,216.27019031206234 422.008207116559,173.5464792411555 459,181 C 495.991792883441,188.4535207588445 525.8250414825326,246.0842733474404 555,260 C 584.1749585174674,273.9157266525596 612.6916269533106,244.11642736908288 648,253 C 683.3083730466894,261.8835726309171 725.4084507042253,309.4500171762281 764,290 C 802.5915492957747,270.5499828237719 837.6745702297881,184.0835039260047 872,167 C 906.3254297702119,149.9164960739953 939.8932683766225,202.21596711975303 982,248 C 1024.1067316233775,293.78403288024697 1074.7523562637227,333.0526275949833 1120,312 C 1165.2476437362773,290.9473724050167 1205.0973065684866,209.57352250031377 1237,207 C 1268.9026934315134,204.42647749968623 1292.8584174623306,280.65328240376164 1334,291 C 1375.1415825376694,301.34671759623836 1433.469023582191,245.81334788463954 1454,228 C 1474.530976417809,210.18665211536046 1457.2654882089046,230.09332605768023 1440,250 C 1440,250 1440,500 1440,500 Z"
            stroke="none"
            strokeWidth="0"
            fill="#e9e9e9"
            fillOpacity="1"
            className="transition-all duration-300 ease-in-out delay-150 path-0"
          ></path>
        </svg>
        <svg
          width="100%"
          height="100%"
          id="svg"
          viewBox="0 0 1440 490"
          xmlns="http://www.w3.org/2000/svg"
          className="transition duration-300 ease-in-out delay-150"
        >
          <path
            d="M 0,500 C 0,500 0,250 0,250 C 39.03006235086626,226.3596848649292 78.06012470173252,202.71936972985836 114,207 C 149.93987529826748,211.28063027014164 182.78956354393623,243.48220594549576 217,271 C 251.21043645606377,298.51779405450424 286.78162112252267,321.3518064881584 322,335 C 357.21837887747733,348.6481935118416 392.0839519659729,353.11056810187074 434,319 C 475.9160480340271,284.88943189812926 524.8825710135854,212.20592110435857 568,206 C 611.1174289864146,199.79407889564143 648.3857639796851,260.06574748069494 678,274 C 707.6142360203149,287.93425251930506 729.5743730676743,255.5310889728616 760,260 C 790.4256269323257,264.4689110271384 829.3167437496176,305.8098966278588 867,332 C 904.6832562503824,358.1901033721412 941.1586519338553,369.22932451570324 983,323 C 1024.8413480661447,276.77067548429676 1072.0486485149613,173.2728053093281 1112,165 C 1151.9513514850387,156.7271946906719 1184.646754006299,243.67945424698422 1225,271 C 1265.353245993701,298.3205457530158 1313.3643354598428,266.009377702735 1349,269 C 1384.6356645401572,271.990622297265 1407.8959041543305,310.28303494207574 1421,313 C 1434.1040958456695,315.71696505792426 1437.0520479228348,282.8584825289621 1440,250 C 1440,250 1440,500 1440,500 Z"
            stroke="none"
            strokeWidth="0"
            fill="#e9e9e9"
            fillOpacity="1"
            className="transition-all duration-300 ease-in-out delay-150 path-0"
            transform="rotate(-180 720 250)"
          ></path>
        </svg>
      </div>
      <div className="flex  md:min-w-[400px]  justify-center">
        <div className="w-[95%] md:w-[590px]  relative mt-[-50%] bg-white rounded-2xl p-5 md:p-12 border border-black">
          <div>
            <p className="font-fuzzyBubbles font-extrabold text-[2rem] text-center mt-2 mb-2">
              Sign Up
            </p>
          </div>
          {/* PHONE NUMBERRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR */}
          <div>
            <p className=" mt-2 mb-2">Enter your Phone Number</p>
            <input
              className="border rounded-lg border-gray-700  mt-2 mb-2 h-12 w-full"
              type="text"
            />
          </div>
          {/* orrrrrrrrrrrrrrrrrrrrrrrrr */}
          <div className="flex md:w-500 items-center gap-10 justify-between mt-4">
            <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/2"></span>

            <div className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline">
              or
            </div>

            <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/2"></span>
          </div>

          {/* GOOGLE OR FACE BORR OR ETC.......................... */}
          <div className="flex gap-5 flex-col md:flex-row justify-between  mt-5 ">
            <div className="flex border rounded-xl  border-black gap-2 justify-center py-1 px-5">
              {" "}
              <img src="/icons/google.png" alt="" />
              <p className="mt-2 font-notosans font-medium">Google</p>
            </div>
            <div className="flex border rounded-xl border-black gap-2 justify-center py-1 px-5">
              {" "}
              <img src="/icons/facebook.png" alt="" />
              <p className="mt-2 font-notosans font-medium">Facebook</p>
            </div>
            <div className="flex border rounded-xl border-black gap-2 justify-center py-1 px-5">
              {" "}
              <img src="/icons/twitter.png" alt="" />
              <p className="mt-2 font-notosans font-medium">Twitter</p>
            </div>
          </div>

          <div className="flex w-500 items-center gap-10 justify-between mt-4">
            <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/2"></span>

            <div className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline">
              or
            </div>

            <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/2"></span>
          </div>

          {/* email and add paasssword */}
          <div>
            <p className=" mt-2 mb-2">Email Address</p>
            <input
              className="border rounded-lg border-gray-700  mt-2 mb-2 h-12 w-full"
              type="text"
            />
          </div>
          <div>
            <p className=" mt-2 mb-2">Password</p>
            <input
              className="border rounded-lg border-gray-700  mt-2 mb-2 h-12 w-full"
              type="text"
            />
            <p className=" mt-2 mb-2">Forget Password? </p>
            <div className="flex gap-5">
              <p>remember me</p>
              <input type="checkbox" />
            </div>

            <div className="flex  mt-2 mb-2 justify-center">
              <button className="bg-buttonRed text-white w-full py-2 rounded-3xl">
                Sign Up
              </button>
            </div>
          </div>
          {/* orrrrrrrrrrrrrrrrrrr */}
          <div className="flex w-500 items-center gap-10 justify-between mt-4">
            <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/2"></span>

            <div className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline">
              or
            </div>

            <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/2"></span>
          </div>

          {/* guest already have account */}
          <div>
            <p className="font-fuzzyBubbles font-extrabold  text-center mt-6 mb-2">
              Guest checkout
            </p>
            <div className="flex  mt-6 mb-4 justify-center">
              <button className="bg-buttonRed text-white w-full py-2 rounded-3xl">
                Continue As Guest
              </button>
            </div>
            <div className="flex w-500 items-center gap-10 justify-between mt-4">
              <span className="border-b dark:border-gray-600 lg:w-full"></span>
            </div>
            <p className="font-fuzzyBubbles font-extrabold  text-center mt-6 mb-2">
              Already Have Account
            </p>
            <div className="flex  mt-6 mb-2 justify-center">
              <button className="bg-buttonRed text-white w-full py-2 rounded-3xl">
                Log In
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
