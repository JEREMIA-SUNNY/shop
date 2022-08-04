import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Layout({ children }) {
  const { pathname } = useRouter();
  const [navbr, setNavbr] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 300) {
      setNavbr(true);
    } else {
      setNavbr(false);
    }
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });
  const menu = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
      sub: [
        { name: "Who We Are", path: "/about#WhoWe-Are" },
        { name: "Core Values", path: "/about#Core-values" },
        { name: "Meet Our Team", path: "/about#MeetOur-Team" },
      ],
    },

    {
      name: "Solutions",
      path: "/solutions/knowledge",
      sub: [
        { name: "Knowledge As A Service ", path: "/solutions/knowledge" },
        { name: "Talent As A Service", path: "/solutions/talent" },

        { name: "IT Services", path: "/solutions/itservices" },
      ],
    },
    {
      name: "Capabilities",
      path: "/capabilities",

      sub: [
        { name: "Consulting ", path: "/capabilities#Consulting" },
        { name: "Analytics", path: "/capabilities#Analytics" },

        { name: "Mobility", path: "/capabilities#Mobility" },

       
        { name: "Outsourcing", path: "/capabilities#Outsourcing" },
        { name: "Upskilling", path: "/capabilities#Upskilling" },
        { name: "Staffing", path: "/capabilities#Staffing" },
      ],
    },
    {
      name: " Education",
      path: "/education",
    },

    {
      name: "Careers",
      path: "/career",
    },
    {
      name: "Blogs",
      path: "/blog/blogs",
    },
    {
      name: "contact us",
      path: "/contact",
    },
  ];
  const menu2 = [
    {
      name2: "Home",
      path2: "/",
    },

    {
      name2: "About",
      path2: "/about",
    },
    {
      name2: "Knowledge As A Service",
      path2: "/solutions/knowledge",
    },
    {
      name2: "Talent As A Service",
      path2: "/solutions/talent",
    },
    {
      name2: "IT Services",
      path2: "/solutions/itservices",
    },
    {
      name2: "Capabilities",
      path2: "/capabilities",
    },

    {
      name2: "Education",
      path2: "/education",
    },
    {
      name2: "Careers",
      path2: "/career",
    },
    {
      name2: "Blogs",
      path2: "/blog/blogs",
    },
    {
      name2: "Contact Us",
      path2: "/contact",
    },
  ];

  return (
    <>
      <Head>
        <title>SFJ Business Solutions</title>
      </Head>
      <div className="w-full lg:h-[95px]">
        <header
          className={`${
            navbr
              ? "md:fixed bg-white z-50 w-full ease-in  duration-700 border-zinc-100 border-b"
              : "w-full border-zinc-100 z-50 border-b    ease-in duration-700 "
          }`}
        >
          <div className="md:container mx-auto flex justify-between  items-center text-zinc-900 font-sans">
            <Link href="/">
              <a className="flex  justify-between lg:justify-start items-center ">
                <div className="hidden md:block">
                  <Image src="/header.png" alt="logo" width={90} height={90} />
                </div>
                <div className="block   md:hidden">
                  <Image
                    src="/header.png"
                    alt="logo"
                    width={100}
                    height={100}
                  />
                </div>
                
              </a>
            </Link>
            <div className="lg:pl-2 lg:flex  text-center  py-3 flex-col justify-center ">
                  <span className="text-sm  text-black capitalize">
                    TALENT TRANSFORMATION. SIMPLIFIED.
                  </span>
                </div>

            <nav className="text-sm uppercase  tracking-tight hidden  lg:flex justify-end flex-1">
              {menu.map(({ name, path, sub }, index) => (
                <div key={index} className="group relative inline-flex ">
                  <Link href={path}>
                    <a
                      className={`${
                        pathname === path &&
                        "underline decoration-orange decoration-2 font-bold underline-offset-4 "
                      } hover:font-bold mx-3  2xl:mx-4 transition-all`}
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
                              <a className="w-52 hover:font-bold px-4 bg-white inline-flex p-2 normal-case text-sm whitespace-nowrap border-b border-t border-zinc-100 hover:bg-orange">
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

            <nav className=" lg:hidden mr-2 p-2 relative group  flex justify-end ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>

              <div className="bg-transparent w-auto absolute top-6 right-0 flex-col z-50 rounded-sm invisible group-active:visible group-hover:visible transition-all">
                <div className="pt-4 w-auto">
                  <div className="w-full shadow-md">
                    {menu2.map(({ name2, path2 }, index) => (
                      <Link key={index} href={path2}>
                        <a className="w-48 hover:bg-green-100 px-4 bg-white inline-flex p-2 normal-case text-md whitespace-nowrap border-b border-t border-black-100">
                          {name2}
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </header>
      </div>

      <main className="text-zinc-900 font-sans  ">{children}</main>

      <footer className="border bg-white border-t mx-auto  py-6 lg:py-8">
        <div className="grid grid-cols-2 lg:flex lg:flex-row justify-around items-start">
          <div className="col-span-2 pb-4 md:pb-0 ">
            <Link href="/">
              <a className="flex flex-col justify-start items-center pl-6 lg:pl-0">
                <div className="">
                  <Image src="/ICON.png" alt="logo" width={80} height={80} />
                </div>
                <div className="pl-2 flex flex-col justify-center">
                  <span className="leading-4  text-zinc-800 text-xl">
                    SFJ BUSINESS SOLUTIONS
                  </span>
                </div>
              </a>
            </Link>
          </div>

          <div className="text-sm p-4 lg:p-0 pl-6  text-left">
            <p className="font-semibold">INDIA - HEAD OFFICE</p>
            <p>Uma Sree Dream World, Unit -2,</p>
            <p>B-Block, 4th Floor, Kudlu Gate,</p>
            <p>Hosur Main Road,</p>
            <p>Bangalore – 560068. Karnataka, INDIA</p>
           
          </div>
          {/* <div className="text-sm p-4 lg:p-0 pl-6  text-left">
            <p className="font-semibold">SFJ Computers Consulting</p>
            <p>
              214, Blue Tower, Sheikh Zayed Road, <br />
              (Next To Crown Plaza Hotel){" "}
            </p>
            <p>P.O. Box : 58575</p>
            <p>Dubai, UAE</p>
            <p>
              Tel : +971 43 425125 <br />
              Fax : +971 43 425126
            </p>
          </div> */}
          <div className="text-sm lg:p-0  p-4  text-center">
            <p className="font-semibold">CONTACT</p>
            <p className="">+91 80 4158333</p>
            <p className="">sales@sfjbs.com</p>
          </div>

          <div className="text-sm flex flex-col  pl-6 lg:p-0   text-center ">
            <Link href="/about">
              <a>About</a>
            </Link>
            <Link href="/services">
              <a>Solutions</a>
            </Link>
            <Link href="/products">
              <a>Capabilities</a>
            </Link>
            <Link href="/team">
              <a>Education</a>
            </Link>
          </div>

          <div className="text-sm flex flex-col  lg:p-0  text-center">
            <Link href="/strengths">
              <a>Careers</a>
            </Link>
            <Link href="/facilities">
              <a>Blogs</a>
            </Link>
            <Link href="/customers">
              <a>Contact Us</a>
            </Link>
          </div>

          <div className="col-span-2 p-4 lg:p-0 pl-6 mr-6 ">
            <p className="font-semibold text-sm pb-2 text-black text-center">
              FIND US ON
            </p>
            <div className="lg:grid-cols-2 flex justify-center gap-2 lg:inline-grid  ">
              <a
                className="hover:scale-105 transition-all"
                href=""
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
                href=""
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
                href=""
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
                href=""
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

        <div className="mx-auto  text-center  text-sm text-zinc-400 pt-4 lg:pt-8 lg:p-0 p-4 pl-6">
          <p>SFJ BUSINESS SOLUTIONS</p>
          <p>
            Copyright © 2022. All Rights Reserved. Designed by Deedbee Social
            Ventures.
          </p>
          <p>Image Courtesy | unsplash.com | freepik.com</p>
        </div>
      </footer>
    </>
  );
}
