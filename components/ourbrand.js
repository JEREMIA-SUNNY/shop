import React from "react";
import { BsPlusLg } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";
import useCollapse from "react-collapsed";
import { useState } from "react";
function CoursesCard({ id, title, desc }) {
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({
    isExpanded,
    easing: "cubic-bezier(0.37, 0, 0.63, 1)",
    duration: 600,
  });
  return (
    <>
      <div key={id} className="  flex   flex-col">
        <div
          {...getToggleProps({
            onClick: () => setExpanded((prevExpanded) => !prevExpanded),
          })}
          className="bg-green shadow-sm w-full  rounded flex  p-4 h-full justify-between"
        >
          <span className="text-black font-bold ">{title}</span>
          <div>
            {isExpanded ? (
              <BiMinus size={15} className=" text-black w- h-6 mr-4" />
            ) : (
              <BsPlusLg size={15} className=" text-black w- h-6 mr-4" />
            )}
          </div>
        </div>
        <div>
          <section {...getCollapseProps()}>
            <div className="w-full">
              <p className="leading-relaxed p-5 text-subtext o text-justify p-1 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                voluptatem ab molestias eaque, distinctio quae, sequi ipsam
                rerum, suscipit nostrum quibusdam blanditiis consectetur tempora
                mollitia! Expedita, dignissimos ut fugit, dicta, repellendus
                possimus blanditiis quas nesciunt error voluptate deleniti
                cumque nam? Quibusdam corrupti vel dolorem repellat adipisci
                odio animi quas vero.
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
export default CoursesCard;
