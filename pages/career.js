import Image from "next/image";
import { FaAddressBook } from "react-icons/fa";

import useCollapse from "react-collapsed";
import { useState } from "react";
import Careercard from "../components/careercard";
export default function Career() {
  const [isExpanded, setExpanded] = useState(false);
  const [isExpanded1, setExpanded1] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
  useCollapse({ isExpanded1 });

  const careerdata = [
    {
      id: 1,
      title: "Java Stack",
      
      point:[
        {name:"sfdfdsfgdgrgdfgdfgfdgdfgfdgdfsd"},
        {name:"sfdfdsfsd"},
        {name:"sfdfdsfsd"},
        {name:"sfdfdsfsd"},
        {name:"sfdfdsfsd"},
        {name:"sfdfdsfsd"},
        {name:"sfdfdsfsd"},
        {name:"sfdfdsfsd"},
   ],
   type:" Full-time/Contract",
      role:"Developer/Consultant/Architect",
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    },
    {
      id: 2,
      title: "Handoop",
      type:" Full-time/Contract",
      point:[
        {name:"sfdfdsfsd"},
        {name:"sfdfdsfsd"},
        {name:"sfdfdsfsd"},
        {name:"sfdfdsfsd"},
        {name:"sfdfdsfsd"},
        {name:"sfdfdsfsd"},
        {name:"sfdfdsfsd"},
        {name:"sfdfdsfsd"},
   ],
      role:"Developer/Consultant/Architect",
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.         Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    },
    {
      id: 3,
      title: "React JS",
      type:" Full-time/Contract",
      point:[
        {name:"sfdfdsfsd"},
        {name:"sfdfdsfsd"},
        {name:"sfdfdsfsd"},
        {name:"sfdfdsfsd"},
        {name:"sfdfdsfsd"},
        {name:"sfdfdsfsd"},
        {name:"sfdfdsfsd"},
        {name:"sfdfdsfsd"},
   ],
      role:"Developer/Consultant/Architect",
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    },
    {
      id: 4,
      title: "Snowflake",
      type:" Full-time/Contract",
      role:"Developer/Consultant/Architect",
      point:[
        {name:"sfdfdsfsd"},
        {name:"sfdfdsfsd"},
        {name:"sfdfdsfsd"},
        {name:"sfdfdsfsd"},
        {name:"sfdfdsfsd"},
        {name:"sfdfdsfsd"},
        {name:"sfdfdsfsd"},
        {name:"sfdfdsfsd"},
   ],
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    },
    {
      id: 5,
      title: "Teradata",
      type:" Full-time/Contract",
      point:[
        {name:"sfdfdsfsd"},
        {name:"sfdfdsfsd"},
        {name:"sfdfdsfsd"},
        {name:"sfdfdsfsd"},
        {name:"sfdfdsfsd"},
        {name:"sfdfdsfsd"},
        {name:"sfdfdsfsd"},
        {name:"sfdfdsfsd"},
   ],
      role:"Developer/Consultant/Architect",
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    },
    {
      id: 6,
      title: "Data Sciences",
      type:" Full-time/Contract",
      point:[
        {name:"sfdfdsfsd"},
        {name:"sfdfdsfsd"},
        {name:"sfdfdsfsd"},
        {name:"sfdfdsfsd"},
        {name:"sfdfdsfsd"},
        {name:"sfdfdsfsd"},
        {name:"sfdfdsfsd"},
        {name:"sfdfdsfsd"},
   ],
      role:"Developer/Consultant/Architect",
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    },
    {
      id: 7,
      title: "Azure Data Bricks/ADF ",type:" Full-time/Contract",
      point:[
        {name:"sfdfdsfsd"},
        {name:"sfdfdsfsd"},
        {name:"sfdfdsfsd"},
        {name:"sfdfdsfsd"},
        {name:"sfdfdsfsd"},
        {name:"sfdfdsfsd"},
        {name:"sfdfdsfsd"},
        {name:"sfdfdsfsd"},
   ],
      role:"Developer/Consultant/Architect",
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    },
  ];
  const careerdata1 = [
   
    {
      id: 1,
      title: "SAP BODS ",
      type:" Full-time/Contract",
      point:[
        {name:"sfdfdsfsd"},
        {name:"sfdfdsfsd"},
        {name:"sfdfdsfsd"},
        {name:"sfdfdsfsd"},
        {name:"sfdfdsfsd"},
        {name:"sfdfdsfsd"},
        {name:"sfdfdsfsd"},
        {name:"sfdfdsfsd"},
   ],
      role:"Developer/Consultant/Architect",
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.         Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    },
    {
      id: 2,
      title: "SAP BW",
      type:" Full-time/Contract",
      point:[
        {name:"sfdfdsfsd"},
        {name:"sfdfdsfsd"},
        {name:"sfdfdsfsd"},
        {name:"sfdfdsfsd"},
        {name:"sfdfdsfsd"},
        {name:"sfdfdsfsd"},
        {name:"sfdfdsfsd"},
        {name:"sfdfdsfsd"},
   ],
      role:"Developer/Consultant/Architect",
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    },
    {
      id: 3,
      title: "SAP BW/4 HANA",
      type:" Full-time/Contract",
      point:[
        {name:"sfdfdsfsd"},
        {name:"sfdfdsfsd"},
        {name:"sfdfdsfsd"},
        {name:"sfdfdsfsd"},
        {name:"sfdfdsfsd"},
        {name:"sfdfdsfsd"},
        {name:"sfdfdsfsd"},
        {name:"sfdfdsfsd"},
   ],
      role:"Developer/Consultant/Architect",
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    },
    {
      id: 4,
      title: "SAP SuccessFactors ",
      type:" Full-time/Contract",
      point:[
        {name:"sfdfdsfsd"},
        {name:"sfdfdsfsd"},
        {name:"sfdfdsfsd"},
        {name:"sfdfdsfsd"},
        {name:"sfdfdsfsd"},
        {name:"sfdfdsfsd"},
        {name:"sfdfdsfsd"},
        {name:"sfdfdsfsd"},
   ],
      role:"Developer/Consultant/Architect",
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    },
    {
      id: 5,
      title: "Salesforce",
      type:" Full-time/Contract",
      point:[
        {name:"sfdfdsfsd"},
        {name:"sfdfdsfsd"},
        {name:"sfdfdsfsd"},
        {name:"sfdfdsfsd"},
        {name:"sfdfdsfsd"},
        {name:"sfdfdsfsd"},
        {name:"sfdfdsfsd"},
        {name:"sfdfdsfsd"},
   ],
      role:"Developer/Consultant/Architect",
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    },
    {
      id: 6,
      title: "Oracle/OIS/Finance",
      type:" Full-time/Contract",
      point:[
        {name:"sfdfdsfsd"},
        {name:"sfdfdsfsd"},
        {name:"sfdfdsfsd"},
        {name:"sfdfdsfsd"},
        {name:"sfdfdsfsd"},
        {name:"sfdfdsfsd"},
        {name:"sfdfdsfsd"},
        {name:"sfdfdsfsd"},
   ],
      role:"Developer/Consultant/Architect",
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    },
  ];

  return (
    <div className="bg-coustom1">
     
     <div className="w-full h-80 relative bg-coustom1 ">
        <Image
          layout="fill"
          alt="ser"
          src="/edu&car/careers.png"
          objectFit="cover "
        />
        <div className="w-full    h-full  flex  justify-center">
          <div className="text-white relative    h-full flex justify-center items-center">
            <h1 className=" text-4xl   text-bold  w-full     text-white">
             Careers
            </h1>
          </div>
        </div>
      </div>
      <section className="text-black  ">
        <div className="container px-5 py-11 mx-auto bg-coustom1">
          <p>
          We are always on the lookout for talented, committed individuals and help them achieve their career goals by providing the right opportunities at the right time, tailored to each individual&apos;s preferences. We have successfully placed 15000+ professionals in the recent years in several Fortune 100 companies and MNCs, across several key roles. Our talent services cover a wide spectrum of roles in the digital ecosystem, from engineers, consultants, architects, and even CXOs. Sign-up with SFJ today and join a strong growing network of IT professionals.
          </p>
        </div>
      </section>

      <section className="text-black bg-coustom1 ">
        <div className=" container px-5 md:pt-14 md:pb-10 pt-7 pb-5 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl  text-center title-font text-black mb-4">
            Featured Technologies
            </h1>
          </div>
          <div className="flex  lg:flex-row flex-col  mb-8  w-full  gap-7 flex-wrap ">
            <div className=" flex flex-col gap-4  flex-1">
              {careerdata.map(({ id, description, title,type,point,role }) => {
                return (
                  <Careercard
                    key={id}
                    description={description}
                    title={title}
                    type={type}
                    role={role}
                    point={point}
                  />
                );
              })}
            </div>
            <div className=" flex gap-4 flex-col flex-1">
              {careerdata1.map(({ id, description, title,type,role,point }) => {
                return (
                  <Careercard
                    key={id}
                    description={description}
                    title={title}
                    type={type}
                    role={role}
                    point={point}
                  />
                );
              })}
            </div>
          </div>

          {/* <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Button
          </button> */}
        </div>
      </section>
    </div>
  );
}
