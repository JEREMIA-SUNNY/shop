import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Layout({ children }) {
  const route = useRouter();
  const [view, setView] = useState(false);
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
      name: "our product",
      path: "/ourproduct",
      // sub: [
      //   { name: "IT Services", path: "/solutions/itservices" },
      //   { name: "Knowledge As A Service ", path: "/solutions/knowledge" },
      //   { name: "Talent As A Service", path: "/solutions/talent" },
      // ],
    },
    {
      name: "our brand",
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
      name: "Your Concious",
      path: "/concious",
    },
    {
      name: "About",
      path: "/about",
      // sub: [
      //   { name: "Who We Are", path: "/about#WhoWe-Are" },
      //   { name: "Core Values", path: "/about#Core-values" },
      //   { name: "Meet Our Team", path: "/about#MeetOur-Team" },
      // ],
    },

    {
      name: "contact us",
      path: "/contact",
    },
  ];
  const menu2 = [
    {
      name2: "About",
      path2: "",
      subm: false,
      sub: [
        { name: "Core Values", path: "/about#Core-values" },
        { name: "Meet Our Team", path: "/about#MeetOur-Team" },
        { name: "Who We Are", path: "/about#WhoWe-Are" },
      ],
    },
    {
      name2: "Solutions",
      path2: "",
      subm: false,
      sub: [
        { name: "Knowledge As A Service ", path: "/solutions/knowledge" },
        { name: "IT Services", path: "/solutions/itservices" },
        { name: "Talent As A Service", path: "/solutions/talent" },
      ],
    },

    {
      name2: "Capabilities",
      path2: "",
      subm: false,
      sub: [
        { name: "Analytics", path: "/capabilities#Analytics" },
        { name: "Consulting ", path: "/capabilities#Consulting" },

        { name: "Mobility", path: "/capabilities#Mobility" },

        { name: "Outsourcing", path: "/capabilities#Outsourcing" },
        { name: "Staffing", path: "/capabilities#Staffing" },
        { name: "Upskilling", path: "/capabilities#Upskilling" },
      ],
    },

    {
      name2: "Education",
      path2: "/education",
    },

    {
      name2: " Life@SFJ",
      path2: "/life",
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
  function click() {
    if (pathname === "/about") {
      setAbout(true);
    } else {
      setAbout(false);
    }
    if (pathname === "/solutions") {
      setSoultion(true);
    } else {
      setSoultion(false);
    }
    if (pathname === "/capabilities") {
      setCapablitily(true);
    } else {
      setCapablitily(false);
    }
  }

  return (
    <>
      <Head>
        <title>A good Pick</title>
      </Head>
      <div className="w-full lg:h-[90px]">
        <header
          className={`${
            navbr
              ? "md:fixed bg-white z-50 w-full ease-in  duration-700 border-zinc-100 border-b"
              : "w-full border-zinc-100 z-50 border-b    ease-in duration-700 "
          }`}
        >
          <div className="md:container h-[90px] mx-auto flex justify-between  items-center text-zinc-900 font-sans">
            {/* <Link href="/">
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
            </Link> */}
            {/* <div className="lg:pl-2 lg:flex  text-center  py-3 flex-col justify-center ">
              <span className="text-sm font-bold text-black capitalize">
                {` LET'S TRANSFORM`}
              </span>
            </div> */}

            <nav className="text-sm uppercase  tracking-tight hidden  lg:flex justify-end flex-1">
              {menu.map(({ name, path, sub }, index) => {
                if (name === "Careers")
                  return (
                    <div
                      key={index}
                      className="group relative cursor-pointer inline-flex "
                    >
                      <a
                        href="https://sfjbs.talentrecruit.com/"
                        rel="noreferrer"
                        target="_blank"
                        className={`${
                          pathname === path &&
                          "underline decoration-orange  decoration-2 font-bold underline-offset-4 "
                        } hover:font-bold mx-3  2xl:mx-4 transition-all`}
                      >
                        {name}
                      </a>

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
                  );
                else {
                  return (
                    <div
                      key={index}
                      className="group cursor-pointer relative inline-flex "
                    >
                      <Link href={path}>
                        <div
                          className={`${
                            pathname === path &&
                            "underline decoration-orange decoration-2 font-bold underline-offset-4 "
                          } hover:font-bold mx-3  2xl:mx-4 transition-all`}
                        >
                          {name}
                        </div>
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
                  );
                }
              })}
            </nav>

            <nav className=" lg:hidden mr-2 p-2 relative   flex justify-end ">
              <svg
                onClick={() => {
                  setView((prev) => !prev);
                }}
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

              {view && (
                <div className="bg-transparent w-auto absolute top-6 -right-2 flex-col z-50 rounded-sm transition-all">
                  <div className="pt-4 w-auto">
                    {menu2.map(({ name2, path2, subm, sub }, index) => (
                      <div
                        key={index}
                        tabIndex={1}
                        className="w-40 group top-4 px-4 bg-white relative inline-flex p-2 normal-case text-sm whitespace-nowrap border-b border-t border-zinc-100 "
                      >
                        {sub ? (
                          name2
                        ) : (
                          <div
                            onClick={() => {
                              setView(false);
                            }}
                          >
                            <Link href={path2}>
                              <a>{name2}</a>
                            </Link>
                          </div>
                        )}
                        <div className="bg-white right-[102%]  group-focus:visible invisible  shadow-md absolute z-[1000] flex flex-col">
                          {sub?.map(({ name, path }, index) => (
                            <div
                              onClick={() => {
                                setView((prev) => !prev);
                              }}
                              key={index}
                              className="text-center border border-b border-zinc-100 text-sm  px-4 py-2"
                            >
                              <Link href={path}>
                                <div className="">{name}</div>
                              </Link>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </nav>
            <div className="flex ml-5 gap-2">
              <img
                src="/icons/search.gif"
                className="w-[20px] mt-2 h-[20px]"
                alt=""
              />
              <img
                src="/icons/store.gif"
                alt=""
                className="w-[20px] mt-2 h-[20px]"
              />
              <button className="bg-red-600 text-white w-[100px] h-[40px] ml-5 rounded-md">
                Log In
              </button>
            </div>
          </div>
        </header>
      </div>

      <main className="text-zinc-900 font-sans">{children}</main>

      <footer className="border bg-gray-800  border-t mx-auto  py-6 lg:py-8">
        <div className="flex flex-col lg:flex-row justify-center lg:justify-evenly lg:gap-x-10 items-start">
          <div className="hidden md:block">
            <img
              src="/logo3foot.png"
              className="object-cover"
              alt="logo"
              width={96}
              height={85}
            />
          </div>
          <div className="flex w-full  lg:w-1/2 justify-center lg:gap-20">
            <div className="text-base  flex flex-col  lg:w-fit w-full justify-start lg:gap-0  lg:p-0 items-center text-center ">
              <Link href="/about">
                <a></a>
              </Link>
            </div>
            {/* <div className="text-base  flex flex-col  lg:w-fit w-full justify-start lg:gap-0  lg:p-0 items-center text-center ">
            <Link href="/discover">
              <a>Discover</a>
            </Link>
            
            
            
            </div> */}
            <div className="text-base  flex flex-col  lg:w-fit w-full justify-start lg:gap-0  lg:p-0 items-center text-center ">
              <Link href="/class">
                <a></a>
              </Link>
            </div>
            <div className="text-base  flex flex-col font-bah  lg:p-0   text-center ">
              <Link href="/pause">
                <a></a>
              </Link>
            </div>
            <div className="text-base  flex flex-col  lg:w-fit w-full justify-start lg:gap-0  lg:p-0 items-center text-center">
              <Link href="/news">
                <a></a>
              </Link>
            </div>
            <div className="text-base  flex flex-col  lg:w-fit w-full justify-start lg:gap-0  lg:p-0 items-center text-center">
              <Link href="/connect">
                <a></a>
              </Link>
            </div>
          </div>
          <div className=" md:w-fit w-full  lg:p-0 pl-6 mr-6 mb-2 ">
            <p className="font-semibold md:mt-0 mt-5 text-sm pb-2 font-bah  text-black text-center md:text-center">
              FIND US ON
            </p>
            <div className="md:mt-0 mt-5 grid-cols-4 gap-2 flex justify-center lg:inline-grid  ">
              <a
                className="hover:scale-105 transition-all"
                href=""
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  className="w-8 h-8"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 10.2222V13.7778H9.66667V20H13.2222V13.7778H15.8889L16.7778 10.2222H13.2222V8.44444C13.2222 8.2087 13.3159 7.9826 13.4826 7.81591C13.6493 7.64921 13.8754 7.55556 14.1111 7.55556H16.7778V4H14.1111C12.9324 4 11.8019 4.46825 10.9684 5.30175C10.1349 6.13524 9.66667 7.2657 9.66667 8.44444V10.2222H7Z"
                    fill="currentColor"
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
                  className="w-10 h-10 fill-current"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18.6668 6.67334C18.0002 7.00001 17.3468 7.13268 16.6668 7.33334C15.9195 6.49001 14.8115 6.44334 13.7468 6.84201C12.6822 7.24068 11.9848 8.21534 12.0002 9.33334V10C9.83683 10.0553 7.91016 9.07001 6.66683 7.33334C6.66683 7.33334 3.87883 12.2887 9.3335 14.6667C8.0855 15.498 6.84083 16.0587 5.3335 16C7.53883 17.202 9.94216 17.6153 12.0228 17.0113C14.4095 16.318 16.3708 14.5293 17.1235 11.85C17.348 11.0351 17.4595 10.1932 17.4548 9.34801C17.4535 9.18201 18.4615 7.50001 18.6668 6.67268V6.67334Z" />
                </svg>
              </a>
              <a
                className="hover:scale-105 transition-all"
                href=""
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  className="w-8 h-8"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.2 8.80005C16.4731 8.80005 17.694 9.30576 18.5941 10.2059C19.4943 11.1061 20 12.327 20 13.6V19.2H16.8V13.6C16.8 13.1757 16.6315 12.7687 16.3314 12.4687C16.0313 12.1686 15.6244 12 15.2 12C14.7757 12 14.3687 12.1686 14.0687 12.4687C13.7686 12.7687 13.6 13.1757 13.6 13.6V19.2H10.4V13.6C10.4 12.327 10.9057 11.1061 11.8059 10.2059C12.7061 9.30576 13.927 8.80005 15.2 8.80005Z"
                    fill="currentColor"
                  />
                  <path
                    d="M7.2 9.6001H4V19.2001H7.2V9.6001Z"
                    fill="currentColor"
                  />
                  <path
                    d="M5.6 7.2C6.48366 7.2 7.2 6.48366 7.2 5.6C7.2 4.71634 6.48366 4 5.6 4C4.71634 4 4 4.71634 4 5.6C4 6.48366 4.71634 7.2 5.6 7.2Z"
                    fill="currentColor"
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
                  className="w-8 h-8"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.9294 7.72275C9.65868 7.72275 7.82715 9.55428 7.82715 11.825C7.82715 14.0956 9.65868 15.9271 11.9294 15.9271C14.2 15.9271 16.0316 14.0956 16.0316 11.825C16.0316 9.55428 14.2 7.72275 11.9294 7.72275ZM11.9294 14.4919C10.462 14.4919 9.26239 13.2959 9.26239 11.825C9.26239 10.354 10.4584 9.15799 11.9294 9.15799C13.4003 9.15799 14.5963 10.354 14.5963 11.825C14.5963 13.2959 13.3967 14.4919 11.9294 14.4919ZM17.1562 7.55495C17.1562 8.08692 16.7277 8.51178 16.1994 8.51178C15.6674 8.51178 15.2425 8.08335 15.2425 7.55495C15.2425 7.02656 15.671 6.59813 16.1994 6.59813C16.7277 6.59813 17.1562 7.02656 17.1562 7.55495ZM19.8731 8.52606C19.8124 7.24434 19.5197 6.10901 18.5807 5.17361C17.6453 4.23821 16.51 3.94545 15.2282 3.88118C13.9073 3.80621 9.94787 3.80621 8.62689 3.88118C7.34874 3.94188 6.21341 4.23464 5.27444 5.17004C4.33547 6.10544 4.04628 7.24077 3.98201 8.52249C3.90704 9.84347 3.90704 13.8029 3.98201 15.1238C4.04271 16.4056 4.33547 17.5409 5.27444 18.4763C6.21341 19.4117 7.34517 19.7045 8.62689 19.7687C9.94787 19.8437 13.9073 19.8437 15.2282 19.7687C16.51 19.708 17.6453 19.4153 18.5807 18.4763C19.5161 17.5409 19.8089 16.4056 19.8731 15.1238C19.9481 13.8029 19.9481 9.84704 19.8731 8.52606ZM18.1665 16.5412C17.8881 17.241 17.349 17.7801 16.6456 18.0621C15.5924 18.4799 13.0932 18.3835 11.9294 18.3835C10.7655 18.3835 8.26272 18.4763 7.21307 18.0621C6.51331 17.7837 5.9742 17.2446 5.69215 16.5412C5.27444 15.488 5.37083 12.9888 5.37083 11.825C5.37083 10.6611 5.27801 8.15832 5.69215 7.10867C5.97063 6.40891 6.50974 5.8698 7.21307 5.58775C8.26629 5.17004 10.7655 5.26643 11.9294 5.26643C13.0932 5.26643 15.596 5.17361 16.6456 5.58775C17.3454 5.86623 17.8845 6.40534 18.1665 7.10867C18.5843 8.16189 18.4879 10.6611 18.4879 11.825C18.4879 12.9888 18.5843 15.4916 18.1665 16.5412Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto  text-center  text-sm text-black font-bah pt-4 lg:pt-8 lg:p-0 p-4 pl-6">
          <p>
            Copyright ?? 2022. All Rights Reserved. Designed by Deedbee Social
            Ventures.
          </p>
        </div>
      </footer>
    </>
  );
}
