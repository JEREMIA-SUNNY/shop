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
  const [searchIcon, setSearchIcon] = useState(null);
  const clickSearch = () => {
    setSearchIcon(1);
  };

  const menu = [
    {
      name: "Dry Groceries ",
      path: "",
      sub: [
        { name: "wheat", path: "/solutions/itservices" },
        { name: "Rice", path: "/solutions/knowledge" },
        { name: "Millets", path: "/solutions/talent" },
        { name: "Millets", path: "/solutions/talent" },
      ],
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
      name: "| We care ",
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
                  <Image src="/icon.png" alt="logo" objectFit="cover" width={160} height={100} />
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
                    className={`flex gap-2 ${
                      pathname === path &&
                      "underline decoration-yellow decoration-2 underline-offset-4 font-bold"
                    } hover:font- mx-3  2xl:mx-4 transition-all`}
                  >
                    {name}
                    <img
                      src="/icons/dropdown.png"
                      className="w-3 mt-1 h-3"
                      alt=""
                    />
                  </a>
                </Link>

                {sub && (
                  <div className="bg-white w-full absolute top-4 left-0 flex-col z-50 rounded-3xl  invisible group-hover:visible transition-all">
                    <div className="min-w-[200px] mt-8 bg-white justify-center grid grid-cols-2 p-2  gap-x-10 gap-y-5 shadow-md">
                      {sub.map(({ name, path }, index) => (
                        <Link key={index} href={path}>
                          <a className="w-fit hover:font-bold px-2  mb- bg-white  text-center text-sm text-subtext  border-zinc-100">
                            {name}
                          </a>
                        </Link>
                      ))}
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
            <div onClick={clickSearch}>
              <img
                src="/icons/search.gif"
                className="w-[30px] h-[30px]"
                alt=""
              />
            </div>
            <button>
              <Link href={"/login"}> Login</Link>
            </button>
          </div>
        </div>
      </header>

      <main
        onClick={() => setSearchIcon(false)}
        className="text-zinc-900 font-sans"
      >
        {children}
      </main>

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
          <div className="grid  grid-cols-2 place-content-center md:flex md:flex-row  mx-auto md:container justify-between items-start">
            <div className="col-span-2 md:pt-0 pt-8 pb-4 md:pb-0 ">
              <Link href="/">
                <a className="flex md:justify-start justify-center items-center pl-6 md:pl-0">
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

            <div className="text-sm  p-4 md:p-0 pl-6 ">
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
              <div className="grid-cols-5 place-content-center gap-2 inline-grid ">
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

      {searchIcon && (
        <div className="fixed w-full z-[1000] h-fit bg-white top-24 ">
          <div className="flex flex-col items-center">
            <div className="mt-8">
              <p className="text-subtext font-notosans font-extrabold">
                Show me a good alternative to...
              </p>
            </div>
            <div className="mt-5 mb-5">
              <div className="">
                <input
                  className="border-b-4 text-center w-[700px] border-subtext"
                  type="text"
                />
              </div>
            </div>
            <div className="mt-5 text-subtext  mb-5">Recent Searches</div>
            <div className="flex gap-5 mb-12">
              <div className="border-black border rounded-3xl px-6 ">Milk</div>
              <div className="border-black border rounded-3xl px-6 ">
                Floor Cleaner
              </div>
              <div className="border-black border rounded-3xl px-6 ">
                Red Rice
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
