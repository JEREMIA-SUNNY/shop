import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Layout({ children }) {
  const { pathname } = useRouter();
  const [navbr, setNavbr] = useState(false);
  const [view, setView] = useState(false);
  const [svgstyle, setSvgStyle] = useState(false);

  const menu = [
    {
      name: "Home",
      path: "/",
    },

    {
      name: "Dry Groceries",
      path: "/ourproduct",
      // sub: [
      //   { name: "IT Services", path: "/solutions/itservices" },
      //   { name: "Knowledge As A Service ", path: "/solutions/knowledge" },
      //   { name: "Talent As A Service", path: "/solutions/talent" },
      // ],
    },
    {
      name: "Home Care",
      path: "/ourbrand",

      // sub: [
      //   { name: "Analytics", path: "/capabilities#Analytics" },
      //   { name: "Consulting ", path: "/capabilities#Consulting" },

      //   { name: "Mobility", path: "/capabilities#Mobility" },

      //   { name: "Outsourcing", path: "/capabilities#Outsourcing" },
      //   { name: "Staffing", path: "/capabilities#Staffing" },
      //   { name: "Upskilling", path: "/capabilities#Upskilling" },
      // ],
    },
    {
      name: "Personal Care",
      path: "/concious",
    },
    {
      name: "| We care About Earth",
      path: "/about",
      // sub: [
      //   { name: "Who We Are", path: "/about#WhoWe-Are" },
      //   { name: "Core Values", path: "/about#Core-values" },
      //   { name: "Meet Our Team", path: "/about#MeetOur-Team" },
      // ],
    },

    // {
    //   name: "contact us",
    //   path: "/contact",
    // },
  ];

  return (
    <>
      <Head>
        <title>Good Picks</title>
      </Head>

      <header className="">
        <div className="md:container mx-auto flex justify-between items-center text-zinc-900 font-sans">
          <nav className="text-sm uppercase tracking-tight hidden md:flex items-center">
            <Link href="/">
              <a className="flex">
                <div className="hidden md:block">
                  <Image src="/icon.png" alt="logo" width={150} height={100} />
                </div>
                <div className="block md:hidden">
                  <Image
                    src="/mp-logo-320-c.png"
                    alt="logo"
                    width={60}
                    height={60}
                  />
                </div>
              </a>
            </Link>
            {menu.map(({ name, path, sub }, index) => (
              <div key={index} className="group relative inline-flex">
                <Link href={path}>
                  <a
                    className={`${
                      pathname === path &&
                      "underline decoration-yellow decoration-2 underline-offset-4 font-bold"
                    } hover:font- mx-3  2xl:mx-4 transition-all`}
                  >
                    {name}
                  </a>
                </Link>

                {sub && (
                  <div className="bg-transparent w-auto absolute top-4 left-0 flex-col z-50 rounded-sm invisible group-hover:visible transition-all">
                    <div className="pt-4 w-auto">
                      <div className="w-full shadow-md">
                        {sub.map(({ name, path }, index) => (
                          <Link key={index} href={path}>
                            <a className="w-52 hover:font-bold px-4 bg-white inline-flex p-2 normal-case text-sm whitespace-nowrap border-b border-t border-zinc-100">
                              {name}
                            </a>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <nav className="flex md:hidden  p-2 relative group">
            <svg
              onClick={() => {
                setView((prev) => !prev), setSvgStyle((prev) => !prev);
              }}
              xmlns="http://www.w3.org/2000/svg"
              className={`${
                svgstyle
                  ? "h-5 w-5 transform group-hover:-rotate-90 transition duration-150 ease-in-out"
                  : "h-5 w-5 transform group-hover:-rotate-0 transition duration-150 ease-in-out"
              }`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>

            {view && (
              <div className="bg-transparent w-auto absolute top-6 flex-col z-50 rounded-sm invisible group-active:visible group-hover:visible transition-all">
                <div className="pt-4 w-auto">
                  <div className="w-full shadow-md">
                    {menu.map(({ name, path }, index) => (
                      <Link tabIndex={1} key={index} href={path}>
                        <a
                          onClick={() => {
                            setView(false), setSvgStyle(false);
                          }}
                          className="w-full hover:font-bold px-4 bg-white inline-flex p-2 normal-case text-md whitespace-nowrap border-b border-t border-zinc-100"
                        >
                          {name}
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </nav>

          <div className="flex gap-5 md:mr-0 mr-5">
            <img src="/icons/search.gif" className="w-[30px] h-[30px]" alt="" />
            <img src="/icons/store.gif" className="w-[30px] h-[30px]" alt="" />
            <button>Login</button>
          </div>
        </div>
      </header>

      <main className="text-zinc-900 font-sans">{children}</main>

      <footer className=" ">
        <div>
          <svg
            preserveAspectRatio="none"
            width="100%"
            height="150px"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#122C35"
              fillOpacity="1"
              d="M0,192L48,181.3C96,171,192,149,288,138.7C384,128,480,128,576,138.7C672,149,768,171,864,192C960,213,1056,235,1152,234.7C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div className="bg-[#122C35]">
          <div className="grid  grid-cols-2 md:flex md:flex-row  mx-auto md:container justify-between items-start">
            <div className="col-span-2 pb-4 md:pb-0 ">
              <Link href="/">
                <a className="flex justify-start items-center pl-6 md:pl-0">
                  <div className="">
                    <img
                      src="/brandlogo.png"
                      className="w-[150px] h-[150px]"
                      alt=""
                    />
                  </div>
                </a>
              </Link>
            </div>

            <div className="text-sm p-4 md:p-0 pl-6 ">
              <p className="font-semibold text-white">About</p>
              <p className=" text-white">Our Story</p>
              <p className=" text-white">About Calculator</p>
              <p className=" text-white">Verification process</p>
              <p className=" text-white">Expert List</p>
            </div>

            <div className="text-sm text-white p-4 md:p-0 ">
              <p className="font-semibold">Customer Care</p>
              <p className="">Raise Ticket For Issue</p>
              <p className="">Payment Issue</p>
              <p className="">Shipping Issue</p>
              <p className="">Refunds</p>
              <p className="">Return Tracks</p>
            </div>

            <div className="text-sm text-white p-4 md:p-0 ">
              <p className="font-semibold">Policies</p>
              <p className="">Shipping</p>
              <p className="">Privacy</p>
              <p className="">Company Details</p>
              <p className="">Refunds</p>
              <p className="">Return Tracks</p>
            </div>

            <div className="col-span-2 p-4 md:p-0 pl-6 ">
              <p className="font-semibold text-sm pb-2 text-zinc-500">
                Find us on
              </p>
              <div className="grid-cols-5 gap-2 inline-grid ">
                <a
                  className="hover:scale-105 transition-all"
                  // href="https://www.facebook.com/MadhurPharmaAndResearchLaboratories"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    className="w-8 h-8 facebook"
                    width="100"
                    height="100"
                    viewBox="0 0 187 187"
                  >
                    <rect
                      width="187"
                      height="187"
                      fill="#3b5998"
                      rx="18"
                      ry="18"
                    />
                    <path
                      fill="#fefefe"
                      d="M131 79l0 -12c0,-6 4,-7 6,-7 3,0 18,0 18,0l0 -27 -24 0c-27,0 -33,20 -33,32l0 14 -15 0 0 19 0 12 16 0c0,35 0,77 0,77l30 0c0,0 0,-42 0,-77l23 0 1 -12 2 -19 -24 0z"
                    />
                  </svg>
                </a>
                <a
                  className="hover:scale-105 transition-all"
                  // href="https://twitter.com/MadhurPharma"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    className="w-8 h-8 twitter"
                    width="100"
                    height="100"
                    viewBox="0 0 384 384"
                  >
                    <rect
                      width="384"
                      height="384"
                      fill="#1DA1F2"
                      rx="37"
                      ry="37"
                    />
                    <path
                      fill="#fefefe"
                      d="M313 118c-9,4 -19,6 -29,8 11,-7 19,-16 22,-28 -9,6 -20,10 -31,12 -9,-9 -22,-15 -37,-15 -27,0 -49,22 -49,49 0,4 0,7 1,11 -41,-2 -78,-22 -102,-51 -5,7 -7,15 -7,24 0,17 9,32 22,41 -8,0 -16,-2 -23,-6 0,0 0,0 0,1 0,6 2,12 4,17 6,16 20,27 36,31 -4,1 -8,1 -13,1 -3,0 -6,0 -9,-1 6,20 25,34 46,34 -17,14 -38,21 -61,21 -5,0 -8,0 -12,0 22,14 48,22 76,22 78,0 125,-54 138,-110 2,-10 3,-20 3,-30 0,-2 0,-4 0,-6 10,-7 18,-15 25,-25z"
                    />
                  </svg>
                </a>
                <a
                  className="hover:scale-105 transition-all"
                  // href="https://www.linkedin.com/company/madhurpharma/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    className="w-8 h-8 linkedin"
                    width="100"
                    height="100"
                    viewBox="0 0 201 201"
                  >
                    <rect
                      width="201"
                      height="201"
                      fill="#0072b1"
                      rx="19"
                      ry="19"
                    />
                    <polygon
                      fill="#fefefe"
                      points="39 102 39 162 68 162 68 97 68 80 39 80"
                    />
                    <path
                      fill="#fefefe"
                      d="M54 39c-8 0-15 7-15 15 0 7 7 14 15 14 7 0 14-7 14-14 0-8-7-15-14-15zM161 105c-2-15-9-25-30-25-12 0-20 5-24 11l0 0 0-11-23 0 0 16 0 66 24 0 0-41c0-10 2-21 15-21 13 0 14 13 14 22l0 40 25 0 0-45 0 0c0-4 0-8-1-12z"
                    />
                  </svg>
                </a>
                <a
                  className="hover:scale-105 transition-all"
                  // href="https://www.instagram.com/madhurpharma"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    className="w-8 h-8 instragram"
                    width="100"
                    height="100"
                    viewBox="0 0 384 384"
                  >
                    <rect
                      width="384"
                      height="384"
                      fill="#fbad50"
                      rx="37"
                      ry="37"
                    />
                    <path
                      fill="#fff"
                      d="M142 59l100 0c22,0 42,9 56,24 14,14 23,34 23,56l0 106c0,22 -9,41 -23,56 -14,14 -34,23 -56,23l-100 0c-22,0 -42,-9 -56,-23 -15,-15 -24,-34 -24,-56l0 -106c0,-22 9,-42 24,-56 14,-15 34,-24 56,-24zm100 23l-100 0c-16,0 -30,6 -41,16 -10,11 -17,25 -17,41l0 106c0,15 7,30 17,40 11,11 25,17 41,17l100 0c16,0 30,-6 40,-17 11,-10 17,-25 17,-40l0 -106c0,-16 -6,-30 -17,-41 -10,-10 -24,-16 -40,-16z"
                    />
                    <path
                      fill="#fff"
                      d="M192 123c19,0 36,7 48,20 12,12 20,29 20,48 0,19 -8,35 -20,48 -12,12 -29,20 -48,20 -19,0 -36,-8 -48,-20 -13,-13 -20,-29 -20,-48 0,-19 7,-36 20,-48 12,-13 29,-20 48,-20zm32 35c-8,-8 -20,-13 -32,-13 -13,0 -24,5 -33,13 -8,9 -13,20 -13,33 0,12 5,24 13,32 9,8 20,13 33,13 12,0 24,-5 32,-13 8,-8 14,-20 14,-32 0,-13 -6,-24 -14,-33z"
                    />
                    <circle cx="265" cy="119" r="16" fill="#fff" />
                  </svg>
                </a>
                <a
                  className="hover:scale-105 transition-all"
                  // href="https://www.youtube.com/channel/UCrqiYW7GmXwgwtOEtjBQXxQ"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    className="w-8 h-8 youtube"
                    width="100"
                    height="100"
                    viewBox="0 0 5067 5067"
                  >
                    <rect
                      width="5067"
                      height="5067"
                      fill="#c4302b"
                      rx="489"
                      ry="489"
                    />
                    <path
                      fill="#fefefe"
                      d="M3110 2497l-933 504 0 -776 0 -236 421 229 512 279zm1116 -684c0,0 -33,-248 -137,-357 -131,-144 -278,-145 -346,-153 -483,-36 -1208,-36 -1208,-36l-2 0c0,0 -725,0 -1209,36 -67,8 -214,9 -346,153 -103,109 -137,357 -137,357 0,0 -35,292 -35,583l0 36 0 238c0,291 35,583 35,583 0,0 34,248 137,357 132,144 304,139 381,154 277,28 1175,36 1175,36 0,0 726,-1 1209,-37 68,-9 215,-9 346,-153 104,-109 137,-357 137,-357 0,0 35,-292 35,-583l0 -223 0 -51c0,-291 -35,-583 -35,-583z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="mx-auto text-left md:text-center text-sm text-zinc-400 pt-4 md:pt-8 md:p-0 p-4 pl-6">
            <p>Good Pick Pvt Ltd</p>
            <p>
              Copyright © 2022. All Rights Reserved. Designed by Deedbee Social
              Ventures.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
} // import Head from "next/head";
// import Link from "next/link";
// import Image from "next/image";
// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";

// export default function Layout({ children }) {
//   const route = useRouter();
//   const [view, setView] = useState(false);
//   const { pathname } = useRouter();
//   const [navbr, setNavbr] = useState(false);

//   const changeBackground = () => {
//     if (window.scrollY >= 300) {
//       setNavbr(true);
//     } else {
//       setNavbr(false);
//     }
//   };

//   useEffect(() => {
//     changeBackground();
//     window.addEventListener("scroll", changeBackground);
//   });
//   const menu = [
//     {
//       name: "Home",
//       path: "/",
//     },

//     {
//       name: "our product",
//       path: "/ourproduct",
//       // sub: [
//       //   { name: "IT Services", path: "/solutions/itservices" },
//       //   { name: "Knowledge As A Service ", path: "/solutions/knowledge" },
//       //   { name: "Talent As A Service", path: "/solutions/talent" },
//       // ],
//     },
//     {
//       name: "our brand",
//       path: "/ourbrand",

//       // sub: [
//       //   { name: "Analytics", path: "/capabilities#Analytics" },
//       //   { name: "Consulting ", path: "/capabilities#Consulting" },

//       //   { name: "Mobility", path: "/capabilities#Mobility" },

//       //   { name: "Outsourcing", path: "/capabilities#Outsourcing" },
//       //   { name: "Staffing", path: "/capabilities#Staffing" },
//       //   { name: "Upskilling", path: "/capabilities#Upskilling" },
//       // ],
//     },
//     {
//       name: "Your Concious",
//       path: "/concious",
//     },
//     {
//       name: "About",
//       path: "/about",
//       // sub: [
//       //   { name: "Who We Are", path: "/about#WhoWe-Are" },
//       //   { name: "Core Values", path: "/about#Core-values" },
//       //   { name: "Meet Our Team", path: "/about#MeetOur-Team" },
//       // ],
//     },

//     {
//       name: "contact us",
//       path: "/contact",
//     },
//   ];
//   const menu2 = [
//     {
//       name2: "About",
//       path2: "",
//       subm: false,
//       sub: [
//         { name: "Core Values", path: "/about#Core-values" },
//         { name: "Meet Our Team", path: "/about#MeetOur-Team" },
//         { name: "Who We Are", path: "/about#WhoWe-Are" },
//       ],
//     },
//     {
//       name2: "Solutions",
//       path2: "",
//       subm: false,
//       sub: [
//         { name: "Knowledge As A Service ", path: "/solutions/knowledge" },
//         { name: "IT Services", path: "/solutions/itservices" },
//         { name: "Talent As A Service", path: "/solutions/talent" },
//       ],
//     },

//     {
//       name2: "Capabilities",
//       path2: "",
//       subm: false,
//       sub: [
//         { name: "Analytics", path: "/capabilities#Analytics" },
//         { name: "Consulting ", path: "/capabilities#Consulting" },

//         { name: "Mobility", path: "/capabilities#Mobility" },

//         { name: "Outsourcing", path: "/capabilities#Outsourcing" },
//         { name: "Staffing", path: "/capabilities#Staffing" },
//         { name: "Upskilling", path: "/capabilities#Upskilling" },
//       ],
//     },

//     {
//       name2: "Education",
//       path2: "/education",
//     },

//     {
//       name2: " Life@SFJ",
//       path2: "/life",
//     },
//     {
//       name2: "Blogs",
//       path2: "/blog/blogs",
//     },
//     {
//       name2: "Contact Us",
//       path2: "/contact",
//     },
//   ];
//   function click() {
//     if (pathname === "/about") {
//       setAbout(true);
//     } else {
//       setAbout(false);
//     }
//     if (pathname === "/solutions") {
//       setSoultion(true);
//     } else {
//       setSoultion(false);
//     }
//     if (pathname === "/capabilities") {
//       setCapablitily(true);
//     } else {
//       setCapablitily(false);
//     }
//   }

//   return (
//     <>
//       <Head>
//         <title>A good Pick</title>
//       </Head>
//       <div className="w-full lg:h-[90px]">
//         <header
//           className={`${
//             navbr
//               ? "md:fixed bg-white z-[2000] w-full ease-in  duration-700 border-zinc-100 border-b"
//               : "w-full border-zinc-100 z-50 border-b    ease-in duration-700 "
//           }`}
//         >
//           <div className="md:container h-[90px] mx-auto flex justify-between  items-center text-zinc-900 font-sans">
//             {/* <Link href="/">
//               <a className="flex  justify-between lg:justify-start items-center ">
//                 <div className="hidden md:block">
//                   <Image src="/header.png" alt="logo" width={90} height={90} />
//                 </div>
//                 <div className="block   md:hidden">
//                   <Image
//                     src="/header.png"
//                     alt="logo"
//                     width={100}
//                     height={100}
//                   />
//                 </div>
//               </a>
//             </Link> */}
//             {/* <div className="lg:pl-2 lg:flex  text-center  py-3 flex-col justify-center ">
//               <span className="text-sm font-bold text-title capitalize">
//                 {` LET'S TRANSFORM`}
//               </span>
//             </div> */}

//             <nav className="text-sm uppercase  tracking-tight hidden  lg:flex justify-end flex-1">
//               {menu.map(({ name, path, sub }, index) => {
//                 if (name === "Careers")
//                   return (
//                     <div
//                       key={index}
//                       className="group relative cursor-pointer inline-flex "
//                     >
//                       <a
//                         href="https://sfjbs.talentrecruit.com/"
//                         rel="noreferrer"
//                         target="_blank"
//                         className={`${
//                           pathname === path &&
//                           "underline decoration-orange  decoration-2 font-bold underline-offset-4 "
//                         } hover:font-bold mx-3  2xl:mx-4 transition-all`}
//                       >
//                         {name}
//                       </a>

//                       {sub && (
//                         <div className="bg-transparent w-auto absolute top-4 left-0 flex-col z-50 rounded-sm invisible group-hover:visible transition-all">
//                           <div className="pt-4 w-auto">
//                             <div className="w-full shadow-md">
//                               {sub.map(({ name, path }, index) => (
//                                 <Link key={index} href={path}>
//                                   <a className="w-52 hover:font-bold px-4 bg-white inline-flex p-2 normal-case text-sm whitespace-nowrap border-b border-t border-zinc-100 hover:bg-orange">
//                                     {name}
//                                   </a>
//                                 </Link>
//                               ))}
//                             </div>
//                           </div>
//                         </div>
//                       )}
//                     </div>
//                   );
//                 else {
//                   return (
//                     <div
//                       key={index}
//                       className="group cursor-pointer relative inline-flex "
//                     >
//                       <Link href={path}>
//                         <div
//                           className={`${
//                             pathname === path &&
//                             "underline decoration-orange decoration-2 font-bold underline-offset-4 "
//                           } hover:font-bold mx-3  2xl:mx-4 transition-all`}
//                         >
//                           {name}
//                         </div>
//                       </Link>

//                       {sub && (
//                         <div className="bg-transparent w-auto absolute top-4 left-0 flex-col z-50 rounded-sm invisible group-hover:visible transition-all">
//                           <div className="pt-4 w-auto">
//                             <div className="w-full shadow-md">
//                               {sub.map(({ name, path }, index) => (
//                                 <Link key={index} href={path}>
//                                   <a className="w-52 hover:font-bold px-4 bg-white inline-flex p-2 normal-case text-sm whitespace-nowrap border-b border-t border-zinc-100 hover:bg-orange">
//                                     {name}
//                                   </a>
//                                 </Link>
//                               ))}
//                             </div>
//                           </div>
//                         </div>
//                       )}
//                     </div>
//                   );
//                 }
//               })}
//             </nav>

//             <nav className=" lg:hidden mr-2 p-2 relative   flex justify-end ">
//               <svg
//                 onClick={() => {
//                   setView((prev) => !prev);
//                 }}
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5"
//                 viewBox="0 0 20 20"
//                 fill="currentColor"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
//                   clipRule="evenodd"
//                 />
//               </svg>

//               {view && (
//                 <div className="bg-transparent w-auto absolute top-6 -right-2 flex-col z-50 rounded-sm transition-all">
//                   <div className="pt-4 w-auto">
//                     {menu2.map(({ name2, path2, subm, sub }, index) => (
//                       <div
//                         key={index}
//                         tabIndex={1}
//                         className="w-40 group top-4 px-4 bg-white relative inline-flex p-2 normal-case text-sm whitespace-nowrap border-b border-t border-zinc-100 "
//                       >
//                         {sub ? (
//                           name2
//                         ) : (
//                           <div
//                             onClick={() => {
//                               setView(false);
//                             }}
//                           >
//                             <Link href={path2}>
//                               <a>{name2}</a>
//                             </Link>
//                           </div>
//                         )}
//                         <div className="bg-white right-[102%]  group-focus:visible invisible  shadow-md absolute z-[1000] flex flex-col">
//                           {sub?.map(({ name, path }, index) => (
//                             <div
//                               onClick={() => {
//                                 setView((prev) => !prev);
//                               }}
//                               key={index}
//                               className="text-center border border-b border-zinc-100 text-sm  px-4 py-2"
//                             >
//                               <Link href={path}>
//                                 <div className="">{name}</div>
//                               </Link>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </nav>
//             <div className="flex ml-5 gap-2">
//               <img
//                 src="/icons/search.gif"
//                 className="w-[20px] mt-2 h-[20px]"
//                 alt=""
//               />
//               <img
//                 src="/icons/store.gif"
//                 alt=""
//                 className="w-[20px] mt-2 h-[20px]"
//               />
//               <button className="bg-red-600 text-white w-[100px] h-[40px] ml-5 rounded-md">
//                 Log In
//               </button>
//             </div>
//           </div>
//         </header>
//       </div>

//       <main className="text-zinc-900 font-sans">{children}</main>

//       <footer className="border bg-gray-800  border-t mx-auto  py-6 lg:py-8">
//         <div className="flex flex-col lg:flex-row justify-center lg:justify-evenly lg:gap-x-10 items-start">
//           <div className="hidden md:block">
//             <img
//               src="/logo3foot.png"
//               className="object-cover"
//               alt="logo"
//               width={96}
//               height={85}
//             />
//           </div>
//           <div className="flex w-full  lg:w-1/2 justify-center lg:gap-20">
//             <div className="text-base  flex flex-col  lg:w-fit w-full justify-start lg:gap-0  lg:p-0 items-center text-center ">
//               <Link href="/about">
//                 <a></a>
//               </Link>
//             </div>
//             {/* <div className="text-base  flex flex-col  lg:w-fit w-full justify-start lg:gap-0  lg:p-0 items-center text-center ">
//             <Link href="/discover">
//               <a>Discover</a>
//             </Link>

//             </div> */}
//             <div className="text-base  flex flex-col  lg:w-fit w-full justify-start lg:gap-0  lg:p-0 items-center text-center ">
//               <Link href="/class">
//                 <a></a>
//               </Link>
//             </div>
//             <div className="text-base  flex flex-col font-bah  lg:p-0   text-center ">
//               <Link href="/pause">
//                 <a></a>
//               </Link>
//             </div>
//             <div className="text-base  flex flex-col  lg:w-fit w-full justify-start lg:gap-0  lg:p-0 items-center text-center">
//               <Link href="/news">
//                 <a></a>
//               </Link>
//             </div>
//             <div className="text-base  flex flex-col  lg:w-fit w-full justify-start lg:gap-0  lg:p-0 items-center text-center">
//               <Link href="/connect">
//                 <a></a>
//               </Link>
//             </div>
//           </div>
//           <div className=" md:w-fit w-full  lg:p-0 pl-6 mr-6 mb-2 ">
//             <p className="font-semibold md:mt-0 mt-5 text-sm pb-2 font-bah  text-title text-center md:text-center">
//               FIND US ON
//             </p>
//             <div className="md:mt-0 mt-5 grid-cols-4 gap-2 flex justify-center lg:inline-grid  ">
//               <a
//                 className="hover:scale-105 transition-all"
//                 href=""
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 <svg
//                   className="w-8 h-8"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M7 10.2222V13.7778H9.66667V20H13.2222V13.7778H15.8889L16.7778 10.2222H13.2222V8.44444C13.2222 8.2087 13.3159 7.9826 13.4826 7.81591C13.6493 7.64921 13.8754 7.55556 14.1111 7.55556H16.7778V4H14.1111C12.9324 4 11.8019 4.46825 10.9684 5.30175C10.1349 6.13524 9.66667 7.2657 9.66667 8.44444V10.2222H7Z"
//                     fill="currentColor"
//                   />
//                 </svg>
//               </a>
//               <a
//                 className="hover:scale-105 transition-all"
//                 href=""
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 <svg
//                   className="w-10 h-10 fill-current"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path d="M18.6668 6.67334C18.0002 7.00001 17.3468 7.13268 16.6668 7.33334C15.9195 6.49001 14.8115 6.44334 13.7468 6.84201C12.6822 7.24068 11.9848 8.21534 12.0002 9.33334V10C9.83683 10.0553 7.91016 9.07001 6.66683 7.33334C6.66683 7.33334 3.87883 12.2887 9.3335 14.6667C8.0855 15.498 6.84083 16.0587 5.3335 16C7.53883 17.202 9.94216 17.6153 12.0228 17.0113C14.4095 16.318 16.3708 14.5293 17.1235 11.85C17.348 11.0351 17.4595 10.1932 17.4548 9.34801C17.4535 9.18201 18.4615 7.50001 18.6668 6.67268V6.67334Z" />
//                 </svg>
//               </a>
//               <a
//                 className="hover:scale-105 transition-all"
//                 href=""
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 <svg
//                   className="w-8 h-8"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M15.2 8.80005C16.4731 8.80005 17.694 9.30576 18.5941 10.2059C19.4943 11.1061 20 12.327 20 13.6V19.2H16.8V13.6C16.8 13.1757 16.6315 12.7687 16.3314 12.4687C16.0313 12.1686 15.6244 12 15.2 12C14.7757 12 14.3687 12.1686 14.0687 12.4687C13.7686 12.7687 13.6 13.1757 13.6 13.6V19.2H10.4V13.6C10.4 12.327 10.9057 11.1061 11.8059 10.2059C12.7061 9.30576 13.927 8.80005 15.2 8.80005Z"
//                     fill="currentColor"
//                   />
//                   <path
//                     d="M7.2 9.6001H4V19.2001H7.2V9.6001Z"
//                     fill="currentColor"
//                   />
//                   <path
//                     d="M5.6 7.2C6.48366 7.2 7.2 6.48366 7.2 5.6C7.2 4.71634 6.48366 4 5.6 4C4.71634 4 4 4.71634 4 5.6C4 6.48366 4.71634 7.2 5.6 7.2Z"
//                     fill="currentColor"
//                   />
//                 </svg>
//               </a>

//               <a
//                 className="hover:scale-105 transition-all"
//                 href=""
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 <svg
//                   className="w-8 h-8"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M11.9294 7.72275C9.65868 7.72275 7.82715 9.55428 7.82715 11.825C7.82715 14.0956 9.65868 15.9271 11.9294 15.9271C14.2 15.9271 16.0316 14.0956 16.0316 11.825C16.0316 9.55428 14.2 7.72275 11.9294 7.72275ZM11.9294 14.4919C10.462 14.4919 9.26239 13.2959 9.26239 11.825C9.26239 10.354 10.4584 9.15799 11.9294 9.15799C13.4003 9.15799 14.5963 10.354 14.5963 11.825C14.5963 13.2959 13.3967 14.4919 11.9294 14.4919ZM17.1562 7.55495C17.1562 8.08692 16.7277 8.51178 16.1994 8.51178C15.6674 8.51178 15.2425 8.08335 15.2425 7.55495C15.2425 7.02656 15.671 6.59813 16.1994 6.59813C16.7277 6.59813 17.1562 7.02656 17.1562 7.55495ZM19.8731 8.52606C19.8124 7.24434 19.5197 6.10901 18.5807 5.17361C17.6453 4.23821 16.51 3.94545 15.2282 3.88118C13.9073 3.80621 9.94787 3.80621 8.62689 3.88118C7.34874 3.94188 6.21341 4.23464 5.27444 5.17004C4.33547 6.10544 4.04628 7.24077 3.98201 8.52249C3.90704 9.84347 3.90704 13.8029 3.98201 15.1238C4.04271 16.4056 4.33547 17.5409 5.27444 18.4763C6.21341 19.4117 7.34517 19.7045 8.62689 19.7687C9.94787 19.8437 13.9073 19.8437 15.2282 19.7687C16.51 19.708 17.6453 19.4153 18.5807 18.4763C19.5161 17.5409 19.8089 16.4056 19.8731 15.1238C19.9481 13.8029 19.9481 9.84704 19.8731 8.52606ZM18.1665 16.5412C17.8881 17.241 17.349 17.7801 16.6456 18.0621C15.5924 18.4799 13.0932 18.3835 11.9294 18.3835C10.7655 18.3835 8.26272 18.4763 7.21307 18.0621C6.51331 17.7837 5.9742 17.2446 5.69215 16.5412C5.27444 15.488 5.37083 12.9888 5.37083 11.825C5.37083 10.6611 5.27801 8.15832 5.69215 7.10867C5.97063 6.40891 6.50974 5.8698 7.21307 5.58775C8.26629 5.17004 10.7655 5.26643 11.9294 5.26643C13.0932 5.26643 15.596 5.17361 16.6456 5.58775C17.3454 5.86623 17.8845 6.40534 18.1665 7.10867C18.5843 8.16189 18.4879 10.6611 18.4879 11.825C18.4879 12.9888 18.5843 15.4916 18.1665 16.5412Z"
//                     fill="currentColor"
//                   />
//                 </svg>
//               </a>
//             </div>
//           </div>
//         </div>

//         <div className="mx-auto  text-center  text-sm text-title font-bah pt-4 lg:pt-8 lg:p-0 p-4 pl-6">
//           <p>
//             Copyright © 2022. All Rights Reserved. Designed by Deedbee Social
//             Ventures.
//           </p>
//         </div>
//       </footer>
//     </>
//   );
// }
