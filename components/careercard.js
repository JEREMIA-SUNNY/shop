import { BsPlusLg } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";

import useCollapse from "react-collapsed";
import { useState } from "react";

function Careercard({ id, title, description, type, role, point }) {
  const [isExpanded, setExpanded] = useState(false);
  const [isExpanded1, setExpanded1] = useState(false);
  const opt=[
    "Inside sales",
    "Java Stack",
                    "Hadoop",
                 "React JS",
                   "Snowflake",
                    "Teradata",
                  "Data Sciences",
                    "Azure Data Bricks/ADF ",
                    "SAP BODS ",
                    "SAP BW",
                  "SAP BW/4 HANA",
                 "SAP SuccessFactors",
                   "Salesforce",
                   "Oracle/OIS/Finance",
                    "Salesforce trainer",
                   "Azure",
                   "BDM/CSM",
                    "Fullstack",
                    "Windows Admin",
                    "Network Data",
                   "IBM Storage SME (SAN)",
                   "Ericsson Network  Integration",
                   "OS Monitoring",
                  "VMware VDI, Horizon View",
                    "ASP.NET MVC",
                    "IFS EAM",
                    "CSM(Customer Success Manager)",
                    "Python",
                    "PHP",
                     "DFT",
                    "Kenan Software",
                    "Corporate Treasury",
                   "C",
                   "CAD",

  ]
  const { getCollapseProps, getToggleProps } = useCollapse({
    isExpanded,
    easing: "cubic-bezier(0.37, 0, 0.63, 1)",
    duration: 600,
  });

  return (
    <>
      <div key={id} className="w-full flex   flex-col">
        <div className="bg-blue shadow-sm w-full  rounded flex  p-4 h-full items-center">
          <div
            {...getToggleProps({
              onClick: () => setExpanded((prevExpanded) => !prevExpanded),
            })}
          >
            {isExpanded ? (
              <BiMinus size={15} className=" text-white w- h-6 mr-4" />
            ) : (
              <BsPlusLg size={15} className=" text-white w- h-6 mr-4" />
            )}
          </div>

          <span className="text-white font-bold ">{title}</span>
        </div>
        <div>
          <section {...getCollapseProps()}>
            <div className="flex">
              <div className="w-full">
                <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-5 pb-24 rounded-lg border text-center relative">
                  <h2 className=" text-left   text-black mb-3">
                    <span className="font-bold">Type : </span>
                    {type}
                  </h2>
                  <h1 className="  text-left text-black mb-3">
                    <span className="font-bold">Role :</span> {role}
                  </h1>

                  <h1 className="  text-left text-black mb-3">
                    <span className="font-bold">Skills : </span>
                  </h1>
                  <div className="flex ">
                    <ul className=" ml-14 flex flex-col list-disc  text-left ">
                      {point.map(({ name }, index) => {
                        return (
                          <li key={index} className="text-black">
                            <p className="list-disc  ">{name}</p>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                    <button
                      onClick={() =>
                        setExpanded1((prevExpanded) => !prevExpanded)
                      }
                      className="flex mx-auto mt-16 ease-in duration-300 text-white hover:text-black bg-blue border-0 py-2 px-8 focus:outline-none hover:bg-orange rounded text-lg "
                    >
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      {isExpanded1 && (
        <div
          onClick={() => setExpanded1((prevExpanded) => !prevExpanded)}
          className={`fixed flex justify-center items-center bg-opacity-80  z-50 top-0     left-0 w-screen h-screen bg-black`}
        >
          <div
            className={`
         
             " w-full lg:w-fit   lg:h-[90%]  h-full  flex flex-row lg:flex-col justify-center bg-gray bg-opacity-100"
      `}
          >
            <div
              onClick={() => setExpanded1((prevExpanded) => !prevExpanded)}
              className="lg:w-[500px] h-full p-5 md:py-10 md:px-10  bg-white flex flex-col   overflow-auto w-full  "
            >
              <div
                onClick={() => setExpanded1((prevExpanded) => !prevExpanded)}
                className="hover:cursor-pointer text-xl text-end font-extrabold text-blue  animate-bounce md:block hidden w-full"
              >
                X
              </div>
              <h2 className="text-gray-900 text-lg mb-1 font-normal title-font">
                Sign-up with SFJ today and join a strong growing network of IT
                professionals.
              </h2>

              <p className="w-full h-[2px] mb-8 bg-blue"></p>
              <div className="relative mb-2">
                <label htmlFor="name" className="leading-7 text-sm text-black">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-white rounded border border-blue focus:border-blue focus:ring-2 focus:ring-blue text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-2">
                <label htmlFor="email" className="leading-7 text-sm text-black">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-white rounded border border-blue focus:border-blue focus:ring-2 focus:ring-blue text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-2">
                <label
                  htmlFor="mobile"
                  className="leading-7 text-sm text-black"
                >
                  Mobile
                </label>
                <input
                  type="text"
                  id="mobile"
                  name="mobile"
                  className="w-full bg-white rounded border border-blue focus:border-indigo-500 focus:ring-2 focus:ring-blue text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-2">
                <label
                  htmlFor="mobile"
                  className="leading-7 text-sm text-black"
                >
                 Location
                </label>
                <input
                  type="text"
                  id="Location"
                  name="Location"
                  className="w-full bg-white rounded border border-blue focus:border-indigo-500 focus:ring-2 focus:ring-blue text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>

              <div className="relative mb-2">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-black"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-white rounded border border-blue focus:border-indigo-500 focus:ring-2 focus:ring-blue h-11 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
              <div className="relative mb-2">
                <label htmlFor="email" className="leading-7 text-sm text-black">
                  Linkedin Profile URL
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-white rounded border border-blue focus:border-indigo-500 focus:ring-2 focus:ring-blue text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>

              <div className="relative mb-2">
                {" "}
                <label className="block">
                  <span className="text-black text-sm">Select Technology</span>
                  <select className=" block w-full border border-blue  text-sm  h-[47px] rounded-sm  focus:border-blue focus:ring focus:ring-blue focus:ring-opacity-50">
                   
                   
                   {opt.map((item, index) => {
                   
                   if(title===item){
                    return (
                      <option key={index} value={item} selected>{item}</option>
                    );
                   }
                    else{
                   
                   
                   return(
                      <option key={index} value={item}>{item}</option>
                    )}

                   })}
                  
                  </select>
                </label>
              </div>
              <div className=" flex mt-3 justify-center">
                <button
                  onClick={() => setExpanded1((prevExpanded) => !prevExpanded)}
                  className="text-white bg-blue border-0 py-2 px-6 focus:outline-none hover:bg-orange rounded text-lg"
                >
                  Submit
                </button>
              </div>
              {/* <div className=" flex justify-center">
                <button
                  onClick={() => setExpanded1((prevExpanded) => !prevExpanded)}
                  className="text-white md:hidden block py-2 px-6 bg-slate-700  mt-5"
                >
                  close
                </button>
              </div> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default Careercard;
