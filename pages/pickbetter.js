import React from "react";

export default function pickbetter() {
  return (
    <>
      <div className="flex flex-col items-center my-10 justify-center">
        <p className="w-fit text-center font-fuzzyBubbles  font-[5rem] font-extrabold p-2 text-[#23313B] text-4xl">
          Use Your Power To Pick
        </p>
        <p>
          dive deeper into What Makes a goodpick a better choice over regular
          pick
        </p>
      </div>
      <div className="flex my-10 justify-center">
        <p className="w-fit text-center font-notosans font-[4rem] font-extrabold p-2 text-[#23313B] text-4xl">
          Pick Better
        </p>
      </div>

      <div className="flex gap-5 justify-center">
        <div className="flex mt-5">
          <div className="md:flex    bg-white rounded-b-3xl px-8 pb-2 ">
            <div className="flex flex-col justify-center">
              <p className="font-notosans font-bold text-center">A good Pick</p>
              <div className=" flex justify-center">
                <span className=" text-center font-semibold text-subtext">
                  8.1/10
                </span>
              </div>
              <div className="w-[200px]  bg-gray-200 rounded-full h-2. dark:bg-gray-700">
                <div
                  className="bg-green-600 h-1 rounded-full"
                  style={{ width: "60%" }}
                ></div>
              </div>
            </div>
          </div>

          <div>
            <img
              src="/sample.png"
              className="w-[150px] rounded-lg h-[150px]"
              alt=""
            />
          </div>
        </div>
        <div>
          <div className="flex w-[1px] flex-col h-[200px] items-center  justify-center gap-1 ">
            <span className="border h-[60px] border-subtext lg:w-full"></span>
            <p>vs</p>
            <span className="border h-[60px] border-subtext lg:w-full"></span>
          </div>
        </div>
        <div className="flex  mt-5">
          <img
            src="/sample.png"
            className="w-[150px] rounded-lg h-[150px]"
            alt=""
          />
          <div className="md:flex    bg-white rounded-b-3xl px-8 pb-2 ">
            <div className="flex flex-col justify-center">
              <p className="font-notosans font-bold text-center">A good Pick</p>
              <div className=" flex justify-center">
                <span className=" text-center font-semibold text-subtext">
                  8.1/10
                </span>
              </div>
              <div className="w-[200px]  bg-gray-200 rounded-full h-2. dark:bg-gray-700">
                <div
                  className="bg-green-600 h-1 rounded-full"
                  style={{ width: "60%" }}
                ></div>
              </div>
            </div>
          </div>

          <div></div>
        </div>
      </div>

      <div>
        <svg
          width="100%"
          height="150px"
          preserveAspectRatio="none"
          id="svg"
          viewBox="0 0 1440 390"
          xmlns="http://www.w3.org/2000/svg"
          className="transition duration-300 ease-in-out delay-150"
        >
          <path
            d="M 0,400 C 0,400 0,200 0,200 C 58.97817240103589,209.91663583672462 117.95634480207178,219.83327167344925 175,240 C 232.04365519792822,260.16672832655075 287.1527931927488,290.5835491429276 341,270 C 394.8472068072512,249.4164508570724 447.432482426933,177.83253175484026 498,173 C 548.567517573067,168.16746824515974 597.117277099519,230.08632383771123 652,237 C 706.882722900481,243.91367616228877 768.0984091749909,195.82217289431497 815,201 C 861.9015908250091,206.17782710568503 894.4890862005177,264.624984585029 942,246 C 989.5109137994823,227.37501541497102 1051.9452460229375,131.67788876556915 1111,129 C 1170.0547539770625,126.32211123443086 1225.7299297077323,216.66346035269453 1280,244 C 1334.2700702922677,271.3365396473055 1387.1350351461338,235.66826982365274 1440,200 C 1440,200 1440,400 1440,400 Z"
            stroke="none"
            strokeWidth="0"
            fill="#f7f5f0"
            fillOpacity="1"
            className="transition-all duration-300 ease-in-out delay-150 path-0"
          ></path>
        </svg>
      </div>

      {/* section222222222222222222222222222222222222 */}
      <div className="bg-coustom1">
        <div className="flex py-10 justify-center">
          <p className="w-fit text-center font-notosans  font-medium p-2 text-[#23313B] text-2xl">
            How safe are the Ingredients for you
          </p>
        </div>
        <div className="flex gap-5 md:container md:mx-auto justify-center">
          <div className="flex flex-col w-1/2 justify-start mt-5">
            <div className="flex justify-end">
              <img
                src="/sample.png"
                className="w-[50px] rounded-lg h-[50px]"
                alt=""
              />
            </div>

            <div className="md:flex flex-col   mt-5 rounded-b-3xl  pb-2 ">
              <p className="font-notosans text-end font-bold ">
                A good Pick-soil inputs
              </p>
              <p className="font-notosans mt-5 font-bold text-end">
                A good Pick
              </p>
              <div className="flex flex-row-reverse gap-4 justify-start">
                <div className=" flex justify-center">
                  <span className=" text-center font-semibold text-subtext">
                    8.1/10
                  </span>
                </div>
                <div className="w-[200px] mt-3  rounded-full h-1 dark:bg-gray-700">
                  <div
                    className="bg-green-600 h-1 rounded-full"
                    style={{ width: "60%" }}
                  ></div>
                </div>
              </div>
              <p className="font-notosans mt-5 font-bold text-subtext text-end">
                Makes all nutrits available in soil for the plant
              </p>
            </div>
          </div>
          <div>
            <div className="flex w-[1px] flex-col h-full items-center  justify-center gap-1 ">
              <span className="border h-full border-subtext lg:w-full"></span>
            </div>
          </div>
          <div className="flex flex-col w-1/2  mt-5">
            <div className="flex justify-start">
              <img
                src="/sample.png"
                className="w-[50px] rounded-lg h-[50px]"
                alt=""
              />
            </div>

            <div className="md:flex flex-col  justify-end mt-5 rounded-b-3xl  pb-2 ">
              <p className="font-notosans text-start font-bold ">
                A good Pick-soil inputs
              </p>

              <div className="font-notosans mt-5 pb-5 border-slate-400 border-dashed border-spacing-2 border-b-2 font-bold text-subtext text-start">
                <p className="font-notosans mt-5 font-bold text-start">Urea</p>
                <div className="flex flex-row gap-4 justify-start">
                  <div className=" flex justify-center">
                    <span className=" text-center font-semibold text-subtext">
                      8.1/10
                    </span>
                  </div>
                  <div className="w-[200px] mt-3  rounded-full h-1 dark:bg-gray-700">
                    <div
                      className="bg-green-600 h-1 rounded-full"
                      style={{ width: "60%" }}
                    ></div>
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nihil, similique voluptatum! Ab saepe libero omnis.
                </p>
              </div>
              <div className="font-notosans mt-5 pb-5 border-slate-400 border-dashed border-spacing-2 border-b-2 font-bold text-subtext text-start">
                <p className="font-notosans mt-5 font-bold text-start">Urea</p>
                <div className="flex flex-row gap-4 justify-start">
                  <div className=" flex justify-center">
                    <span className=" text-center font-semibold text-subtext">
                      8.1/10
                    </span>
                  </div>
                  <div className="w-[200px] mt-3  rounded-full h-1 dark:bg-gray-700">
                    <div
                      className="bg-green-600 h-1 rounded-full"
                      style={{ width: "60%" }}
                    ></div>
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nihil, similique voluptatum! Ab saepe libero omnis.
                </p>
              </div>
              <div className="font-notosans mt-5 pb-5 border-slate-400 border-dashed border-spacing-2 border-b-2 font-bold text-subtext text-start">
                <p className="font-notosans mt-5 font-bold text-start">Urea</p>
                <div className="flex flex-row gap-4 justify-start">
                  <div className=" flex justify-center">
                    <span className=" text-center font-semibold text-subtext">
                      8.1/10
                    </span>
                  </div>
                  <div className="w-[200px] mt-3  rounded-full h-1 dark:bg-gray-700">
                    <div
                      className="bg-green-600 h-1 rounded-full"
                      style={{ width: "60%" }}
                    ></div>
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nihil, similique voluptatum! Ab saepe libero omnis.
                </p>
              </div>
              <div className="font-notosans mt-5 pb-5 border-slate-400 border-dashed border-spacing-2 border-b-2 font-bold text-subtext text-start">
                <p className="font-notosans mt-5 font-bold text-start">Urea</p>
                <div className="flex flex-row gap-4 justify-start">
                  <div className=" flex justify-center">
                    <span className=" text-center font-semibold text-subtext">
                      8.1/10
                    </span>
                  </div>
                  <div className="w-[200px] mt-3  rounded-full h-1 dark:bg-gray-700">
                    <div
                      className="bg-green-600 h-1 rounded-full"
                      style={{ width: "60%" }}
                    ></div>
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nihil, similique voluptatum! Ab saepe libero omnis.
                </p>
              </div>
              <div className="font-notosans mt-5 pb-5   font-bold text-subtext text-start">
                <p className="font-notosans mt-5 font-bold text-start">Urea</p>
                <div className="flex flex-row gap-4 justify-start">
                  <div className=" flex justify-center">
                    <span className=" text-center font-semibold text-subtext">
                      8.1/10
                    </span>
                  </div>
                  <div className="w-[200px] mt-3  rounded-full h-1 dark:bg-gray-700">
                    <div
                      className="bg-green-600 h-1 rounded-full"
                      style={{ width: "60%" }}
                    ></div>
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nihil, similique voluptatum! Ab saepe libero omnis.
                </p>
              </div>
            </div>

            <div></div>
          </div>
        </div>
      </div>
      <section className="bg-coustom1">
        <div className="md:container md:mx-auto">
          <div className="flex justify-center pt-4">
            <div className="w-[150px] border h-[150px] rounded-full"></div>
          </div>
          <div className="flex justify-center">
            <p className="text-3xl font-notosans font-medium mt-5">
              personal health impact
            </p>
          </div>
          <div className="flex pb-8 justify-center">
            <p className="mt-5 text-center">
              the More Natural the source & state of the ingredient the <br />{" "}
              easier it is on your body
            </p>
          </div>
        </div>
      </section>

      {/* section333333333333333333333333333333333333333333333333333333333333333333333333333333333 */}
      <section className="bg-coustom1">
        <div className="flex gap-5 md:container md:mx-auto justify-center">
          <div className="flex flex-col w-1/2 justify-start mt-5">
            <div className="flex justify-end">
              <img
                src="/sample.png"
                className="w-[50px] rounded-lg h-[50px]"
                alt=""
              />
            </div>

            <div className="md:flex flex-col   mt-5 rounded-b-3xl  pb-2 ">
              <p className="font-notosans text-end font-bold ">
                A good Pick-soil inputs
              </p>
            </div>
            <div className="border-dashed flex justify-between border-b-2 pb-4">
              <p>Ingredient Name</p>
              <p>Main Source in Nature</p>
              <p>How processed is it?</p>
            </div>
            <div className="text-subtext flex justify-between  mt-5 pb-4">
              <p>cow dung</p>
              <p>animal</p>
              <p>100% natural</p>
            </div>
          </div>
          <div>
            <div className="flex w-[1px] flex-col h-full items-center  justify-center gap-1 ">
              <span className="border h-full border-subtext lg:w-full"></span>
            </div>
          </div>
          <div className="flex flex-col w-1/2  mt-5">
            <div className="flex justify-start">
              <img
                src="/sample.png"
                className="w-[50px] rounded-lg h-[50px]"
                alt=""
              />
            </div>

            <div className="md:flex flex-col  justify-end mt-5 rounded-b-3xl  pb-2 ">
              <p className="font-notosans text-start font-bold ">
                A good Pick-soil inputs
              </p>
            </div>

            <div className="border-dashed flex justify-between border-b-2 pb-4">
              <p>Ingredient Name</p>
              <p>Main Source in Nature</p>
              <p>How processed is it?</p>
            </div>
            <div className="text-subtext border-dashed flex justify-between border-b-2 mt-5 pb-4">
              <p>cow dung</p>
              <p>animal</p>
              <p>100% natural</p>
            </div>
            <div className="text-subtext border-dashed flex justify-between border-b-2 mt-5 pb-4">
              <p>cow dung</p>
              <p>animal</p>
              <p>100% natural</p>
            </div>
            <div className="text-subtext border-dashed flex justify-between border-b-2 mt-5 pb-4">
              <p>cow dung</p>
              <p>animal</p>
              <p>100% natural</p>
            </div>
          </div>
        </div>
      </section>
      {/* section444444444444444444444444444444444444444444444444444444444444 */}
      <section className="bg-coustom1">
        <div className="md:container md:mx-auto">
          <div className="flex justify-center pt-4">
            <div className="w-[150px] border h-[150px] rounded-full"></div>
          </div>
          <div className="flex justify-center">
            <p className="text-3xl font-notosans font-medium mt-5">
              Ecological health impact
            </p>
          </div>
          <div className="flex pb-8 justify-center">
            <p className="mt-5">How regeneratively can the material be used</p>
          </div>
        </div>
      </section>
      {/* section55555555555555555555555555555555555555555555555555555555555555555555555555 */}
      <section className="bg-coustom1 pb-20">
        <div className="flex gap-5 md:container md:mx-auto justify-center">
          <div className="flex flex-col w-1/2 justify-start mt-5">
            <div className="flex justify-end">
              <img
                src="/sample.png"
                className="w-[50px] rounded-lg h-[50px]"
                alt=""
              />
            </div>

            <div className="md:flex flex-col   mt-5 rounded-b-3xl  pb-2 ">
              <p className="font-notosans text-end font-bold ">
                A good Pick-soil inputs
              </p>
            </div>
            <div className="border-dashed flex justify-between border-b-2 pb-4">
              <p>Ingredient Name</p>
              <p>Main Source in Nature</p>
              <p>How processed is it?</p>
            </div>
            <div className="text-subtext flex justify-between  mt-5 pb-4">
              <p>cow dung</p>
              <p>animal</p>
              <p>100% natural</p>
            </div>
          </div>
          <div>
            <div className="flex w-[1px] flex-col h-full items-center  justify-center gap-1 ">
              <span className="border h-full border-subtext lg:w-full"></span>
            </div>
          </div>
          <div className="flex flex-col w-1/2  mt-5">
            <div className="flex justify-start">
              <img
                src="/sample.png"
                className="w-[50px] rounded-lg h-[50px]"
                alt=""
              />
            </div>

            <div className="md:flex flex-col  justify-end mt-5 rounded-b-3xl  pb-2 ">
              <p className="font-notosans text-start font-bold ">
                A good Pick-soil inputs
              </p>
            </div>

            <div className="border-dashed flex justify-between border-b-2 pb-4">
              <p>Ingredient Name</p>
              <p>Main Source in Nature</p>
              <p>How processed is it?</p>
            </div>
            <div className="text-subtext border-dashed flex justify-between border-b-2 mt-5 pb-4">
              <p>cow dung</p>
              <p>animal</p>
              <p>100% natural</p>
            </div>
            <div className="text-subtext border-dashed flex justify-between border-b-2 mt-5 pb-4">
              <p>cow dung</p>
              <p>animal</p>
              <p>100% natural</p>
            </div>
            <div className="text-subtext border-dashed flex justify-between border-b-2 mt-5 pb-4">
              <p>cow dung</p>
              <p>animal</p>
              <p>100% natural</p>
            </div>
          </div>
        </div>
      </section>
      {/* secion6666666666666666666666666666666666666666666666666666666666666666666666
       */}
      <section>
        <div className="md:container pt-10 md:mx-auto">
          {" "}
          <p className="text-center">Meet the maker</p>
          <div>
            <img src="" alt="" />
          </div>
          <div className="flex justify-center">
            <p className="w-[50%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              nam nulla doloremque natus veritatis reiciendis modi libero amet.
              Similique quidem repellendus voluptate soluta! Dolorum et error
              quos esse. Doloremque perspiciatis tempora minima repellat
              laboriosam autem repellendus provident ipsum dolorem fugiat nemo,
              debitis tempore mollitia earum a. Dolorum adipisci maxime magni?
            </p>
          </div>
          <div>
            <img src="" alt="" />
          </div>
        </div>
      </section>
      {/* section7777777777777777777777777777777777777777777777777777777777777 */}
      <div>
        <svg
          width="100%"
          height="150px"
          preserveAspectRatio="none"
          id="svg"
          viewBox="0 0 1440 390"
          xmlns="http://www.w3.org/2000/svg"
          className="transition duration-300 ease-in-out delay-150"
        >
          <path
            d="M 0,400 C 0,400 0,200 0,200 C 58.97817240103589,209.91663583672462 117.95634480207178,219.83327167344925 175,240 C 232.04365519792822,260.16672832655075 287.1527931927488,290.5835491429276 341,270 C 394.8472068072512,249.4164508570724 447.432482426933,177.83253175484026 498,173 C 548.567517573067,168.16746824515974 597.117277099519,230.08632383771123 652,237 C 706.882722900481,243.91367616228877 768.0984091749909,195.82217289431497 815,201 C 861.9015908250091,206.17782710568503 894.4890862005177,264.624984585029 942,246 C 989.5109137994823,227.37501541497102 1051.9452460229375,131.67788876556915 1111,129 C 1170.0547539770625,126.32211123443086 1225.7299297077323,216.66346035269453 1280,244 C 1334.2700702922677,271.3365396473055 1387.1350351461338,235.66826982365274 1440,200 C 1440,200 1440,400 1440,400 Z"
            stroke="none"
            strokeWidth="0"
            fill="#f7f5f0"
            fillOpacity="1"
            className="transition-all duration-300 ease-in-out delay-150 path-0"
          ></path>
        </svg>
      </div>
      <section className="bg-coustom1">
        <p className="pt-14 text-center mb-8"> Total Miles</p>
        <div className="flex justify-center">
          <img src="/map.png" alt="" />
        </div>

        <div className="flex justify-center pt-8 mb-12 mr-[20px]">
          <p className="w-[45%] text-2xl font-notosans font-bold text-emerald-600">
            material
          </p>
        </div>
        <div className="flex flex-col md:container md:mx-auto items-center justify-center">
          <div className="border-dashed flex w-[60%] gap-20 justify-between border-b-2 pb-4">
            <p>Ingredient Name</p>
            <p>Main Source in Nature</p>
            <p>How processed is it?</p>
          </div>
          <div className="border-dashed w-[60%] flex gap-20 justify-between border-b-2 pb-4">
            <p>
              sea <br />
              bucky <br />
              berrry
            </p>
            <p>local farmer</p>
            <p>india</p>
          </div>
          <div className="border-dashed w-[60%] flex gap-20 justify-between border-b-2 pb-4">
            <p>Ingredient Name</p>
            <p>Main Source in Nature</p>
            <p>How processed is it?</p>
          </div>
        </div>

        <div className="flex justify-center pt-8 mb-12 mr-[20px]">
          <p className="w-[45%] text-2xl font-notosans font-bold text-red-600">
            Processing
          </p>
        </div>
        <div className="flex flex-col md:container md:mx-auto items-center justify-center">
          <div className="border-dashed flex w-[60%] gap-20 justify-between border-b-2 pb-4">
            <p>Ingredient Name</p>
            <p>Main Source in Nature</p>
            <p>How processed is it?</p>
          </div>
          <div className="border-dashed w-[60%] flex gap-20 justify-between border-b-2 pb-4">
            <p>
              sea <br />
              bucky <br />
              berrry
            </p>
            <p>local farmer</p>
            <p>india</p>
          </div>
          <div className="border-dashed w-[60%] flex gap-20 justify-between border-b-2 pb-4">
            <p>Ingredient Name</p>
            <p>Main Source in Nature</p>
            <p>How processed is it?</p>
          </div>
        </div>
      </section>

      {/* section88888888888888888888888888888888888888888888 */}

      <section>
        <div className="md:container md:mx-auto flex flex-col justify-center">
          <p className="text-3xl font-notosans pt-12 pb-8 text-center">End Of Life</p>
          <img src="/endoflife.png" alt="" />
        </div>
      </section>
    </>
  );
}
