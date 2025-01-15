"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { Box } from "@mui/material";
import { CloseOutlined } from "@mui/icons-material";
import { useRouter } from "next/router";

const Header = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    // Check if the screen size is small on initial load
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 640); // Tailwind's `sm` breakpoint in pixels
    };

    checkScreenSize(); // Initial check

    // Add a resize event listener
    window.addEventListener("resize", checkScreenSize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const gradientStyleMain = {
    background:
      "linear-gradient(180deg, rgba(48, 20, 102, 0.25) 0%, rgba(62, 95, 170, 0.25) 100%)",
  };

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  // const router = useRouter();
  // const isHomePage = router.pathname === "/";

  // useEffect(() => {
  //   setMobileMenuOpen(false);
  // }, [router.pathname]);
  return (
    <>
 
      <div
 className={` min-[2300px]:w-[100%] min-[2300px]:mx-auto fixed top-0 px-4 md:px-0  w-full  items-center py-6 text-white z-50`}
        // className={` ${
        //   isHomePage
        //     ? "min-[2300px]:w-[100%] min-[2300px]:mx-auto fixed top-0"
        //     : "min-[2300px]:w-[70%] min-[2300px]:mx-auto"
        // }  px-4 md:px-0  w-full  items-center py-6 text-white z-50`}
      >
        <div
          className="w-full flex justify-between md:justify-around sm:px-0 sm:py-0 py-3 px-5 sm:rounded-none rounded-full "
          style={{
            background: isSmallScreen
              ? "linear-gradient(180deg, rgba(22, 27, 34, 0.70) 0%, rgba(32, 39, 50, 0.70) 100%)"
              : "transparent",
          }}
        >
          <div className="hidden sm:block">
            <Link href="/">
              <Image src="/Asset.png" width={90} height={90} alt="logo" />
            </Link>
          </div>
          <div className="block sm:hidden mt-2">
            <Link href="/">
              <Image src="/Asset.png" width={60} height={21} alt="logo" />
            </Link>
          </div>

          <div
            className="gap-4 text-sm hidden md:flex border border-[#242424] px-16 py-3 rounded-full"
            style={{
              background:
                "linear-gradient(180deg, rgba(22, 27, 34, 0.70) 0%, rgba(32, 39, 50, 0.70) 100%)",
            }}
          >
            {[
              { name: "Home", href: "/" },
              { name: "Products", href: "/Products" },
              { name: "Industries", href: "/Industries" },
              { name: "About Us", href: "/about" },
              { name: "News & Blogs", href: "/blogs" },
              { name: "Careers", href: "/Careers" },
            ].map((item, index) => (
              <div key={index} className="relative group">
                <Link href={item.href}>
                  <p>{item.name}</p>
                </Link>
                <div className="absolute bottom-[-18px] left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Image
                    src="/navline.svg"
                    width={22}
                    height={2.2}
                    alt="hover-image"
                  />
                </div>
              </div>
            ))}
          </div>

          

          <div className="hidden sm:flex gap-4">
            <div>
              <Link href="/Partnership"
             
                className="py-2 px-4 rounded-3xl md:hidden lg:flex _static-button-animated"
              >
                <Image
                  src="/navhand.svg"
                  width={26}
                  height={18}
                  className="mr-1.5 mt-1 hidden xl:flex"
                />
                Request A Partnership
                </Link>
            </div>
            
            <Link href="/contact">
              <div className="py-2 px-2 rounded-3xl _static-button-animated flex">
                <Image
                  src="/navtel.svg"
                  width={16}
                  height={16}
                  className="mr-2 hidden xl:flex"
                />
                Contact
              </div>
            </Link>
          </div>

          <div
            onClick={toggleMobileMenu}
            aria-controls="mobile-menu-2"
            aria-expanded={isMobileMenuOpen}
            data-collapse-toggle="mobile-menu-2"
            className=" md:hidden cursor-pointer flex gap-4"
          >
            <div className="sm:hidden ">
            <Link href="/contact">
              <div
                className="py-2 px-4 rounded-3xl text-xs flex mt-1"
                style={{
                  background:
                    " linear-gradient(180deg, rgba(66, 81, 102, 0.70) 0%, rgba(62, 68, 79, 0.70) 100%)",
                }}
              >
                <Image
                  src="/navtel.svg"
                  width={16}
                  height={16}
                  className="mr-2 hidden xl:flex "
                />
                Contact Us
              </div>
            </Link>
          </div>
            <IoMenu size={40} />
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <Box
          sx={{
            background: "#1A212B",
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "100vh",
            zIndex: "99999999",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            p: "2rem",
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Image src="/Asset.png" width={90} height={100} alt="" />
            <CloseOutlined
              onClick={toggleMobileMenu}
              sx={{ fill: "#fff", fontSize: "2rem" }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "1rem",
              height: "50%",
              width: "100%",
              // fontFamily: "Poppins, Roboto, sans-serif",
              fontSize: "1.5rem",
              fontWeight: "600",
              listStyle: "none",
              mt: "1rem",
              p: "1.44rem 0",
            }}
          >
            <ul className="flex flex-col items-start justify-start w-full font-poppins gap-1">
              <li className="relative items-start justify-start bg-clip-text  text-transparent bg-gradient-to-r from-white to-gray-400">
                <Link href="/" aria-label="Home">
                  Home
                </Link>
              </li>
              <li className="relative items-start justify-start bg-clip-text  text-transparent bg-gradient-to-r from-white to-gray-400">
                <Link href="/about" aria-label="About">
                  About Us
                </Link>
              </li>
              <li className="relative items-start justify-start bg-clip-text  text-transparent bg-gradient-to-r from-white to-gray-400">
                <Link href="/blogs" aria-label="Blogs">
                  News & Blogs
                </Link>
              </li>
              {/* <li className="relative items-start justify-start">
                <Link href="/career" aria-label="Career">
                  Career
                </Link>
              </li> */}
              {/* <li className="relative items-start justify-start"> */}
              {/* <Link href="/contact" aria-label="Contact">
                Request Partnership
              </Link> */}
              {/* </li> */}
              <li className="relative items-start justify-start bg-clip-text  text-transparent bg-gradient-to-r from-white to-gray-400">
                <Link href="/Products" aria-label="Products">
                  Product
                </Link>
              </li>
              {/* <li className="relative items-start justify-start bg-clip-text  text-transparent bg-gradient-to-r from-white to-gray-400">
                <Link href="/Services" aria-label="Services">
                  Services
                </Link>
              </li> */}
              <li className="relative items-start justify-start bg-clip-text  text-transparent bg-gradient-to-r from-white to-gray-400">
                <Link href="/Industries" aria-label="Industries">
                  Industries
                </Link>
              </li>
              <li className="relative items-start justify-start sm:hidden bg-clip-text  text-transparent bg-gradient-to-r from-white to-gray-400">
                <Link href="/contact" aria-label="Contact">
                  Contact
                </Link>
              </li>
              <li className="relative items-start justify-start sm:hidden bg-clip-text  text-transparent bg-gradient-to-r from-white to-gray-400">
                <Link href="/Careers" aria-label="Careers">
                  Careers
                </Link>
              </li>
              <li
          
                className="relative items-start justify-start sm:hidden w-full cursor-pointer bg-clip-text  text-transparent bg-gradient-to-r from-white to-gray-400"
              >
                   <Link href="/Partnership" aria-label="Partnership">
                Request A Partnership
                </Link>
              </li>

              {/* <li className="relative items-start justify-start sm:hidden w-full bg-clip-text  text-transparent bg-gradient-to-r from-white to-gray-400">
                <Link href="/TalkWithFounder" aria-label="TalkWithFounder">
                  Talk With Founder
                </Link>
              </li> */}
            </ul>
          </Box>
        </Box>
      )}
    </>
  );
};

export default Header;
