import Image from "next/image";
import React from "react";
import { AboutData } from "../types";

export default function About() {
  const ABOUT_DATA: AboutData[] = [
    {
      image: "../../../hexbox_name_logo_black.svg",
      header: "First Step",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus,pariatur magnam tempore veniam dolores incidunt recusandae voluptatem.",
    },
    {
      image: "../../../hexbox_name_logo_black.svg",
      header: "Second Step",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus,pariatur magnam tempore veniam dolores incidunt recusandae voluptatem.",
    },
    {
      image: "../../../hexbox_name_logo_black.svg",
      header: "Third Step",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus,pariatur magnam tempore veniam dolores incidunt recusandae voluptatem.",
    },
  ];
  return (
    <div className="flex flex-col items-center my-8  mx-auto">
      <h1 className="text-4xl xl:text-6xl capitalize text-center mb-4">
        Involve into Hexbox world <br />
        just in a Minute
      </h1>
      <p className="mb-2 text-md lg:text-lg">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus,
        pariatur magnam tempore veniam dolores incidunt recusandae voluptatem.
      </p>
      <ul className="mt-4 flex flex-wrap gap-8 lg:flex-row lg:items-start items-center justify-center">
        {ABOUT_DATA.map((item, index) => (
          <li
            className="max-w-[24rem] h-[500px] flex flex-col overflow-hidden  bg-gradient-to-bl from-yellowColor/30 via-orangeColor/30 to-blueColor/30  rounded-2xl"
            key={index}
          >
            <div className="flex-1 flex items-center justify-center ">
              <Image
                className="h-[150px] w-[150px] rounded-full object-contain"
                src={item.image}
                alt={item.header}
                width={100}
                height={100}
              />
            </div>
            <div className="flex-3 p-8">
              <h4 className="text-blueColor  text-center text-2xl mb-2">
                {item.header}
              </h4>
              <span className="mt-3">{item.description}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
