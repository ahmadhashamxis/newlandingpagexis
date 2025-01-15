import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import { IoMail } from "react-icons/io5";
import { FaMedium } from "react-icons/fa6";
import { HeroBlob } from "./HeroSection";

const Footer = () => {
  const gradientStyle = {
    // background:
    //   "linear-gradient(317deg, rgba(93, 56, 194, 0.25) -1.1%, rgba(182, 61, 232, 0.00) 52.97%)",
    border: "1px solid white",
    padding: "7px",
    borderRadius: "100%",
  };

  return (
    <div
      className=" pb-6 sm:pt-24 relative "
      style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
    >
      <div>
        <Image
          src="/footerBlob.svg"
          // alt="footer rectangle"
          fill
          className="opacity-75"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </div>

      <div className="min-[2300px]:w-[85%] m-auto">
        

        <div className="flex flex-col lg:flex-row text-gray-300 sm:gap-14 justify-around pb-14 sm:pb-24 relative z-10 ">
          <div className="mb-14 sm:mb-0  flex flex-col gap-2 m-auto lg:m-0 text-center lg:text-left pt-10 sm:pt-0 lg:px-10 xl:p-0 xl:pt-6">
            <Link href="https://xis.ai/">
              <Image
                src="/Asset.png"
                className="xl:mt-[-60px] "
                width={150}
                height={100}
                alt="logo"
              />
            </Link>
            <p className="ml-[-10px] sm:ml-[-140px] md:ml-[-100px] lg:ml-[-30px] text-sm md:text-lg ">
              Precision Beyond Perception
            </p>
        
          <div className="z-50 gap-4 hidden sm:flex md:ml-[-30px] mt-10 lg:mt-32">
            <Link
              style={gradientStyle}
              target="_blank"
              href="https://www.facebook.com/profile.php?id=61552506112246"
              aria-label="Facebook"
            >
              <FaFacebookF size={22} color="white" />
            </Link>
            <Link
              style={gradientStyle}
              target="_blank"
              href="https://twitter.com/xisai187654"
              aria-label="Twitter"
            >
              <FaTwitter size={22} color="white" />
            </Link>
            <Link
              style={gradientStyle}
              target="_blank"
              href="https://medium.com/@xis.ai/about"
              aria-label="Medium"
            >
              <FaMedium size={22} color="white" />
            </Link>
            <Link
              style={gradientStyle}
              target="_blank"
              href="https://www.instagram.com/xis.ai.official/"
              aria-label="Instagram"
            >
              <FaInstagramSquare size={22} color="white" />
            </Link>
            <Link
              style={gradientStyle}
              target="_blank"
              href="https://www.linkedin.com/company/xis-ai/mycompany/"
              aria-label="Linkedin"
            >
              <FaLinkedin size={22} color="white" />
            </Link>
            <Link
              style={gradientStyle}
              target="_blank"
              href="https://www.youtube.com/@xisaiofficial"
              aria-label="Youtube"
            >
              <FaYoutube size={22} color="white" />
            </Link>
          </div>
       
          </div>

          <div className="font-light text-base flex  flex-col text-left md:text-left ml-8 sm:ml-16  sm:m-auto md:m-0 w-1/2 md:w-auto md:flex-row gap-12 md:px-40 lg:px-0">
            <div className="flex flex-col gap-5 text-sm sm:text-base ">
              <div className="  text-lg sm:text-xl ">
                <Link href="https://xis.ai/about" aria-label="About">
                  About Us
                </Link>
              </div>
              <Link
                className="text-[#616161]"
                href="https://xis.ai/impressum"
                aria-label="Impressum"
              >
                Imprint
              </Link>
              <Link
                className="text-[#616161]"
                href="https://xis.ai/agb"
                aria-label="Terms and Conditions / AGB"
              >
                Terms and Conditions
              </Link>
              <Link
                className="text-[#616161]"
                href="https://xis.ai/AGB_en.pdf"
                download="AGB"
                aria-label="About"
              >
                General Terms and Conditions
              </Link>
            </div>

            <div className="flex flex-col gap-5 text-sm sm:text-base">
              <div className=" text-lg sm:text-xl ">
                <Link href="https://xis.ai/certificates" aria-label="Certificates">
                  Certificates
                </Link>
              </div>
              <Link
                className="text-[#616161]"
                href="https://xis.ai/cookie"
                aria-label="Cookie Directive"
              >
                Cookie Directive (EU)
              </Link>
              <Link
                className="text-[#616161]"
                href="https://xis.ai/privacy"
                aria-label="Privacy"
              >
                Data Privacy Policy
              </Link>
              <Link
                href="https://xis.ai/dpd_customer_suppler_en.pdf"
                download="Data/Protection"
                aria-label="Data/Protection"
                className="text-[#616161]"
              >
                Data Protection Declaration
              </Link>
            </div>

            <div className="flex flex-col gap-5  text-sm sm:text-base">
              <div className=" text-lg sm:text-xl">
                <Link href="https://xis.ai/contact" aria-label="Contact">
                  Contact Us
                </Link>
              </div>
              <div className="flex flex-col justify-center gap-5 md:items-center">
                <Link href="https://xis.ai/contact" aria-label="Contact">
                  <div className="flex md:ml-[-20px] text-[#616161]">
                    <MdOutlinePhoneIphone size={24} color="#616161" /> +49 7045
                    2044 560
                  </div>
                </Link>
                <Link href="https://xis.ai/contact" aria-label="Contact">
                  <div className="flex md:ml-[-34px] text-[#616161]">
                    <MdLocalPhone size={24} color="#616161" /> +1 248-843-1760
                  </div>
                </Link>

                <Link href="https://xis.ai/contact" aria-label="Contact">
                  <div className="flex text-[#616161]">
                    <IoMail size={24} color="#616161" />{" "}
                    <div className="ml-1">contact@xray-lab.com</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="pb-32 md:pb-0 flex flex-col md:flex-col 2xl:flex-row items-center  2xl:justify-center text-white relative z-10 min-[2000px]:justify-around">
          <div className=" gap-4 sm:hidden flex">
            <Link
              target="_blank"
              href="https://www.facebook.com/profile.php?id=61552506112246"
              aria-label="Facebook"
            >
              <FaFacebookF size={22} color="white" />
            </Link>
            <Link
              target="_blank"
              href="https://twitter.com/xisai187654"
              aria-label="Twitter"
            >
              <FaTwitter size={22} color="white" />
            </Link>
            <Link
              target="_blank"
              href="https://medium.com/@xis.ai/about"
              aria-label="Medium"
            >
              <FaMedium size={22} color="white" />
            </Link>
            <Link
              target="_blank"
              href="https://www.instagram.com/xis.ai.official/"
              aria-label="Instagram"
            >
              <FaInstagramSquare size={22} color="white" />
            </Link>
            <Link
              target="_blank"
              href="https://www.linkedin.com/company/xis-ai/mycompany/"
              aria-label="Linkedin"
            >
              <FaLinkedin size={22} color="white" />
            </Link>
            <Link
              target="_blank"
              href="https://www.youtube.com/@xisaiofficial"
              aria-label="Youtube"
            >
              <FaYoutube size={22} color="white" />
            </Link>
          </div>
          <div className="text-center sm:text-left mt-6 md:mt-0 px-1 sm:px-0 text-sm sm:text-base lg:text-lg font-light">
            © 2024 XRAY-LAB Industrial Services GmbH | All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
