import React from "react";
import IndustryCard from "./IndustryCard";
import Image from "next/image";
import { HeroBlob } from "./HeroSection";
// import { useRouter } from "next/router";

const IndustrySolutions = () => {
  // const router = useRouter();
  // const isHomePage = router.pathname === "/";

  const IndustrySolutionsData = [
    {
      path: "/apples_food.png",
      label: "Food",
    },
    {
      path: "/electronic_new.png",
      label: "Electronics",
    },
    {
      path: "/i3.png",
      label: "Metal",
    },
    {
      path: "/newi4.png",
      label: "Logistics",
    },
    {
      path: "/aero.jpg",
      label: "Aerospace",
    },
    {
      path: "/i5.png",
      label: "Wood",
    },
    {
      path: "/i6.png",
      label: "Manufacturing",
    },
    {
      path: "/_i7.png",
      label: "Pharma",
    },
    // {
    //   path:'/xray2.png',
    //   label:'Medical'
    // }
  ];

  return (
    <div className="pb-24 sm:pb-36 px-8 lg:px-16 relative">
     
        <div className="flex flex-col justify-center items-center mb-14">
          <h1 className="pb-1.5 text-xl sm:text-4xl md:text-5xl font-light lg:text-6xl  text-center md:text-justify">
            Industries
          </h1>
          <h3 className=" text-gray-300 text-base sm:text-xl md:text-xl mt-2 sm:mt-4 w-full md:w-[800px] text-center ">
            xis.ai Suite provides powerful software infrastructure to deliver
            all your AI vision applications with one solution.
          </h3>
        </div>
     

      <div
        className="relative rounded-3xl sm:rounded-lg overflow-hidden py-6 sm:py-20 mt-14 p-4 m-auto min-[2300px]:w-[60%] min-[2300px]:m-auto" // Add this to create the outer container
        style={{
          // backdropFilter: "blur(10.45px)", // Apply the backdrop blur
          boxShadow: "15px 14px 55.3px rgba(0, 0, 0, 0.31)", // Apply the drop shadow
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(107, 107, 107, 0.15) 0%, rgba(113, 113, 113, 0.15) 99.33%)", // Gradient fill
            border: "1.5px solid rgba(148, 143, 143, 0.10)",
            borderRadius: "8px",
          }}
        />

        <IndustryCard data={IndustrySolutionsData} />
      </div>
    </div>
  );
};

const IndustryPreview = () => {
  // const router = useRouter();
  // const isHomePage = router.pathname === "/";

  const IndustrySolutionsData = [
    {
      path: "/apples_food.png",
      label: "Food",
    },
    {
      path: "/electronic_new.png",
      label: "Electronics",
    },
    {
      path: "/i3.png",
      label: "Metal",
    },
    {
      path: "/newi4.png",
      label: "Logistics",
    },
    {
      path: "/aero.jpg",
      label: "Aerospace",
    },
    {
      path: "/i5.png",
      label: "Wood",
    },
    {
      path: "/i6.png",
      label: "Manufacturing",
    },
    {
      path: "/_i7.png",
      label: "Pharma",
    },
  ];

  return (
    <div className=" sm:pb-10 px-8 lg:px-16 relative mt-20" style={{
      // background:'rgba(15, 15, 15, 0.30)'
    }}>
   
        <div className="flex flex-col justify-center items-center ">
          <h4 className="text-4xl md:text-5xl lg:text-6xl text-center md:text-justify ">
            Industries
          </h4>
        </div>
 

      <div
        className="relative rounded-3xl sm:rounded-lg overflow-hidden py-10  p-4 m-auto min-[2300px]:w-[60%] min-[2300px]:m-auto" // Add this to create the outer container
        style={{
          // backdropFilter: "blur(10.45px)", // Apply the backdrop blur
          // boxShadow: "15px 14px 55.3px rgba(0, 0, 0, 0.31)", // Apply the drop shadow
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            // background:
            //   "linear-gradient(90deg, rgba(107, 107, 107, 0.15) 0%, rgba(113, 113, 113, 0.15) 99.33%)", // Gradient fill
            // border: "1.5px solid rgba(148, 143, 143, 0.10)",
            borderRadius: "8px",
          }}
        />

        <IndustryCard data={IndustrySolutionsData} />
      </div>
    </div>
  );
};

export { IndustryPreview };

export default IndustrySolutions;
