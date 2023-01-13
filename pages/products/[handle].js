import React from "react";
import { storefront } from "../../util";
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import OurBrand from "../ourbrand";
import PersonalProduct from "../../components/personalProduct";
import { useState } from "react";
import useCollapse from "react-collapsed";
function HandleProduct({ product, allProducts }) {
  // console.log(product);
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({
    isExpanded,
    easing: "cubic-bezier(0.37, 0, 0.63, 1)",
    duration: 600,
  });
  const blog = [
    {
      id: 1,
      title: "About",
      desc: " loremkdsjfjfjfjfjfjfhfskdalhjfsdfhs;odhfsd;kjfhfhfhfhfhfhhhhhhhslkhdhhhfsdkfhslkjdfhjskdhfiowesufhisl",
    },
    {
      id: 2,
      title: "Ingredients",
      mode: "Virtual",
      desc: " loremkdsjfjfjfjfjfjfhfskdalhjfsdfhs;odhfsd;kjfhfhfhfhfhfhhhhhhhslkhdhhhfsdkfhslkjdfhjskdhfiowesufhisl",
    },
    {
      id: 3,
      title: "Direction To use",
      desc: " loremkdsjfjfjfjfjfjfhfskdalhjfsdfhs;odhfsd;kjfhfhfhfhfhfhhhhhhhslkhdhhhfsdkfhslkjdfhjskdhfiowesufhisl",
    },
  ];
  const point = [1, 2, 3, 5];
  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-12 mx-auto">
          <div className="lg:w-4/5  md:container md:mx-auto flex flex-wrap">
            <div className="lg:w-[45%] w-full lg:h-fit h-64">
              <Swiper
                pagination={{
                  type: "progressbar",
                }}
                modules={[Pagination]}
              >
                <SwiperSlide>
                  <img
                    alt="ecommerce"
                    className=" object-cover object-center rounded"
                    src={product.images.edges[0].node.transformedSrc}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    alt="ecommerce"
                    className=" object-cover object-center rounded"
                    src={product.images.edges[0].node.transformedSrc}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    alt="ecommerce"
                    className=" object-cover object-center rounded"
                    src={product.images.edges[0].node.transformedSrc}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    alt="ecommerce"
                    className=" object-cover object-center rounded"
                    src={product.images.edges[0].node.transformedSrc}
                  />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:mt-0">
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {product.title}
              </h1>
              <div className="flex mb-4">
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                  <a className="text-gray-500">Games</a>
                </span>
              </div>
              <p className="leading-relaxed overflow-hidden text-ellipsis h-32">
                {product.description}
              </p>
              <div className="flex flex-col mt-3 border-black ">
                <div className="flex">
                  <span className="title-font font-medium text-2xl text-gray-900">
                    {product.priceRange.minVariantPrice.amount}
                  </span>
                </div>

                {/* Avialabilityyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy */}
                <div className="flex gap-5 mt-4  items-center">
                  <span className="border-b w-[100px]  ">1234856</span>
                  <div className="">
                    <button className="border-2 border-black p-2 text-black rounded-3xl">
                      Check Availability
                    </button>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-xs">
                    <span>Product Available.</span>it will deliver to you{" "}
                    <span>20 feb</span>
                  </p>
                </div>
                {/* rating starrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr */}
                <div>
                  <div className="flex items-center">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>First star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Second star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Third star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Fourth star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-gray-300 dark:text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Fifth star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  </div>
                </div>
                {/* item grammmm buttton................................. */}
                <div className="flex gap-2 py-2">
                  <button className="border border-black px-5 text-black rounded-md">
                    {" "}
                    300g
                  </button>
                  <button className="border border-black  px-5 text-black rounded-md">
                    200g
                  </button>
                  <button className="border border-black  px-5 text-black rounded-md">
                    100g
                  </button>
                </div>
                {/* Butoooooonnn of orderrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr */}
                <div className="flex gap-5 mt-5">
                  <div className="flex rounded-3xl px-4 gap-5 justify-center border">
                    <button className="p-1">-</button> <button>1</button>{" "}
                    <button className="p-1">+</button>
                  </div>

                  <button className="flex  text-white bg-[#BD2B23] border-0 py-2 px-6 focus:outline-none  rounded-3xl">
                    Add To Cart
                  </button>
                </div>
              </div>

              {/* item details...............................abaoutetc
                 ////////////////
                 .
                 .
                  /////////////////////////////////
                 */}

              <div className="mt-5">
                {blog.map(({ id, title, desc }) => {
                  return (
                    <OurBrand key={id} title={title} desc={desc} id={id} />
                    // <div
                    //   key={id}
                    //   className="w-full mt-10 flex  border-t border-b flex-col"
                    // >
                    //   <div
                    //     {...getToggleProps({
                    //       onClick: () =>
                    //         setExpanded((prevExpanded) => !prevExpanded),
                    //     })}
                    //     className="bg-blue  w-full  rounded flex justify-between  p-4 h-full items-center"
                    //   >
                    //     <span className="text-black flex text-center font-bold ">
                    //       About
                    //     </span>
                    //     <div>
                    //       {isExpanded ? (
                    //         <BiMinus
                    //           size={15}
                    //           className=" text-black w- h-6 mr-4"
                    //         />
                    //       ) : (
                    //         <BsPlusLg
                    //           size={15}
                    //           className=" text-black w- h-6 mr-4"
                    //         />
                    //       )}
                    //     </div>
                    //   </div>
                    //   <div>
                    //     <section {...getCollapseProps()}>
                    //       <div className="flex">
                    //         <div className="w-full">
                    //           <div className="h-full p-4  pt-5 pb-5 rounded-lg border text-center ">
                    //             Lorem ipsum dolor sit amet, consectetur
                    //             adipisicing elit. Dolores, cupiditate ea
                    //             dignissimos nobis tempore ut quam voluptate
                    //             suscipit sapiente non fugiat culpa corporis
                    //             quisquam, iure laudantium! Quae quia officia
                    //             explicabo, possimus non adipisci eveniet
                    //             blanditiis iste laboriosam, animi, dicta placeat
                    //             enim aut voluptatibus. Ipsa accusamus neque et
                    //             laudantium adipisci iste!
                    //           </div>
                    //         </div>
                    //       </div>
                    //     </section>
                    //   </div>
                    // </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <div className="">
          {/* <img className="w-screen" src="/blue1.png" alt="" /> */}

          <svg
            width="100%"
            height="150px"
            id="svg"
            preserveAspectRatio="none"
            viewBox="0 0 1440 400"
            xmlns="http://www.w3.org/2000/svg"
            className="transition duration-300 ease-in-out delay-150"
          >
            <path
              d="M 0,400 C 0,400 0,200 0,200 C 70.38845726970034,208.70977925761497 140.77691453940068,217.41955851522997 183,228 C 225.22308546059932,238.58044148477003 239.28079911209767,251.03154519669505 292,233 C 344.71920088790233,214.96845480330495 436.09988901220856,166.4542606979899 493,176 C 549.9001109877914,185.5457393020101 572.3196448390678,253.15141201134543 627,269 C 681.6803551609322,284.8485879886546 768.6215316315205,248.94009125662842 818,241 C 867.3784683684795,233.05990874337158 879.1942286348502,253.0882229621408 932,247 C 984.8057713651498,240.9117770378592 1078.6015538290787,208.70701689480828 1138,212 C 1197.3984461709213,215.29298310519172 1222.3995560488347,254.08370945862617 1267,258 C 1311.6004439511653,261.9162905413738 1375.8002219755826,230.9581452706869 1440,200 C 1440,200 1440,400 1440,400 Z"
              stroke="none"
              strokeWidth="0"
              fill="#FDF8F2"
              fillOpacity="1"
              className="transition-all duration-300 ease-in-out delay-150 path-0"
            ></path>
          </svg>
        </div>
        {/* swiper of mapppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp */}
        <div className="bg-[#FDF8F2]">
          <div className=" mx-auto md:container">
            <Swiper
              modules={[Pagination, Autoplay]}
              slidesPerView={1}
              spaceBetween={20}
              slidesPerGroup={1}
              breakpoints={{
                769: {
                  slidesPerView: 1,
                  slidesPerGroup: 1,
                  spaceBetween: 20,
                  Autoplay: true,
                  loop: true,
                  speed: 800,

                  pagination: {},
                },
                1024: {
                  slidesPerView: 1,
                  slidesPerGroup: 1,
                  spaceBetween: 20,
                  Autoplay: true,
                  loop: true,
                  speed: 800,
                  pagination: {},
                },
              }}
              autoplay={true}
              pagination={{ clickable: true }}
              loop={true}
              speed={1600}
              effect=""
            >
              <SwiperSlide>
                <div className="md:container md:mx-auto">
                  <div className="flex mt-8 justify-between">
                    <div className="flex flex-col">
                      <p className="text-3xl text-[#233139]">Total Miles</p>
                      <p className="mt-4 text-[#233139]">1200 Km</p>
                      <p className="mt-8  text-[#647887]">Materials</p>
                      <p className="mt-2 text-[#647887]">Processing</p>
                      <p className="mt-2 text-[#647887]">Packaging</p>
                    </div>
                    <div>
                      <img src="/map.png" alt="map of del" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="md:container md:mx-auto">
                  <div className="flex mt-8 justify-between">
                    <div className="flex flex-col">
                      <p className="text-3xl text-[#233139]">Total Miles</p>
                      <p className="mt-4 text-[#233139]">1200 Km</p>
                      <p className="mt-8  text-[#647887]">Materials</p>
                      <p className="mt-2 text-[#647887]">Processing</p>
                      <p className="mt-2 text-[#647887]">Packaging</p>
                    </div>
                    <div>
                      <img src="/map.png" alt="map of del" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        {/* swiper of rewviewwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww */}
        <div className="bg-[#13456a]">
          <div className=" py-10 mb-14 container mx-auto ">
            <div className="flex   justify-between">
              <p className="w-fit p-2 text-white  text-4xl">Customer Reviews</p>
            </div>
            <div className=""></div>
          </div>
          <div className=" mx-auto md:container pt-10 pb-10">
            <Swiper
              modules={[Pagination, Autoplay]}
              slidesPerView={1}
              spaceBetween={20}
              slidesPerGroup={1}
              breakpoints={{
                769: {
                  slidesPerView: 1,
                  slidesPerGroup: 1,
                  spaceBetween: 20,
                  Autoplay: true,
                  loop: true,
                  speed: 800,

                  pagination: {},
                },
                1024: {
                  slidesPerView: 3,
                  slidesPerGroup: 3,
                  spaceBetween: 20,
                  Autoplay: true,
                  loop: true,
                  speed: 800,

                  pagination: {},
                },
              }}
              autoplay={true}
              pagination={{ clickable: true }}
              loop={true}
              speed={1600}
              effect=""
            >
              <div className="">
                {blog.map(({ link, id, img, Levels, dur, mode, title }) => {
                  return (
                    <SwiperSlide key={id}>
                      <div className="min-w-[400px]  border hover:shadow-md bg-white hover:scale-100 ease-in duration-300  flex flex-col lg:flex-1 py-4 justify-between  px-8   rounded-lg overflow-hidden text-center relative">
                        <div className="p-5">
                          <p className="mt-4">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Nostrum saepe eum blanditiis beatae nam fugit
                            sunt consequatur, at iure qui fuga maxime voluptate
                            asperiores delectus?
                          </p>
                          <p className="mt-5 text-left">jerry.</p>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </div>
            </Swiper>
          </div>
        </div>
        <div>
          <svg
            preserveAspectRatio="none"
            width="100%"
            height="500px"
            id="svg"
            viewBox="0 0 1440 700"
            xmlns="http://www.w3.org/2000/svg"
            className="transition duration-300 ease-in-out delay-150"
          >
            <path
              d="M 0,700 C 0,700 0,350 0,350 C 56.365979381443296,311.72993372606777 112.73195876288659,273.4598674521355 170,274 C 227.2680412371134,274.5401325478645 285.4381443298969,313.8904639175258 356,342 C 426.5618556701031,370.1095360824742 509.5154639175257,386.9782768777614 564,392 C 618.4845360824743,397.0217231222386 644.5,390.1964285714286 691,377 C 737.5,363.8035714285714 804.4845360824743,344.23600883652426 867,341 C 929.5154639175257,337.76399116347574 987.5618556701031,350.8595360824742 1057,352 C 1126.4381443298969,353.1404639175258 1207.2680412371133,342.3258468335788 1273,340 C 1338.7319587628867,337.6741531664212 1389.3659793814434,343.8370765832106 1440,350 C 1440,350 1440,700 1440,700 Z"
              stroke="none"
              strokeWidth="0"
              fill="#13456a"
              fillOpacity="1"
              className="transition-all duration-300 ease-in-out delay-150 path-0"
              transform="rotate(-180 720 350)"
            ></path>
          </svg>
        </div>
        {/* adding ad for some recommendation.......................... */}
        <PersonalProduct products={allProducts} />
      </div>
    </>
  );
}

export default HandleProduct;
const gql = String.raw;

export async function getStaticPaths() {
  const { data } = await storefront(gql`
    {
      products(first: 50) {
        edges {
          node {
            handle
          }
        }
      }
    }
  `);

  return {
    paths: data.products.edges.map((product) => ({
      params: { handle: product.node.handle },
    })),

    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { data: userProducts } = await storefront(gql`
    query products {
      products(first: 100) {
        edges {
          node {
            title
            handle
            tags
            priceRange {
              minVariantPrice {
                amount
              }
            }
            images(first: 1) {
              edges {
                node {
                  transformedSrc
                  altText
                }
              }
            }
          }
        }
      }
    }
  `);
  const { data } = await storefront(
    singleProductQuery,

    { handle: params.handle }
  );

  return {
    props: {
      product: data.productByHandle,
      allProducts: userProducts.products,
    },
  };
}
const singleProductQuery = gql`
  query singleProduct($handle: String!) {
    productByHandle(handle: $handle) {
      title
      description
      updatedAt
      tags
      images(first: 1) {
        edges {
          node {
            transformedSrc
            altText
          }
        }
      }
      priceRange {
        minVariantPrice {
          amount
        }
      }
    }
  }
`;
