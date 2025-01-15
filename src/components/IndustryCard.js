

import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";
import Palatte from "../common/Palatte";
import { Link } from "@mui/material";

const IndustryCard = ({ data, isPreview = false}) => {

  return (
    <div className="flex flex-wrap gap-4 sm:gap-6 justify-center z-40 relative">
      {data.map((c, index) => (
         <Link passHref={true} href={`/industry/${c.label}`} class>
        <div key={index} className={`itest relative cursor-pointer ${
              isPreview ? "grayscale" : ""
            }`}>
          <style jsx>{`
            @media (max-width: 400px) {
              // .itest {
              //   width: 70%;
              //   // margin: 2px;
              // }
            }

                .itest {
            color: white;
              cursor: pointer;
           
            }

            // .itest {
            //   transition: 0.1s ease-in-out;
            //   cursor: pointer;
            //   border-radius: 1rem;
            // }

            // .itest:hover {
            //   outline: 2px solid #5d38c2;
            // }
          `}</style>
          <div className="w-[270px] h-[200px] sm:w-[300px] md:w-[350px]  sm:h-[300px] rounded-2xl">
            <Image
              className="rounded-2xl opacity-75"
              src={c.path}
              alt={`${c.label} img`}
              fill
              style={{ objectFit: 'cover' }}
              
            />
          </div>

          <div
            style={{
              background: isPreview ? '' : Palatte.btn,
            }}
          className=" w-[50%] sm:w-[70%] md:w-1/2 font-light bottom-4 left-16 md:left-24 absolute py-1 sm:px-3  text-sm sm:text-lg text-center  rounded-md"
          >
            {c.label.toUpperCase()}
          </div>
        </div>
        </Link>
      ))}
    </div>
  );
};

export default IndustryCard;



