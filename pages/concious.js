import Image from "next/image";
import CoursesCard from "../components/coursescard";

function Concious() {
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
      title: "DotNet",
      mode: "Hybrid (Online + Offline)",
      Levels: "Beginner, Advanced",
      point: [
        { name: "Introduction to .Net Framework" },
        { name: "Introduction to c# and oops using c#.Net" },
        { name: " Window forms using c#.Net " },
        { name: "ADO.NET-Data access from SQL" },

        { name: "Collections and Assemblies" },
        { name: "ASP.NET" },
        { name: "Web server controls" },

        { name: "LINQ, Web Architecture" },
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
    {
      id: 5,
      title: "VUE.JS",
      mode: "Hybrid (Online+ Offline))",
      Levels: "Advance",
      point: [
        { name: "Overview Javascript / ES6I)" },
        { name: "Class and style bindings" },
        { name: "Components" },
        { name: "Vue Reactivity" },
        { name: "Vue Router" },
      ],

      dur: " 3 to 5 Days",
    },
    {
      id: 6,
      title: "PMP",
      mode: "Hybrid (Online+ Offline))",
      Levels: "Beginner",
      point: [
        { name: "Creating A High Performing Team" },
        { name: "Starting the Project" },
        { name: "Doing the Work" },
        { name: "Keeping the Team On Track" },
        { name: "Keeping the Business In Mind" },
      ],

      dur: " 3 to 5 Days",
    },
    {
      id: 7,
      title: "SCRUM Master",
      mode: "Hybrid (Online+ Offline))",
      Levels: "Beginner",
      point: [
        { name: "Introduction" },
        { name: "The scrum flow" },
        { name: "The scrum flow" },
        { name: "The Scrum team" },
        { name: "Projects Simulations description" },
      ],

      dur: " 3 to 5 Days",
    },
    {
      id: 8,
      title: "Block Chain",
      mode: "Hybrid (Online+ Offline))",
      Levels: "Beginner",
      point: [
        { name: "Introduction to blockchain" },
        { name: "Building block of blockchain" },
        {
          name: "Type of Blockchain Public, Private, Permissioned, Permission less, etc. Comparison of below blockchain platforms.",
        },
        { name: "Type of decentralized storage" },
        {
          name: "Build a Blockchain from grounds up with Ethereum Smart Contracts",
        },
        {
          name: "Digital currency, Tokens market cap in fiat, bitcoin and how valuation done- Cyber security, Fraud detection",
        },
        { name: "Bootstrapping a Hyper ledger Network" },
      ],

      dur: " 4 Days",
    },
    {
      id: 9,
      title: "Machine Learning /Artificial Intelligence",
      mode: "Hybrid (Online+ Offline))",
      Levels: "Beginner",
      point: [
        { name: "Introduction to artificial intelligence" },
        { name: "Types of machine learning and Applications" },
        { name: "Deep Learning, Frameworks and Use cases" },
        { name: "Use cases of AI & ML in Auditing" },
      ],

      dur: " 40 hours (5 Days)",
    },
    {
      id: 10,
      title: "Meta",
      mode: "Hybrid (Online+ Offline))",
      Levels: "Beginner",
      point: [
        { name: "What is Meta" },
        { name: "Who is creating the Meta" },
        { name: "Meta Verticals" },
      ],

      dur: " 8 Hours/ 1 Day",
    },
    {
      id: 11,
      title: "Python",
      mode: "Hybrid (Online+ Offline))",
      Levels: "Beginner",
      point: [
        { name: "Python Environment Setup and Essentials" },
        { name: "Python language Basic Constructsa" },
        { name: "OOP concepts in Python" },
        { name: "Database connection" },
        { name: "Num Py for mathematical computing" },
        { name: "Sci Py for scientific computing" },

        { name: "Matplotlib for data visualization" },

        { name: "Pandas for data analysis and machine learning" },
        { name: "Multi Threading & Race Condition" },
        { name: "Packages and Functions" },
        { name: "Web scraping with Python" },
      ],

      dur: " 42 Hours training and 50 Hours projects and exercises",
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
      title: "ServiceNow",
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
        { name: "Introduction" },
        { name: "Administration" },
        { name: "Siebel Development" },
        { name: "Configuring Siebel Objects" },
        { name: "Siebel eScripting/Business Services" },
        { name: "Siebel EAI Objects/Integration" },
        { name: "Siebel Open UI" },
      ],
      Levels: "Beginner",
      dur: "3 to 5 Days",
    },
    {
      id: 5,
      title: "RPA",
      mode: "Hybrid (Online + Offline)",
      point: [
        { name: "What is RPA" },
        { name: "Exploring UI Path studio" },
        { name: "Exploring UI Path studio" },
        { name: "The Automation challenge" },
        { name: "Email Automation" },
        { name: "UI Path Orchestrator" },
      ],
      Levels: "Beginner",
      dur: " 3 to 5 Days",
    },
    {
      id: 6,
      title: "Big Data",
      mode: "Hybrid (Online + Offline)",
      point: [
        { name: "Introduction" },
        { name: "Using Hadoop core" },
        { name: "Hadoop with Ping" },
        { name: "Hadoop with Spark" },
        { name: "Data store wit Hadoop" },
      ],
      Levels: "Beginner",
      dur: " 3 to 5 Days",
    },
    {
      id: 7,
      title: "Cyber Security",
      mode: "Hybrid (Online + Offline)",
      point: [
        { name: "Introduction to Cyber Security" },
        { name: "Access Control Methods" },
        { name: "Physical Security" },
        { name: "Security Operations" },
        { name: "Offensive Security" },
        { name: "Systems Security" },
      ],
      Levels: "Beginner",
      dur: " 3 to 5 Days",
    },
    {
      id: 8,
      title: "Data Science",
      mode: "Hybrid (Online + Offline)",
      point: [
        { name: "Introduction to Data Science" },
        { name: "Marketing & CRM" },
        { name: "Statistical Methods for Decision Making" },
        { name: "Business Finance" },
        { name: "SQL Programming" },
        { name: "Finance & Risk Analytics" },
        { name: "Web & Social Media Analytics" },
      ],
      Levels: "Beginner",
      dur: " 3 to 5 Days",
    },
    {
      id: 9,
      title: "Web 3.0",
      mode: "Hybrid (Online + Offline)",
      point: [
        { name: "Introduction to Web 3.0" },
        { name: "How to Move from Web 2.0 to Web 3.0" },
        { name: "The Characteristic of Web 3.0" },
        { name: "What Is Mechanics of Web 3.0" },
        { name: "What Is Semantic Web – The Concept Behind Web 3.0" },
        { name: "What Comes After Web" },
      ],
      Levels: "Beginner",
      dur: "8 Hours/ 1 Day",
    },
    {
      id: 10,
      title: "Devops",
      mode: "Hybrid (Online + Offline)",
      point: [
        { name: "Software Engineering & SDL" },
        { name: "What is DevOps?0" },
        { name: "Linux & windows Administration" },
        { name: "Shell Scripting" },
        { name: "Docker" },
      ],
      Levels: "Beginner",
      dur: "3 to 5 Days",
    },
  ];

  return (
    <div>dsafdsf</div>
  );
}
export default Concious;
