import Image from "next/image";
import React from "react";

const Logos = () => {
  const data = [
    { path: "/aboutUsLogos/1.svg" },
    { path: "/aboutUsLogos/2.svg" },
    { path: "/aboutUsLogos/3.svg" },
    { path: "/aboutUsLogos/4.svg" },
    { path: "/aboutUsLogos/5.svg" },
    { path: "/aboutUsLogos/6.svg" },
    { path: "/aboutUsLogos/7.svg" },
    { path: "/aboutUsLogos/8.svg" },
    { path: "/aboutUsLogos/9.svg" },
    { path: "/aboutUsLogos/10.svg" },
    { path: "/aboutUsLogos/11.svg" },
    { path: "/aboutUsLogos/12.svg" },
    { path: "/aboutUsLogos/13.svg" },
    { path: "/aboutUsLogos/14.svg" },
    { path: "/aboutUsLogos/15.svg" },
  ];

  return (
    <>
<div className="w-full h-[300px] px-2 sm:px-4 lg:px-16 lg:h-[400px] xl:h-[600px] relative mt-20"> {/* Adjust the height as needed */}
  <Image
    src="/25 years.svg"
    alt="About Us Years"
    layout="fill"  
    objectFit="contain"  
    />
</div>


    <div className="relative flex justify-center h-full flex-wrap gap-4 sm:mt-20 mb-20 min-[2300px]:w-[60%] min-[2300px]:mx-auto ">
      {data.map((c, index) => (
       <div
       key={index}
       className=" flex items-center border border-[#6BB6BE] rounded-3xl p-4 backdrop-blur-3xl"
       style={{
         background:
           "linear-gradient(184deg, rgba(49, 85, 89, 0.13) 28.13%, rgba(85, 143, 150, 0.08) 98.75%)",
       }}
     >
       <Image
         src={c.path}
         alt={`Logo ${index + 1}`}
         width={75}  
         height={75}  
         style={{
           objectFit: "contain",
           width: "50px", 
           height: "50px", 
         }}
         className="lg:w-[75px] lg:h-[75px]"  // Overrides to 75px on lg screens
       />
     </div>
     
      ))}
    </div>
    </>
  );
};

export default Logos;
