import { BsPlusLg } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";
import useCollapse from "react-collapsed";
import { useState } from "react";
import { useForm } from "react-hook-form";
function CoursesCard({ id, title, desc }) {
  const [isExpanded, setExpanded] = useState(false);
  const [isExpanded1, setExpanded1] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({
    isExpanded,
    easing: "cubic-bezier(0.37, 0, 0.63, 1)",
    duration: 600,
  });

  return (
    <>
      <div key={id} className="w-full flex  border-t border-b flex-col">
        <div
          {...getToggleProps({
            onClick: () => setExpanded((prevExpanded) => !prevExpanded),
          })}
          className="bg-blue  w-full  rounded flex justify-between  p-4 h-full items-center"
        >
          <span className="text-subtext flex text-center font-bold ">
            {title}
          </span>
          <div>
            {isExpanded ? (
              <BiMinus size={15} className=" text-title w- h-6 mr-4" />
            ) : (
              <BsPlusLg size={15} className=" text-title w- h-6 mr-4" />
            )}
          </div>
        </div>
        <div>
          <section {...getCollapseProps()}>
            <div className="flex">
              <div className="w-full">
                <div className="h-full p-4  pt-5 pb-5 rounded-lg border text-center ">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolores, cupiditate ea dignissimos nobis tempore ut quam
                  voluptate suscipit sapiente non fugiat culpa corporis
                  quisquam, iure laudantium! Quae quia officia explicabo,
                  possimus non adipisci eveniet blanditiis iste laboriosam,
                  animi, dicta placeat enim aut voluptatibus. Ipsa accusamus
                  neque et laudantium adipisci iste!
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
export default CoursesCard;
