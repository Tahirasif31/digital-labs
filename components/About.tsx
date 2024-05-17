"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "About Us",
    description:
      "Welcome to AA Digital Labs LLC, where innovation meets excellence in web development and digital marketing solutions. With a passion for crafting exceptional online experiences, we specialize in creating dynamic websites and implementing strategic digital marketing campaigns that drive results. Backed by a team of skilled professionals, we thrive on turning visions into reality, empowering businesses to thrive in the digital landscape. Discover the difference with [Company Name] and elevate your online presence today.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/beh-3.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Our Mission",
    description:
      "At AA Digial Labs LLC, our mission is to revolutionize the digital landscape by delivering unparalleled web development and digital marketing solutions. We strive to empower businesses of all sizes to achieve their online goals by providing cutting-edge technology, innovative strategies, and personalized services. With a commitment to excellence and client satisfaction, we aim to be the driving force behind our clients' success in the ever-evolving digital world. Together, we transform visions into realities, one pixel and click at a time",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/digi-4.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];
export function About() {
  return <StickyScroll content={content} />;
}
