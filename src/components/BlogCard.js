import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import { BASE_URL_STRAPI } from "../common/base_config";

import Truncate from "react-truncate-html";
import Link from "next/link";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Palatte from "../common/Palatte";

const convertRichTextToHTML = (content) => {
  if (!Array.isArray(content)) return "";

  return content
    .map((block) => {
      switch (block.type) {
        case "paragraph":
          return `<p>${block.children
            .map((child) => child.text || "")
            .join("")}</p>`;
        case "heading":
          return `<h${block.level}>${block.children
            .map((child) => child.text || "")
            .join("")}</h${block.level}>`;
        // Add more cases as needed for other types (e.g., lists, links)
        default:
          return "";
      }
    })
    .join("");
};

const BlogCard = ({ data, isPreview = false }) => {
 

  const gradientStyleMain = {
    background: "linear-gradient(90deg, rgba(107, 107, 107, 0.1) 0%, rgba(113, 113, 113, 0.1) 99.33%)",
    WebkitBackdropFilter: "blur(10.45px)", 
    backdropFilter: "blur(10.45px)",
    filter: "drop-shadow(15px 14px 55.3px rgba(0, 0, 0, 0.31))",
    borderRadius: "30px"
 
  };

  const truncateRef = useRef();

  // const truncateText = (text, maxLength) => {
  //   const parser = new DOMParser();
  //   const doc = parser.parseFromString(text, "text/html");
  //   const truncatedContent = doc.body.textContent || "";
  //   return (
  //     truncatedContent.slice(0, maxLength) +
  //     (truncatedContent.length > maxLength ? "..." : "")
  //   );
  // };
  const truncateText = (text, maxLength) => {
    // Check if we're running in the browser (client-side)
    if (typeof window !== "undefined") {
      const parser = new DOMParser();
      const doc = parser.parseFromString(text, "text/html");
      const truncatedContent = doc.body.textContent || "";
  
      return (
        truncatedContent.slice(0, maxLength) +
        (truncatedContent.length > maxLength ? "..." : "")
      );
    }
  
    // If running on the server-side, just return a sliced version of the text
    return text.slice(0, maxLength) + (text.length > maxLength ? "..." : "");
  };
  
  // index !== 0 &&
  return (
    <div className="flex flex-wrap gap-6 justify-center relative overflow-hidden">
     {data.map((item, index) => (
  <div
    key={item._id}

    style={gradientStyleMain}
    className={`w-[350px] ${isPreview ? 'h-auto' : 'h-[500px]'} border-2 border-slate-800 flex flex-col gap-4`}
  >
    <div className="p-2">
      <LazyLoadImage
        className="rounded-3xl  object-cover"
        src={`${BASE_URL_STRAPI}${item.attributes?.blog_image?.data?.attributes?.url}`}
        alt={`content-${index}`}
        width={430}
        height={320}
        style={{ height: "220px", width: "100%", objectFit: "cover" }}
      />
    </div>

    <div className="px-4 flex-grow">
      <h1 className="text-white text-lg sm:text-xl font-bold">
        {item.attributes.blog_title.slice(0, 60)} ...
      </h1>
      {!isPreview && (
        <p className="text-sm mt-2 leading-6">
        <Truncate
          ref={truncateRef}
          lines={4}
          // DOMPurify.sanitize(
          dangerouslySetInnerHTML={{
            __html: 
              truncateText(
                convertRichTextToHTML(item.attributes.blog_content),
                150
              )
           
          }}
        />
      </p>
      )}
    </div>

    <Link passHref={true} href={`/blogpost/${item.attributes.slug}`}>
      <div
   
        style={{
          background: Palatte.btn,
        }}
        className="w-[50%] backdrop-blur-2xl m-auto mb-4 py-1 text-base text-center rounded-md mt-auto"
      >
        Read More
      </div>
    </Link>
  </div>
))}

    </div>
  );
};

export default BlogCard;
