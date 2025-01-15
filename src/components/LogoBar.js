import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";

const LogoBar = ({ sx = {} }) => {
  return (
    <Box
      className="flex gap-6 sm:mx-0  sm:gap-0 justify-around items-center md:px-10 sm:pb-10 px-1 sm:px-0 overflow-hidden "
      sx={{
        ...sx,
        background: {
          xs: "none",
          sm: "linear-gradient(0deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.30) 48.5%, rgba(0, 0, 0, 0.00) 100%)",
        },
      }}
    >
      <div className="flex animate-scroll sm:gap-10 gap-6 items-center xl:w-full xl:justify-between  lg:w-full lg:justify-between">
        <Image src="/Frame.png" alt="xray-lab logo" width={130} height={100} />
        <Image src="/ip2.png" alt="ipai logo" width={110} height={100} />
        <Image
          src="/aws-activate.png"
          alt="aws logo"
          width={175}
          height={100}
        />
        <Image src="/nframe.png" alt="nvidia logo" width={140} height={47} />
        <Image src="/bosch.png" alt="bosch logo" width={150} height={100} />
        {/* Duplicate logos for smooth looping */}
        <Image
          src="/Frame.png"
          alt="xray-lab logo"
          width={130}
          height={100}
          className="sm:hidden"
        />
        <Image
          src="/ip2.png"
          alt="ipai logo"
          width={110}
          height={100}
          className="sm:hidden"
        />
        <Image
          src="/aws-activate.png"
          alt="aws logo"
          width={175}
          height={100}
          className="sm:hidden"
        />
        <Image
          src="/nframe.png"
          alt="nvidia logo"
          width={140}
          height={47}
          className="sm:hidden"
        />
        <Image
          src="/bosch.png"
          alt="bosch logo"
          width={150}
          height={100}
          className="sm:hidden"
        />
      </div>

      <style jsx>{`
        @media (max-width: 640px) {
          .animate-scroll {
            display: flex;
            animation: scroll 20s linear infinite;
          }

          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        }
      `}</style>
    </Box>
  );
};

export default LogoBar;
