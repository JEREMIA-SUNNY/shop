import Image from "next/image";
import Link from "next/link";
function Knowledge() {
  return (
    <>
      <div className="bg-coustom1">
        <div className="w-full  h-72 relative ">
          <Image
            layout="fill"
            alt="ser"
            src="/ouroffering/knowledge1.png"
            objectFit="cover "
          />
          <div className="w-full    h-full  flex  justify-center">
            <div className="text-white relative   h-full flex justify-center items-center">
              <h1 className=" text-4xl   text-bold  w-full     text-white">
                Knowledge As A Service
              </h1>
            </div>
          </div>
        </div>
        <section className="text-black  ">
          <div className="container px-5 py-24 mx-auto">
            <p>
            The digital services eco-system as we know it is undergoing a paradigm shift. New stacks and standards are emerging faster than ever, and every organization with a digital footprint is under serious pressure to quickly build and maintain a future-ready workforce. It is no secret that even large corporations with immense resources at their disposal are struggling to cope with this challenge. Empowering workforce on the go requires deep expertise that can be brought within the time and cost allocated. Our knowledge services ecosystem is constantly connected/updated with experts who can deliver online/offline trainings on several in-demand technology skills for your project teams and campus recruits.

            </p>
           
          </div>
        </section>

        <section className="text-black flex flex-col">
          <div className="container mx-auto lg:gap-16  flex px-5 py-14 md:items-start items-center md:flex-row flex-col ">
            <div className="lg:flex-grow md:w-1/2  flex  flex-col  text-left  md:mb-0  ">
              <h1 className="text-3xl mb-4  text-black">
              Hybrid Learning
              </h1>
              <p className="mb-8 leading-relaxed">
              When it comes to workforce training, each organization has specific needs. We at SFJ understand that, and offer a diverse and flexible approach to training without compromising on quality or effectiveness. Our training programs are delivered online and offline, in self-learning mode and an instructor-led mode. We also offer hybrid models, where employees can go through a series of courses online followed by advanced offline sessions with instructors. Whether it's a project specific training or long-term capacity building, experienced professionals or campus recruits, we got your upskilling needs covered. 
               
              </p>
              <p className="mb-5"> <Link href="/contact"><a className='active:text-red underline font-bold decoration-emerald-600 text-emerald-600'>Get in touch</a></Link> to know more.</p>
            </div>
            <div className="h-80 lg:w-1/2 w-full flex items-start  relative">
              <Image
                className=""
                layout="fill"
                objectFit="cover"
                alt="ser"
                src="/solutions/hybrid.png"
              />
            </div>
          </div>

          <hr />
          <div className="container mx-auto lg:gap-16  flex px-5 py-14 md:items-start items-center md:flex-row flex-col ">
            <div className="h-80 lg:w-1/2 w-full flex items-start  relative">
              <Image
                className=""
                layout="fill"
                objectFit="cover"
                alt="ser"
                src="/solutions/network.png"
              />
            </div>

            <div className="lg:flex-grow md:w-1/2  flex  flex-col  text-left  md:mb-0  ">
              <h1 className="text-3xl mb-4  text-gray-900">
              Strong Network
              </h1>
              <p className="mb-8 leading-relaxed">
              Our knowledge services ecosystem is constantly connected and updated with experts who can deliver training sessions on demand. We have an exceptional turnaround time when it comes to deploying the training bandwidth your organization needs. Through our network of 5000+ trainers, 1000+ SMEs, we are uniquely placed to help your organization achieve your talent transformation goals with the most optimal strategy.
                
              </p>
              <p> <Link href="/contact"><a className='active:text-red underline decoration-emerald-600 text-emerald-600 font-bold'>Get in touch</a></Link> to know more.</p>
            </div>
          </div>
         

          <div className="w-full h-full flex justify-center mt-5 mb-10">
                <div className="bg-orange flex justify-center w-[150px] shadow-lg h-10 hover:scale-110 rounded-lg " >              <Link href="/education" className="">
                <button className="font-semibold ">View Courses</button>
                </Link>
                </div>

          </div>
         

        </section>
      </div>
    </>
  );
}
export default Knowledge;
