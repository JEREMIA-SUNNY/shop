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
        {name:"Develop new API'S as part of a microservice architecture using Spring boot"},
        {name:"Strong problem solving skills"},
        {name:"Hands-on approach for technical challenge faced by the team"},
        {name:"Good working exposure to relational database like Oracle, MySQL, Postgresql, etc"},
        {name:"Experience working with Bootstrap, Java, React-native, Nodejs, Express, etc"},
        {name:"Excellent communication skills"},
        {name:"Experience in developing web applications"},
        {name:"Ability to take initiative and handle multiple priorities in a fast-paced environment"},
   ],
   type:" Full-time/Contract",
      role:"Developer/Consultant/Architect",
    },
    {
      id: 2,
      title: "Handoop",
      type:" Full-time/Contract",
      point:[
        {name:"Data management"},
        {name:"RDBMS"},
        {name:"Consulting"},
        {name:"Data Mining"},
        {name:"Python"},
        {name:"Business Process"},
        {name:"NoSQL"},
        {name:"Data Processing"},
   ],
      role:"Developer/Consultant/Architect",
      
    },
    {
      id: 3,
      title: "React JS",
      type:" Full-time/Contract",
      point:[
        {name:"Work Experience as Front end developer" },
        {name:"Experienced in javaScript , react and knowledge typeScript"},
        {name:"Write well documented and clean codes "},
        {name:"Able to build react native ios android application"},
        {name:"Build and maintain React native application"},
        {name:"Integrate backend and third party Api's"},
        {name:"Strong Data Structure and Algorithms skills"},
        {name:"HTML, CSS, JavaScript, React, Redux,.. etc"},
   ],
      role:"Developer/Consultant/Architect",
     
    },
    {
      id: 4,
      title: "Snowflake",
      type:" Full-time/Contract",
      role:"Developer/Consultant/Architect",
      point:[
        {name:"Lead technical pieces of client data warehouse implementations and on-boarding efforts"},
        {name:"Work with the other Customer Engagement and Delivery matrix resources to ensure proper technical guidance, project management and functional support"},
        {name:"Strong database and data warehouse experience, including recent experience writing and tuning complex SQL queries"},
        {name:"Experience and understanding of large-scale infrastructure-as-a-service platforms (e.g. Amazon AWS, Microsoft Azure, OpenStack)"},
        {name:"Data Warehousing"},
        {name:"Tableau"},
        {name:"spark"},
        {name:"ETL"},
   ],
      
    },
    {
      id: 5,
      title: "Teradata",
      type:" Full-time/Contract",
      point:[
        {name:"Aware of data modelling concepts and ETL - EDW Concepts"},
        {name:" Hands on experience in delivering Teradata Datawarehouse solutions"},
        {name:"Aware of data modelling concepts and ETL - EDW Concepts."},
        {name:"Exposure to All Teradata utilities particularly TPT, Fastload, Multiload, BTEQ, Fast-Export, Tpump"},
        {name:"Prior work experience in the Teradata - GCFR / TCF modules"},
        {name:"Experience with analysis, design, development, customizations and implementation of Change Requests for Teradata"},
        
   ],
      role:"Developer/Consultant/Architect",
      
    },
    {
      id: 6,
      title: "Data Sciences",
      type:" Full-time/Contract",
      point:[
        {name:"Advanced analytical skills"},
        {name:"Artificial Intelligence"},
        {name:"Knowledge of statical techniques and machine learning algorithms"},
        {name:"Natural language processing"},
        {name:"Advanced Excel, Powerpoint skills"},
        {name:"Advanced communication (written and oral) and strong interpersonal skills"},
        {name:"Knowledge on google cloud platform"},
       
   ],
      role:"Developer/Consultant/Architect",
      
    },
    {
      id: 7,
      title: "Azure Data Bricks/ADF ",type:" Full-time/Contract",
      point:[
        {name:"Abitlity to learn and grasps concept quickly in a fast-paced environment"},
        {name:"Great problem-solving skills and outstanding deive for results"},
        {name:"Commitement to collaborate with others and deliver quality work"},
        {name:"Self-starter, who proactively identifies problems and drives for resolution."},
        {name:"Experience with Synapse, ADF Development & Orchestration and Strong SQL is must. Engineer should be very strong and excellent hands-on in the same stack."},
        {name:"Experience with Azure should be excellent."},
       
   ],
      role:"Developer/Consultant/Architect",
      
    },
  ];
  const careerdata1 = [
   
    {
      id: 1,
      title: "SAP BODS ",
      type:" Full-time/Contract",
      point:[
        {name:"Experience in BDOS Design and architecture"},
        {name:"Knowledge of developing real time interface like IDOC, BAPI SAP applications BODS"},
        {name:"Sound knowledge of SAP BODS"},
        {name:"Experience in Data Migration Projects"},
        {name:"Must have experience of installation and configuration of SAP BODS"},
        {name:"Should be Able to provide the estimation on BDOS work effort"},
     
   ],
      role:"Developer/Consultant/Architect",
      
    },
    {
      id: 2,
      title: "SAP BW",
      type:" Full-time/Contract",
      point:[
        {name:"Experience with design phase of ERP transformation"},
        {name:"Knowledge of cost modelling and understanding of how cost allocations are done"},
        {name:"Alteryx Certification (Core or/and Advanced)"},
        {name:"Working knowledge of SAP crystal reports"},
        {name:"Experience of large enterprise applications (SAP, Oracle, Salesforce, etc.)"},
        {name:"emonstrated problem solving and critical thinking skills"},
        {name:"Hands on experience in SAP Profitability and Performance Management (PaPM)"},
        {name:"Ability to understand how BW/4 HANA / Native HANA Model will be aligned with PaPM Model"},
   ],
      role:"Developer/Consultant/Architect",
     
    },
    {
      id: 3,
      title: "SAP BW/4 HANA",
      type:" Full-time/Contract",
      point:[
        {name:"Design and build Data Warehouse models in SAP BW"},
        {name:"Data Load from SAP HR Systems i.e. SAP S4HANA, SAP SuccessFactors Cloud to SAP BW4HANA"},
        {name:"Experience in building BI reports, on tools like SAP BO, SAP Analytics Cloud."},
        {name:"Ability to take ownership of solutions, from design stage to deployment."},
        {name:"Support testing CIT/E2E/UAT"},
        {name:"Analyse code and review designs"},
        {name:"Experience on cloud platforms a plus"},
        {name:"Work with geographically diverse development teams"},
   ],
      role:"Developer/Consultant/Architect",
      
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
        {name:"Follow standard procedures for proper escalation of unresolved issues to the appropriate internal team"},
        {name:"SFDC"},
        {name:"Presales"},
        {name:"Prepare accurate and timely reports"},
        {name:"Provide prompt and accurate feedback to customers"},
       
   ],
      role:"Developer/Consultant/Architect",
    
    },
    {
      id: 6,
      title: "Oracle/OIS/Finance",
      type:" Full-time/Contract",
      point:[
        {name:"Proficient computer usage"},
        {name:"debugging skills"},
        {name:"Knowledge of sound professional experience with Microsoft based server operating systems"},
        {name:" real-time access to live financial data"},
        
   ],
      role:"Developer/Consultant/Architect",
     
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
                    key={`${id}-${title}`}
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
                    key={`${id}-${title}`}
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
