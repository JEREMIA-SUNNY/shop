import { BsPlusLg } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";

import useCollapse from "react-collapsed";
import { useState } from "react";

function Careercard({ id, title, description, type, role, point }) {
  const [isExpanded, setExpanded] = useState(false);
  const [isExpanded1, setExpanded1] = useState(false);
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
              <div className="p-4 lg:w-full">
                <div className="h-full bg-gray-100 border bg-opacity-75 px-8 pt-5 pb-24 rounded-lg overflow-hidden text-center relative">
                  

                  
                  <h1 className="  text-black mb-3 tracking-widest text-left">
                   <span className="font-bold">Type:</span> {type}
                  </h1>
                  <h1 className="tracking-widest  text-black mb-3  text-left"><span className="font-bold">Role:</span>{role}</h1>
                  <h2 className="tracking-widest   text-black mb-3">
                    {}
                  </h2>
                  <p className="text-left font-bold tracking-widest">Skills :-</p>
                 <div className="flex ">
                  <ul class=" ml-14 flex flex-col list-disc  text-left ">
                    {point.map(({ name },index) => {
                      return (
                        <li key={index} className="text-black tracking-widest">
                          <p className="list-disc tracking-widest">{name}</p>
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
          className={`fixed flex justify-center items-center bg-opacity-80 z-50 top-0   left-0 w-screen h-screen bg-black`}
        >
          <div
            className={`
           
               " w-full lg:w-fit lg:h-fit h-full   flex flex-row lg:flex-col justify-center bg-gray bg-opacity-100"
        `}
          >
            <div
              onClick={() => setExpanded1((prevExpanded) => !prevExpanded)}
              className="lg:w-fit p-5 md:py-16 md:px-10  bg-white flex flex-col justify-center w-full  "
            >
              <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
                Feedback
              </h2>
              <p className="leading-relaxed mb-5 text-black">
                Post-ironic portland shabby chic echo park, banjo fashion axe
              </p>
              <div className="relative mb-4">
                <label htmlFor="name" className="leading-7 text-sm text-black">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-black">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-black"
                >
                  {title}
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
              <button className="text-white bg-blue border-0 py-2 px-6 focus:outline-none  rounded text-lg">
                Button
              </button>

              <button
                onClick={() => setExpanded1((prevExpanded) => !prevExpanded)}
                className="text-white py-2 px-6 bg-slate-700  mt-5"
              >
                close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default Careercard;
