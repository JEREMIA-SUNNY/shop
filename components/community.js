import React from "react";

function Community() {
  return <>
  
  <div className="md:container md:mx-auto">
    <div className="py-14 flex gap-20 justify-center ">
            <div className=" flex flex-col  justify-center">
                <p className="text-4xl">Join Our Community <br />Of Vendors</p>
               <div className="flex gap-5 mt-10">
               <button className="bg-gray-800 text-white p-3 rounded-md">
                     Register As Vendor
                    </button>
                    <button className="bg-gray-800 text-white p-3 rounded-md">
                      Know More
                    </button>
               </div>
            </div>
            <div className="w-1/2">
    <img src="/carosel/kart.jpg" className="" alt="" />
            </div>
    </div>

  </div>
  </>;
}

export default Community;
