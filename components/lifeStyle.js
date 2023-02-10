import Head from "next/head";
import React from "react";

export default function LifeStyle() {
  return (
    <>
      <div className="py-10">
        <p
          style={{
            fontFamily: "Fuzzy Bubbles",
            fontSize: "40px",
          }}
          className="text-[#23313B]  text-3xl  text-center"
        >
          Conscious Products that dont break <br /> your monthly budget
        </p>
       <div className="flex justify-center">
       <img src="/homepage.png" alt="" />
       </div>
        <p className="text-[#647887] font-sans mt-4 text-center">
          {" "}
          we dont charge any sale commisions to our vendor <br /> they pass on
          to discount to you
        </p>
        <div className="flex justify-center mt-5">
          <button className="bg-[#BD2B23] text-white text-sm px-12 py-2 rounded-3xl">
          FIND OUT NOW
          </button>
        </div>
      </div>
      <div>
        {/* <svg
          width="100%"
          height="100%"
          id="svg"
          viewBox="0 0 1440 400"
          xmlns="http://www.w3.org/2000/svg"
          className="transition duration-300 ease-in-out delay-150"
        >
          <path
            d="M 0,400 C 0,400 0,200 0,200 C 75.42912371134021,201.78902798232696 150.85824742268042,203.5780559646539 201,197 C 251.14175257731958,190.4219440353461 275.99613402061857,175.47680412371133 336,177 C 396.00386597938143,178.52319587628867 491.15721649484533,196.51472754050076 566,193 C 640.8427835051547,189.48527245949924 695.3750000000001,164.4642857142857 740,170 C 784.6249999999999,175.5357142857143 819.3427835051544,211.6281296023564 870,213 C 920.6572164948456,214.3718703976436 987.2538659793815,181.02319587628864 1049,171 C 1110.7461340206185,160.97680412371136 1167.6417525773195,174.27908689248898 1232,183 C 1296.3582474226805,191.72091310751102 1368.1791237113403,195.8604565537555 1440,200 C 1440,200 1440,400 1440,400 Z"
            stroke="none"
            strokeWidth="0"
            fill="#fdf8f2"
            fillOpacity="1"
            className="transition-all duration-300 ease-in-out delay-150 path-0"
          ></path>
        </svg> */}
        <svg
          width="100%"
          height="150px"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#FDF8F2"
            fillOpacity="1"
            d="M0,288L30,282.7C60,277,120,267,180,229.3C240,192,300,128,360,133.3C420,139,480,213,540,250.7C600,288,660,288,720,272C780,256,840,224,900,224C960,224,1020,256,1080,229.3C1140,203,1200,117,1260,96C1320,75,1380,117,1410,138.7L1440,160L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          ></path>
        </svg>
      </div>
    </>
  );
}
