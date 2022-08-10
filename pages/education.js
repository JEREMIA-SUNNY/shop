import Image from "next/image";
import CoursesCard from "../components/coursescard";

function Education() {
  const careerdata = [
    {
      id: 1,
      title: "Testing",
      mode: "Hybrid (Online + Offline)",
      Levels: "Beginner, Advanced",
      point: [
        { name: "Introduction to software testing" },
        { name: "Verification and validation." },
        { name: "Define functional and non-functional testing" },
        { name: "Overview of software development life cycle" },
        { name: "UI vs API testing" },
        { name: "Manual vs Automated testing" },
        { name: "Overview of writing test cases for UI and API" },
        { name: "Will get clear picture on security testing" },
      ],
      dur: " 1-3 months",
    },
    {
      id: 2,
      title: "Dot Net",
      mode: "Hybrid (Online + Offline)",
      Levels: "Beginner, Advanced",
      point: [
        { name: "Introduction to .Net Framework" },
        { name: "Introduction to c# and oops using c#.Net" },
        { name: " Window forms using c#.Net " },
        { name: "ADO.NET-Data access from SQL" },
      
        { name: "Collections and Assemblies" },
        { name: "ASP.NET." },
        { name: "Web server controls" },
       
        {name:"LINQ, Web Architecture"}
      ],
      dur: " 1-3 months",
    },
    {
      id: 3,
      title: "Java",
      mode: "Hybrid (Online + Offline)",
      Levels: "Beginner, Advanced",
      point: [
        { name: "Introduction to java" },
        { name: "Variables and type" },
        { name: "Control flow" },
        { name: "Classes and interfaces" },
        { name: "Object-oriented programming" },
        { name: "Exception Handling" },
        { name: "Lambda expressions" },
        { name: "Asynchronous programming" },
      ],
      dur: " 1-3 months",
    },
    {
      id: 4,
      title: "SAP",
      mode: "Hybrid (Online + Offline)",
      Levels: "Beginner, Advanced",
      point: [
        { name: "SAP financial accounting (FI)" },
        { name: "SAP financial supply chain management (FSCM)" },
        { name: "ERP and Finance" },
        { name: "Digital Supply Chain" },
        { name: "CRM and Customer Experience" },
        { name: "HR and People Engagement" },
        { name: "Network and Spend Management" },
        { name: "Business Technology Platform (data and analytics)" },
      ],
     
      dur: " 1-3 months",
    },
  ];
  const careerdata1 = [
    {
      id: 1,
      title: "AZURE",
      mode: "Hybrid (Online + Offline)",
      Levels: "Beginner, Advanced",
      dur: " 1-3 months",
      point: [
        { name: "Introduction to Azure(Data center,Geographies,..etc)" },
        { name: "How to create virtual machine scale set" },
        { name: "Virtual machine in Azure portal" },
        { name: "Azure app services and plans" },
        { name: "How to access Azure sql database from local machine" },
        { name: "Azure deployment slots" },
        { name: "Deploy ASP.NET core web api to Azure app service" },
        { name: "Adding API to Azure API management" },
      ],
      
    },
    {
      id: 2,
      title: "Mainframe",
      mode: "Hybrid (Online + Offline)",

      point: [
        { name: "Mainframe introduction" },
        { name: "Multiple Virtual Storage" },
        { name: "Job Control language" },
        { name: "Common business oriented language" },
        { name: "Virtual storage access method" },
        { name: "DataBase2." },
        { name: "Customer information control system" },
        { name: "Lab on z/os s390 real server" },
      ],
      Levels: "Beginner, Advanced",
      dur: " 1-3 months",
    },
    {
      id: 3,
      title: "Service Now",
      mode: "Hybrid (Online + Offline)",
      point: [
        { name: "Introduction to ServiceNow" },
        { name: "ServiceNow basics" },
        { name: "ServiceNow studio introduction" },
        { name: "Application development,management tools" },
        { name: "Client side scripting" },
        { name: "server side scripting" },
        { name: "Application security" },
        { name: "Importing data" },
      ],
      Levels: "Beginner, Advanced",
      dur: " 1-3 months",
    },
    {
      id: 4,
      title: "Siebel",
      mode: "Hybrid (Online + Offline)",
      point: [
        { name: "Siebel tools" },
        { name: "Siebel Repository" },
        { name: "Siebel server architecture" },
        { name: "Siebel data model" },
        { name: "Responsibility and views" },
        { name: "User Positions" },
     
      ],
      Levels: "Beginner, Advanced",
      dur: " 1-3 months",
    },
  ];

  return (
    <div className="bg-coustom1">
      <div className="w-full h-80 relative ">
        <Image
          layout="fill"
          alt="ser"
          src="/edu&car/education.png"
          objectFit="cover "
        />
        <div className="w-full    h-full  flex  justify-center">
          <div className="text-white relative   max-auto  h-full flex justify-center items-center">
            <h1 className=" text-4xl   text-bold  w-full     text-white   ">
              Education
            </h1>
          </div>
        </div>
      </div>
      <section className="text-black py-10 ">
        <div className="container px-5 py-11 mx-auto">
          <p>
            Learning as a process is in the middle of a rapid evolution. From a
            faculty-driven model in closed classrooms to an open-to-all
            self-learning model powered by the internet, professionals in the
            modern workforce have access to resources like never before. We at
            SFJ are strongly committed to professional development and
            upskilling, and have been the chosen trainer for thousands of IT
            professionals for over a decade. Sign-up with our learning programs
            today and take your career to the next level.
          </p>
        </div>
      </section>

      <section className="text-black ">
        <div className=" container px-5 py-4 mx-auto">
          <div className="text-center mb-14">
            <h1 className="sm:text-3xl text-2xl  text-center title-font text-black mb-4">
            Featured Courses
            </h1>
          </div>
          <div className="flex  lg:flex-row flex-col  w-full mb-8  gap-7 flex-wrap ">
            <div className=" flex flex-col gap-4  flex-1">
              {careerdata.map(({ id, dur, title, mode, Levels, point }) => {
                return (
                  <CoursesCard
                    key={id}
                    dur={dur}
                    title={title}
                    mode={mode}
                    levels={Levels}
                    point={point}
                  />
                );
              })}
            </div>
            <div className=" flex gap-4 flex-col flex-1">
              {careerdata1.map(
                ({ id, description, title, mode, Levels, point,dur }) => {
                  return (
                    <CoursesCard
                      key={id}
                      dur={dur}
                      title={title}
                      mode={mode}
                      levels={Levels}
                      point={point}
                    />
                  );
                }
              )}
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
export default Education;
