"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Navbar";
import CustomersAndPartners from "@/components/CustomersAndPartners";

import { useEffect, useState, useRef } from "react";

import Image from "next/image";

import * as React from "react";

import HeroSection from "@/components/HeroSection";
import { IndustryPreview } from "@/components/IndustrySolutions";

import { Box, Typography } from "@mui/material";
import LogoBar from "@/components/LogoBar";

interface RenderationProps {
  tt: string; // Adjust the type as needed
  bt: string; // Adjust the type as needed
}

const $_renderation: React.FC<RenderationProps> = ({ tt, bt }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: {
          xl: "250px",
          lg: "250px",
          md: "250px",
          sm: "100%",
          xs: "100%",
        },
        height: "100px",
      }}
    >
      <Typography
        sx={{
          fontSize: "2.4rem",
          fontWeight: 600,
          color: "#fff",
         
        }}
        className="_layer-blur"
      >
        {tt}
      </Typography>
      <Typography
        sx={{
          fontSize: "1.2rem",
       
          color: "#fff",
          textAlign: "center",
          fontWeight: 600,
        }}
      >
        {bt}
      </Typography>
    </Box>
  );
};

const ApplicationNew = () => {
  const categories = [
    {
      number: "01",
      label: "Defect Detection",
      video: "/Application/Media/DefectDetection.mp4",
    },
    {
      number: "02",
      label: "Object Detection",
      video: "/Application/Media/OD new.mp4",
    },
    {
      number: "03",
      label: "Anomaly Detection",
      video: "/Application/Media/AnomalyDetection.mp4",
    },
    {
      number: "04",
      label: "Object Counting",
      video: "/Application/Media/ObjectCounting.mp4",
    },
    {
      number: "05",
      label: "Completeness Check",
      video: "/Application/Media/Complet.mp4",
    },
    {
      number: "06",
      label: "Text Identification",
      video: "/Application/Media/TextIdentification.mp4",
    },
    {
      number: "07",
      label: "Measurement",
      video: "/Application/Media/Measurement.mp4",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Autoplay failed, waiting for user interaction.");
      });
    }
  }, [selectedCategory]);

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Use effect to detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640); // Tailwind 'sm' breakpoint is at 640px
    };

    // Set the initial screen size when the component mounts
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener when component unmounts
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // const blogsToDisplay = isSmallScreen ? blogsData.slice(0, 1) : blogsData;

  return (
    <>
      <div className="bg-white sm:rounded-3xl">
        <h1 className=" pb-0 pt-10 sm:py-10  mt-28 mb-[-4px] font-extralight text-4xl md:text-5xl lg:text-6xl text-center  text-black bg-white sm:rounded-3xl">
          Application
        </h1>
        <div
          className="sm:rounded-3xl bg-white text-black flex justify-between py-16 sm:py-24 mt-10 sm:mt-0 min-[2300px]:w-[60%] min-[2300px]:mx-auto relative"
          // style={{ background: "rgba(15, 15, 15, 0.30)" }}
        >
          {/* Left Component */}
          <div className="flex sm:flex-col ml-4 sm:ml-20 sm:w-[30%] font-black z-20 gap-2 sm:gap-0 mt-[-50px] sm:mt-0">
            <h1 className="text-xl sm:text-4xl lg:text-5xl 2xl:text-6xl min-[1900px]:text-7xl">
              {selectedCategory.number}
            </h1>
            <h1 className="mt-1 sm:mt-0 sm:w-1/2 text-[15px] sm:text-3xl lg:text-4xl 2xl:text-5xl min-[1900px]:text-6xl min-[2300px]:text-5xl">
              {selectedCategory.label.toUpperCase()}
            </h1>
          </div>

          {/* Middle Component */}
          <div className="pointer-events-none flex items-center justify-center w-[100%] sm:w-[60%]  sm:mt-0 ml-[-170px] sm:ml-[-150px] absolute sm:relative left-[102px] sm:left-0">
            <video
              ref={videoRef}
              key={selectedCategory.video}
              src={selectedCategory.video}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="w-full h-auto pointer-events-none"
            />
          </div>

          {/* Right Component */}
          <div className="flex justify-end text-[10px] sm:text-lg lg:text-xl 2xl:text-[27px] z-40">
            <div className="flex flex-col gap-4 sm:gap-10 lg:gap-14">
              {categories.map((category) => (
                <div
                  key={category.number}
                  className={`flex gap-4 cursor-pointer items-center `}
                  onClick={() => handleCategoryClick(category)}
                >
                  <h2
                    className={`text-right w-[75%] transition-all duration-300 ${
                      selectedCategory.number === category.number
                        ? "-translate-x-1 sm:-translate-x-8 font-bold"
                        : ""
                    }`}
                  >
                    {category.label}
                  </h2>
                  {/* <Image
                src="/Application/Animation/ALine.svg"
                width={100}
                height={0}
              /> */}
                  <div
                    className={`h-[1px] bg-black transition-all duration-300 ${
                      selectedCategory.number === category.number
                        ? "w-[45px] sm:w-[200px] h-[2px]"
                        : "w-[30px] sm:w-[100px]"
                    }`}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />

      <Box
        sx={{
          display: "flex",
          background: 'url("/_Background-elements/_Partners-bg.png")',
          width: "100%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          
          fontSize: "2rem",
          padding: "2rem 0 0 0",
        
          alignItems: "flex-start",
        
          justifyContent: "center",
          flexDirection: {
            xs: "column",
            md: "column",
            lg: "row",
            xl: "row",
          },
        }}
      >
        <div
          className=" text-[26px] font-light hidden lg:block"
          style={{
            WebkitTextStrokeWidth: "0.5px",
            WebkitTextStrokeColor: "#fff",
            marginTop: "0.5rem",
            marginRight: "0.5rem",
          }}
        >
          Trusted By
        </div>
        <LogoBar
          sx={{
            width: {
              xl: "80%",
              lg: "80%",
              md: "100%",
              sm: "100%",
              xs: "100%",
            },
            background: "transparent",
            backgroundColor: "transparent",
            paddingBottom: "24px",
          }}
        />
      </Box>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          background: "inherit",
          py: "2rem",
          px: "5rem",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: {
              xl: "87%",
              lg: "87%",
              md: "100%",
              sm: "100%",
              xs: "100%",
            },
            alignItems: {
              xl: "center",
              lg: "center",
              md: "center",
              sm: "flex-start",
              xs: "flex-start",
            },
            justifyContent: "space-between",
            flexDirection: {
              xl: "row",
              lg: "row",
              md: "row",
              sm: "row",
              xs: "row",
            },
            gap: {
              xl: 0,
              lg: 0,
              md: 0,
              sm: "1rem",
              xs: "1rem",
            },
            flexWrap: {
              xs: "wrap",
            },
          }}
        >
          {[
            { tt: "0%", bt: "AI Expertise Required " },
            { tt: "99.99%", bt: "Reduce Recall" },
            { tt: "75%", bt: "Lower Total Cost" },
            { tt: "100%", bt: "Risk Free Investment" },
          ].map(({ tt, bt }, $Key) => (
            <$_renderation {...{ tt, bt }} key={$Key} />
          ))}
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "rgba(15, 15, 15, 0.30)",
          minHeight: "405px",
          width: "100%",
          position: "relative",
        }}
      >
        <Image
          src="/HiW/a.svg"
          width={200}
          height={244}
          className="absolute z-40 top-[-190px] left-0 hidden 2xl:block "
           alt="image"
        />
        <Image
          src="/HiW/ballBig.svg"
          width={120}
          height={120}
          alt="image"
          className="absolute z-40 top-[-60px] right-[60px] min-[2300px]:right-[100px] hidden 2xl:block "
        />
        <h6
          style={{
            color: "#fff",
            fontWeight: 400,
            textAlign: "center",
            margin: "1rem 0",
          }}
          className="text-2xl md:text-[3rem] sm:text-[2.5rem] xs:text-[1.3rem] lg:text-[50px] xl:text-[71px]"
        >
          Transform Quality Inspection{" "}
        </h6>
        <p
          style={{
            color: "#fff",

            fontWeight: 300,
          }}
          className="text-center leading-6 lg:leading-8 text-base w-[80%] md:w-[60%] mt-6 md:text-[1.2rem] sm:text-[1rem] xs:text-[1rem] lg:text-[1.2rem] xl:text-[27px]"
        >
          With state-of-the-art that enables industries to accurately identify
          defects and anomalies in split second, executing everything in
          runtime. A perfect solution for a high pace production industry
          looking to improve and automate their visual quality inspection
        </p>
      </Box>

      <ApplicationNew />
      <IndustryPreview />
      {/* <div
          className="py-16"
          style={{
            background: "rgba(15, 15, 15, 0.30)",
            height: "100%",
          }}
        >
          <h1 className="my-12 font-light text-4xl md:text-5xl lg:text-6xl text-center  ">
            Blogs
          </h1>
          <BlogCard data={blogsToDisplay} isPreview={true} />

          <Link href="/blogs">
            <div className="py-2 px-2 rounded-3xl _static-button-animated mt-12 w-[32%] sm:w-[18%] lg:w-[12%] 2xl:w-[8%] m-auto text-center">
              See More
            </div>
          </Link>
        </div>
 */}

      <CustomersAndPartners />

      <Footer />
    </div>
  );
}
