"use client";
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import LogoBar from "./LogoBar";
import { Box } from "@mui/material";
import Btn from "./DesignElements/Btn";

const HeroBlob = ({ sx = {} }) => {
  return (
    <Box
      sx={{
        position: "absolute",
        width: { xl: "710px", lg: "500px", md: "100%", sm: "100%", xs: "100%" },
        height: "710px",
        borderRadius: "710px",
        background: "#1A212B",
        filter: "blur(100px)",
        overflow: "hidden",
        ...sx,
      }}
    ></Box>
  );
};

const HeroSection = () => {
  const gradientStyleMain = {
    background:
      "linear-gradient(0deg, rgba(62, 95, 170, 0.25) 0%, rgba(48, 20, 102, 0.25) 193.33%)",
  };

  const gradientStyle = {
    background: "rgba(255, 255, 255, 0.1)",
  };

  const choices = ["Private", "End-to-End", "Accessible", "Simple"];
  const choicesLength = choices.length;
  let index = 0;
  const [sub, setSub] = useState(choices[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      index = (index + 1) % choicesLength;
      setSub(choices[index]);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const spanStyle = {
    animation: "spin_words 7s infinite",
    display: "block",
    height: "100%",
    background: "linear-gradient(99deg, #A9C3FF 40.82%, #C8F3FF 62.26%)",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    textTransform: "uppercase",
  };

  const videoRef = useRef(null);

  const playVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const initCalendlyPopup = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/syedmutti/call-with-muti", // Your Calendly link
      });
    }
  };

  return (
    <Box
      sx={{
        height: { sm: "90vh", xs: "75vh" },
        width: "100%",
        position: "relative",
        overflowX: "hidden",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          background: "rgba(26, 33, 43, 0.60)",
          opacity: 0.4,
        }}
      >
        <video
          onTouchStart={playVideo()}
          onTouchMove={playVideo()}
          onTouchEnd={playVideo()}
          onTouchCancel={playVideo()}
          ref={videoRef}
          autoPlay
          playsInline
          muted
          loop
          className="w-full  h-full object-cover z-50"
        >
          <source
            src="/_Background-elements/newVideo.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </Box>
      <Box
        sx={{
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          width: { sm: "50%", xs: "100%" },
          p: { sm: "0 5rem", xs: "0 2rem" },
        }}
        className="min-[2300px]:w-[80%] min-[2300px]:mx-auto"
      >
        <h1
          className="text-4xl sm:text-6xl pb-2 font-bold mt-8 text-shadow line-height-82 "
          style={{
            textTransform: "uppercase",
            color: "#fff",
          }}
        >
          MAKING Visual Quality Inspection
        </h1>
        <div className="overflow-hidden max-h-[58px] sm:max-h-[70px] py-2">
          <div className="flex flex-col mt-[48px] sm:mt-[60px] text-4xl sm:text-6xl font-bold  z-50 ">
            <span style={spanStyle}>Autonomous</span>
            <span style={spanStyle}>Private</span>
            <span style={spanStyle}>End-to-End</span>
            <span style={spanStyle}>Accessible</span>
            <span style={spanStyle}>Effortless</span>
          </div>
        </div>
        <h3
          className="text-4xl sm:text-6xl pb-2 font-bold mt-8 text-shadow line-height-82 gradient-text"
          style={{
            margin: 0,
          }}
        >
          With {" "}<span
            style={{
              background:
                "linear-gradient(99deg, #A9C3FF 40.82%, #C8F3FF 62.26%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            AI
          </span>
        </h3>
      </Box>

      <div className="min-[2300px]:w-[520px] min-[2300px]:ml-[12%] flex justify-between w-[68%] sm:w-[44%] md:w-[35%] lg:w-[28%] xl:w-[22%] 2xl:w-[18%] mx-auto sm:mx-0 sm:ml-20  mt-10 ">
        <button
          style={{ backgroundColor: "rgba(44, 44, 44, 0.50)" }}
          className="text-sm sm:text-xl  opacity-95 py-2 px-[22px] rounded-full  backdrop-blur-2xl  _static-button-animated"
          onClick={initCalendlyPopup}
        >
          Get a Demo
        </button>

        <div
          className="flex gap-1 items-center cursor-pointer text-sm z-40"
          onClick={(_) => {
            window.open("https://beltline.glitch.me", "_blank");
          }}
        >
          <Image
            src="/iconamoon_scanner.png"
            width={30}
            height={30}
            alt="scanner"
            loading="lazy"
          />
          View in AR
        </div>
      </div>
    </Box>
  );
};
export { HeroBlob };
export default HeroSection;
//If you want to use hero blob with custom sx prop.
